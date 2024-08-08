let num = [1,4,5]
num[3] = 7
num.push(8,7,3) // adiciona valores um depis do outro
console.log(`Os valores da array em ordem crescente são: ${num.sort()} \nO seu comprimento é de: ${num.length} \n O valor 7 está na posição: ${num.indexOf(7)}`) //sort é em ordem crescente */

 /* for(var c = 0; c < num.length ; c++){
    console.log(num[c])
} */
console.log(`Aqui estão seus valores:`)
for(var c in num){
    console.log(num[c])
}


