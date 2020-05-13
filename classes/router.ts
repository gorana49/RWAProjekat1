import {MainPage} from "../src/Pages/mainPage";
import {RegistrationPage} from "../src/Pages/registrationPage";
import {LoginPage} from "../src/Pages/loginPage";
import {RecepiesPage} from "../src/Pages/recepiesPage";
import {MakingPage} from "../src/Pages/makingPage";
import {AddRecipesPage} from "../src/Pages/addRecipesPage";
import {FunnyGame} from "../src/Pages/funnyGame";
import { Recept } from "../models/recept";
import {createNavigationBar} from "../src/Navigation/navigationBar"

export class Router {
    constructor() {
    }
    navigateToMainPage() {
        createNavigationBar();
        let mainPage = new MainPage();
        mainPage.drawMainPage(document.getElementById("contentContainer") as HTMLDivElement);
        }   
    navigateToFunnyGame()
    {
        let funnyGame= new FunnyGame();
        funnyGame.drawFunnyGame(document.getElementById("contentContainer") as HTMLDivElement);
    }
    navigateToRegistrationPage() {
        let registrationPage=new RegistrationPage();
        registrationPage.drawRegistrationPage(document.getElementById("contentContainer") as HTMLDivElement);
    }

    navigateToLoginPage() {
        let loginPage = new LoginPage();
        loginPage.drawLoginPage(document.getElementById("contentContainer") as HTMLDivElement);
    }
    navigateToRecepiesPage(username:string, password:string)
    {
        const navBar:HTMLDivElement =document.getElementById("nav-bar") as HTMLDivElement;
        navBar.innerHTML ="";
        let recepiesPage= new RecepiesPage();
        recepiesPage.drawRecepiesPage(document.getElementById("contentContainer") as HTMLDivElement, username, password);
    }

    navigateToMakingPage(recipe:Recept)
    {
        let makingPage= new MakingPage();
        makingPage.drawMakingPage(document.getElementById("contentContainer") as HTMLDivElement,recipe);
    }

    navigateToAddRecipesPage(username:string, pass:string)
    {
        let addRecipesPage= new AddRecipesPage();
        addRecipesPage.drawAddRecipesPage(document.getElementById("contentContainer") as HTMLDivElement, username,pass);
    }

}