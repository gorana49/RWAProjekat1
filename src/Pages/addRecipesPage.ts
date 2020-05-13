import {createSomeElement, createSomeDiv, createSomeInput, createSomeButton} from "../../constants/createSomeElement";
import { Router } from "../../classes/router";
import {RecepiesService} from "../../services/serviceRecepies"
import {UsersService} from "../../services/serviceUser"
import {Recept} from "../../models/recept";
import {Faza} from "../../models/faza";
import {Sastojak} from "../../models/sastojak";
import '../../assets/css/styleLoginPage.css'
export class AddRecipesPage {
    _recipeService:RecepiesService;
    _userService:UsersService;
    _router:Router;
    _recipesArray: Array<Recept>;
    _phaseArray:Array<Faza>;
    _ingridientArray:Array<Sastojak>;
    _ingridientArrayNew:Array<Sastojak>;
    _phaseArrayNew:Array<Faza>;
    constructor() {
        this._recipeService= new RecepiesService();
        this._userService = new UsersService();
        //this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._recipesArray = [];
        this._phaseArray = [];
        this._phaseArrayNew = [];
        this._ingridientArrayNew= [];
        this._ingridientArray = [];
    }

    drawAddRecipesPage(content:HTMLDivElement, username:string, pass:string)
    {
        content.innerHTML ="";
        let addRecipesDiv:HTMLDivElement = createSomeDiv(content,"addRecipesDiv");
        this._recipeService.getRecipes()
        .then(nizRecepata => {
          nizRecepata.forEach((recept:Recept) => {
              this._recipesArray.push(recept);   
          });
        });
        this.drawInputs(addRecipesDiv, username, pass); 
        


    }

    drawInputs(addRecipesDiv:HTMLDivElement, username:string, pass:string)
    {
        const nameRecipeDiv:HTMLDivElement = createSomeDiv(addRecipesDiv,"nameRecipeDiv");
        const nameRecipeDivLabel:HTMLDivElement = createSomeDiv(nameRecipeDiv,"nameRecipeDivLabel");
        nameRecipeDivLabel.innerHTML = "Naziv recepta:";
        const nameRecipeInput:HTMLInputElement = createSomeInput(nameRecipeDiv,"nameRecipeInput");

        const typeRecipeDiv:HTMLDivElement =createSomeDiv(addRecipesDiv,"typeRecipesDiv");
        const typeRecipeDivLabel:HTMLDivElement = createSomeDiv(typeRecipeDiv, "typeRecipeDivLabel");
        typeRecipeDivLabel.innerHTML ="Tip (slatko/slano):";
        const typeRecipeInput:HTMLInputElement = createSomeInput(typeRecipeDiv, "typeRecipeInput");

        const durationRecipeDiv:HTMLDivElement =createSomeDiv(addRecipesDiv,"durationRecipesDiv");
        const durationRecipeDivLabel :HTMLDivElement= createSomeDiv(durationRecipeDiv, "durationRecipeDivLabel");
        durationRecipeDivLabel.innerHTML ="Ukupno trajanje:";
        const durationRecipeInput:HTMLInputElement = createSomeInput(durationRecipeDiv, "durationRecipeInput");

        const addIngridientDiv:HTMLDivElement = createSomeDiv(addRecipesDiv, "addIngridientDiv");
        const addIngridientDivNaslov:HTMLDivElement = createSomeDiv(addIngridientDiv,"addIngridientDivNaslov");
        const addIngridientDivNaslovLabel:HTMLDivElement = createSomeDiv(addIngridientDivNaslov,"addIngridientDivNaslovLabel");
        addIngridientDivNaslovLabel.innerHTML = "Dodajte sastojke:";
        const addIngridientButton:HTMLButtonElement = createSomeButton(addIngridientDivNaslov, "addIngridientButton");
        addIngridientButton.innerHTML ="dodaj sastojak";
        const addIngridientDivContent:HTMLDivElement = createSomeDiv(addIngridientDiv,"addIngridientDivContent");
        addIngridientButton.onclick = (ev:Event) =>
        {
            this.drawIngridient(addIngridientDivContent);
        }
        const addPhaseDiv:HTMLDivElement = createSomeDiv(addRecipesDiv,"addPhaseDiv");
        const addPhaseDivNaslov:HTMLDivElement = createSomeDiv(addPhaseDiv,"addPhaseDivNaslov");
        const addPhaseDivNaslovLabel:HTMLDivElement = createSomeDiv(addPhaseDivNaslov,"addPhaseDivNaslovLabel");
        addPhaseDivNaslovLabel.innerHTML = "Dodajte faze:";
        const addPhaseButton:HTMLButtonElement = createSomeButton(addPhaseDivNaslov, "addPhaseButton");
        addPhaseButton.innerHTML ="dodaj fazu";
        const addPhaseDivContent:HTMLDivElement= createSomeDiv(addPhaseDiv,"addPhaseDivContent");
        addPhaseButton.onclick = (ev:Event) =>
        {
            this.drawPhase(addPhaseDivContent);

        }

        const backButton:HTMLButtonElement = createSomeButton(addRecipesDiv, "backButton");
        backButton.innerHTML ="nazad";
        backButton.onclick =(ev:Event) =>
        {
            this._router.navigateToRecepiesPage(username,pass);
        }
        const acceptButton:HTMLButtonElement = createSomeButton(addRecipesDiv,"acceptButton");
        acceptButton.innerHTML = "potvrdi";

       
        acceptButton.onclick = (ev:Event) =>
        {
            let nizSas:number[]=[];
            let nizFa:number[] =[];
            this._ingridientArrayNew.forEach(el =>
                {
                   this._recipeService.updateSastojak(el);
                })
            
            this._phaseArrayNew.forEach(el =>
                {
                    this._recipeService.updateFaza(el);
                })
            this._phaseArrayNew.forEach((el:Faza, ind:number)=>{
                nizFa[ind] = el.id;
            })
            this._ingridientArrayNew.forEach((el:Sastojak, ind:number)=>
            {
                nizSas[ind] = el.id;
            });

            let recept = new Recept(this._recipesArray.length+1,nameRecipeInput.value,typeRecipeInput.value,durationRecipeInput.value,nizFa,nizSas);
            this._recipeService.updateRecipe(recept);
            this._router.navigateToRecepiesPage(username, pass);
    
        }
    }

