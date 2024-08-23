let n = document.getElementById('txtn')
let res = document.getElementById('res')
let selX = document.getElementById('selX')
let sel = []

function adicionar(){
    
    if(Number(n.value) > 100 || Number(n.value) == 0){
        window.alert('error: Digite um valor!')
    }else{
        sel[n.value] = Number(n.value)
        let itemO = document.createElement('option')
        itemO.text = `O valor ${sel[n.value]} foi adicionado.`
        selX.appendChild(itemO) 
    }
}

function finalizar(){
    sel.sort()
    let tot = sel.length
    res.innerHTML = `Foram adicionados ${sel.length} números.`
    
}




