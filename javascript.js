const container = document.getElementById("container");

/*for (i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "test");
    box.classList.add("test2");
    box.addEventListener("mouseover", function test() {box.classList.add("blackbox");});
    container.appendChild(box);
}; */

/*const blackbox = document.getElementById("container");

blackbox.addEventListener("mouseover", function test() {blackbox.classList.add("blackbox");});

*/
const etchspace = document.createElement("div");
etchspace.setAttribute("id", "etchspace");
container.appendChild(etchspace);

const input = document.createElement("input");
const input2 = document.createElement("input");
const button = document.createElement("button");
input.setAttribute("value", "hello");
input2.setAttribute("value", "goodbye");
button.innerText = "hello";
button.setAttribute("onclick", "myFunction()");
container.appendChild(input);
container.appendChild(input2);
container.appendChild(button);
input.classList.add("textbox");
input2.classList.add("textbox");
button.setAttribute("id","button");

let x = input.value;
let y = input2.value;
let z = [];

function myFunction() {
    let test = document.getElementsByClassName("blackoutline");
    for (i = test.length; i > 0; i--) {
        test[0].remove()};
    x = input.value;
    y = input2.value;
    z[0] = x;
    z[1] = y;
};

for (i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "blackoutline");
    box.addEventListener("mouseover", function test() {box.classList.add("blackbox")});
    etchspace.appendChild(box);
}