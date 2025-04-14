function verificar() {
    let agora = new Date()
    let anoatual = agora.getFullYear()

    let sexo = document.getElementsByName('rsex')
    let nome = document.getElementById('nome')
    let res = document.getElementById('res')
    let anonasc = document.getElementById('idade')

    if(nome.value == 0 || Number(anonasc.value) >= anoatual || Number(anonasc.value) == 0){
        window.alert('Verifique as resposta e tente novamente.')
    }else{
        let idade = anoatual - Number(anonasc.value)
        let genero = ''
        if(sexo[0].checked){
            genero = 'um'
            if(idade < 10){
                //Criança
                genero += ' menino'
            }else if(idade < 21){
                //Jovem
                genero += ' jovem'
            }else if(idade < 55){
                //Adulto
                genero += ' adulto'
            }else{
                //Idoso
                genero += ' idoso'
            }
        }else{
            genero = 'uma'
            if(idade < 10){
                //Criança
                genero += ' menina'
            }else if(idade < 21){
                //Jovem
                genero += ' jovem'
            }else if(idade < 55){
                //Adulto
                genero += ' adulta'
            }else{
                //Idoso
                genero += ' idosa'
            }
        }
        res.innerText = `Olá ${nome.value}!, você é ${genero} com ${idade} anos.`
    }
}   