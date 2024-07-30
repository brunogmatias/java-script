function clicar(){
    var n1 = document.getElementById('ini')
    var n2 = document.getElementById('fim')
    var pas = document.getElementById('pas')
    
    var res = document.getElementById('res')

    var n1 = Number(value.n1)
    var n2 = Number(value.n2)
    var pas = Number(value.pas)

    for(var c = n1 ; n1<=n2 ; c+=pas){
        res.innerHTML = `${pas} `
}
}