    drawIngridient(addIngridientDivContent:HTMLDivElement)
    {
        const addIngridientDivBox:HTMLDivElement = createSomeDiv(addIngridientDivContent,"addIngridientDivBox");

        const addIngridientDivBoxNaziv:HTMLDivElement = createSomeDiv(addIngridientDivBox, "addIngridientDivBoxNaziv");
        const addIngridientDivBoxNazivLabela:HTMLDivElement = createSomeDiv(addIngridientDivBoxNaziv, "addIngridientDivBoxNazivLabela");
        addIngridientDivBoxNazivLabela.innerHTML = "Naziv sastojka:";
        const addIngridientDivBoxNazivInput:HTMLInputElement = createSomeInput(addIngridientDivBoxNaziv, "addIngridientDivBoxNazivInput");

        const addIngridientDivBoxKolicina:HTMLDivElement = createSomeDiv(addIngridientDivBox, "addIngridientDivBoxKolicina");
        const addIngridientDivBoxKolicinaLabela:HTMLDivElement = createSomeDiv(addIngridientDivBoxKolicina, "addIngridientDivBoxKolicinaLabela");
        addIngridientDivBoxKolicinaLabela.innerHTML = "kolicina:";
        const addIngridientDivBoxKolicinaInput:HTMLInputElement = createSomeInput(addIngridientDivBoxKolicina, "addIngridientDivBoxKolicinaInput");

        const addIngridientDivBoxPotvrdi:HTMLDivElement = createSomeDiv(addIngridientDivBox, "addIngridientDivBoxPotvrdi");
        const addIngridientDivBoxPotvrdiDugme:HTMLButtonElement = createSomeButton(addIngridientDivBoxPotvrdi, "addIngridientDivBoxPotvrdiDugme");
        addIngridientDivBoxPotvrdiDugme.innerHTML = "potvrdi";
        let ind:number;
        addIngridientDivBoxPotvrdiDugme.onclick = (ev) =>
        {
            let num:number = this._recipesArray.length;
                let sastojci:Array<number> = this._recipesArray[num-1].nizSastojaka;
                let index:number = sastojci.length;
                
            if(this._ingridientArrayNew[0] == undefined)
            {
                ind =sastojci[index -1];
                let pomocniSastojak = new Sastojak(ind,addIngridientDivBoxNazivInput.value,addIngridientDivBoxKolicinaInput.value);
                this._ingridientArrayNew.push(pomocniSastojak);
                ind++;
            }
            else{
                let pomocniSastojak = new Sastojak(ind,addIngridientDivBoxNazivInput.value,addIngridientDivBoxKolicinaInput.value);
                this._ingridientArrayNew.push(pomocniSastojak);
                ind++;
            }  
           addIngridientDivBox.innerHTML ="";
        }
    }
    drawPhase(addPhaseDiv:HTMLDivElement)
    {
        const addPhaseDivBox:HTMLDivElement = createSomeDiv(addPhaseDiv,"addPhaseDivBox");

        const addPhaseDivBoxNaziv:HTMLDivElement = createSomeDiv(addPhaseDivBox, "addPhaseBoxNaziv");
        const addPhaseDivBoxNazivLabela:HTMLDivElement = createSomeDiv(addPhaseDivBoxNaziv, "addPhaseDivBoxNazivLabela");
        addPhaseDivBoxNazivLabela.innerHTML = "Naziv faze:";
        const addPhaseDivBoxNazivInput:HTMLInputElement = createSomeInput(addPhaseDivBoxNaziv, "addPhaseDivBoxNazivInput");

        const addPhaseDivBoxTrajanje:HTMLDivElement = createSomeDiv(addPhaseDivBox, "addPhaseDivBoxTrajanje");
        const addPhaseDivBoxTrajanjeLabela:HTMLDivElement = createSomeDiv(addPhaseDivBoxTrajanje, "addPhaseDivBoxTrajanjeLabela");
        addPhaseDivBoxTrajanjeLabela.innerHTML = "Trajanje:";
        const addPhaseDivBoxTrajanjeInput:HTMLInputElement = createSomeInput(addPhaseDivBoxTrajanje, "addPhaseDivBoxTrajanjeInput");

        const addPhaseDivBoxOpis:HTMLDivElement = createSomeDiv(addPhaseDivBox, "addPhaseDivBoxOpis");
        const addPhaseDivBoxOpisLabela:HTMLDivElement = createSomeDiv(addPhaseDivBoxOpis, "addPhaseDivBoxOpisLabela");
        addPhaseDivBoxOpisLabela.innerHTML = "Opis:";
        const addPhaseDivBoxOpisInput:HTMLInputElement = createSomeInput(addPhaseDivBoxOpis, "addPhaseDivBoxOpisInput");

        const addPhaseDivBoxParalelno:HTMLDivElement = createSomeDiv(addPhaseDivBox, "addPhaseDivBoxParalelno");
        const addPhaseDivBoxParalelnoLabela:HTMLDivElement = createSomeDiv(addPhaseDivBoxParalelno, "addPhaseDivBoxParalelnoLabela");
        addPhaseDivBoxParalelnoLabela.innerHTML = "Da li ova faza moze da se odvija paralelno sa narednom fazom?:";
        const addPhaseDivBoxParalelnoInput:HTMLInputElement = createSomeInput(addPhaseDivBoxParalelno, "addPhaseDivBoxParalelnoInput");

        const addPhaseDivBoxPotvrdi:HTMLDivElement = createSomeDiv(addPhaseDivBox, "addPhaseDivBoxPotvrdi");
        const addPhaseDivBoxPotvrdiDugme:HTMLButtonElement = createSomeButton(addPhaseDivBoxPotvrdi, "addPhaseDivBoxPotvrdiDugme");
        addPhaseDivBoxPotvrdiDugme.innerHTML = "potvrdi";
        let ind:number;
        addPhaseDivBoxPotvrdiDugme.onclick= (ev) =>
        {
            let num:number = this._recipesArray.length;
            let faze:Array<number> = this._recipesArray[num-1].nizFaza;
            let index:number = faze.length;
            
        if(this._ingridientArrayNew[0] == undefined)
        {
            ind =faze[index -1];
            let pomocnaFaza = new Faza(ind, addPhaseDivBoxNazivInput.value, (addPhaseDivBoxTrajanjeInput.value as unknown)as number,addPhaseDivBoxOpisInput.value,addPhaseDivBoxParalelnoInput.value);
            this._phaseArrayNew.push(pomocnaFaza);
            ind++;
        }
        else{
            let pomocnaFaza = new Faza(ind, addPhaseDivBoxNazivInput.value, (addPhaseDivBoxTrajanjeInput.value as unknown)as number,addPhaseDivBoxOpisInput.value,addPhaseDivBoxParalelnoInput.value);
            this._phaseArrayNew.push(pomocnaFaza);
            ind++;
        }  
       addPhaseDivBox.innerHTML ="";
        }

    }

    drawError(err:string)
    {
        console.log(err);
        //this._contentDiv.innerHTML = err;
    }
}