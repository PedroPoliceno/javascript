function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagem/dia.png'
        document.body.style.background = '#fbe9d1'
    }else if(hora > 12 && hora < 18){
        //Boa tarde
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#c98676'
    }else{
        //Boa noite
        img.src = 'imagem/noite.png'
        document.body.style.background = '#2b3c43'
    }
}