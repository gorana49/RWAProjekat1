import { fromEvent} from 'rxjs';
import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import * as urlImgLogo2 from "../../assets/resources/logoBack2.png"
export class MainPage {
    constructor() {
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
    }
    drawMainPage(content){
        content.innerHTML="";
        const mainContentContainer= createSomeElement(content, "div", "mainContentContainer");
        let buttonSlideDiv=createSomeElement(mainContentContainer, "div", "buttonSlideDiv");
        let buttonSlide1 = createSomeElement(buttonSlideDiv, "div", "buttonSlide");
        let buttonSlide2 = createSomeElement(buttonSlideDiv, "div", "buttonSlide");
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
    
       
        const boxRegistrationLogin= createSomeElement(mainContentContainer,"div", "boxRegistrationLogin");
        const boxText= createSomeElement(boxRegistrationLogin,"div", "boxText");
        boxText.innerHTML="Dobrodošli na naš sajt!";
        const boxRegistration= createSomeElement(boxRegistrationLogin,"div","boxRegistration");
        const buttonRegistraion= createSomeElement(boxRegistration,"button", "buttonRegistration");
        buttonRegistraion.innerHTML="Registracija";
        buttonRegistraion.onclick=(ev)=>{
            this._router.navigateToRegistrationPage();
        }
        const boxLogin= createSomeElement(boxRegistrationLogin,"div", "boxLogin");
        const buttonLogin= createSomeElement(boxLogin,"button", "buttonLogin");
        buttonLogin.innerHTML="Prijavljivanje";
        buttonLogin.onclick=(ev)=>{
            this._router.navigateToLoginPage();
        }

    }

}
