function somar(){
    let n1 = document.querySelector("#n1")
    let n2 = document.querySelector("#n2")
    let res = document.querySelector("#res")
    let s = Number(n1.value) + Number(n2.value)
    res.innerHTML = `A soma de ${n1.value} e ${n2.value} é ${s}`
  }