const userList = document.querySelector(".user-list");

// fetch() - Fetch API to make HTTP requests

const url = "https://jsonplaceholder.typicode.com/users";

async function loadUsers() {
    // send HTTP GET request to the URL
    const response = await fetch(url); // 10s

    console.log(response.status);
    // response.headers.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    // });

    if (!response.ok) {
        console.error("Error fetching data:", response.statusText);
        return;
    }

    const users = await response.json();
    console.log(users);

    // userList.innerHTML = users.map(user => `<li>${user.name} (${user.email})</li>`).join("");
    // or
    for (const i of users) {
        userList.innerHTML += `<li>${i.name} (${i.email})</li>`;
    }

    console.log("Got response!");
}
function loadUsersThen() {
    // send HTTP GET request to the URL
    fetch(url) // 10s
        .then((response) => {
            console.log(response.status);

            return response.json();
        })
        .then(users => {
            console.log(users);

            for (const i of users) {
                userList.innerHTML += `<li>${i.name} (${i.email})</li>`;
            }

            console.log("Got response!");
        })
        .catch((err) => console.log(err))
}

// loadUsers();
loadUsersThen();

console.log("Another code...");

//....