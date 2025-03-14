function gerar() {
    var real = document.getElementById('num')
    var num = Number(real.value)
    var sel = document.getElementById('sel')

    sel.innerHTML = ''
    for(var c = 1; c <= 10; c += 1){
        var item = document.createElement('option')
        var r = c * num
        item.text = `${num} x ${c} = ${r}`

        sel.appendChild(item)
    }
}