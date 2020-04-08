import {
  Polynomial, NormalPolynomial, getRandomPolynomial, LagrangePolynomial
} from './polynomial';

function expectPoints(poly: Polynomial, points: bigint[][]) {
  for (let p of points) {
    expect(poly.f(p[0])).toEqual(p[1])
  }
}

describe('NormalPolynomial', function() {
  describe('f', function() {
    it('calculates f(x)', function() {
      // f(x) = 1
      const poly0 = new NormalPolynomial(0);
      poly0.coefficients = [1n]
      expectPoints(poly0, [[0n, 1n], [1n, 1n], [2n, 1n]])

      // f(x) = 1 + 2x
      const poly1 = new NormalPolynomial(1);
      poly1.coefficients = [1n, 2n];
      expectPoints(poly1, [[0n, 1n], [1n, 3n], [2n, 5n], [3n, 7n]])

      // f(x) = 1 + 2x+ 3x^2
      const poly2 = new NormalPolynomial(2);
      poly2.coefficients = [1n, 2n, 3n];
      expectPoints(poly2, [[0n, 1n], [1n, 6n], [2n, 17n], [3n, 34n], [4n, 57n]])
    });

    it ('calculates BigInt', function() {
      const poly = new NormalPolynomial(1);
      // f(x) = 2 + x
      poly.coefficients = [2n, 1n];
      const x = BigInt(Number.MAX_SAFE_INTEGER)
      const y = poly.f(x)
      expect(y - x).toEqual(2n)
    });
  });
});

describe('getRandomPolynomial', function() {
  it('generates random polinomial', function(){
    const secret = 1n;

    // 0 degree: f(x) = 1
    const poly0 = getRandomPolynomial(0, secret);
    expect(poly0.coefficients.length).toEqual(1);
    expect(poly0.f(0n)).toEqual(secret);

    // // 1 degree: f(x) = 1 + a*x
    const poly1 = getRandomPolynomial(1, secret);
    expect(poly1.coefficients.length).toEqual(2);
    expect(poly1.f(0n)).toEqual(secret);

    // // 2 degree: f(x) = 1 + a*x + b*x^2
    const poly2 = getRandomPolynomial(2, secret);
    expect(poly2.coefficients.length).toEqual(3);
    expect(poly2.f(0n)).toEqual(secret);
  });
});

describe('LagrangePolynomial', function() {
  describe('f', function() {
    it('calculates f(x)', function(){
      // f(x) = 1
      const poly0 = new LagrangePolynomial(0);
      poly0.points = [[1n, 1n]] // f(x) = 1
      expectPoints(poly0, [[0n, 1n], [2n, 1n]])

      // f(x) = 1 + 2x
      const poly1 = new LagrangePolynomial(1);
      poly1.points = [[1n, 3n], [2n, 5n]] // f(x) = 1 + 2x
      expectPoints(poly1, [[0n, 1n], [3n, 7n]])

      // f(x) = 1 + 2x+ 3x^2
      const poly2 = new LagrangePolynomial(2);
      poly2.points = [[1n, 6n], [2n, 17n], [3n, 34n]]
      expectPoints(poly2, [[0n, 1n], [4n, 57n]])
    });
  })
});
