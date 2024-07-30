function clicar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    
    var res = document.getElementById('res')

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if(i > f || p > f){
        window.alert("ERRO: coloque valores apropriados!")
    }else{

    for(let c = i ; c <=f ; c += p){
        res.innerHTML += ` ${c} `
}}
}