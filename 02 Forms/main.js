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

    tableBody.innerHTML += `<tr>
                <td>${nameInput.value}</td>
                <td>${priceInput.value}</td>
                <td>${quantityInput.value}</td>
                <td>${categoryInput.value}</td>
                <td>${isUsedInput.checked}</td>
            </tr>`;
}

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}