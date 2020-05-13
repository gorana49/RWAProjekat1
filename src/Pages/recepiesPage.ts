/// <reference path='./index.d.ts'/>
import * as slika0 from "../../assets/resources/slika0.jpg";
import * as slika1 from "../../assets/resources/slika1.jpg";
import * as slika2 from "../../assets/resources/slika2.jpg";
import * as slika3 from "../../assets/resources/slika3.jpg";
import * as slika4 from "../../assets/resources/slika4.jpg"
import { Router } from "../../classes/router";
import {createSomeDiv, createSomeImage,createSomeInput, createSomeButton} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"
import { interval, zip, fromEvent} from 'rxjs';
import '../../assets/css/styleRecipesPage.css'
import { map, flatMap} from 'rxjs/operators';
import {Recept} from "../../models/recept";
import {createNavigationBarRecipesPage} from "../Navigation/navigationBar"
export class RecepiesPage {
    _recipeService:RecepiesService;
    _router: Router;
    _recipeArray: Array<Recept>;
    constructor() {
        this._recipeService= new RecepiesService();
        this._router = new Router();
        this._recipeArray = [];
    }
    drawRecepiesPage(content:HTMLDivElement, username:string, password:string)
    { 
        createNavigationBarRecipesPage(username, password);
        content.innerHTML="";
        const recipesBox:HTMLDivElement= createSomeDiv(content,"recipesBox");
        this.drawRecipesBox(recipesBox, username, password);
        this._recipeService.getRecipes()
        .then(nizRecepata => {
          nizRecepata.forEach((recept:Recept) => {
              this._recipeArray.push(recept);
          });
        });

    }

    drawRecipesBox(recipesBox:HTMLDivElement, username:string, password:string)
    {
        this.drawInputBox(recipesBox);
        this.drawSlider(recipesBox);
        let recipesBoxContainer:HTMLDivElement = createSomeDiv(recipesBox, "recipesBoxContainer");

        
        const createRecipeDiv:HTMLDivElement = createSomeDiv(recipesBox, "createRecipeDiv");
        const createRecipeButton:HTMLButtonElement = createSomeButton(createRecipeDiv,"createRecipeButton");
        createRecipeButton.innerHTML = "Dodaj recept";
        createRecipeButton.onclick = (ev) =>
        {
            this._router.navigateToAddRecipesPage(username, password);
        }
    }

    drawAllRecipes(loadAllRecipes:HTMLDivElement)
    {
        let loadAllRecipesButton:HTMLButtonElement = createSomeButton(loadAllRecipes, "loadAllRecipesButton");
        loadAllRecipesButton.innerHTML ="prikazi sve recepte";
        loadAllRecipesButton.onclick =(ev:Event)=> {
            this._recipeArray.forEach((element:Recept) => 
                {
                    this.drawRecipeAll(loadAllRecipes,element);
                })
        }
    }

    drawInputBox(recipesBox:HTMLDivElement)
    {
        const inputBox:HTMLDivElement = createSomeDiv(recipesBox, "inputBox");
        const inputBoxText:HTMLDivElement =createSomeDiv(inputBox, "inputBoxText");
        inputBoxText.innerHTML ="Unesite naziv recepta, ukoliko ga ima u bazi, bice prikazan.";
        const inputBoxName:HTMLDivElement = createSomeDiv(inputBox,"inputBox");
        const inputName:HTMLInputElement = createSomeInput(inputBoxName,"inputName");
        
        this.searchRecipes();
    }
    drawSlider(recipesBox:HTMLDivElement)
    {
        let recipesBoxSlider:HTMLDivElement = createSomeDiv(recipesBox, "recipesBoxSlider");
       
        let recipesBoxSliderImage:HTMLImageElement = createSomeImage(recipesBoxSlider,"recipesBoxSliderImage");
        recipesBoxSliderImage.src = slika0.default;
        const timeIntervalChange = interval(5000);
        const subscriptionChange = timeIntervalChange.subscribe((val)=> { 
            switch(val % 5){
            case 0: {
                recipesBoxSliderImage.src =slika0.default;
                return;
            }
            case 1: {
                recipesBoxSliderImage.src = slika1.default;
                return;
            }
            case 2: {
                recipesBoxSliderImage.src = slika2.default;
                return;
            }
            case 3: {
                recipesBoxSliderImage.src = slika3.default;
                return;
            }
            case 4: {recipesBoxSliderImage.src = slika4.default;
                return;}
        }}) ;

        let loadAllRecipes:HTMLDivElement = createSomeDiv(recipesBoxSlider,"loadAllRecipes");
        this.drawAllRecipes(loadAllRecipes);

    }
    
