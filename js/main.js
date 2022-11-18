const button = document.querySelector(".calc")
const result = document.querySelector(".result")
const peso = document.querySelector(".peso")
const altura = document.querySelector(".altura")
const invalido = document.querySelector(".invalid")


function isNumeric(num) {
    return ! isNaN(num) && num != ""
}

function calcImc() {
    if (isNumeric(peso.value) && isNumeric(altura.value)) {
        const formula = (Number(peso.value) / (Number(altura.value**2)))
    
        resultado = Number(formula.toFixed(2))
        result.removeAttribute("hidden")
        invalido.setAttribute("hidden", "")
    } else {
        invalido.removeAttribute("hidden")
        result.setAttribute("hidden", "")
    }
    return resultado
}

function imc() {

    if(resultado < 18.5) {
        result.innerHTML = `Seu IMC é de ${resultado} - Classificação: Magreza!`
    } else if (resultado >= 18.50 && resultado <= 24.99) {
        result.innerHTML = `Seu IMC é de ${resultado} - Classificação: Normal!`
    } else if (resultado >= 25.00 && resultado <= 29.99) {
        result.innerHTML = `Seu IMC é de ${resultado} - Classificação: Sobrepeso!`
    } else if (resultado >= 30.00 && resultado <= 34.99) {
        result.innerHTML = `Seu IMC é de ${resultado} - Classificação: Obesidade Grau 1`
    } else if (resultado >= 35.00 && resultado <= 39.99) {
        result.innerHTML = `Seu IMC é de ${resultado} - Classificação: Obesidade Grau 2`
    } else if (resultado >= 40.00) {
        result.innerHTML = `Seu IMC é de ${resultado} - Classificação: Obeseidade Grau 3`
    } 
}

button.addEventListener("click", (button) => {
    button.preventDefault()
    calcImc()
    imc()
})