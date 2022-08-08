// Higher Order Functions

// A higher order function is a function that does at least one of the following:

// Takes one or more functions as an argument (parameter)
// Returns a function as the result.


// forEach()
posts.forEach((post) => {
  console.log(post);  // >  {userId: 1, id: 1, title: ...}
});


// filter()
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
});
console.log(filteredPosts);  // > (10) [{...}, {...}, ...]


// map()
const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts);  // > (10) [10, 20, 30, ...]


// reduce()
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);  // > 550