let monpanier= JSON.parse(localStorage.getItem("panier"));



let panier=document.getElementById('panier');



for (let x of monpanier){
    let p = document.createElement("p")
    p.innerText=x.title
    let p1 = document.createElement("p")
    p1.innerText=x.total
    panier.appendChild(p)
    panier.appendChild(p1)

}


