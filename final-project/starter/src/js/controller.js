import resultsView from './view/resultsView.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import * as model from './model.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    resultsView.renderSpinner();

    if (!id) return;
    recipeView.renderSpinner();

    //load recipe
    await model.loadRecipe(id);

    //render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    throw err;
  }
};

const controlSearchResults = async function () {
  try {
    await model.loadSearchResults(searchView.getQuery());
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
