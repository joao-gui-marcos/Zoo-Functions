const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('parametro count retorna 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;

    expect(actual).toStrictEqual(expected);
  });

  it('parametro names retorna array com nomes dos elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(actual).toStrictEqual(expected);
  });

  it('parametro averageAge retorna numero proximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBeCloseTo(expected);
  });

  it('parametro location retorna NW', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';

    expect(actual).toStrictEqual(expected);
  });

  it('parametro popularity retorna 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;

    expect(actual).toStrictEqual(expected);
  });

  it('parametro availability retorna array com dias', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(actual).toStrictEqual(expected);
  });

  it('parametro que nao e string retorna msg de erro', () => {
    const actual = handlerElephants(5);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual).toStrictEqual(expected);
  });

  it('sem parametro retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;

    expect(actual).toStrictEqual(expected);
  });

  it('parametro invalido ou com erro de digitacao retorna null', () => {
    {
      const actual = handlerElephants('counts');
      const expected = null;

      expect(actual).toStrictEqual(expected);
    }
    {
      const actual = handlerElephants('RollerCoaster Tycoon');
      const expected = null;

      expect(actual).toStrictEqual(expected);
    }
  });
});
