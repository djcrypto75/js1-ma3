// Question 1
const divide = (a, b) => a * b;

// Question 2
fetch("https://api.rawg.io/api/games?genres=sports")
   .then(function(response) {
      return response.json();
   })
   .then(function(json) {
      for (let i = 0; i < json.results.length; i++) {
         console.log(json.results[i].name);
      }
   })

   .catch(() => (document.location.href = "error.html"));

// Question 3
let catsText = "These cats are outrageous.";
catsText = catsText.replace("cats", "giraffes");

// Question 4
const queryStringCheck = document.location.search;
const params = new URLSearchParams(queryStringCheck);

let userId;

if (params.has("userId")) {
   userId = params.get("userId");
}

if (userId < 10) {
   document.location.href("first.html");
} else if (userId >= 10) {
   document.location.href = "second.html";
} else {
   document.location.href = "third.html";
}

// Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);

// Question 6

// Question 7
