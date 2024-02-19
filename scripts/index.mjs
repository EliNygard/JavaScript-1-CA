











// CART - move to separate file

// add item to cart
// generate items
// update cart quantity
// buy films button = message to user




const removeCartItemButtons = document.getElementsByClassName("remove-btn");
for (var i = 0; i < removeCartItemButtons.length; i++) {
    const removeButton = removeCartItemButtons[i];
    removeButton.addEventListener('click', (removeCartItem))
}

const quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}



// function addToCartClicked(event) {
//     const button = event.target;
//     const shopItem = button.parentElement;
//     const title = shopItem.getElementsByClassName("film-title")[0].innerText;
//     console.log(title);
//     const imageSrc = shopItem.getElementsByClassName("film-image")[0].src;
    // if (shopItem) {  //from chatGPT
    //     const titleElement = shopItem.querySelector(".film-title");
    //     const imageElement = shopItem.querySelector(".film-image");
    // }
    // if (titleElement && imageElement) {}
    // const title = titleElement.innerText;
    // const imageSrc = imageElement.src;
    // console.log(title, imageSrc);
// }

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName("cart-items")[0];
    const cartRows = cartItemContainer.getElementsByClassName("cart-row");
    let total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName("cart-price")[0]
        const quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        const price = parseFloat(priceElement.innerText.replace("kr", ""));
        const quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;          // to desimaler etter komma
    document.getElementsByClassName("cart-total-price")[0].innerText = total + ' kr';
}


const purchaseButton = document.getElementsByClassName("btn-purchase");
purchaseButton.addEventListener('click', purchaseClicked);

function purchaseClicked() {
    alert("Great film selection! Enjoy your film experience!");
    const cartItems = document.getElementsByClassName("cart-items");
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
};









// const selectGenre = document.getElementById('action');

// selectGenre.addEventListener('change', () => {
//     const selectedGenre = selectGenre.value;
//     const filteredFilms = filmsData.filter(film => film.genre === selectedGenre);

//     displayFilms(filteredFilms);
// });

// let filterInput = document.getElementById("filterinput");

// filterInput.addEventListener('keyup', filterFilms);

// export function filterFilms(){
//     let filterValue = filterInput.value.toUpperCase();
//     let item = grid.querySelectorAll('.film-item');

//     for (let i = 0; i < item.length; i++){
//         let span = item[i].querySelector('.film-title');

//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             item[i].style.display = "initial";
//         }else{
//             item[i].style.display = "none";
//         }
//     }
// }


// let selectGenre = document.querySelectorAll('option');

// selectGenre.addEventListener('click', filterFilmsByGenre);

// export function filterFilmsByGenre(films) {
//     const filmsData = films.data;
    
//     filmsData.forEach(film => {
//         filmsData.find()
//     });
        
// }




