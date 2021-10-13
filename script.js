var valores = []
var noMostre = document.querySelector(".noMostre")
var tarefas = document.querySelector(".tarefas")
var a = 0, soma = 0

function adicionar(){
    var text = document.querySelector("#text")
  
    if(text.value){
        var valor = document.querySelector("#valor")
        var div1 = document.createElement("div")
        div1.classList = "tarefa"

        var p = document.createElement("p")
        var p2 = document.createElement("p")
        p.innerHTML = text.value + "<br>"
        p2.innerHTML = "R$: " + valor.value;
        soma =  soma + Number(valor.value)
        valores.push(Number(valor.value))
        p.classList = "tam"
        div1.appendChild(p)
        p2.classList = a 
        div1.appendChild(p2)
        var img1 =  document.createElement("img")
        img1.classList = "icon2"
        img1.src = "imagens/s28ozks6pyl53.png";
        div1.appendChild(img1)
        var img2 =  document.createElement("img")
        
        img2.src = "imagens/iconeverdenovo-300x281.png";
        img2.classList = "icon1"

        div1.appendChild(img2)
        tarefas.appendChild(div1)
        
        img2.addEventListener("click",function(){
            p.style = "text-decoration: line-through"
        })
    
        img1.addEventListener("click",function(){
            div1.remove()
            var pos =  Number(div1.children[1].className)
            soma = soma - valores[pos]
            result.innerHTML = "O valor total dos produtos é R$: <b>" + soma + "</b>"
            console.log(div1.children[1].className)
        })
        var result = document.querySelector("#result")
        result.innerHTML = "O valor total dos produtos é R$: <b>" + soma + "</b>"
        
        a++;
        
    }else{
        window.alert("Escreva uma mensagem antes de aicionar")
    }
    
  
    

}


