
import {MainPage} from "../src/Pages/mainPage";
import {RegistrationPage} from "../src/Pages/registrationPage";
import {LoginPage} from "../src/Pages/loginPage";
import {UserPage} from "../src/Pages/userPage";
import {RecepiesPage} from "../src/Pages/recepiesPage";
import {ConcreteRecipePage} from "../src/Pages/concreteRecipePage";
import {MakingPage} from "../src/Pages/makingPage";
import {AddRecepiesPage} from "../src/Pages/addRecepiesPage";

export class Router {
    constructor() {
    }

    navigateToMainPage() {
        let mainPage = new MainPage();
        mainPage.drawMainPage(document.getElementById("contentContainer"));
    }

    navigateToRegistrationPage() {
        let registrationPage=new RegistrationPage();
        registrationPage.drawRegistrationPage(document.getElementById("contentContainer"));
    }

    navigateToLoginPage() {
        let loginPage = new LoginPage();
        loginPage.drawLoginPage(document.getElementById("contentContainer"));
    }

    navigateToUserPage() {
        let userPage = new UserPage();
        userPage.drawUserPage();
    }

    navigateToRecepiesPage()
    {
        let recepiesPage= new RecepiesPage();
        recepiesPage.drawRecepiesPage(document.getElementById("contentContainer"));
    }

    navigateToConcreteRecipePage()
    {
        let concreteRecipePage= new ConcreteRecipePage();
        concreteRecipePage.drawConcreteRecipePage();
    }

    navigateToMakingPage()
    {
        let makingPage= new MakingPage();
        makingPage.drawMakingPage(document.getElementById("contentContainer"));
    }

    navigateToAddRecepiesPage()
    {
        let addRecepiesPage= new AddRecepiesPage();
        addRecepiesPage.drawAddRecepiesPage();
    }
}