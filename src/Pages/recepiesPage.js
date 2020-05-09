import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"

export class RecepiesPage {
    constructor() {
        this._recipeService= new RecepiesService();
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
    }
    drawRecepiesPage(content)
    {
        content.innerHTML="";
        const recipesBox= createSomeElement(content,"div","recipesBox");
        this.drawRecipesBox(recipesBox);
    }

    drawRecipesBox(recipesBox)
    {
        this.drawRecipesBoxContainer(recipesBox);
    }
    drawRecipesBoxContainer(recipesBox)
    {
        let recipesBoxContainer= createSomeElement(recipesBox,"div", "recipesBoxContainer");
        this._recipeService.getRecipes()
        .then(recipes => recipes.forEach(recipe=>this.drawRecipe(recipesBoxContainer,recipe)))
        .catch(err => this.drawError(err));
    }
    drawRecipe(recipesBoxContainer, recipe)
    {
        console.log(recipe);
        let concreteRecipe= createSomeElement(recipesBoxContainer,"div", "concreteRecipe");
        let recipeName= createSomeElement(concreteRecipe,"div", "recipeName");
        recipeName.innerHTML=recipe.naziv;
        let recipeType= createSomeElement(concreteRecipe,"div","recipeType");
        recipeType.innerHTML=recipe.tip;
        let recipeDuration= createSomeElement(concreteRecipe,"div","recipeDuration");
        recipeDuration= recipe.ukupno_trajanje;
        let recipeStart= createSomeElement(concreteRecipe,"button","recipeStart");
        recipeStart.innerHTML= "Pregled";
        recipeStart.onclick=(ev)=>{
            this._router.navigateToMakingPage(recipe);
        }
    }
    drawError(err)
    {
        this._contentDiv.innerHTML = err;
    }

}
