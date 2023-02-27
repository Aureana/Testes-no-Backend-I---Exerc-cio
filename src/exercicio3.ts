// Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.<br>
// Crie pelo menos um teste que valida sua implementação.

export const exercicio3 = (array: string[]) : string | undefined => {
    // const listaUsuarios = ["Mariana", "João", "Astrodev", "Júnior", "Cecília"]

    const result = array.find((element) => {
        return element === "Astrodev"
    })

    return result
}