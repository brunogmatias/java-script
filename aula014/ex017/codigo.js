function mostrar(){

    var res = document.getElementById('res')
    var n = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var n2 = Number(n.value)

    if(n.value == 0){
        window.alert('ERROR!')
    }else{
        tab.innerHTML = ''
    for(var c = 1 ; c <= 10 ; c++){
        var item = document.createElement('option')
        item.text = `${n2} x ${c} = ${n2*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }}

}