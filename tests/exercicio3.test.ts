import {exercicio3} from "../src/exercicio3"

describe("exercicio3", () => {
    test("deve retornar se o array tem o nome Astrodev na lista", () => {
        const result = exercicio3(["Astrodev", "Cecília", "João"])
        expect(result).toEqual("Astrodev")
    })
    
})