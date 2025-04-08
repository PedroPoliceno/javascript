document.querySelector('#botao').addEventListener('click', calc)

function calc() {
    var nas = document.getElementById('nas').value
    var res = document.querySelector('div#res')

    if(nas == 0) {
        window.alert('Escreva algo')

    }else if(nas.toUpperCase() == 'BRASIL'){
        res.innerHTML = `Nasceu em ${nas}, você é Brasileiro!`

    }else{
        res.innerHTML = `Nasceu em ${nas}, você é Estrangeiro!`

    }
}