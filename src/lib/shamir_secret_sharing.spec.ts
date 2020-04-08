import { split, reconstruct } from './shamir_secret_sharing';

describe('split', function() {
  it('generates shares from secret', function(){
    const s = 9n; // secret
    const n = 3; // number of party
    const k = 2; // threshold
    const shares = split(s, n, k);
    expect(shares.length).toEqual(n);
  });
});

describe('reconstruct', function() {
  it('reconstructs secret from shares', function(){
    // f(x) = 1 + 2x + 3x^2
    const s = 9n;
    const n = 3;
    const k = 2;
    const shares = split(s, n, k);

    // reconstruct with n shares
    expect(reconstruct(shares)).toEqual(s);

    // reconstruct with 2 of n
    expect(reconstruct([shares[0], shares[1]])).toEqual(s);
    expect(reconstruct([shares[0], shares[2]])).toEqual(s);
    expect(reconstruct([shares[1], shares[2]])).toEqual(s);
  });
});
