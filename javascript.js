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

const xtext = document.createElement("div");
const ytext = document.createElement("div");
const inputx = document.createElement("input");
const inputy = document.createElement("input");
const button = document.createElement("button");
const numinputs = document.createElement("div");
xtext.setAttribute("class", "ptext");
ytext.setAttribute("class", "ptext");
xtext.innerText = ("How many squares wide? (max of 100)");
ytext.innerText =("How many tall? ");
inputx.setAttribute("id", "inputx");
inputx.setAttribute("value", "16");
inputx.setAttribute("type", "number");
inputy.setAttribute("id", "inputy");
inputy.setAttribute("value", "16");
inputy.setAttribute("type", "number");
button.innerText = "hello";
button.setAttribute("onclick", "myFunction()");
container.appendChild(xtext);
container.appendChild(inputx);
container.appendChild(ytext);
container.appendChild(inputy);
container.appendChild(button);
inputx.classList.add("textbox");
inputy.classList.add("textbox");
button.setAttribute("id","button");

let x = (inputx.value);
let y = inputy.value;
let z = [];
let a;
let widthbox;
let heightbox;

function myFunction() {
    let test = document.getElementsByClassName("blackoutline");
    for (i = test.length; i > 0; i--) {
        test[0].remove()};
    x = inputx.value;
    x = Math.round(x);
    if (x >= 100) {x = 100};
    if (x <= 0) {x = 1};
    y = inputy.value;
    y = Math.round(y);
    if (y >= 100) {y = 100};
    if (y <= 0) {y = 1};
    z[0] = x;
    z[1] = y;
    a = x * y;
    heightbox = (500 / x) + "px";
    widthbox = (500 / y) + "px";
    document.getElementById("inputx").style.width = "50px";
    for (i = 0; i < a; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "blackoutline");
        box.style.height = heightbox;
        box.style.width = widthbox;
        box.addEventListener("mouseover", function test() {box.classList.add("blackbox")});
        etchspace.appendChild(box);
    }
};

for (i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "blackoutline");
    box.addEventListener("mouseover", function test() {box.classList.add("blackbox")});
    etchspace.appendChild(box);
}