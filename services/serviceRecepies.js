import { fromFetch, switchMap } from "rxjs";
const baseURL= " http://localhost:3000/recept";
const baseURL1= "http://localhost:3000/faze/"
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
        .then(response=>response.json()));
  
    }

    async getRecepiesPhase(phasesIds)
    {
    return Promise.all(
      phasesIds.map(id => fetch(baseURL1 + id)
      .then(res => res.json())))
      .catch(err => console.log(err));
    }

}