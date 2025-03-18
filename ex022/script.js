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
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        window.alert('Tudo ok')
    }else{
        window.alert('Valor ínvalido ou já encontrado na lista!')
    }
}