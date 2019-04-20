/**
 * Check validity of the url.
 * Protocol (http/https) isn't required.
 * @param value
 * @returns {boolean}
 */

export function url(value) {
  const expression = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi;
  const regexp = new RegExp(expression);

  return !!String(value).match(regexp);
}
