
const iconReference = {
  brownDrinks: [
    'Bourbon',
    'Scotch',
    'Coffee Liqueur',
    'Drambuie',
    'Dark Rum',
    'Spiced Rum',
    'Gold Tequila',
    'Brandy',
    'Cognac',
    'Canadian Whisky',
    'Irish Whiskey',
    'Rye Whiskey',
    'Sweet Vermouth',
    'Chocolate Liqueur',
    'Jägermeister',
    'Frangelico',
    'Grand Marnier',
    'Southern Comfort',
    'Amaretto',
    'Bacardi-151',
    'Blended Whiskey',
    'Black Sambuca',
    'Añejo Rum',
    'Benedictine'
  ],
  clearDrinks: [
    'Vodka',
    'Gin',
    'Tequila',
    'Light Rum',
    'Malibu Rum',
    'Dry Vermouth',
    'Sake',
    'Cachaca',
    'Pisco',
    'Kirschwasser',
    'Peach Schnapps',
    'Peppermint Schnapps',
    'Creme de Menthe',
    'Sambuca',
    'Lemon Vodka',
    'Citrus Vodka',
    'Lime Vodka',
    'Peach Vodka',
    'Cranberry Vodka',
    'Vanilla Vodka'
  ],
  fruitDrinks: [
    'Absinthe',
    'Irish Cream',
    'Triple Sec',
    'Midori Melon',
    'Yellow Chartreuse',
    'Green Chartreuse',
    'Campari',
    'Creme de Banane',
    'Strawberry Schnapps',
    'Apricot Brandy',
    'Sloe Gin',
    'Creme de Cacao',
    'Blackberry Brandy',
    'Apple Brandy',
    'Green Creme de Menthe',
    'Maraschino Liqueur',
    'Chambord Raspberry Liqueur',
    'Blue Curacao',
    'Cherry Brandy'
  ],
  beerWine: [
    'Red Wine',
    'White Wine',
    'Champagne',
    'Ale',
    'Lager',
    'Guinness Stout',
    'Sherry',
    'Port',
    'Hard Cider'
  ],
  mixers: [
    'Cola',
    'Lemon-Lime Soda',
    'Ginger Ale',
    'Lemonade',
    'Pink Lemonade',
    'Iced Tea',
    'Club Soda',
    'Ginger Beer',
    'Dr Pepper',
    'Orange Juice',
    'Apple Juice',
    'Cranberry Juice',
    'Grapefruit Juice',
    'Lemon Juice',
    'Tomato Juice',
    'Sour Mix',
    'Margarita Mix',
    'Lime Juice',
    'Hot Chocolate',
    'Tonic Water',
    'Pineapple Juice',
    'Angostura Bitters',
    'Orange Bitters',
    'Simple Syrup',
    'Grenadine',
    'Guava Juice',
    'Apple Cider',
    'Mountain Dew'
  ],
  produce: [
    'Cherry',
    'Lemon',
    'Lemon Peel',
    'Orange',
    'Orange Peel',
    'Lime',
    'Lime Peel',
    'Egg',
    'Egg White',
    'Mint',
    'Sugar',
    'Powdered Sugar',
    'Brown Sugar',
    'Cream',
    'Whipped Cream',
    'Milk',
    'Coffee',
    'Nutmeg',
    'Ginger',
    'Cloves',
    'AllSpice',
    'Cinnamon',
    'Vanilla Ice-Cream',
    'Chocolate Ice-Cream',
    'Fruit',
    'Worcestershire Sauce',
    'Tabasco Sauce',
    'Maple Syrup',
    'Tea',
    'Olive',
    'Egg Yolk',
    'Banana',
    'Honey'
  ]
}

