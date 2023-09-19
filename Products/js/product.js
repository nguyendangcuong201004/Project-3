import { params } from "./variable.js";
import { drawProducts } from "./drawProducts.js";

const divProducts = document.getElementById("products");

// Hiển thị danh sách sản phẩm---------------------------------------

drawProducts();

// Het Hiển thị danh sách sản phẩm-----------------------------------

// Tìm kiếm sản phầm-------------------------------------------------

const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

const search = () => {
    const value = inputSearch.value;
    params.q = value;
    drawProducts();
}

buttonSearch.addEventListener("click", () => {
    search();
})

inputSearch.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        search();
    }
})

// Tìm kiếm sản phầm----------------------------------------------------

// Phân trang sản phầm--------------------------------------------------

const paginationPrev = document.getElementById("pagination-prev");
const paginationNumber = document.getElementById("pagination-number");
const paginationNext = document.getElementById("pagination-next");

paginationNext.addEventListener("click", () => {
    if (params.page < Math.ceil(params.max / 12)) {
        params.page++;
        paginationNumber.innerHTML = params.page;
        drawProducts();
    }
})

paginationPrev.addEventListener("click", () => {
    if (params.page > 1) {
        params.page--;
        paginationNumber.innerHTML = params.page;
        drawProducts();
    }
})

// Phân trang sản phầm--------------------------------------------------

// Sắp xếp sản phẩm-----------------------------------------------------

const filter = document.getElementById("fifter");
filter.addEventListener("change", (e) => {
    const value = e.target.value;
    switch (value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc";
            break;
        case "giam-gia-nhieu":
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
    }
    drawProducts();
})

// Sắp xếp sản phẩm-----------------------------------------------------