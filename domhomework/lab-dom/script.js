let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the `#main-title` ID element.
  // Remember there are a couple of ways to query **id**. Change the **text** of the title to something shorter.

  document.getElementById('main-title').innerHTML= 'Dom\'s Homepage!';

 // Part 2
 // Select the `body` and change the background-color to a new color of your choice.

document.body.style.backgroundColor = "pink";


   // Part 3

//  Select **DOM's Favorite Things** list and remove the last list item.
//  create variable called favoriteThings
// get the ul element by using getElementById() method, and set ^ variable equal to getElementById('favorite-things')
// use removeChild() method to remove the last element of the ul element

 
  let favoriteThings = document.getElementById('favorite-things');
  favoriteThings.removeChild(favoriteThings.lastElementChild);


  // Part 4

  //Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements

  // create variable called elements
  // use document.ElementsByClassName to select which class
  // set my variable equal to document.getElementsByClassName("special-title");
  //  create for loop to loop through the full list of elements and make changes to each one
  //  set list of elements in the selected class to "2rem"

   let changeElementsSize = document.getElementsByClassName('special-title');
   for (let i = 0; i < changeElementsSize.length; i++) {
     let changeElementsSize = changeElementsSize[i];
     changeElementsSize.style.fontSize = "2rem";
}

//   // Part 5

//   // Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.

  let ulElement = document.getElementById('past-races');
  let elementToRemove = ulElement.childNodes[3];
  elementToRemove.parentNode.removeChild(elementToRemove);

//   // Part 6
//   // Let's add to DOM's **Past Races** list. 
//   //Create a new `<li>` element, 
//   // change the new `<li>` text to the name of a city, 
//   //and append it to the **Past Races** list.

  const addCity = document.getElementById('past-races');
	const liCity = document.createElement("li");
	liCity.textContent = "Paris";
	addCity.appendChild(liCity);

  
//   // Part 7

//   Create a new `.blog-post` corresponding to the new city added in **Part 6**. 
//You will have to create a new `<div>` with class of `.blog-post`, 
//a new `<h1>` with text, and a new `<p>` with some text.
// Make the new element consistent with the other posts. 
//Think about what order you want to create the elements, 
//and what order you want to append them in.

function newBlogPost () {
let blogPost = document.createElement('div');
let heading = document.createElement('h1');
let paragraph = document.createElement('p');
blogPost.className = "'New-Blog-Post";
heading.innerHTML = "Paris";
paragraph.innerHTML = 'My cars are the best!';
blogPost.appendChild(paragraph);
blogPost.appendChild(heading);
let main = document.getElementsByClassName('main');
main.appendChild(blogPost);
}
newBlogPost();


}