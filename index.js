// let btnPlusall = document.querySelectorAll('.qty-plus');
// let btnMinusall = document.querySelectorAll('.qty-minus');




// for(let x of btnPlusall){
//     x.addEventListener('click', increaseQuantity("1"));

// }

// for(let x of btnMinusall){
//     x.addEventListener('click', descreaseQuantity);

// }

// localStorage.setItem("panier",JSON.stringify([]))

if(JSON.parse(localStorage.getItem("panier"))==undefined){
    localStorage.setItem("panier",JSON.stringify([]))


}
function increaseQuantity(x){
    document.querySelector('.qty'+x).value = parseInt(document.querySelector('.qty'+x).value) +1;
}

function descreaseQuantity(x){
    document.querySelector('.qty'+x).value = parseInt(document.querySelector('.qty'+x).value) -1;
}


function addtocart(id){

    let item = document.getElementById("item"+id)
    let title=item.getElementsByTagName("h5")[0].innerText
    let prix=item.getElementsByTagName("h4")[0].innerText.split("$")[1]
    let quantite=item.getElementsByTagName("input")[0].value
    let total=quantite*prix;
    let produit={
        title:title,
        total:total
    }

    let oldstock=JSON.parse(localStorage.getItem("panier"))
oldstock.push(produit)
   let newstock=oldstock

    localStorage.setItem("panier", JSON.stringify(newstock));

}