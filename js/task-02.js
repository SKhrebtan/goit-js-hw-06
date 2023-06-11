const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
   const liItem = document.createElement('li');
 
  liItem.classList.add('item');
  liItem.textContent = ingredient;

  return liItem;
})

ingredientsList.append(...elements);