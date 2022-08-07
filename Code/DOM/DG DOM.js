// DOM - Document Object Model

// Selecting elements

const view1 = document.getElementById("view1");
console.log(view1);  // > <section id="view1" class="view">...</section>

const view2 = document.querySelector("#view2");
console.log(view2);  // > <section id="view2" class="view">...</section>

const views = document.getElementsByClassName("view");
console.log(views);  // > HTMLCollection(2) [section#view1.view,section#view2.view, ...]

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);  // > NodeList(2) [section#view1.view,section#view2.view]

const divs = view1.querySelectorAll("div");
console.log(divs);  // > NodeList(12) [div, div, div, div, div, div, div, div, div, div, div, div]

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);  // > HTMLCollection(12) [div, div, div, div, div, div, div, div, div, div, div, div]

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);  // > NodeList(6) [div, div, div, div, div, div]

// Styling elements
view1.style.display = "none";  // changes the view 
view2.style.display = "flex";

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].stlye.backgroundColor = "darkblue";  // changes every second element bg to darkblue
    evenDivs[i].style.width = "200px";  // changes elements width and height
    evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);  // > <h1>My Page</h1>

navText.textContent = "Hello World!"  // > <h1>Hello World!</h1>

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`;
console.log(navbar);  // > <nav> <h1>Hello!</h1> <p>This should align right.</p> </nav>

navbar.style.justifyContent = "flex-end";

// Navigating DOM

console.log(evenDivs[0]);  // > <div style="background-color: darkblue;">2</div>

console.log(evenDivs[0].parentElement);  // > <section id="view1" class="view" style="display: flex;">...</section>

console.log(evenDivs[0].parentElement.children);  // > HTMLCollection(12) [div, div, div, ...]

console.log(evenDivs[0].parentElement.childNodes);  // > NodeList(25) [text, div, text, div, text, ...]

console.log(evenDivs[0].parentElement.hasChildNodes());  // > true

console.log(evenDivs[0].parentElement.lastChild);  // > #text

console.log(evenDivs[0].parentElement.lastElementChild);  // >  <div style="background-color: darkblue;">12</div>

console.log(evenDivs[0].parentElement.firstChild);  // > #text

console.log(evenDivs[0].parentElement.firstElementChild);  // > <div>1</div>

console.log(evenDivs[0].nextSibling);  // > #text

console.log(evenDivs[0].nextElementSibling);  // > <div>3</div>

console.log(evenDivs[0].previousSibling);  // > #text

console.log(evenDivs[0].previousElementSibling);  // > <div>1</div>



view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
} 

for (let i = 1; i <= 12; i++) {
    createDivs(view2, 1);
}
// creates 12 numbered sqaures on page, 12 divs 