let add = document.querySelector('#add')
add.addEventListener('click', adicionar)

let ver = document.querySelector('#ver')
ver.addEventListener('click', verificar)

let clean = document.querySelector('#clean')
clean.addEventListener('click', limpar)

let res = document.querySelector('#res')

let array = []

function adicionar(){
    let num = Number(document.querySelector('#num').value) 
    let input = document.querySelector('#num')

    input.focus()

    if(num == ''){
        alert('Digite um número.')
    }else{
        array.push(num)
        input.value = ''
    }
    res.innerHTML = ''
}



function verificar(){
    let total = 1
    for(let n = 0; n < array.length; n++){
        total *= array[n]
    }

    res.innerHTML = `<p>O resultado da multiplicação é:${total}`
}

function limpar() {
    let input = document.querySelector('#num')
    
    input.value = ''
    array = []
    res.innerHTML = ''
}