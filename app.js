let addItemsToCart = document.querySelectorAll(".items");
let itemsCart = document.querySelector(".container-items");

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

// Eventos del Drag & Drop

for (let addItemToCart of addItemsToCart) {
    addItemToCart.addEventListener("dragstart", catchItemInfo);

    addItemToCart.addEventListener("drag", (e) => {
        e.target.classList.add("active");
    });

    addItemToCart.addEventListener("dragend", (e) => {
        e.target.classList.remove("active");
    });

    itemsCart.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    itemsCart.addEventListener("drop", addItemInfo);
};

function catchItemInfo(e) {
    const button = e.target;
    const item = button.closest('.items');

    const itemPrice = item.querySelector(".item-price").textContent;
    const itemImg = item.querySelector(".item-img").src;

    console.log(itemPrice, itemImg);

    // setData establece la info que queremos compartir y getData obtener
    e.dataTransfer.setData("text/html", "<p>Polla</p>");

    addItemInfo(itemPrice, itemImg)
};

function addItemInfo(itemPrice, itemImg) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <p>${itemPrice}</p>
        <img src="${itemImg}">
    `;
    // e.dataTransfer.getData("text");
    itemsCart.appendChild(newDiv);
    /*e.preventDefault();
    let itemAdd = `<p>Hola</p>`
    console.log();*/
}