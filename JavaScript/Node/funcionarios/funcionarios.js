const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const chineses = f => f.pais == "China"
const mulheres = f => f.genero == "F"
const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const maiorSalario = (func,funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)

    const funcFCMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(funcFCMenorSalario)
    const funcFCMaiorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(maiorSalario)
    console.log(funcFCMaiorSalario)
})