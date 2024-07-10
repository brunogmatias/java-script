function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var txtp = document.getElementById('txtp')

    if(fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 18){
                //criança
                img.setAttribute('src','imagens/h.crianca.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/j.homem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/homem40.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/idoso.png')
            }
        }
        if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 18){
                //criança
                img.setAttribute('src','imagens/m.crianca.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/j.mulher,png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/mulher40.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        txtp.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
}
}