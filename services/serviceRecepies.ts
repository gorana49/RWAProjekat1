const baseURL= " http://localhost:3000/recept";

import { from } from "rxjs";
import { Faza } from "../models/faza";
import { Recept } from "../models/recept";
import { Sastojak } from "../models/sastojak";
export class RecepiesService
{
    constructor(){
    }
    async getRecipes() {
      return fetch(baseURL)
      .then(res => res.json())
      .catch(err => console.log(err))
    }

    async getRecipeById(recipeId:number){
        return from(fetch(`http://localhost:3000/recept?receptId=${recipeId}`) 
        .then(response=>response.json()))
    }

    async fetchMultiplePhasesAsync(nizFaza:Array<number>) {
      return Promise.all(
          nizFaza.map(id => fetch(`http://localhost:3000/faza?id_faze=${id}`)
          .then(res => res.json())))
          .catch(err => console.log(err));
    }

    async fetchMultipleIngridientAsync(nizSastojaka: Array<number>) {
        return Promise.all(
          nizSastojaka.map(id => fetch(`http://localhost:3000/sastojci?id_sastojka=${id}`)
          .then(res => res.json())))
          .catch(err => console.log(err));
    }

    getMultiplePhasesAsync(recipe: Recept){
      return from(recipe.nizFaza.map(id => fetch(`http://localhost:3000/faza?id_faze=${id}`)
      .then(response=>response.json())));}

    getMultipleIngridientAsync(recipe:Recept){
      return from(recipe.nizSastojaka.map(id => fetch(`http://localhost:3000/sastojci?id_sastojka=${id}`)
      .then(response=>response.json())));}  

    updateRecipe(recipe:Recept){
      const newRecipe: Object ={
          method:"post",
          body: JSON.stringify(recipe),
          headers:{'Content-Type':'application/json'},
      };
      return from(fetch(`http://localhost:3000/recept`,newRecipe).then((response)=>response.json()))
      }

      updateFaza(phase:Faza){
        const newPhase : Object={
            method:"post",
            body: JSON.stringify(phase),
            headers:{'Content-Type':'application/json'},
        };
        return from(fetch(`http://localhost:3000/faza`,newPhase).then((response)=>response.json()))
        }
      updateSastojak(ingridient:Sastojak){
        const newIngridient : Object={
            method:"post",
            body: JSON.stringify(ingridient),
            headers:{'Content-Type':'application/json'},
          };
        return from(fetch(`http://localhost:3000/sastojci`,newIngridient).then((response)=>response.json()))
        }
    
}