let availableIngredients = ['Water', 'Ice', 'Salt'];
let availableDrinks = [];
const card = document.querySelector('.card');
const cardClose = document.querySelector('.card-close');
const recipeBox1 = document.querySelector('.recipe-box1');
const recipeBox2 = document.querySelector('.recipe-box2');
const recipeBox3 = document.querySelector('.recipe-box3');
const recipeBox4 = document.querySelector('.recipe-box4');
const recipeBox5 = document.querySelector('.recipe-box5');
const recipeBox6 = document.querySelector('.recipe-box6');
const recipeBox7 = document.querySelector('.recipe-box7');
const recipeBox8 = document.querySelector('.recipe-box8');
const recipeBox9 = document.querySelector('.recipe-box9');
const recipeBox10 = document.querySelector('.recipe-box10');
const recipeBox11 = document.querySelector('.recipe-box11');
const recipeBox12 = document.querySelector('.recipe-box12');
const recipeBox13 = document.querySelector('.recipe-box13');
const recipeBox14 = document.querySelector('.recipe-box14');
const recipeBox15 = document.querySelector('.recipe-box15');
const cardTitle = document.querySelector('.card-title');
const cardIngredients = document.querySelector('.card-ingredients');
const cardBody = document.querySelector('.card-body');
const cardGlass = document.querySelector('.card-glass');
const vowels = ['a','e','i','o','u'];
const icons = document.querySelectorAll('.icon');
const iconColumns = document.querySelectorAll('.icon-column');
const arrowBox = document.querySelector('.arrow_box');
const form = document.querySelector('form');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const restart = document.querySelector('.restart');
const firstTime = document.querySelector('.first-time');
const getStarted = document.querySelector('.get-started');
let almostDrinks = [];
let missingOneIngredient = {};
let almostIngredients = [];
let currentBox = 1;
const getNext = document.querySelector('.get-next');
const closeArrowBox = document.querySelector('.close-arrow-box');
const card2Close = document.querySelector('.card2-close');



//CHECK LOCALSTORAGE
window.onload = function(){
  if (localStorage.getItem("inventory") === null) {
  }
  else {
    availableIngredients = localStorage.inventory.split(',');
    loadCarousel();
  }
//HIDE INSTRUCTIONS IF USER HAS BEEN HERE BEFORE
  if(localStorage.getItem("FirstTime") === null) {
    firstTime.classList.remove('hidden');
  }
  else {
  }
}

//CARDS
//CLOSE CARDS WHEN CLICKING ON X
cardClose.addEventListener('click', closeCard);
card2Close.addEventListener('click', closeCard2);

function closeCard() {
  card.classList.add('hidden');
}
function closeCard2() {
  card2.classList.add('hidden');
}

//MAKE CARD LINKS SHOW recipe-box
function addOrRemove(array, value) {
  array.indexOf(value) === -1 ? array.push(value) : array.splice(array.indexOf(value),1);
  localStorage.setItem('inventory', array);
}

//function to see if the ingredients array contains all the ingredients for a drink
function addOrRemoveIngredient(event) {
  availableDrinks = [];
  addOrRemove(availableIngredients, event.currentTarget.id);
  loadCarousel();
  if (screen.width < 736) {
    if(event.currentTarget.style.backgroundColor.length < 1) {
      event.currentTarget.style.backgroundColor='#645551';
    }
    else (event.currentTarget.style.backgroundColor = '');
  }
  // console.log(availableIngredients);
}

//Make Card With Recipe Info Show On Recipe-Link click
function displayRecipe(event){
//iterate through objects to find the object with this drink title
  let nameValue = event.target.innerHTML;
  let drinkObject = drinkList.filter(function(obj){
    return obj.name === nameValue;
  })
  drinkObject = drinkObject[0];
  cardTitle.innerHTML = `<h2>${drinkObject.name}</h2>`;
  cardIngredients.innerHTML = '<h3>Ingredients</h3>  <ul>  </ul>'
  let ul = document.querySelector('.card-ingredients ul');
//Iterate through drink ingredients and add them to card as well as measures
  for (var i = 0; i < drinkObject.ingredients.length; i++) {
    let li = document.createElement('li');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    drinkObject.measures[i] !== undefined ? span1.innerHTML = `-${drinkObject.measures[i]}`: span1.innerHTML = `-`;
    span2.innerHTML = drinkObject.ingredients[i];
    li.append(span1);
    li.append(span2);
    ul.append(li);
  }

  cardBody.innerHTML = `<h3>Recipe</h3><p>${drinkObject.instructions}</p>`
//List the type of glass to use, or leave empty if the answer is 'vote'
  if(drinkObject.glass === 'vote'){
    cardGlass.innerHTML = '';
  }
  else if (startsWithVowel(drinkObject.glass)) {
    cardGlass.innerHTML = `<h3>Serve In An ${drinkObject.glass}</h3>`;
  }
  else {
    cardGlass.innerHTML = `<h3>Serve In A ${drinkObject.glass}</h3>`;
  }
  card.classList.remove('hidden');
}

//ADD EVENT LISTENER TO ICONS
icons.forEach(element => element.addEventListener('click', displayArrowBox));

const mobileIngredients = document.querySelector('.mobile-ingredients');
const card2 = document.querySelector('.card2');
const card2Title = document.querySelector('.card2 h2');


