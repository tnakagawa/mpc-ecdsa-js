/**
 * Generates secure random values using [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Crypto).
 */
export function getRandomValues(n: number): Uint32Array {
  let values = new Uint32Array(n);
  window.crypto.getRandomValues(values)
  return values;
};
