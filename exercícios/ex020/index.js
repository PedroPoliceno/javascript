var num = [1, 2, 4, 5, 9]

/*for(var c = 0; c <= num.length; c++) {
   console.log(num[c])
}*/

for(var c in num){
    console.log(`Na posição ${c} temos o valor ${num[c]}`)
}

var pos = num.indexOf(8)

if(pos == -1){
    console.log('Este valor não existe dentro da váriavel')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}
