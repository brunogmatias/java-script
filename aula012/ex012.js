var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)

if(hora > 12){
    console.log('Boa tarde!')
}else if(hora <= 12){
    console.log('Bom dia!')
}