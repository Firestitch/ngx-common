/**
 * Check validity of the url.
 * Protocol (http/https) isn't required.
 * @param value
 * @returns {boolean}
 */

export function url(value) {
  const expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#%[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  const regexp = new RegExp(expression);

  return !!String(value).match(regexp);
}