function displayArrowBox(event){
  //USE SETTIMOUT TO ENSURE ANIMATION CAN HAPPEN REPEATEDLY
  setTimeout(() => event.target.classList.remove("animated", "tada"), 1000);
  event.target.classList.add("animated", "tada");
  form.innerHTML = '';
  let ul1 = document.createElement('ul');
  let ul2 = document.createElement('ul');
  let ul3 = document.createElement('ul');
  let ul4 = document.createElement('ul');
  ingredientArr = iconReference[event.target.id];
  if (event.target.id === 'clearDrinks') {
    let styleElem =  document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = '.arrow_box:after, .arrow_box:before{left: 15%;}';
    card2Title.innerHTML = 'Clear Booze';

  }
  else if (event.target.id === 'brownDrinks') {
    let styleElem =  document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = '.arrow_box:after, .arrow_box:before{left: 29%;}';
    card2Title.innerHTML = 'Dark Booze';
  }
  else if(event.target.id === 'fruitDrinks') {
    let styleElem =  document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = '.arrow_box:after, .arrow_box:before{left: 43%;}';
    card2Title.innerHTML = 'Fruity Booze';
  }
  else if (event.target.id === 'beerWine') {
    let styleElem =  document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = '.arrow_box:after, .arrow_box:before{left: 57%;}';
    card2Title.innerHTML = 'Weak Booze';
  }
  else if (event.target.id === 'mixers') {
    let styleElem =  document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = '.arrow_box:after, .arrow_box:before{left: 71%;}';
    card2Title.innerHTML = 'Mixers';
  }
  else {
    let styleElem =  document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = '.arrow_box:after, .arrow_box:before{left: 85%;}';
    card2Title.innerHTML = 'Produce';
  }
  ingredientArr.forEach(function(element){
    let li = document.createElement('li');
    li.id = element;
    li.innerHTML = `<input type="checkbox" id="${element}"><label for="">${element}</label>`;

    if (ingredientArr.indexOf(element) < 7){
      ul1.append(li);
    }
    else if (ingredientArr.indexOf(element) < 14){
      ul2.append(li);
    }
    else if(ingredientArr.indexOf(element) < 21) {
      ul3.append(li);
    }
    else if(ingredientArr.indexOf(element) < 28) {
      ul4.append(li);
    }
    let input = li.querySelector('input');
    if (availableIngredients.indexOf(element) > -1) {
      input.checked = true;
    }
    if(screen.width < 736) {
      if (availableIngredients.indexOf(element) > -1) {
        li.style.backgroundColor='#645551';
      }
    }
  })
  // console.log(ingredientArr);
  form.append(ul1);
  form.append(ul2);
  form.append(ul3);
  form.append(ul4);

  if (screen.width > 736) {
    arrowBox.classList.remove('hidden-with-space');
  }

  //MEDIA QUERY
  if (screen.width < 736) {
    mobileIngredients.innerHTML = arrowBox.innerHTML;
    card2.classList.remove('hidden');
    let closeArrowBox2 = document.querySelector('.close-arrow-box');
    closeArrowBox2.classList.add('hidden');
    let formLIs = document.querySelectorAll('form li');
    formLIs.forEach(element => element.addEventListener('click', addOrRemoveIngredient));
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((element) => element.classList.add('hidden'))
  }
  else {
    //set eventlistener on CHECKBOXES
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(element => element.addEventListener('click', addOrRemoveIngredient));
  }
}

//CAROUSEL
function scrollRight(event) {
  let drinkCount = availableDrinks.length;
  if (currentBox === boxCount-1) {
    arrowRight.classList.add('hidden');
  }
  if (document.querySelector(`.recipe-box${currentBox+1}`).classList.contains('populated')) {
    document.querySelector(`.recipe-box${currentBox}`).classList.add('hidden');
    currentBox++;
    document.querySelector(`.recipe-box${currentBox}`).classList.remove('hidden');
  }
  if (currentBox > 1) {
    arrowLeft.classList.remove('hidden');
  }
}

function scrollLeft(event) {
  document.querySelector(`.recipe-box${currentBox}`).classList.add('hidden');
  document.querySelector(`.recipe-box${currentBox-1}`).classList.remove('hidden');
  currentBox--;
  if (currentBox === 1) {
    arrowLeft.classList.add('hidden');
    if (recipeBox2.classList.contains('populated')) {
      arrowRight.classList.remove('hidden');
    }
  }
  //MAKE SURE LEFT ARROW REAPPEARS AFTER SCROLLING RIGHT TO LAST BOX
  if (document.querySelector(`.recipe-box${currentBox+1}`).classList.contains('populated')) {
    arrowRight.classList.remove('hidden');
  }
}


