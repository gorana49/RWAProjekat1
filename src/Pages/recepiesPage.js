import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"
import { interval, zip, fromEvent} from 'rxjs';
import '../../assets/css/styleRecipesPage.css'
import { map, flatMap} from 'rxjs/operators';
import * as urlSlika0 from "../../assets/resources/slika0.jpg";
import * as urlSlika1 from "../../assets/resources/slika1.jpg";
import * as urlSlika2 from "../../assets/resources/slika2.jpg";
import * as urlSlika3 from "../../assets/resources/slika3.jpg";
import * as urlSlika4 from "../../assets/resources/slika4.jpg";
import {Recept} from "../../models/recept";
export class RecepiesPage {
    constructor() {
        this._recipeService= new RecepiesService();
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._recipeArray =[];
    }
    drawRecepiesPage(content)
    { 
        content.innerHTML="";
        const recipesBox= createSomeElement(content,"div","recipesBox");
        this.drawRecipesBox(recipesBox);
        this._recipeService.getRecipes()
        .then(nizRecepata => {
          nizRecepata.forEach(recept => {
              let  pomocniRecept = new Recept(recept.id_recepta,recept.naziv,recept.tip, recept.ukupno_trajanje, recept.nizFaza, recept.nizSastojaka);
              this._recipeArray.push(pomocniRecept);
          });
        });

    }

    drawRecipesBox(recipesBox)
    {
        this.drawInputBox(recipesBox);
        this.drawSlider(recipesBox);
        let recipesBoxContainer = createSomeElement(recipesBox, "div","recipesBoxContainer");
    }

    drawInputBox(recipesBox)
    {
        const inputBox = createSomeElement(recipesBox, "div", "inputBox");
        const inputBoxText =createSomeElement(inputBox, "div", "inputBoxText");
        inputBoxText.innerHTML ="Unesite naziv recepta, ukoliko ga ima u bazi, bice prikazan.";
        const inputBoxName = createSomeElement(inputBox,"div", "inputBox");
        const inputName = createSomeElement(inputBoxName,"input", "inputName");
        
        this.searchRecipes();
    }
    drawSlider(recipesBox)
    {
        let recipesBoxSlider = createSomeElement(recipesBox, "div","recipesBoxSlider");
        let recipesBoxSliderImage = createSomeElement(recipesBoxSlider,"img", "recipesBoxSliderImage");
        recipesBoxSliderImage.src = urlSlika0.default;
        const timeIntervalChange = interval(5000);
        const subscriptionChange = timeIntervalChange.subscribe((val)=> { 
            switch(val % 5){
            case 0: {
                recipesBoxSliderImage.src = urlSlika0.default;
                return;
            }
            case 1: {
                recipesBoxSliderImage.src = urlSlika1.default;
                return;
            }
            case 2: {
                recipesBoxSliderImage.src = urlSlika2.default;
                return;
            }
            case 3: {
                recipesBoxSliderImage.src = urlSlika3.default;
                return;
            }
            case 4: {recipesBoxSliderImage.src = urlSlika4.default;
                return;}
        }}) ;

    }
    
    drawRecipe(recipe)
    {
        let recipesBoxContainer = document.getElementsByClassName("recipesBoxContainer");
        recipesBoxContainer[0].innerHTML ="";
        let concreteRecipe = createSomeElement(recipesBoxContainer[0],"div", "concreteRecipe");
        let recipeName= createSomeElement(concreteRecipe,"div", "recipeName");
        recipeName.innerHTML=recipe.naziv;
        let recipeType= createSomeElement(concreteRecipe,"div","recipeType");
        recipeType.innerHTML=recipe.tip;
        let recipeDuration= createSomeElement(concreteRecipe,"div","recipeDuration");
        recipeDuration= recipe.ukupno_trajanje;
        let recipeStart= createSomeElement(concreteRecipe,"button","recipeStart");
        recipeStart.innerHTML= "pregled";
        let recipeDescription = createSomeElement(concreteRecipe,"button","recipeDescription");
        recipeDescription.innerHTML= "opis";
        recipeDescription.onclick = (ev) => {
            this.drawModal(recipe, recipesBoxContainer[0]);
        }
        recipeStart.onclick=(ev)=>{
            this._router.navigateToMakingPage(recipe);
        }

    }
    drawModal(recipe, recipesBoxContainer)
    {
        recipesBoxContainer.innerHTML ="";
        let modal = createSomeElement(recipesBoxContainer, "div" , "modal");
        let sastojci = createSomeElement(modal, "div","sastojci");
        let faze = createSomeElement(modal, "div", "faze");

    let phases$ = this._recipeService.getMultiplePhasesAsync(recipe)
    .pipe(flatMap(faza => faza));
    let ingridients$ = this._recipeService.getMultipleIngridientAsync(recipe)
    .pipe(flatMap(sastojak => sastojak));
    zip(phases$,ingridients$).pipe(
        map(([phase,ingridient]) => ({phase,ingridient})))
        .subscribe(object => {
            faze.innerHTML += " " +object.phase[0].naziv;
            sastojci.innerHTML+=" " + object.ingridient[0].naziv;});
        let returnButton = createSomeElement(modal, "button", "returnButton");
        returnButton.innerHTML="nazad";
    returnButton.onclick = (ev) => {
        this.drawRecipe(recipe);
    }
    };

    drawError(err)
    {
        this._contentDiv.innerHTML = err;
    }
    searchRecipes()
    {
        let recipesBoxContainer = document.getElementsByClassName("recipesBoxContainer");
        recipesBoxContainer.innerHTML = "";
        let inputName = document.getElementsByClassName("inputName");
        let streamInputFrom$=fromEvent(inputName,"input")
        .pipe(
          map(input=>input.target.value));

        streamInputFrom$.subscribe((val) => 
        {
            const result = this._recipeArray.filter(element => element.naziv == val);
            if(result != null)
            {
                result.forEach(el =>{this.drawRecipe(el);});
            }
            else {
                this._contentDiv.innerHTML = "Nema recepta!";
            }

        })
    }
}
