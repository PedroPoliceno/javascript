function contar() {

    var numero1 = document.getElementById('inicio')
    var inicio = Number(numero1.value)

    var numero2 = document.getElementById('fim')
    var fim = Number(numero2.value)

    var numero3 = document.getElementById('passos')
    var passos = Number(numero3.value)

    var res = document.getElementById('res')

    if (inicio <= 0 || fim <= 0 || passos <= 0){

        res.innerHTML = 'Impossivel contar!'

    } else {
        res.innerHTML = inicio + fim
    }
}