import { fromEvent } from 'rxjs';
import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"
import {Faza} from "../../models/faza";
import {Sastojak} from "../../models/sastojak";
import { interval, timer } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import '../../assets/css/styleMakingPage.css'


export class MakingPage {
    constructor() {
        this._recipeService= new RecepiesService();
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._phaseArray = [];
        this._ingridientArray= [];
    }

    drawMakingPage(content, recipe){
        content.innerHTML="";
        const mainContentContainer= createSomeElement(content, "div", "mainContentContainer1");

        let sastojakNaslov = createSomeElement(mainContentContainer, "div", "sastojakNaslov");
        sastojakNaslov.innerHTML =recipe.naziv;
        let ingridientBox=createSomeElement(mainContentContainer,"div","ingridientBox");

        let fazeNaslov = createSomeElement(mainContentContainer, "div", "fazeNaslov");
        fazeNaslov.innerHTML= "Saveti kako da spremite brže vaše jelo, tj. šta možete uraditi paralelno!";

        let recipeBox= createSomeElement(mainContentContainer,"div","recipeBox");
        let recipeBoxNavBar= createSomeElement(recipeBox, "div", "recipeBoxNavBar");
        let recipeBoxPhase= createSomeElement(recipeBox, "div", "recipeBoxPhase");
        const recipeBoxPhaseButton= createSomeElement(recipeBoxPhase, "button", "recipeBoxPhaseButton");
        recipeBoxPhaseButton.innerHTML= "Start";
        
        this._recipeService.fetchMultiplePhasesAsync(recipe.nizFaza)
        .then(nizFaza => {
          nizFaza.forEach(faza => {
              console.log(faza[0]);
              let  pomocnaFaza= new Faza(faza[0].id_faze,faza[0].naziv,faza[0].trajanje,faza[0].opis, faza[0].paralelno);
              this._phaseArray.push(pomocnaFaza);
              this.drawRecipeBoxNavBar(recipeBoxNavBar, faza);
            
          });
        })
        .catch(err => this.drawError(err));

        this._recipeService.fetchMultipleIngridientAsync(recipe.nizSastojaka)
        .then(nizSastojaka => {
          nizSastojaka.forEach(sastojak => {
              let  pomocniSastojak= new Sastojak(sastojak[0].id_sastojka,sastojak[0].naziv,sastojak[0].kolicina);
              this._ingridientArray.push(pomocniSastojak);
              this.drawIngridient(ingridientBox, sastojak);

          });
        })
        .catch(err => this.drawError(err));
        const klikStart= fromEvent(recipeBoxPhaseButton,'click');
        const kliknutoStart= klikStart.subscribe(() => {
            this.Animation(recipeBoxPhase);
        });

        let nazadDugme = createSomeElement(mainContentContainer,"button", "nazadDugme");
        nazadDugme.innerHTML ="nazad";
        nazadDugme.onclick =(ev) =>
        {
            this._router.navigateToRecepiesPage();
        }

    }

    Animation(recipeBoxPhase)
    {
        recipeBoxPhase.innerHTML="";
        const vremeIspisa = interval(1000);
        const timer$ = timer(1000* this._phaseArray.length + 2000);
        
        const prekidAnimacije = vremeIspisa.pipe(takeUntil(timer$));

        prekidAnimacije.subscribe(val => {
            if(this._phaseArray[val] == undefined)
            {
                recipeBoxPhase.innerHTML = "Ovo je predlog kako da ubrzate spremanje ovog jela, tj. koje faze možete odraditi paralelno!"
            }
            else{
                if(this._phaseArray[val].paralelno == 1)
                {
                    recipeBoxPhase.innerHTML="";
                    let index= val;
                    while(this._phaseArray[index].paralelno == 1)
                    {
                        recipeBoxPhase.innerHTML += this._phaseArray[index].getOpis();
                        index++;
                    }   
                }
                else {recipeBoxPhase.innerHTML= this._phaseArray[val].getOpis();
            }
        }});
    }
    
    drawIngridient(ingridientBox,element)
    {
        let ingridient= createSomeElement(ingridientBox,"div","ingridient");
        let potpunNaziv= element[0].naziv + ' ' + element[0].kolicina;
        ingridient.innerHTML= potpunNaziv;
    }
    drawRecipeBoxNavBar(recipeBoxNavBar, faza)
    {
        let phaseDiv= createSomeElement(recipeBoxNavBar,"div","phaseDiv");
        phaseDiv.innerHTML= faza[0].naziv;
    }

    drawRecipeBoxPhase(recipeBoxPhase, element)
    {
        recipeBoxPhase.innerHTML= element.opis + " " + element.trajanje;
    }

    drawError(err)
    {
        this._contentDiv.innerHTML = err;
    }
}