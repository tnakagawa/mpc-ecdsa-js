/**
 * Implementation of polynomial generation and derivation for SSS
 */
import * as _ from 'lodash';

import { getRandomValues } from './secure_random'

interface Polynomial {
  degree: number;
  f(x: number): number;
}

class NormalPolynomial implements Polynomial {
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

function getRandomPolynomial(degree: number, y0: number): NormalPolynomial {
  let poly = new NormalPolynomial(degree);
  poly.coefficients[0] = y0;
  const randomValues = getRandomValues(degree);
  for (let i = 1; i <= degree; i++) {
    poly.coefficients[i] = randomValues[i-1];
  }
  return poly;
};

type Point = [number, number];

class LagrangePolynomial implements Polynomial {
  degree: number;
  points: Point[];
  constructor(degree: number) {
    this.degree = degree;
    this.points = new Array<Point>(degree+1);
  }
  f(x: number): number {
    let y = 0;
    for (let i = 0; i < this.degree+1; i++) {
      let pi = this.points[i];
      let l = 1;
      for (let j = 0; j < this.degree+1; j++) {
        if (i == j) continue;
        let pj = this.points[j];
        l *= (x - pj[0]) / (pi[0] - pj[0])
      }
      y += pi[1] * l;
    }
    return y;
  }
}

function getLagurangePolynomial(points: Point[]): LagrangePolynomial {
  const degree = points.length - 1;
  const poly = new LagrangePolynomial(degree);
  for (let i = 0; i < degree+1; i++) {
    poly.points[i] = points[i];
  }
  return poly;
}


export { Polynomial, NormalPolynomial, getRandomPolynomial, LagrangePolynomial, Point, getLagurangePolynomial}
