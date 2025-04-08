document.querySelector('#botao').addEventListener('click', clicou)

function clicou() {
    var res = document.querySelector('#res')
    var fru = document.querySelector("#fruta").value

    switch(fru.toUpperCase()){
        case 'MAÇÃ':
        res.innerText = 'A Maçã está R$11.98 o Kg'

        break
        case 'LARANJA':
        res.innerText = 'A Laranja está R$7.59 o Kg'

        break
        case 'BANANA':
            res.innerText = 'A Banana está R$9.98 o Kg'

        break
        default:
            res.innerText = 'Infelizmente não encontramos a fruta solicitada'
    }
}