    drawRecipe(recipe:Recept)
    {
        let recipesBoxContainer= document.getElementsByClassName("recipesBoxContainer");
        recipesBoxContainer[0].innerHTML ="";
        let concreteRecipe:HTMLDivElement= createSomeDiv(recipesBoxContainer[0] as HTMLDivElement,"concreteRecipe");
        let recipeName:HTMLDivElement= createSomeDiv(concreteRecipe,"recipeName");
        recipeName.innerHTML=recipe.naziv;
        let recipeType:HTMLDivElement= createSomeDiv(concreteRecipe,"recipeType");
        recipeType.innerHTML=recipe.tip;
        let recipeDuration:HTMLDivElement= createSomeDiv(concreteRecipe,"recipeDuration");
        recipeDuration.innerHTML= recipe.ukupno_trajanje;
        let recipeStart:HTMLButtonElement= createSomeButton(concreteRecipe,"recipeStart");
        recipeStart.innerHTML= "pregled";
        let recipeDescription:HTMLButtonElement = createSomeButton(concreteRecipe,"recipeDescription");
        recipeDescription.innerHTML= "opis";
        recipeDescription.onclick = (ev) => {
            this.drawModal(recipe, recipesBoxContainer[0]as HTMLDivElement);
        }
        recipeStart.onclick=(ev:Event)=>{
            this._router.navigateToMakingPage(recipe);
        }

    }
    
    drawRecipeAll(loadBox:HTMLDivElement, recipe:Recept)
    {
        let concreteRecipe:HTMLDivElement = createSomeDiv(loadBox,"concreteRecipe");
        let recipeName:HTMLDivElement= createSomeDiv(concreteRecipe,"recipeName");
        recipeName.innerHTML=recipe.naziv;
        let recipeType:HTMLDivElement= createSomeDiv(concreteRecipe,"recipeType");
        recipeType.innerHTML=recipe.tip;
        let recipeDuration:HTMLDivElement= createSomeDiv(concreteRecipe,"recipeDuration");
        recipeDuration.innerHTML= recipe.ukupno_trajanje;
        let recipeStart:HTMLButtonElement= createSomeButton(concreteRecipe,"recipeStart");
        recipeStart.innerHTML= "pregled";
        let recipeDescription:HTMLButtonElement = createSomeButton(concreteRecipe,"recipeDescription");
        recipeDescription.innerHTML= "opis";
        recipeDescription.onclick = (ev:Event) => {
            this.drawModal(recipe, loadBox);
        }
        recipeStart.onclick=(ev:Event)=>{
            this._router.navigateToMakingPage(recipe);
        }
    }
    drawModal(recipe:Recept, recipesBoxContainer:HTMLDivElement)
    {
        recipesBoxContainer.innerHTML ="";
        let modal:HTMLDivElement = createSomeDiv(recipesBoxContainer, "modal");
        let sastojci:HTMLDivElement = createSomeDiv(modal, "sastojci");
        let faze:HTMLDivElement= createSomeDiv(modal, "faze");

    let phases$ = this._recipeService.getMultiplePhasesAsync(recipe)
    .pipe(flatMap(faza => faza));
    let ingridients$ = this._recipeService.getMultipleIngridientAsync(recipe)
    .pipe(flatMap(sastojak => sastojak));
    zip(phases$,ingridients$).pipe(
        map(([phase,ingridient]) => ({phase,ingridient})))
        .subscribe(object => {
            faze.innerHTML += " " +object.phase[0].naziv;
            sastojci.innerHTML+=" " + object.ingridient[0].naziv;});
        let returnButton:HTMLButtonElement = createSomeButton(modal, "returnButton");
        returnButton.innerHTML="nazad";
    returnButton.onclick = (ev) => {
        this.drawRecipe(recipe);
    }
    };

    drawError(err:string)
    {
        alert(err);
        //this._contentDiv.innerHTML = err;
    }
    searchRecipes()
    {

        let recipesBoxContainer:HTMLDivElement = (document.getElementsByClassName("recipesBoxContainer") as unknown) as HTMLDivElement;
        recipesBoxContainer.innerHTML = "";
        let inputName = document.getElementsByClassName("inputName");
        let streamInputFrom$=fromEvent(inputName,"input")
        .pipe(
          map((input:any) => input['target'].value));

        streamInputFrom$.subscribe((val) => 
        {
            const result = this._recipeArray.filter(element => element.naziv == val);
            if(result != null)
            {
                result.forEach((el:Recept) =>{this.drawRecipe(el);});
            }
            else {
                //this._contentDiv.innerHTML = "Nema recepta!";
            }

        })
    }
}
