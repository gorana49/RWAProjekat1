import { fromEvent} from 'rxjs';
import { Router } from "../../classes/router";
import {createSomeDiv, createSomeButton} from "../../constants/createSomeElement";

export class MainPage {
    
    _router:Router;

    constructor() {
        this._router = new Router();
    }
    drawMainPage(content:HTMLDivElement){
        content.innerHTML="";
        const mainContentContainer= createSomeDiv(content, "mainContentContainer");
        let buttonSlideDiv:HTMLDivElement=createSomeDiv(mainContentContainer, "buttonSlideDiv");
        let buttonSlide1:HTMLButtonElement = createSomeButton(buttonSlideDiv, "buttonSlide");
        let buttonSlide2:HTMLButtonElement = createSomeButton(buttonSlideDiv, "buttonSlide");
        const klik1= fromEvent(buttonSlide1,'click');
        const klikni1= klik1.subscribe(() => {
            let body1= document.body;
            body1.className="body";
        });
        const klik2= fromEvent(buttonSlide2,'click');
        const klikni2= klik2.subscribe(() => {
            let body2= document.body;
            body2.className="body2 body";
            this._router.navigateToFunnyGame();
        });
        const boxRegistrationLogin:HTMLDivElement= createSomeDiv(mainContentContainer,"boxRegistrationLogin");
        const boxText:HTMLDivElement= createSomeDiv(boxRegistrationLogin,"boxText");
        boxText.innerHTML="Dobrodošli na naš sajt!";
        const boxRegistration:HTMLDivElement= createSomeDiv(boxRegistrationLogin,"boxRegistration");
        const buttonRegistraion:HTMLButtonElement= createSomeButton(boxRegistration,"buttonRegistration");
        buttonRegistraion.innerHTML="Registracija";
        buttonRegistraion.onclick=(ev)=>{
            this._router.navigateToRegistrationPage();
        }
        const boxLogin:HTMLDivElement= createSomeDiv(boxRegistrationLogin,"boxLogin");
        const buttonLogin:HTMLButtonElement= createSomeButton(boxLogin,"buttonLogin");
        buttonLogin.innerHTML="Prijavljivanje";
        buttonLogin.onclick=(ev)=>{
            this._router.navigateToLoginPage();
        }
    }

}
