import { split } from './shamir_secret_sharing';

describe('split', function() {
  it('generates shares', function(){
    const shares = split(1, 3, 2);
    expect(shares.length).toEqual(3);
  });
});
