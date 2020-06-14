let data = ''
const datas = []
let valor = 0
const valores = []
const joinArray = []

const inserirDatas = function (data) {
    data = document.getElementById('data').value
    console.log('Inserindo data...')
    return datas.push(data)
}

const inserirValores = function (valor) {
    valor = document.getElementById('valor').value
    console.log('Inserindo valor...')
    return valores.push(valor)
}

/* Teste
inserirDatas('04/06/2020')
inserirValores(10000)
inserirDatas('05/06/2020')
inserirValores(10500)
inserirDatas('06/06/2020')
inserirValores(11000)
inserirDatas('07/06/2020')
inserirValores(11500)
inserirDatas('08/06/2020')
inserirValores(12000)
montarGrafico()
 */

function montarGrafico() {
    for (let i = 0; i < datas.length; i++) {
        for (let i = 0; i < valores.length; i++) {
            joinArray.push(datas[i])
            joinArray.push(valores[i])
        }
    }

    let lim = (datas.length + valores.length)
    while (lim < joinArray.length) {
        joinArray.pop()
    }
    console.log('Montando gráfico...')
}

function exporGrafico() {
    console.log(joinArray)
    document.getElementById('exporGrafico').innerHTML = joinArray
}

/* Teste
console.log(datas)
console.log(valores)
console.log(joinArray)
*/
