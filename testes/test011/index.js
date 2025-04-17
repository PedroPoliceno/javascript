var a = [1, 2, 3, 4]

//Forma mais bruta de mostrar vetores e objetos
for(var b = 0; b < a.length; b++ ) {
    console.log(a[b])
}

console.log(`Este so os valores do vetor, ele tem ${a.length} elementos.`)
a.push(7)
console.log('Se adicionarmos o 7 com .push fica :')

//Forma mais simples de mostrar um vetor ou objetos
for (let c in a){
    console.log(a[c])
}

console.log(`O valor 7 está na posição ${a.indexOf(7)}`)