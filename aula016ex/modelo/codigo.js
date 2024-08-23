let n = document.getElementById('txtn')
let selX = document.getElementById('selX')
let sel = []


function adicionar(){
    
    if(Number(n.value) > 100 || Number(n.value) == 0){
        window.alert('error: Digite um valor!')
    }else{
        
            sel.push(Number(n.value))
            let itemO = document.createElement('option')
            itemO.text = `${sel[c]}`
            selX.appendChild(itemO)
        
    }
}


