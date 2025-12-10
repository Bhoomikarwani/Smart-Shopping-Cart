let addToCart=document.querySelectorAll(".addtocart");
const cartItemsContainer = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
let subTotal=0;
const items=[
    Air-Fryer,
    oven,
    frother,
    Kettle ,
]

addToCart.forEach(product=>{
    let productName = product.getAttribute("data-name");

    product.addEventListener("click", () =>{
        product.innerText="Already added";
          product.disabled = true;

          
    });
});