// Adding elements to page //

const body = document.body
body.append("hello world")  // adds text on page in browser

body.append()  // > you can append elements like div, span, h1 and strings.

body.appendChild() // > you can only append elements like div, span, h1 etc.


// Creating elements //

const div = document.createElement('div')  // > Only creates the element, does not add it to the code/page.
body.append(div)  // > adds the div to the page


// Modifying element text //

div.innerText = "Hello World"  // > adds text to code and page
 
div.textContent = "Hello world"  // > adds text to code and page


// Modifying element HTML //

div.innerHTML = "<strong>Hello world</strong>"  // > Hello world (text font is bold from the strong element)
// (security risk, mal code can be added)

const strong = document.createElement('strong')
strong.innerText = "Hello world"
div.append(strong)  // Has the same result as innerHTML


// Removing Elements //

const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")  // (the hi and bye comes from the html elements with a id)
const spanBye = document.querySelector("#bye")

spanBye.remove()  // > removes it from page and code
div.append(spanBye)  // > adds the element back in


// Modifying Element Attributes //

console.log(spanHi.getAttribute("id"))  // > hi
console.log(spanHi.id)  // > hi  (faster way)

console.log(spanHi.setAttribute("id", "newid"))  // (adds an id named "newid")
spanHi.id = "newid" 

spanHi.removeAttribute("id")  // (removes att)


//  <span id="hi" data-test="this is a test" data-longer="abcde"></span> (the test word from data-test can be called what you need)

console.log(spanHi.dataset)  // > DOMStringMap {test: "this is a test", longer: "abcde"}

console.log(spanHi.dataset.test)  // > this is a test

spanHi.dataset.newName = "hi" // <span data-new-name="hi"></span>


// Modifying element classes //

spanHi.classList.add("new-class")

spanHi.classList.remove("hi")

spanHi.classList.toggle("hi1", true)