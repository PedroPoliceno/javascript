function clique() {
    var agora = new Date()
    var atual = agora.getFullYear()
    var ano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (ano.value.length <= 0 || ano.value >= atual){
        window.alert('Verifique os dados e tente novamente!')

    } else {
        var mas = document.getElementById('masc')
        var fem = document.getElementById('fem')
        var idade = atual - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (mas.checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'imagem/menino.png')
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'imagem/garoto.png')
            }else if (idade < 55){
                //ADULTO
                img.setAttribute('src', 'imagem/adulto.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'imagem/idoso.png')
            }
        } else if (fem.checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'imagem/menina.png')
            }else if(idade < 21){
                //JOVEM
                img.setAttribute('src', 'imagem/garota.png')
            }else if (idade < 55){
                //ADULTO
                img.setAttribute('src', 'imagem/adulta.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'imagem/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen}, com ${idade} anos!`
        res.appendChild(img)
    }
}