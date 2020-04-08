import {
  P,
  add,
  mul,
  inv,
} from './finite_field';
import { getRandomValues } from './secure_random';

function inGFP(x: bigint) {
  return (x >= 0 && x < P)
}

describe('add', function() {
  let x:bigint, y:bigint, z:bigint;
  for ([x, y, z] of [
    [1n, 2n, 3n],
    [P-1n, 1n, 0n],
    [1n, P-1n, 0n],
    [P+1n, P+1n, 2n],
  ]) {
    it(`${x} + ${y} = ${z} in GF(P)`, function() {
      let xy = add(x, y);
      expect(inGFP(xy)).toBeTrue()
      expect(xy).toEqual(z)
    });
  }
});

describe('mul', function() {
  let x:bigint, y:bigint, z:bigint;
  for ([x, y, z] of [
    [1n, 2n, 2n],
    [P-2n, 1n, P-2n],
    [P-2n, 3n, P-6n],
    [2n, P-3n, P-6n],
    [P-2n, P-3n, 6n],
  ]) {
    it(`${x} * ${y} = ${z} in GF(P)`, function() {
      let xy = mul(x, y);
      expect(inGFP(xy)).toBeTrue();
      expect(xy).toEqual(z);
    });
  }
});

describe('inv', function() {
  const r = BigInt(getRandomValues(1)[0]);
  for (let x of [1n, P-1n, r]) {
    it(`invserses ${x} in GF(P)`, function() {
      let xInv = inv(x);
      expect(inGFP(xInv)).toBeTrue();
      expect(mul(x, xInv)).toEqual(1n)
    });
  }
});
