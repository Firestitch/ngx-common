import { combineLatest, Observable, shareReplay } from 'rxjs';

export const fsSourceLoader = (function() {

  let _document: Document;
  let _headElement: HTMLHeadElement;

  const _sources = new Map<string, Set<string>>();
  const _loadedResources = new Map<string, Observable<unknown>>();
  const _noopDefine = function() { /* swallow */ };

  // bad way but don't want to bother developer
  setDocument(document);

  // but developer can set document at any time
  function setDocument(document: Document): void {
    _document = document;
    _headElement = _document?.head;
  }

  /**
   * register a list of the resources for future loading
   *
   * example:
   *   sourceLoader.registerResources({
   *     froala: [
   *       '/assets/js/froala/froala_editor.min.js',
   *       '/assets/css/froala_editor.pkgd.min.css',
   *     ],
   *     froala_align: '/assets/js/froala/plugins/align.min.js',
   *     froala_colors: '/assets/js/froala/plugins/colors.min.js',
   *     froala_image: '/assets/js/froala/plugins/image.min.js',
   *   });
   *
   */
  function registerResources(resources: Record<string, string | string[]>) {
    Object.entries(resources)
      .forEach(([name, path]) => {
        if (typeof path === 'string') {
          path = [path];
        }

        if (!_sources.has(name)) {
          _sources.set(name, new Set());
        }

        const resourcesList = _sources.get(name);

        path.forEach((p) => {
          resourcesList.add(p);
        });
      });
  }

  /**
   * load any resource previously registered
   *
   * sourceLoader.loadResource('froala')
   *
   * or load any js/css file
   *
   * sourceLoader.loadResource('/assets/my-source.js')
   *
   */
  function loadResource(name: string): Observable<unknown> | null {
    if (_loadedResources.has(name)) {
      return _loadedResources.get(name);
    }

    if (_sources.has(name)) {
      const sourcesForLoading = [..._sources.get(name)]
        .map((path) => {
          return _loadResource(path);
        })
        .filter((v) => !!v);

      return combineLatest(sourcesForLoading);
    }

    return _loadResource(name);
  }

  /**
   * the same as `loadResource` but you can pass list of the resources for loading
   */
  function loadResources(listOfResources: string[]): Observable<unknown> {
    const resourcesToLoad = listOfResources
      .reduce((acc, name) => {

        const loading$ = loadResource(name);

        if (loading$) {
          acc.push(loading$);
        }

        return acc;
      }, []);

    return combineLatest(resourcesToLoad);
  }

  ///

  function _loadResource(path): Observable<unknown> | null {
    if (_isStylesUrl(path)) {
      return _loadStyles(path);
    }

    if (_isJavascriptUrl(path)) {
      return _loadJs(path);
    }

    console.warn(`Resource ${path} can not be identified and loaded`);

    return null;
  }

  function _loadJs(scriptPath: string) {
    if (_loadedResources.has(scriptPath)) {
      return _loadedResources.get(scriptPath);
    }

    const obs$ = new Observable((obs) => {
      _blockAmd();

      const script = document.createElement('script');
      script.src = scriptPath;
      script.type = 'text/javascript';

      script.addEventListener('load', () => {
        _unblockAmd();
        obs.next(null);
        obs.complete();
      });

      script.addEventListener('error', (err) => {
        _unblockAmd();
        obs.error(err);
      });

      _headElement.appendChild(script);
    }).pipe(shareReplay({ bufferSize: 1, refCount: true }));

    _loadedResources.set(scriptPath, obs$);
    return obs$;
  }

  function _loadStyles(stylePath: string): Observable<unknown> {
    if (!_loadedResources.has(stylePath)) {
      const obs$ = new Observable((obs) => {
        const style = document.createElement('link');
        style.id = stylePath;
        style.rel = 'stylesheet';
        style.href = `${stylePath}`;

        _headElement.appendChild(style);

        style.onload = () => {
          obs.next(null);
          obs.complete();
        };

        style.onerror = (err) => {
          obs.error(err);
        };
      });

      _loadedResources.set(stylePath, obs$);
    }

    return _loadedResources.get(stylePath);
  }

  /**
   * Hide any AMD loader already on the page for as long as a script is loading.
   *
   * The shim intentionally has no `.amd` property so UMD bundles
   * (`typeof define === 'function' && define.amd`) fall through to the
   * browser-global branch, and any nested anonymous define() calls inside
   * concatenated UMD bundles (e.g. heic2any) are swallowed instead of reaching
   * that loader (e.g. Monaco's loader.js, which throws on a second anonymous
   * define).
   */
  function _blockAmd(): void {
    const w = window as any;

    if (!w.__amdBlockInit) {
      w.__amdBlockInit = true;
      w.__amdBlock = 0;

      let realDefine = w.define;

      try {
        // An accessor is preferred: writes made by the loading script are kept
        // instead of being discarded when the block is lifted.
        Object.defineProperty(w, 'define', {
          get() {
            if (w.__amdBlock > 0) {
              return _noopDefine;
            }

            return realDefine;
          },
          set(val: any) {
            if (val !== undefined) {
              realDefine = val;
            }
          },
          configurable: true,
          enumerable: true,
        });
      } catch {
        // Monaco's loader.js is a classic script whose top-level `var define`
        // binds a NON-configurable global, so the accessor above throws
        // "Cannot redefine property: define". The property stays writable
        // though, so swap the value in and out around each script instead.
        w.__amdBlockSwap = true;
      }
    }

    if (w.__amdBlockSwap && w.__amdBlock === 0) {
      w.__amdSwappedDefine = w.define;
      w.define = _noopDefine;
    }

    w.__amdBlock++;
  }

  function _unblockAmd(): void {
    const w = window as any;

    w.__amdBlock--;

    if (w.__amdBlockSwap && w.__amdBlock === 0) {
      w.define = w.__amdSwappedDefine;
      w.__amdSwappedDefine = undefined;
    }
  }

  function _isJavascriptUrl(url: string) {
    return url.endsWith('.js');
  }

  function _isStylesUrl(url: string) {
    return url.endsWith('.css');
  }

  return {
    setDocument,
    registerResources,
    loadResource,
    loadResources,
    loadJs: _loadJs,
    loadStyles: _loadStyles,
  };
})();

export function loadStyles(path): Observable<any> {
  return fsSourceLoader.loadStyles(path);
}

export function loadJs(path): Observable<any> {
  return fsSourceLoader.loadJs(path);
}
