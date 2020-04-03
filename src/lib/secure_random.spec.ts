import * as _ from 'lodash';

import { getRandomValues } from './secure_random';

describe('getRandomValues', function() {
  it('generates random numbers', function(){
    const values = getRandomValues(3);
    expect(values.length).toEqual(3);
    for (let i in values) {
      expect(values[i]).toBeInstanceOf(Number);
    }
    // Each element is expected to be unique
    _.uniq(values)
    expect(values.length).toEqual(3);
  });
});
