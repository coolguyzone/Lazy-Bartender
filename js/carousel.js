function loadCarousel() {
  recipeBox1.innerHTML="";
  recipeBox2.innerHTML="";
  recipeBox3.innerHTML="";
  recipeBox4.innerHTML="";
  recipeBox5.innerHTML="";
  recipeBox6.innerHTML="";
  recipeBox7.innerHTML="";
  arrowRight.classList.add('hidden');
  arrowLeft.classList.add('hidden');
  for (var i = 0; i < drinkList.length; i++) {
    let x = true;
    let drinkIngredients = drinkList[i].ingredients;
    for (var j = 0; j < drinkIngredients.length; j++) {
      if(availableIngredients.indexOf(drinkIngredients[j]) < 0 ){
        x = false;
      }
    }
    if (x === true && (availableDrinks.indexOf(drinkList[i].name) < 0)) {
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
      }
      else if (recipeCount < 16) {
        recipeBox2.classList.add('populated');
        recipeBox2.append(recipeLink);
        //CAROUSEL ARROW
          arrowRight.classList.remove('hidden');
          arrowRight.addEventListener('click', scrollRight);
          arrowLeft.addEventListener('click', scrollLeft);

      }
      else if (recipeCount < 24) {
        recipeBox3.classList.add('populated');
        recipeBox3.append(recipeLink);
      }
      else if (recipeCount < 32) {
        recipeBox4.classList.add('populated');
        recipeBox4.append(recipeLink);
      }
      else if (recipeCount < 40) {
        recipeBox5.classList.add('populated');
        recipeBox5.append(recipeLink);
      }
      else if (recipeCount < 48) {
        recipeBox6.classList.add('populated');
        recipeBox6.append(recipeLink);
      }
      else if (recipeCount < 56) {
        recipeBox7.classList.add('populated');
        recipeBox7.append(recipeLink);
      }
    }
  }
}
