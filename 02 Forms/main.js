const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("product-list");
const clearBtn = document.getElementById("clearAllBtn");

const form = document.forms.productForm;
const nameInput = form.name;
const priceInput = form.price;
const quantityInput = form.quantity;
const categoryInput = form.category;
const isUsedInput = form.used;

addBtn.onclick = (event) => {
    event.preventDefault();

    // read form values
    const item = new product(
        nameInput.value,
        priceInput.value,
        quantityInput.value,
        categoryInput.value,
        isUsedInput.checked
    );

    tableBody.innerHTML += item.toHTMLRow();
}

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}
