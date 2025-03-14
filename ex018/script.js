function contar() {

    var numero1 = document.getElementById('inicio')
    var inicio = Number(numero1.value)

    var numero2 = document.getElementById('fim')
    var fim = Number(numero2.value)

    var numero3 = document.getElementById('passos')
    var passos = Number(numero3.value)

    var res = document.getElementById('res')

    if (inicio == 0 || fim == 0 ){

        res.innerHTML = 'Impossivel contar!'

    }else{
        res.innerHTML = 'Contando :'
        
        if(passos == 0){
            window.alert('Passo inválido, considerand como 1')
            passos = 1
        }

        //contagem cresciva
        if(inicio < fim){

            for(var c = inicio; c <= fim; c += passos){
                res.innerHTML += `>> ${c}`
            }
            //contagem regressiva
        }else{

            for(var c = inicio; c >= fim; c -= passos ){
                res.innerHTML += ` >> ${c}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}