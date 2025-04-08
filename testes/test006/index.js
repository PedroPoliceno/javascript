document.querySelector('#botao').addEventListener('click', clicou)

function clicou() {
    var idade = Number(document.querySelector('#idade').value) 
    var res = document.querySelector('#res')

    if(idade >= 18 && idade < 65){
        res.innerText = 'Voto obrigatório'

    }else if(idade >= 16 || idade >= 65){
        res.innerText = 'Voto opcional'
        
    }else{
        res.innerText = 'Não vota'
    }
}