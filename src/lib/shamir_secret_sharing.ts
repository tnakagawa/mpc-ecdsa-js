import * as _ from 'lodash';

import { getRandomPolynomial, Point, getLagurangePolynomial} from './polynomial'

export function split(secret: number, n: number, k: number): number[] {
  const poly = getRandomPolynomial(secret, k);

  const shares = [];
  for (let i = 0; i < n; i++) {
    // TODO: generate random x
    let x = i + 1;
    let y = poly.f(x)
    shares.push(y);
  }

  return shares;
};

export function reconstruct(shares: number[]): number {
  const k = shares.length;
  const points = new Array<Point>(k);
  for (let i = 0; i < k; i++) {
    let x = i + 1;
    let y = shares[i];
    points[i] = [x, y];
  }
  const poly = getLagurangePolynomial(points);
  return poly.f(0);
};
