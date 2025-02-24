
//Categorie --> ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]

let input=document.querySelector("form")
let joke=document.querySelector("#battuta")

window.addEventListener("load",function(){
    input.addEventListener("submit",function(e){
        e.preventDefault()
        categoria=document.querySelector("#menu").value
        if(categoria!="none"&&categoria!="all"){
            let response=fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`)
            .then(
                function(res){
                    return res.json()
                }
            ).then(
                function(obj){
                    console.log(obj.value)
                    joke.innerHTML=obj.value
                    return obj
                }
            ).catch(
                function(error){
                    console.log(error+" Ops!")
                }
            )
        }
        console.log(categoria)
        })
})
