import * as _ from 'lodash';

import { getRandomPolynomial } from './polynomial'

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

export function reconstruct(_shares: number[], _n: number, _k: number): number {
  // TODO: Implement me
  return 0;
};
