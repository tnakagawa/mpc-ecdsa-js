import { split, reconstruct } from './shamir_secret_sharing';

const N = 3; // number of party
const K = 2; // threshold

describe('split', function() {
  it('generates shares from secret', function(){
    const shares = split(1, N, K);
    expect(shares.length).toEqual(N);
  });
});

describe('reconstruct', function() {
  it('reconstructs secret from shares', function(){
    // f(x) = 1 + 2x + 3x^2
    // [x, f(x)]: [0, 1], [1, 6], [2, 17], [3, 34]
    const secret = 1;
    const shares = [6, 17, 34];
    const actual = reconstruct(shares);
    expect(actual).toEqual(secret);
  });
});
