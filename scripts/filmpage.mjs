const filmItem = JSON.parse(localStorage.getItem("film"));

import { handleAddToCart } from "./addtocart.mjs";

export function generateFilmPageItem (filmItem) {

    let main = document.querySelector("main");

    const filmDivItem = document.createElement("div");
    filmDivItem.classList = "filmpage_content";

    const imageElement = document.createElement("img");
    imageElement.classList.add('filmpage-image')
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const titleElement = document.createElement("h1");
    titleElement.classList.add('title');
    titleElement.textContent = filmItem.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add('synopsis');
    descriptionElement.textContent = filmItem.description;

    // const buyFilmButton = document.createElement("button");
    // buyFilmButton.innerHTML = "Add film to cart";
    // buyFilmButton.classList.add("js-add-to-cart", "cta");

    const addToCart = document.createElement('button');
    addToCart.innerHTML = "Add film to cart";
    addToCart.href = `../html/checkout.html`; 
    addToCart.classList.add('js-add-to-cart', 'cta');
    addToCart.addEventListener('click', handleAddToCart)

    const ratingElement = document.createElement("p");
    ratingElement.textContent = `Rating by other users: ${filmItem.rating} points`;

    const releasedElement = document.createElement("p");
    releasedElement.textContent = filmItem.released;


    main.appendChild(filmDivItem);
    filmDivItem.appendChild(imageElement);
    filmDivItem.appendChild(titleElement);
    filmDivItem.appendChild(descriptionElement);
    filmDivItem.appendChild(releasedElement);
    filmDivItem.appendChild(addToCart);
    filmDivItem.appendChild(ratingElement);

    return filmDivItem;
}

generateFilmPageItem(filmItem);