//Vowel Checker
function startsWithVowel(string){
  const vowels = ['a','e','i','o','u'];
  return vowels.indexOf(string[0].toLowerCase()) > -1 ? true : false;
}
let boxCount = 0;
//LOAD CAROUSEL
function loadCarousel() {
  clearCarousel();
  almostDrinks = [];
  almostIngredients = [];
  missingOneIngredient = {};
  maxIngredient1 = '';
  maxValue1 = 0;
  maxIngredient2 = '';
  maxValue2 = 0;
  maxIngredient3 = '';
  maxValue3 = 0;
  for (var i = 0; i < drinkList.length; i++) {
    let x = 10;
    let drinkIngredients = drinkList[i].ingredients;
    for (var j = 0; j < drinkIngredients.length; j++) {
      if(availableIngredients.indexOf(drinkIngredients[j]) < 0 ){
        x--;
      }
    }
    if (x === 10 && (availableDrinks.indexOf(drinkList[i].name) < 0)) {
      let recipeLink = document.createElement('div');
      recipeLink.classList.add('recipe-link');
      recipeLink.innerHTML=`${drinkList[i].name}`;
      availableDrinks.push(drinkList[i].name);
      //Add eventlistener on recipeLink

      recipeLink.addEventListener('click', displayRecipe);
      let recipeCount = document.querySelectorAll('.recipe-link').length;
      if (recipeCount < 8) {
        recipeBox1.classList.add('populated');
        recipeBox1.append(recipeLink);
        boxCount = 1;
      }
      else if (recipeCount < 16) {
        recipeBox2.classList.add('populated');
        recipeBox2.append(recipeLink);
        boxCount = 2;
        //CAROUSEL ARROW
          arrowRight.classList.remove('hidden');
          arrowRight.addEventListener('click', scrollRight);
          arrowLeft.addEventListener('click', scrollLeft);
      }
      else if (recipeCount < 24) {
        recipeBox3.classList.add('populated');
        recipeBox3.append(recipeLink);
        boxCount = 3;
      }
      else if (recipeCount < 32) {
        recipeBox4.classList.add('populated');
        recipeBox4.append(recipeLink);
        boxCount = 4;
      }
      else if (recipeCount < 40) {
        recipeBox5.classList.add('populated');
        recipeBox5.append(recipeLink);
        boxCount = 5;
      }
      else if (recipeCount < 48) {
        recipeBox6.classList.add('populated');
        recipeBox6.append(recipeLink);
        boxCount = 6;
      }
      else if (recipeCount < 56) {
        recipeBox7.classList.add('populated');
        recipeBox7.append(recipeLink);
        boxCount = 7;
      }
      else if (recipeCount < 64) {
        recipeBox8.classList.add('populated');
        recipeBox8.append(recipeLink);
        boxCount = 8;
      }
      else if (recipeCount < 72) {
        recipeBox9.classList.add('populated');
        recipeBox9.append(recipeLink);
        boxCount = 9;
      }
      else if (recipeCount < 80) {
        recipeBox10.classList.add('populated');
        recipeBox10.append(recipeLink);
        boxCount = 10;
      }
      else if (recipeCount < 88) {
        recipeBox11.classList.add('populated');
        recipeBox11.append(recipeLink);
        boxCount = 11;
      }
      else if (recipeCount < 96) {
        recipeBox12.classList.add('populated');
        recipeBox12.append(recipeLink);
        boxCount = 12;
      }
      else if (recipeCount < 104) {
        recipeBox13.classList.add('populated');
        recipeBox13.append(recipeLink);
        boxCount = 13;
      }
      else if (recipeCount < 112) {
        recipeBox14.classList.add('populated');
        recipeBox14.append(recipeLink);
        boxCount = 14;
      }
      else if (recipeCount < 120) {
        recipeBox15.classList.add('populated');
        recipeBox15.append(recipeLink);
        boxCount = 15;
      }
    }
    else if (x === 9) {
      almostDrinks.push(drinkList[i].name);
      for (var k = 0; k < drinkIngredients.length; k++) {
        if (availableIngredients.indexOf(drinkIngredients[k]) < 0) {
          almostIngredients.push(drinkIngredients[k]);
        }
      }
    }
  }
  calculateIngredientRecommendation();
}

