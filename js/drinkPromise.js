
function getAllDrinks() {
// 19082
  for (var i = 11000; i < 11003; i++) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`)
    .then(function(res){
      return res.json();
    })
    .then(function(res){
      console.log(res);
      drinkList.push(res.drinks[0]);
      let p = document.createElement('p');
      let ingredients = [];
      let ingredientMeasure = [];
      for (var i = 1; i < 15; i++) {
        if (res.drinks[0][`strIngredient${i}`].length > 0) { // res.drinks[`strIngredient${i}`]
        ingredients.push(" '" + res.drinks[0][`strIngredient${i}`] + "'");
      }
    }
      for (var j = 1; j < 15; j++) {
        if(res.drinks[0][`strMeasure${j}`].length > 2) {
          ingredientMeasure.push(" '" + res.drinks[0][`strMeasure${j}`] + "'");
        }
      }

      console.log(ingredients)
      p.innerHTML = `{<br>
        &nbsp; &nbsp; name: "${res.drinks[0].strDrink}",<br>
        &nbsp; &nbsp; ingredients: ` + `[` + ingredients + `],` +
        `<br> &nbsp; &nbsp; measures: ` + `[` + ingredientMeasure + `],` +
        `<br> &nbsp; &nbsp; instructions: "${res.drinks[0].strInstructions}",` +
        `<br> &nbsp; &nbsp; glass: '${res.drinks[0].strGlass}'`

    +`<br>},`;
      document.querySelector('body').append(p);
    })
  }
  let p = document.createElement('p');
  console.log(drinkList);
  p.innerHTML = drinkList;
  document.querySelector('body').append(p);
}

let drinkList = [];

getAllDrinks();
