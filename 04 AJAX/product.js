const form = document.forms.searchForm;
const productData = document.querySelector("#product-data");
const productsUrl = "https://dummyjson.com/products";

form.onsubmit = (e) => {
    e.preventDefault(); // prevent form submission
    searchProduct();
};

async function searchProduct() {
    const res = await fetch(productsUrl);
    const data = await res.json();

    const product = data.products.find(i => i.title.includes(form.name.value));

    console.log(product);

    if (product) {
        productData.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <strong>Price: $${product.price}</strong>
        `;
    } else {
        productData.innerHTML = "Product not found";
    }
}