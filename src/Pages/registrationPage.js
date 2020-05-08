import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import '../../assets/css/styleRegistrationPage.css'
export class RegistrationPage {
    constructor() {
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
    }
    drawRegistrationPage(content)
    {
        content.innerHTML="";

        const formBox= createSomeElement(content,"div", "formBox");
        const formBoxText= createSomeElement(formBox,"div","formBoxText");
        formBoxText.innerHTML= "Dobrodošli! Prijavite se i na korak ste od novog zanimljivog recepta!";

        const formBoxNameDiv= createSomeElement(formBox,"div","formBoxNameDiv");
        formBoxNameDiv.innerHTML= "Ime:"
        const formBoxNameInputDiv= createSomeElement(formBox,"div","formBoxNameInputDiv");
        const formBoxNameInput= createSomeElement(formBoxNameInputDiv,"input","formBoxNameInput");

        const formBoxLastNameDiv= createSomeElement(formBox,"div","formBoxLastNameDiv");
        formBoxLastNameDiv.innerHTML= "Prezime:"
        const formBoxLastNameInputDiv= createSomeElement(formBox,"div","formBoxLastNameInputDiv");
        const formBoxLastNameInput= createSomeElement(formBoxLastNameInputDiv,"input","formBoxNameInput");

        const formBoxEmailDiv= createSomeElement(formBox,"div","formBoxEmailDiv");
        formBoxEmailDiv.innerHTML= "Mejl:"
        const formBoxEmailInputDiv= createSomeElement(formBox,"div","formBoxEmailInputDiv");
        const formBoxEmailInput= createSomeElement(formBoxEmailInputDiv,"input","formBoxEmailInput");

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