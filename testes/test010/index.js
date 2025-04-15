let button = document.getElementById('button')
button.addEventListener('click', verificar)

function verificar() {
    let stgstart = document.querySelector('#start').value
    let stgstep = document.querySelector('#step').value
    let stgend = document.querySelector('#end').value
    let res = document.querySelector('#res')

    if(stgstart == '' || stgstep == '' || stgend == ''){
        //Verificando se o formulário foi preenchido
        window.alert('Verifique os números e tente novamente.')
        return
    }
    //Transformando strings em números
    let start = Number(stgstart)
    let step = Number(stgstep)
    let end = Number(stgend)

    if(step === 0){
        //Verificando os passos
        window.alert('Coloque um número maior que 0 nos passos.')
        return

    }else {
        res.innerText = ''
        
        if(start <= end){
            //Ordem crescente
            while(start <= end){
                res.innerText += `...${start}`
                start += step
            }

        }else if(start >= end){
            //Ordem decrescente
            while(start>= end){
                res.innerText += `...${start}`
                start -= end
            }

        } 
    }
}