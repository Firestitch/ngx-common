import { iif, Observable, throwError, timer } from 'rxjs';
import { concatMap, retryWhen, tap } from 'rxjs/operators';


export function delayedRetry(delayMs: number, maxRetry = 5, message?: string) {
  let retries = 0;

  return (src: Observable<unknown>) =>
    src.pipe(
      retryWhen((errors: Observable<unknown>) =>
        errors.pipe(
          tap(() => {
            retries++;

            if (retries <= maxRetry) {
              console.info(`Failed to load Resource. Retry in ${delayMs / 1000} sec. ${retries}/${maxRetry} times...`)
            }
          }),
          concatMap((error) =>
            iif(
              () => retries > maxRetry,
              throwError(getErrorMessage(maxRetry, message)),
              timer(delayMs),
            ),
          ),
        )
      )
    )
}



const getErrorMessage = (maxRetry: number, defaultMessage: string) => {
  if (!defaultMessage) {
    return `Failed to load Resource for ${maxRetry} times. Giving up.`;
  } else {
    return defaultMessage
  }
}
