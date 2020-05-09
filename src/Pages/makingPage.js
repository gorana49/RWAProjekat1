import { BehaviorSubject,fromEvent } from 'rxjs';
import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import {RecepiesService} from "../../services/serviceRecepies"
import {Faza} from "../../models/faza";
import {Sastojak} from "../../models/sastojak";
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
        const mainContentContainer= createSomeElement(content, "div", "mainContentContainer");
        let ingridientBox=createSomeElement(mainContentContainer,"div","ingridientBox");
        let recipeBox= createSomeElement(mainContentContainer,"div","recipeBox");
        let recipeBoxNavBar= createSomeElement(recipeBox, "div", "recipeBoxNavBar");
        let recipeBoxPhase= createSomeElement(recipeBox, "div", "recipeBoxPhase");
        const recipeBoxPhaseButton= createSomeElement(recipeBoxPhase, "button", "recipeBoxPhaseButton");
        recipeBoxPhaseButton.innerHTML= "Start";
        this._recipeService.fetchMultiplePhasesAsync(recipe.nizFaza)
        .then(nizFaza => {
          nizFaza.forEach(faza => {
              let  pomocnaFaza= new Faza(faza[0].id_faze,faza[0].naziv,faza[0].trajanje,faza[0].opis, faza[0].paralelno);
              this._phaseArray.push(pomocnaFaza);
              this.drawRecipeBoxNavBar(recipeBoxNavBar, faza[0]);
            
          });
        })
        .catch(err => this.drawError(err));

        this._recipeService.fetchMultipleIngridientAsync(recipe.nizSastojaka)
        .then(nizSastojaka => {
          nizSastojaka.forEach(sastojak => {
              let  pomocniSastojak= new Sastojak(sastojak[0].id_sastojka,sastojak[0].naziv,sastojak[0].kolicina);
              this._ingridientArray.push(pomocniSastojak);
              this.drawIngridient(ingridientBox, sastojak[0]);

          });
        })
        .catch(err => this.drawError(err));

        const klikStart= fromEvent(recipeBoxPhaseButton,'click');
        const kliknutoStart= klikStart.subscribe(() => {
            this.Animation(recipeBoxPhase);
        });
    }
    Animation(recipeBoxPhase)
    {
        
        //let recipeBoxPhase = this._contentDiv.getElementsByClassName("recipeBoxPhase");
        //console.log(this._phaseArray);
        recipeBoxPhase.innerHTML="";
        //recipeBoxPhase.innerHTML = this._phaseArray[0].opis;
        const duzina= this._phaseArray.length ;
       
        
        let acc=0;
        const trajanje = [];
        let i = 0;
        for(i; i <  2 * duzina -1; i=i+2)
        {
           if(i == 0)
           {
               trajanje[i] = 1000;
           }
           else
           {
               trajanje[i] = trajanje[i-1];
           }
          acc += this._phaseArray[i/2].getTrajanje() * 1000 + duzina * 1000;
          trajanje[i + 1] = acc;
        }

        const nizIzvora = [];
        const nizTajmera= [];
        const nizKoriscenja=[];
        const subject = new BehaviorSubject(0);
        let index = duzina;
        for(i = duzina-1;i>0;i--)
        {
            nizIzvora[i] = interval(trajanje[i*2]);
            nizTajmera[i] = timer(trajanje[2*i+1]);
            nizKoriscenja[i] = nizIzvora[i].pipe(takeUntil(nizTajmera[i]));
            subject.subscribe( (val) => {console.log(val);  recipeBoxPhase.innerHTML= this._phaseArray[val].getOpis()});
            
            subject.next(index--);
           // nizSub[i] = nizKoriscenja[i].subscribe((val)=>{console.log(val);  recipeBoxPhase.innerHTML= this._phaseArray[val].getOpis()});
        }
    }
    
    drawIngridient(ingridientBox,element)
    {
        let ingridient= createSomeElement(ingridientBox,"div","ingridient");
        let potpunNaziv= element.naziv + ' ' + element.kolicina;
        ingridient.innerHTML= potpunNaziv;
    }
    drawRecipeBoxNavBar(recipeBoxNavBar, element)
    {
        let phaseDiv= createSomeElement(recipeBoxNavBar,"div","phaseDiv");
        phaseDiv.innerHTML= element.naziv;
    }

    drawRecipeBoxPhase(recipeBoxPhase, element)
    {
        recipeBoxPhase.innerHTML= element.opis;
    }

    drawError(err)
    {
        this._contentDiv.innerHTML = err;
    }
}