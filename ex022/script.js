var num = document.getElementById('num')
var lista = document.getElementById('sel')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    res.innerHTML = ''
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))

        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
    }else{
        window.alert('Valor ínvalido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function fin(){
    if(valores.length == 0){
        window.alert('Escreva um número antes de finalizar')
    }else{
        var tot = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
    }
}