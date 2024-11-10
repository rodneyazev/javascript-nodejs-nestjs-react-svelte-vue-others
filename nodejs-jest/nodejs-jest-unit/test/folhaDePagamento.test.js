import { somaHorasExtras, calculaDescontos } from "..";

describe('Testes dos cálculos de folha', () => {
    it('Deve retornar a soma das horas extras', () => {
        const esperado = 2500;
        const retornado = somaHorasExtras(2000,500);
        expect(retornado).toBe(esperado);
    });
    it('Deve descontar o valor do salario', () => {
        const esperado = 2300;
        const retornado = calculaDescontos(2500,200);
        expect(retornado).toBe(esperado);
    })
})


/* or simple mode
test('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000,500);
    expect(retornado).toBe(esperado);
});
test('Deve descontar o valor do salario', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500,200);
    expect(retornado).toBe(esperado);
})
*/