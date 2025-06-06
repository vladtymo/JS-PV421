// ------------- working with BOM
window.console.log("Hello BOM!");

// --------- navigator
console.log(navigator);

// --------- geolocation
console.log(navigator.geolocation);

navigator.geolocation.getCurrentPosition((res) => {
    console.log(`My location: ${res.coords.latitude} : `);
}, (err) => console.log("Cannot get your location!"));

// --------- screen
console.log(window.screen);

screen.orientation.onchange = () => {
    if (screen.orientation.type.startsWith("portrait")) {
        document.body.style.backgroundColor = "lightblue";
    }
    else {
        document.body.style.backgroundColor = "lightgreen";
    }
}

// --------- location
console.log(location);

w3schoolBtn.onclick = () => {
    location.assign("https://w3schools.com"); // save history
    // location.replace("https://w3schools.com"); // remove history
}

// openNewWindowBtn.onclick = () => {
//     window.open("https://w3schools.com", "W3School", "width=600,height=400"); // open in new tab
// }
window.onkeydown = () => {
    window.open("https://w3schools.com", "W3School", "width=600,height=400"); // open in new tab
}
// location.reload();

// --------- history
console.log(window.history);

// history.go(-3);   // go back 3 pages
// history.go(3);    // go forward 3 pages
const backBtn = document.getElementById("backBtn");

backBtn.onclick = () => history.back();
forwardBtn.onclick = () => history.forward();

// --------- window
// window.alert("Hello, world!");
// alert("Hello, world!");
// this.alert("Hello, world!");

console.log(window);
console.log(`Window size: ${window.innerHeight}x${window.innerWidth}`);

const coordText = document.getElementById('coord-text');
window.onmousemove = (e) => {
    coordText.textContent = `${e.pageX} : ${e.pageY}`;
}

window.onresize = () => {
    document.body.classList.toggle("dark-mode", window.innerWidth < 600);
}

// window.onkeydown = (event) => {
//     if (event.key === "Escape") {
//         document.body.style.backgroundColor = "gray";
//     }
//     else if (event.key === "Enter") {
//         document.body.style.backgroundColor = "unset";
//     }
//     else {
//         console.log(`Key pressed: ${event.key}`);
//     }
// }

