import { fromEvent} from 'rxjs';
import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"

export class MakingPage {
    constructor() {
        this._recipeService= new RecepiesService();
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
    }
    /////////////////ovde mora da se doda id, na osnovu toga gde se klikne
    drawMakingPage(content){
        content.innerHTML="";

        const mainContentContainer= createSomeElement(content, "div", "mainContentContainer");
        const recipeBox= createSomeElement(mainContentContainer,"div","recipeBox");
        this._recipeService.getRecipeById(1);
        
        const recipeBoxNavBar= createSomeElement(recipeBox, "div", "recipeBoxNavBar");
        const recipeBoxPhase= createSomeElement(recipeBox, "div", "recipeBoxPhase");
        this.drawRecipeBoxNavBar(recipeBoxNavBar);
        this.drawRecipeBoxPhase(recipeBoxPhase);
    }

    drawRecipeBoxNavBar(recipeBoxNavBar)
    {
        
    }

    drawRecipeBoxPhase(recipeBoxPhase)
    {

    }
}