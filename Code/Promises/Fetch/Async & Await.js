// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Callbacks (functions passed to other functions as parameters)
function firstFunction(parameter, callback) {
    // do stuff
    callback();
}

// AKA "callback hell"
firstFunction(para, function() {
    // do stuff
    secondFunction(para, function() {
        thirdFunction(para, function() {

        });
    });
});



// Promises
// 3 states: Pending, FullFilled, Rejected 

const  myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes, resolved the promise!");
    } else {
        reject("No! rejected the promise.");
    }
});

console.log(myPromise);  // > Promise {<fullfilled>: "Yes, resolved the promise!"}

myPromise.then(value => {
    console.log(value);  // > Yes, resolved the promise!
    return value + 1;
})
.then(newValue => {
  console.log(newValue);  // > Yes, resolved the promise!1
})
.catch(err => {
    console.log(err);  //(if error true) > No! rejected the promise.
})
// Fetch API returns a promise.


// .then()
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
       resolve("myNextPromis resolved");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);  // > (3s after myPromise got logged) myNextPromise resolved!
});

myPromise.then(value => {
    console.log(value);  // > Yes, resolved the promise!
});



const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })

  .then(data => {
    console.log(data);  // > (10) [{...}, {...}, {...}, ...]
    data.forEach(user => {
        console.log(user);  // > {id: 1, name: ...}   * 10
    })
  });

console.log(users);


// Async / Await

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);  // > (10) [{...}, {...}, {...}, ...]
}

anotherFunc();  
console.log(myUsers.userList);  // > []



// Example: workflow function //

const getAllUserEmails = async () => {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);  // > (10) ["Sincere@april.biz", ...]
}

getAllUserEmails();  


// 2nd parameter of Fetch is a object

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers : {
           Accept : "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData);  
}

getDadJoke();  // > {id: "210", joke: ...}



const jokeObject = {
    id: "0oO71TSv4Ed", 
    joke: "Why was it called the dark ages? Because of all the knights."
}

const PostData = async (jokeObj) => {

    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);  // > {Accept: "*/*", ...}
}

PostData();


const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
}
requestJoke("Clint", "Eastwood");


// Abstract into functions
// from a form

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}

const requestJokes = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);  // > Bruce Lee can write to an output stream.
}

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");  // > finished
}

processJokeRequest();  