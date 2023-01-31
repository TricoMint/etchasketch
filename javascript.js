const container = document.getElementById("container");

for (i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "test");
    box.classList.add("test2");
    box.addEventListener("mouseover", function test() {box.classList.add("blackbox");});
    container.appendChild(box);
}; 



/*const blackbox = document.getElementById("container");

blackbox.addEventListener("mouseover", function test() {blackbox.classList.add("blackbox");});

*/