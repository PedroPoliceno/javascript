var num = document.getElementById('num')
var res = document.getElementById('res')
var button = document.getElementById('button')
button.addEventListener('click', add)
var botaoFinalizar = document.getElementById('fin')
botaoFinalizar.addEventListener('click', fin)

var valores = []

function add(){

    var lista = document.getElementById('sel')

    function isNumero(n){

        if(n >= 1 && n <= 100){
            return true
        }else{
            return false
        }

    }

    function isLista(n, l){

        if(l.indexOf(n) == -1){
            return true
        }else{
            return false
        }

    }

    if(isNumero(Number(num.value)) && isLista(num.value, valores)){
        valores.push(Number(num.value))

        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
    }else{
        window.alert('Digite um número válido ou ainda não cadastrado')
    }

    num.focus()
    num.value = ''
    res.innerHTML = ''
}

function fin(){

    if(valores.length == 0){
        window.alert('Adicione números antes de finalizar')
    }else{
        var total = valores.length

        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(let c in valores){

            soma += valores[c]

            if(valores[c] > maior){
                maior = valores[c]
            }

            if(valores[c] < menor){
                menor = valores[c]
            }
        }

        var media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>O total de números foi ${total}</p></br>`
        res.innerHTML += `<p>O maior número foi ${maior}</p></br>`
        res.innerHTML += `<p>O menor número foi ${menor}</p></br>`
        res.innerHTML += `<p>A soma de todos os número foi ${soma}</p></br>`
        res.innerHTML += `<p>A média dos número foi ${media}</p>`
    }
}