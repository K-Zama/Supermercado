let addItemsToCart = document.querySelectorAll(".items");
let itemsCart = document.querySelector(".container-items");

const addToShoppingCartButtons = document.querySelectorAll(".addToCart");

// Eventos del Drag & Drop

for (let addItemToCart of addItemsToCart) {
    addItemToCart.addEventListener("dragstart", catchItemInfo);

    addItemToCart.addEventListener("drag", (e) => {
        e.preventDefault();
        e.target.classList.add("active");
    });

    addItemToCart.addEventListener("dragend", (e) => {
        e.preventDefault();
        e.target.classList.remove("active");
    });

    itemsCart.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    itemsCart.addEventListener("drop", addItemInfo);
};

function catchItemInfo(e) {
    const itemElement = e.target;
    const item = itemElement.closest('.items');

    const itemPrice = item.querySelector(".item-price").textContent;
    const itemImg = item.querySelector(".item-img").src;

    e.dataTransfer.setData("img", itemImg);
    e.dataTransfer.setData("price", itemPrice);
};

// Añadir en el HTML

function addItemInfo(e) {
    const itemPrice = e.dataTransfer.getData("price");
    const itemImg = e.dataTransfer.getData("img");

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div class="row row-item">
            <div class="col">
                <div class="item-cart-fruta d-flex justify-content-around item-cart" draggable="true">
                    <div>
                        <img class="item-img" src="${itemImg}" alt="manzana">
                        <span class="badge badge-pill badge-light itemPriceCart">${itemPrice}</span>
                    </div>
                    <button type="button" class="btn btn-danger align-self-center" id="btn-delete" onclick="deleteCartElement(this)">X</button>
                </div>
            </div>
        </div>
    `;

    itemsCart.appendChild(newDiv);

    updatePriceItems();
};

// Botón de eliminar elemento

function deleteCartElement(element) {
    element.parentElement.parentElement.parentElement.remove();

    updatePriceItems();
};

// Actualizar precio

function updatePriceItems() {
    let total = 0;

    const shoppingCartTotal = document.querySelector(".costeTotal");
    const shoppingCartItems = document.querySelectorAll(".row-item");

    for (let shoppingCartItem of shoppingCartItems) {
        let shoppingCartItemPriceElement = shoppingCartItem.querySelector(".itemPriceCart");
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("€", ""));

        total = total + shoppingCartItemPrice;
    };

    shoppingCartTotal.innerHTML = `${total}€`;
};