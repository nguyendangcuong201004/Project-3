import { fetchApi } from "./fetchApi.js"
import { params } from "./variable.js";
import { API_PRODUCT } from "./const.js";
export const drawProducts = () => {
    
    const divProducts = document.getElementById("products");

    let category = "";

    if (params.category) {
        category = `&category=${params.category}`;
    }

    const api = `${API_PRODUCT}?q=${params.q}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}${category}`;

    fetchApi (api)
        .then((data) => {
            params.max = data.length;
        })

    fetchApi(api)
        .then((data) => {
            let arrayHTML = data.map((item) => {
                return `
        <div class="product-item">
            <div class="product-item__image">
                <span class="product-item__discount">
                    ${Math.round(item.discountPercentage)}%
                </span>
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="product-item__content">
                <h3 class="product-item__title">${item.title}</h3>
                <div class="product-item__footer">
                    <span class="product-item__price">${item.price}$</span>
                    <span class="product-item__stock">Còn lại: ${item.stock} sp</span>
                </div>
            </div>
        </div>
        `
            })
            const htmls = arrayHTML.join("");
            divProducts.innerHTML = htmls;
        })
}