import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import '../../assets/css/styleLoginPage.css'
export class LoginPage {
    constructor() {
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
    }
    drawLoginPage(content)
    {
    
        content.innerHTML="";
        
        const formBox= createSomeElement(content,"div", "formBox");
        const formBoxText= createSomeElement(formBox,"div","formBoxText");
        formBoxText.innerHTML= "Dobrodošli natrag, prijavite se i na korak ste od novog zanimljivog recepta!";

        const formBoxUsernameDiv= createSomeElement(formBox,"div","formBoxUsernameDiv");
        formBoxUsernameDiv.innerHTML= "Korisničko ime:"
        const formBoxUsernameInputDiv= createSomeElement(formBox,"div","formBoxUsernameInputDiv");
        const formBoxUsernameInput= createSomeElement(formBoxUsernameDiv,"input","formBoxUsernameInput");

        const formBoxPasswordDiv= createSomeElement(formBox,"div","formBoxPasswordDiv");
        formBoxPasswordDiv.innerHTML= "Vaša sifra:"
        const formBoxPasswordInputDiv= createSomeElement(formBox,"div","formBoxPasswordInputDiv");
        const formBoxPasswordInput= createSomeElement(formBoxPasswordInputDiv,"input","formBoxPasswordInput");

        const formBoxButtonDiv= createSomeElement(formBox,"div", "formBoxButtonDiv");
        const formBoxButton= createSomeElement(formBoxButtonDiv, "button", "formBoxButton");
        formBoxButton.innerHTML="Potvrdi";
    }
}