
   /*function hora(){
        let datas = new Date()
        let horaA = datas.getHours()
        console.log(`Agora são ${horaA} horas.`)
   }

   hora() */

   function adicionar(){
    
     if(Number(n.value) > 100 || Number(n.value) == 0){
         window.alert('error: Digite um valor!')
     }else if(Number(n.value) < 100){
         sel.push(n)
     }
 }
let n = 5
let sel = []

 sel.push(n)
 console.log(sel)
