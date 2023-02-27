import {exercicio1} from "../src/exercicio1"

describe("exercicio1", () => {
    test("deve retornar um número quando você escreve uma string", () => {
        const result = exercicio1("19098787")
        expect(result).toEqual(19098787)
    })
    
})