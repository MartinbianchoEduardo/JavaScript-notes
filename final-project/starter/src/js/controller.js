import recipeView from './view/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
import * as model from './model.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //load recipe
    await model.loadRecipe(id);

    //render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
[('hashchange', 'load')].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);