
import {MainPage} from "../src/Pages/mainPage";
import {RegistrationPage} from "../src/Pages/registrationPage";
import {LoginPage} from "../src/Pages/loginPage";
import {RecepiesPage} from "../src/Pages/recepiesPage";
import {MakingPage} from "../src/Pages/makingPage";
import {AddRecepiesPage} from "../src/Pages/addRecepiesPage";
import {FunnyGame} from "../src/Pages/funnyGame";

export class Router {
    constructor() {
    }

    navigateToMainPage() {
        let mainPage = new MainPage();
        mainPage.drawMainPage(document.getElementById("contentContainer"));
    }
    navigateToFunnyGame()
    {
        let funnyGame= new FunnyGame();
        funnyGame.drawFunnyGame(document.getElementById("contentContainer"));
    }
    navigateToRegistrationPage() {
        let registrationPage=new RegistrationPage();
        registrationPage.drawRegistrationPage(document.getElementById("contentContainer"));
    }

    navigateToLoginPage() {
        let loginPage = new LoginPage();
        loginPage.drawLoginPage(document.getElementById("contentContainer"));
    }
    navigateToRecepiesPage()
    {
        let recepiesPage= new RecepiesPage();
        recepiesPage.drawRecepiesPage(document.getElementById("contentContainer"));
    }

    navigateToMakingPage(recipe)
    {
        let makingPage= new MakingPage();
        makingPage.drawMakingPage(document.getElementById("contentContainer"),recipe);
    }

    navigateToAddRecepiesPage()
    {
        let addRecepiesPage= new AddRecepiesPage();
        addRecepiesPage.drawAddRecepiesPage();
    }
}