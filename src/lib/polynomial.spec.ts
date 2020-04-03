import * as _ from 'lodash';

import { Polynomial, getRandomPolynomial } from './polynomial';

describe('Polynomial', function() {
  describe('f', function() {
    it('calculates f(x)', function() {
      function expectPoints(poly: Polynomial, points: number[][]) {
        for (let p of points) {
          expect(poly.f(p[0])).toEqual(p[1])
        }
      }
      const poly0 = new Polynomial(0);
      poly0.coefficients = [1] // f(x) = 1
      expectPoints(poly0, [[0, 1], [1, 1], [2, 1]])

      const poly1 = new Polynomial(1);
      poly1.coefficients = [1, 2]; // f(x) = 1 + 2x
      expectPoints(poly1, [[0, 1], [1, 3], [2, 5]])

      const poly2 = new Polynomial(2);
      poly2.coefficients = [1, 2, 3]; // f(x) = 1 + 2x + 3x^2
      expectPoints(poly2, [[0, 1], [1, 6], [2, 17]])
    });
  });
});

describe('getRandomPolynomial', function() {
  it('generates random polinomial', function(){
    const secret = 1;

    // 0 degree: f(x) = 1
    const poly0 = getRandomPolynomial(0, secret);
    expect(poly0.coefficients.length).toEqual(1);
    expect(poly0.f(0)).toEqual(secret);

    // // 1 degree: f(x) = 1 + a*x
    const poly1 = getRandomPolynomial(1, secret);
    expect(poly1.coefficients.length).toEqual(2);
    expect(poly1.f(0)).toEqual(secret);

    // // 2 degree: f(x) = 1 + a*x + b*x^2
    const poly2 = getRandomPolynomial(2, secret);
    expect(poly2.coefficients.length).toEqual(3);
    expect(poly2.f(0)).toEqual(secret);
  });
});
