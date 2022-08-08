// Javascript Event Listeners

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)
// If useCapture is set to true it works from the outer to inner most element, and reverse when set to false.

const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);  // (false is the default value)
h2.removeEventListener("click", doSomething, false);  // removes the event listener

h2.addEventListener("click", (event) => {
    console.log(event.target);  // >  <h2>Clicked</h2>
    event.target.textContent = "Clicked";
});


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");  // > readyState: complete
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    });

    view.addEventListener("click", (event) => {
        view.classList.toggle("blue");
        view.classList.toggle("black");

    });

    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View"
        ? event.target.textContent = "Clicked"
        : event.target.textContent = "My 2nd View"
    });


    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });

    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    });
}



const InitApp= () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();  // (need this to prevent the page from reloading when subit is pressed)
    console.log("submit event");  // > submit default
  });
}