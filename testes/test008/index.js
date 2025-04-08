let now = new Date()
let hours = now.getHours()
let time = document.querySelector('#time')
let body = document.body

if(hours <= 12){
    time.innerHTML = `<p>Bom dia! Agora são ${hours} horas.</p>`
    body.style.background = '#e6c055'
}else if(hours <= 18){
    time.innerHTML = `<p>Boa tarde! Agora são ${hours} horas.</p>`
    body.style.background = '#d2532c'
}else{
    time.innerHTML = `<p>Boa noite! Agora são ${hours} horas.</p>`
    body.style.background = '#574063'
}


