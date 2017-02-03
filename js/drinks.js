  let drinkList = [];

function getAllDrinks() {

  for (var i = 11000; i < 11002; i++) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`)
    .then(function(res){
      return res.json();
    })
    .then(function(res){
      drinkList.push(res.drinks[0]);
      let p = document.createElement('p');
      let ingredients = [];
      for (var i = 1; i < 15; i++) {
        if (res.drinks[0][`strIngredient${i}`].length > 0) { // res.drinks[`strIngredient${i}`]
        ingredients.push("'" + res.drinks[0][`strIngredient${i}`] + "'");
      }
    }
      console.log(ingredients)
      p.innerHTML = `{name: ${res.drinks[0].strDrink},<br>
      ingredients: ` + ingredients +
    `}`;
      document.querySelector('body').append(p);
    })
  }
  // let p = document.createElement('p');
  // console.log(drinkList);
  // p.innerHTML = drinkList;
  // document.querySelector('body').append(p);
}

getAllDrinks();
