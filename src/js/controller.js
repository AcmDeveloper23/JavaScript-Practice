import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRecipes = async () => {
  try {
    // Get ID from the URL
    const id = window.location.hash.slice(1)/*  || "5ed6604591c37cdc054bcc13" */;
    console.log("ID", id);

    if (!id) return;

    // 0. Load Spinner
    recipeView.renderSpinner();

    // 1. Loading Receipe
    await model.loadRecipe(id);

    const { recipe } = model.state;

    // 2. Rendering Receipe
    recipeView.render(recipe);

  } catch (err) {
    console.log("Error fro controller", err);
    recipeView.renderError("No recipes found for your query. Please try again!");
  }
}

const controlSearchResults = async () => {
  try {

    // 1. Get Search Query
    const query = searchView.getQuery();

    if (!query) return;

    // Load Spinner
    resultsView.renderSpinner();

    // 2. Load Search Results
    await model.loadSearchResults(query);

    // 3. Render Results
    resultsView.render(model.state.search.results)
  } catch (error) {
    console.log("Error fro controller", error);
    recipeView.renderError("No recipes found for your query. Please try again!");
  }
}

controlSearchResults();

const init = () => {
  recipeView.adHandlerRender(controlRecipes);
  searchView.adHandlerRender(controlSearchResults);
}

init();

//['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipes));

// Same as Above
/* window.addEventListener("hashchange", showRecipe);
window.addEventListener("load", showRecipe); */