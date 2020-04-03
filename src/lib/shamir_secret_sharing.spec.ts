import { split, reconstruct } from './shamir_secret_sharing';

const N = 3; // number of party
const K = 2; // threshold

describe('split', function() {
  it('generates shares from secret', function(){
    const shares = split(1, N, K);
    expect(shares.length).toEqual(N);
  });
});

xdescribe('reconstruct', function() {
  it('reconstructs secret from shares', function(){
    const secret = 1;
    const actual = reconstruct(split(secret, N, K), N, K);
    expect(actual).toEqual(secret);
  });
});
