import {exercicio2} from "../src/exercicio2"

describe("exercicio2", () => {
    test("deve retornar a data passada na versão brasileira", () => {
        const result = exercicio2("01/30/2020")
        expect(result).toBe("30/01/2020")
    })
    
})