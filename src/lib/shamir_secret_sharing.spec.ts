import { split, reconstruct } from './shamir_secret_sharing';

describe('split', function() {
  it('generates shares from secret', function(){
    const s = 1; // secret
    const n = 3; // number of party
    const k = 2; // threshold
    const shares = split(s, n, k);
    expect(shares.length).toEqual(n);
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
