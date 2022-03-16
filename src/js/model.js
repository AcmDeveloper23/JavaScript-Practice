import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
    }
};

export const loadRecipe = async function (id) {

    try {
        const data = await getJSON(`${API_URL}/${id}`)
        const { recipe } = data.data;
        state.recipe = recipe;
    } catch (error) {
        console.log("error from Model", error);
        throw error;
    }
}

export const loadSearchResults = async (query) => {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log("search", data);
        state.search.results = data.data.recipes;
    } catch (error) {
        console.log("error from Model", error);
        throw error;
    }
}