function calculateIngredientRecommendation() {
  allIngredients.forEach((element) =>{
    var count = 0;
    for (var i = 0; i < almostIngredients.length; i++) {
      if (almostIngredients[i] === element) {
        count ++;
      }
      missingOneIngredient[element] = count;
    }

  })
}
let maxIngredient1 = '';
let maxValue1 = 0;
let maxIngredient2 = '';
let maxValue2 = 0;
let maxIngredient3 = '';
let maxValue3 = 0;

function setRecommendedIngredients (obj) {
  for (var prop in obj) {
    if (obj[prop] > maxValue1) {
      maxValue1 = obj[prop];
      maxIngredient1 = prop;
    }
  }
  for (var prop2 in obj) {
    if(obj[prop2] > maxValue2 && prop2 !== maxIngredient1) {
      maxValue2 = obj[prop2];
      maxIngredient2 = prop2;
    }
  }
  for (var prop3 in obj) {
    if(obj[prop3] > maxValue3 && prop3 !== maxIngredient1 && prop3 !== maxIngredient2) {
      maxValue3 = obj[prop3];
      maxIngredient3 = prop3;
    }
  }
}

// CLEAR CAROUSEL

function clearCarousel() {
  currentBox = 1;
  recipeBox1.innerHTML="";
  recipeBox1.classList.remove('hidden');
  recipeBox2.innerHTML="";
  recipeBox2.classList.remove('populated');
  recipeBox2.classList.add('hidden');
  recipeBox3.innerHTML="";
  recipeBox3.classList.remove('populated');
  recipeBox3.classList.add('hidden');
  recipeBox4.innerHTML="";
  recipeBox4.classList.remove('populated');
  recipeBox4.classList.add('hidden');
  recipeBox5.innerHTML="";
  recipeBox5.classList.remove('populated');
  recipeBox5.classList.add('hidden');
  recipeBox6.innerHTML="";
  recipeBox6.classList.remove('populated');
  recipeBox6.classList.add('hidden');
  recipeBox7.innerHTML="";
  recipeBox7.classList.remove('populated');
  recipeBox7.classList.add('hidden');
  recipeBox8.innerHTML="";
  recipeBox8.classList.remove('populated');
  recipeBox8.classList.add('hidden');
  recipeBox9.innerHTML="";
  recipeBox9.classList.remove('populated');
  recipeBox9.classList.add('hidden');
  recipeBox10.innerHTML="";
  recipeBox10.classList.remove('populated');
  recipeBox10.classList.add('hidden');
  recipeBox11.innerHTML="";
  recipeBox11.classList.remove('populated');
  recipeBox11.classList.add('hidden');
  recipeBox12.innerHTML="";
  recipeBox12.classList.remove('populated');
  recipeBox12.classList.add('hidden');
  recipeBox13.innerHTML="";
  recipeBox13.classList.remove('populated');
  recipeBox13.classList.add('hidden');
  recipeBox14.innerHTML="";
  recipeBox14.classList.remove('populated');
  recipeBox14.classList.add('hidden');
  recipeBox15.innerHTML="";
  recipeBox15.classList.remove('populated');
  recipeBox15.classList.add('hidden');
  arrowRight.classList.add('hidden');
  arrowLeft.classList.add('hidden');
}

//Restart Button
restart.addEventListener('click', resetBar);

function resetBar() {
  var areYouSure = confirm("Are you sure you want to empty your bar?");
  if (areYouSure) {
    localStorage.clear();
    location.reload();
  }
}

//First Time
getStarted.addEventListener('click', () => {
  firstTime.classList.add('hidden');
  localStorage.setItem('FirstTime', 'nope');
});


//GET NEXT ingredients
getNext.addEventListener('click', showNextIngredients);

function showNextIngredients() {
  setRecommendedIngredients(missingOneIngredient);
  cardGlass.innerHTML = '';
  cardBody.innerHTML = '';
  cardTitle.innerHTML = `<h2>What To Buy Next?</h2>`;
  cardIngredients.innerHTML = `<h3>If you had ${maxIngredient1} you could make ${maxValue1} more drinks!</h3><h3>If you had ${maxIngredient2} you could make ${maxValue2} more drinks!</h3><h3>If you had ${maxIngredient3} you could make ${maxValue3} more drinks!</h3>`;
  card.classList.remove('hidden');
}

//close arrowBox
closeArrowBox.addEventListener('click', hideArrowBox);

function hideArrowBox(){
  arrowBox.classList.add('hidden-with-space');
}

var longIngredients = drinkList.filter(function(element){
  return element.ingredients.length > 9;
});
console.log(longIngredients);
