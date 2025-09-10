const prompt = require('prompt-sync')()

const tempEmCelsius = Number(prompt("Digite uma temperatura em Celsius: "))

const tempEmKelvin = celsiusParaKelvin(tempEmCelsius)

console.log(`A temperatura de ${tempEmCelsius.toFixed(2)}°C é equivalente a ${tempEmKelvin.toFixed(2)}K`)

function celsiusParaKelvin(tempEmCelsius)
{
    return tempEmCelsius + 273
}