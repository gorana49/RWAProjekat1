import { fromFetch, switchMap } from "rxjs";
const baseURL= " http://localhost:3000/recept";
const baseURL1= "http://localhost:3000/faza/"
const baseURL2= "http://localhost:3000/sastojci/"
export class RecepiesService
{
    constructor(){
    }
    async getRecipes() {
      return fetch(baseURL)
      .then(res => res.json())
      .catch(err => console.log(err))
    }

    async getRecipeById(recipeId){
        return from(fetch(`http://localhost:3000/recept?receptId=${recipeId}`) 
        .then(response=>response.json()))
        .catch(err => console.log(err));
    }

    async fetchMultiplePhasesAsync(nizFaza) {
      return Promise.all(
          nizFaza.map(id => fetch(`http://localhost:3000/faza?id_faze=${id}`)
          .then(res => res.json())))
          .catch(err => console.log(err));
    }

    async fetchMultipleIngridientAsync(nizSastojaka) {
        return Promise.all(
          nizSastojaka.map(id => fetch(`http://localhost:3000/sastojci?id_sastojka=${id}`)
          .then(res => res.json())))
          .catch(err => console.log(err));
    }


    async getNameTypeRecipe(typeNameRecipe){
      var recipeName = typeNameRecipe[0]; 
      var recipeType=typeNameRecipe[1];
      
      return from(fetch(`http://localhost:3000/recept?naziv=${recipeName}&tip=${recipeType}`)
     .then(response=>response.json()));
 }
}