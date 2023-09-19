import { drawProducts } from "./drawProducts.js";
import { fetchApi } from "./fetchApi.js";
import { params } from "./variable.js";
import { API_CATEGORY } from "./const.js";

const categoryList = document.getElementById("category");

fetchApi(API_CATEGORY)
    .then((data) => {
        let arrayHTML = data.map((item) => {
            return `
            <div class="category-item" data-category=${item}>   
                ${item}
            </div>
            `
        })
        const htmls = arrayHTML.join("");
        categoryList.innerHTML = htmls;
        const categoryItem = document.querySelectorAll(".category-item");
        categoryItem.forEach((item) => {
            item.addEventListener("click", () => {
                const data = item.getAttribute("data-category");
                params.category = data;
                drawProducts();
            })
        })
    })