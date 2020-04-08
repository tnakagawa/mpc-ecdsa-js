/**
 * 256 bit prime number
 *   P = 2^256 - 2^32 - 2^9 − 2^8 − 2^7 − 2^6 − 2^4 − 2^0
 *     = ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f
 *   This number is known as a recommended parameter for secp256k1 Koblitz curve.
 *   http://www.secg.org/sec2-v2.pdf
 */
const P = 115792089237316195423570985008687907853269984665640564039457584007908834671663n
