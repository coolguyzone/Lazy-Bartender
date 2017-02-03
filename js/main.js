const drinkList = [
  {
    name: 'A Day At The Beach',
    searchName: 'a_day_at_the_beach',
    ingredients: ['coconut rum','amaretto', 'orange juice', 'grenadine']
  },
  {
    name: 'A Furlong Too Late',
    searchName: 'a_furlong_too_late',
    ingredients: ['light rum', 'ginger beer', 'lemon']
  },
  {
    name: "A Gilligan's Island",
    searchName: 'a_gilligan',
    ingredients: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice']
  },
  {
    name: 'A Night In Old Mandalay',
    searchName: 'a_night_in_old_mandalay',
    ingredients: ['light rum', 'anejo rum', 'orange juice', 'lemon juice', 'ginger ale', 'lemon']
  },
  {
    name: 'A Piece Of Ass',
    searchName: 'a_piece_of_ass',
    ingredients: ['amaretto', 'southern comfort', 'sour mix']
  },
  {
    name: 'A Splash Of Nash',
    searchName: 'a_splash_of_nash',
    ingredients: ['cranberry juice', 'club soda', 'midori', 'creme de banane']
  },
  {
    name: 'A True Amaretto Sour',
    searchName: 'a_true_amaretto_sour',
    ingredients: ['Amaretto', 'lemon juice', 'cherry']
  },
  {
    name: 'After Dinner Mint',
    searchName: 'after_dinner_mint',
    ingredients: ['creme de menthe', 'southern comfort', 'vodka', 'hot chocolate']
  },
  {
    name: 'Abbey Cocktail',
    searchName: 'abbey_cocktail',
    ingredients: ['gin', 'orange bitters', 'orange juice', 'cherry']
  },
  {
    name: 'ABC',
    searchName: 'abc',
    ingredients: ['amaretto', 'irish cream', 'cognac']
  },
  {
    name: 'Absolut Limousine',
    searchName: 'absolut_limousine',
    ingredients: ['citrus vodka', 'lime juice', 'tonic water']
  },
  {
    name: 'Aboslut Stress',
    searchName: 'absolut_stress',
    ingredients: ['vodka', 'malibu rum', 'peach schnapps', 'orange juice', 'pineapple juice', 'cranberry juice']
  },
  {
    name: 'Absolut Summertime',
    searchName: 'absolut_summertime',
    ingredients: ['citrus vodka', 'sour mix', 'lemon-lime soda', 'club soda', 'lemon']
  },
  {
    name: 'Absolut Cranberry Smash',
    searchName: 'absolut_cranberry_smash',
    ingredients: ['vodka', 'cranberry juice', 'ginger ale']
  },
  {
    name: 'Absolutly Screwed Up',
    searchName: 'absolutly_screwed_up',
    ingredients: ['citrus vodka', 'orange juice', 'triple sec', 'ginger ale']
  },
  {
    name: 'Acapulco',
    searchName: 'acapulco',
    ingredients: ['light rum', 'triple sec', 'lime juice', 'sugar', 'egg white', 'fresh mint']
  },
  {
    name: 'Acid',
    searchName: 'acid',
    ingredients: ['bourbon', '151 rum']
  },
  {
    name: 'Adam',
    searchName: 'adam',
    ingredients: ['dark rum', 'lemon juice', 'grenadine']
  },
  {
    name: 'Adam Sunrise',
    searchName: 'adam_sunrise',
    ingredients: ['vodka', 'lemonade', 'sugar']
  },
  {
    name: 'Adonis',
    searchName: 'adonis',
    ingredients: ['sweet vermouth', 'sherry', 'orange bitters']
  },
  {
    name: 'Affair',
    searchName: 'affair',
    ingredients: ['strawberry schnapps', 'orange juice', 'cranberry juice', 'club soda']
  },
  {
    name: 'Affinity',
    searchName: 'affinity',
    ingredients: ['scotch', 'sweet vermouth', 'orange bitters']
  },
  {
    name: 'After Dinner',
    searchName: 'after_dinner_cocktail',
    ingredients: ['apricot brandy', 'triple sec', 'lime', 'lime juice']
  },
  {
    name: 'Afternoon',
    searchName: 'afternoon',
    ingredients: ['coffee liqueur', 'irish cream', 'frangelico', 'coffee', 'cream']
  },
  {
    name: 'Alabama Slammer',
    searchName: 'alabama_slammer',
    ingredients: ['southern comfort', 'amaretto', 'sloe gin', 'lemon juice']
  },
  {
    name: 'Alaska',
    searchName: 'alaska_cocktail',
    ingredients: ['orange bitters', 'gin', 'chartreuse', 'lemon']
  },
  {
    name: 'Alexander',
    searchName: 'alexander',
    ingredients: ['gin', 'white creme de cacao', 'cream', 'nutmeg']
  },
  {
    name: 'Alfie',
    searchName: 'alfie_cocktail',
    ingredients: ['citrus vodka', 'triple sec', 'pineapple juice']
  },
  {
    name: 'Algonquin',
    searchName: 'algonquin',
    ingredients: ['blended whiskey', 'dry vermouth', 'pineapple juice']
  },
  {
    name: 'Allegheny',
    searchName: 'allegheny',
    ingredients: ['dry vermouth', 'bourbon', 'blackberry brandy', 'lemon juice', 'lemon']
  },
  {
    name: 'Almeria',
    searchName: 'almeria',
    ingredients: ['dark rum', 'coffee liqueur', 'egg white']
  },
  {
    name: 'Almond Joy',
    searchName: 'almond_joy',
    ingredients: ['amaretto', 'white creme de cacao', 'cream']
  },
  {
    name: 'Amaretto And Cream',
    searchName: 'amaretto_and_cream',
    ingredients: ['amaretto', 'cream']
  },
  {
    name: 'Amaretto Stone Sour',
    searchName: 'amaretto_stone_sour',
    ingredients: ['amaretto', 'sour mix', 'orange juice']
  },
  {
    name: 'Amaretto Sweet And Sour',
    searchName: 'amaretto_sweet',
    ingredients: ['amaretto', 'sour mix', 'midori', 'pineapple juice']
  },
  {
    name: 'Americano',
    searchName: 'americano',
    ingredients: ['campari', 'sweet vermouth', 'lemon', 'orange']
  },
  {
    name: 'Angel Face',
    searchName: 'angel_face',
    ingredients: ['apricot brandy', 'apple brandy', 'gin']
  },
  {
    name: 'Apple Cider Punch',
    searchName: 'apple_cider_punch',
    ingredients: ['apple cider', 'brown sugar', 'lemonade', 'orange juice', 'cloves', 'allspice', 'nutmeg', 'cinnamon']
  },
  {
    name: 'Apple Grande',
    searchName: 'apple_grande',
    ingredients: ['light tequila', 'apple cider']
  },
  {
    name: 'Apple Pie With Crust',
    searchName: 'apple_pie_with_a_crust',
    ingredients: ['apple juice', 'malibu rum', 'cinnamon']
  },
  {
    name: 'Apricot Punch',
    searchName: 'apricot_punch',
    ingredients: ['apricot brandy', 'champagne', 'vodka', 'lemon-lime soda', 'orange juice']
  },
  {
    name: 'Arise My Love',
    searchName: 'arise_my_love',
    ingredients: ['champagne', 'green creme de menthe']
  },
  {
    name: 'Avalanche',
    searchName: 'avalanche',
    ingredients: ['canadian whiskey', 'coffee liqueur', 'cream']
  },
  {
    name: 'Aviation',
    searchName: 'aviation',
    ingredients: ['gin', 'lemon juice', 'maraschino liqueur']
  },
  {
    name: 'Aztec Punch',
    searchName: 'aztec_punch',
    ingredients: ['lemonade', 'vodka', 'dark rum', 'ginger ale']
  },
  {
    name: 'B-52',
    searchName: 'b-52',
    ingredients: ['coffee liqueur', 'amaretto', 'irish cream']
  },
  {
    name: 'b-53',
    searchName: 'b-53',
    ingredients: ['coffee liqueur', 'sambuca', 'grand marnier']
  },
  {
    name: 'Baby Eskimo',
    searchName: 'baby_eskimo',
    ingredients: ['coffee liqueur', 'milk', 'vanilla ice-cream']
  },
  {
    name: 'Baby Guinness',
    searchName: 'baby-guinness',
    ingredients: ['coffee liqueur', 'irish cream']
  },
  {
    name: "Bailey's Dream Shake",
    searchName: 'dream_shake',
    ingredients: ['coffee liqueuer', 'cream', 'vanilla ice-cream']
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },
  {
    name: '',
    searchName: '',
    ingredients: []
  },


]
let availableIngredients = [];
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const card = document.querySelector('.card');
const cardClose = document.querySelector('.card-close');
const recipeLink = document.querySelector('.recipe-link');
const recipeBox = document.querySelector('.recipe-box');

//CARDS
//CLOSE CARD WHEN CLICKING ON X
cardClose.addEventListener('click', closeCard);

function closeCard() {
  card.classList.add('hidden');
}

//MAKE CARD LINKS SHOW recipe-box
// recipeLink.addEventListener('click', showCard);
//
// function showCard() {
//   card.classList.remove('hidden');
// }

function addOrRemove(array, value) {
  var index = array.indexOf(value);
  if(index === -1) {
    array.push(value);
  } else{
    array.splice(index,1);
  }
}

checkboxes.forEach(function(element){
  element.addEventListener('click', addIngredient);
})

function addIngredient(event) {

  // availableIngredients.push(event.target.id);
  addOrRemove(availableIngredients, event.target.id);

  drinkList.forEach(function(element){
    if(element.ingredients.indexOf(event.target.id) > -1){
      let recipeLink = document.createElement('div');
      recipeLink.classList.add('recipe-link');
      recipeLink.innerHTML=`<span>${element.name}</span>`;
      recipeBox.append(recipeLink);
    }
  })
  console.log(availableIngredients);
}
