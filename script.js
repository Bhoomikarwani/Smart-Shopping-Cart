let addToCart=document.querySelectorAll(".addtocart");
let cartItemsContainer = document.getElementById('cart-items');
let products={
    1:{name:"Air Fryer",price:31.67,img:"./assets/airFryer.png"},
    2:{name:"Microwave oven",price:37.2,img:"./assets/oven.png"},
    3:{name:"Coffee Frother",price:3.37,img:"./assets/frother.png"},
    4:{name:"Electric Kettle",price:7.14,img:"./assets/download.png"},
}

addToCart.forEach(el=>{
    el.addEventListener("click", () =>{
        el.innerText="Added to cart";
        //el.innerHTML = name; // shows the alert
        //cartItemsContainer.innerHTML=<div class="cart"><p></p></div>
        el.disabled=true;
        updatecart();  
    });
});
function updatecart(){
   let div=document.createElement("div");
   div.id="cartDisplay";
   div.innerHTML = `<h2>Your Cart</h2>`;
   const ids=Object.keys[cart];
   ids.forEach(id => {
      let item=cart[id];
      div.innerHTML += `
            <div style="background:white; margin:10px; padding:15px; border:2px solid black; border-radius:10px; display:flex;gap:20px;">
            <img src="${item.img}"width="120" height="120" style="border:1px solid black;padding:5px;border-radius:5px;">
            </div>`
   })
}
let buttons=document.querySelectorAll(".color");
