/**
 * Implementation of polynomial generation and derivation for SSS
 */
import * as _ from 'lodash';

import { getRandomValues } from './secure_random'

class Polynomial {
  degree: number;
  coefficients: number[];
  constructor(degree: number) {
    this.degree = degree;
    this.coefficients = new Array(degree+1);
  }
  f(x: number): number {
    let y = 0;
    for (let i = 0; i <= this.degree; i++) {
      y += this.coefficients[i] * Math.pow(x, i);
    }
    return y;
  }
}

function getRandomPolynomial(degree: number, y0: number): Polynomial {
  let poly = new Polynomial(degree);
  poly.coefficients[0] = y0;
  const randomValues = getRandomValues(degree);
  for (let i = 1; i <= degree; i++) {
    poly.coefficients[i] = randomValues[i-1];
  }
  return poly;
};

export { Polynomial, getRandomPolynomial }
