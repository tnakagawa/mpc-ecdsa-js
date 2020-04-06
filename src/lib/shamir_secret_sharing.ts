import * as _ from 'lodash';

import { getRandomPolynomial, Point, getLagurangePolynomial} from './polynomial'

export function split(secret: number, n: number, k: number): Point[] {
  const poly = getRandomPolynomial(k-1, secret);

  const shares = new Array<Point>();
  for (let i = 0; i < n; i++) {
    // TODO: generate random x
    let x = i + 1;
    let y = poly.f(x)
    shares.push([x, y]);
  }

  return shares;
};

export function reconstruct(shares: Point[]): number {
  const poly = getLagurangePolynomial(shares);
  return poly.f(0);
};
