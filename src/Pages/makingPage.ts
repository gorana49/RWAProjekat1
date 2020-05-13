import { fromEvent } from 'rxjs';
import { Router } from "../../classes/router";
import {createSomeDiv, createSomeButton, createSomeImage} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"
import {Faza} from "../../models/faza";
import {Sastojak} from "../../models/sastojak";
import { interval, timer } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import '../../assets/css/styleMakingPage.css'
import { Recept } from '../../models/recept';


export class MakingPage {
    _recipeService:RecepiesService;
    _router:Router;
    _phaseArray:Array<Faza>;
    _ingridientArray:Array<Sastojak>
    constructor() {
        this._recipeService= new RecepiesService();
        this._router = new Router();
        this._phaseArray = [];
        this._ingridientArray= [];
    }

    drawMakingPage(content:HTMLDivElement, recipe:Recept){
        content.innerHTML="";
        const mainContentContainer:HTMLDivElement= createSomeDiv(content, "mainContentContainer1");

        let sastojakNaslov:HTMLDivElement = createSomeDiv(mainContentContainer, "sastojakNaslov");
        sastojakNaslov.innerHTML =recipe.naziv;
        let ingridientBox:HTMLDivElement=createSomeDiv(mainContentContainer,"ingridientBox");

        let fazeNaslov:HTMLDivElement = createSomeDiv(mainContentContainer, "fazeNaslov");
        fazeNaslov.innerHTML= "Saveti kako da spremite brže vaše jelo, tj. šta možete uraditi paralelno!";

        let recipeBox:HTMLDivElement= createSomeDiv(mainContentContainer,"recipeBox");
        let recipeBoxNavBar:HTMLDivElement= createSomeDiv(recipeBox, "recipeBoxNavBar");
        let recipeBoxPhase:HTMLDivElement= createSomeDiv(recipeBox, "recipeBoxPhase");
        const recipeBoxPhaseButton:HTMLButtonElement= createSomeButton(recipeBoxPhase, "recipeBoxPhaseButton");
        recipeBoxPhaseButton.innerHTML= "Start";
        
        this._recipeService.fetchMultiplePhasesAsync(recipe.nizFaza)
        .then((nizFaza:any) => {
          nizFaza.forEach((faza:any,ind:number) => {
              console.log(faza[ind]);
              let  pomocnaFaza= new Faza(faza[ind].id,faza[ind].naziv,faza[ind].trajanje,faza[ind].opis, faza[ind].paralelno);
              this._phaseArray.push(pomocnaFaza);
              this.drawRecipeBoxNavBar(recipeBoxNavBar, faza[ind]);
          });
        })
        .catch(err => this.drawError(err));

        this._recipeService.fetchMultipleIngridientAsync(recipe.nizSastojaka)
        .then((nizSastojaka:any) => {
          nizSastojaka.forEach((sastojak:any, ind:number) => {
              let  pomocniSastojak= new Sastojak(sastojak[ind].id,sastojak[ind].naziv,sastojak[ind].kolicina);
              this._ingridientArray.push(pomocniSastojak);
              this.drawIngridient(ingridientBox, sastojak[ind]);
          });
        })
        .catch(err => this.drawError(err));
        const klikStart= fromEvent(recipeBoxPhaseButton,'click');
        const kliknutoStart= klikStart.subscribe(() => {
            this.Animation(recipeBoxPhase);
        });

        let nazadDugme:HTMLButtonElement = createSomeButton(mainContentContainer,"nazadDugme");
        nazadDugme.innerHTML ="nazad";
        nazadDugme.onclick =(ev) =>
        {
            this._router.navigateToMainPage();
        }

    }

    Animation(recipeBoxPhase:HTMLDivElement)
    {
        recipeBoxPhase.innerHTML="";
        const vremeIspisa = interval(1000);
        const timer$ = timer(1000* this._phaseArray.length + 2000);
        
        const prekidAnimacije = vremeIspisa.pipe(takeUntil(timer$));

        prekidAnimacije.subscribe((val:number) => {
            if(this._phaseArray[val] == undefined)
            {
                recipeBoxPhase.innerHTML = "Ovo je predlog kako da ubrzate spremanje ovog jela, tj. koje faze možete odraditi paralelno!"
            }
            else{
                if(this._phaseArray[val].paralelno == "1")
                {
                    recipeBoxPhase.innerHTML="";
                    let index= val;
                    while(this._phaseArray[index].paralelno == "1")
                    {
                        recipeBoxPhase.innerHTML += this._phaseArray[index].getOpis();
                        index++;
                    }   
                }
                else {recipeBoxPhase.innerHTML= this._phaseArray[val].getOpis();
            }
        }});
    }
    
    drawIngridient(ingridientBox:HTMLDivElement,element:Sastojak)
    {
        let ingridient:HTMLDivElement = createSomeDiv(ingridientBox,"ingridient");
        let potpunNaziv= element.naziv + ' ' + element.kolicina;
        ingridient.innerHTML= potpunNaziv;
    }
    drawRecipeBoxNavBar(recipeBoxNavBar:HTMLDivElement, faza:Faza)
    {
        let phaseDiv:HTMLDivElement= createSomeDiv(recipeBoxNavBar,"phaseDiv");
        phaseDiv.innerHTML= faza.naziv;
    }

    drawRecipeBoxPhase(recipeBoxPhase:HTMLDivElement, element:Faza)
    {
        recipeBoxPhase.innerHTML= element.opis + " " + element.trajanje;
    }

    drawError(err:string)
    {
        console.log(err);
       // this._contentDiv.innerHTML = err;
    }
}