// Crie uma função que recebe uma data no formato "aaaa/mm/dd" e retorna outra string no formato "dd/mm/aaaa".<br>
// Exemplo: a entrada "2022/09/26" gera a saída "26/09/2022"<br>
// Crie pelo menos um teste que valida sua implementação.

export const exercicio2 = (date: string) :string => {
    const dateInput = new Date(date)

    const reverseDate = dateInput.toLocaleDateString("pt-BR").toString()

    return reverseDate
}