/// <reference path='./index.d.ts'/>
import {Router} from "../../classes/router";
import {createSomeElement,createSomeDiv, createSomeButton} from "../../constants/createSomeElement";
import * as logoImg from "../../assets/resources/logo.png"



export function createNavigationBar(){
    let router = new Router;

    let navigationBarContainer:HTMLDivElement = document.getElementById("nav-bar") as HTMLDivElement;
    navigationBarContainer.innerHTML="";
    navigationBarContainer.className="navigationBarContainer";
    const navComponent:HTMLSpanElement = createSomeElement(navigationBarContainer,"span","navComponent");

    const navigateToHome=document.createElement("img");
    navigateToHome.className="imageLogo";
    navigateToHome.src=logoImg.default;
    
    navigateToHome.onclick=(ev:Event)=>{
        router.navigateToMainPage();
    }
    navComponent.appendChild(navigateToHome);
    }

export function createNavigationBarRecipesPage(username:string, password:string)
{
    let router = new Router;
   let navigationBarContainer:HTMLDivElement = document.getElementById("nav-bar") as HTMLDivElement;
   navigationBarContainer.className="navigationBarContainer";
   const navComponent:HTMLSpanElement = createSomeElement(navigationBarContainer,"span","navComponent");

    const navigateToHome=document.createElement("img");
    navigateToHome.className="imageLogo";
    navigateToHome.src=logoImg.default;

    navigateToHome.onclick=(ev)=>{
        router.navigateToRecepiesPage(username,password);
        }
    navComponent.appendChild(navigateToHome);
    const navComponent1:HTMLSpanElement = createSomeElement(navigationBarContainer,"span","navComponent");
    const navComponentKorisnik:HTMLDivElement = createSomeDiv(navigationBarContainer,"navComponentKorisnik");
    const imeKorisnika:HTMLDivElement = createSomeDiv(navComponentKorisnik, "imeKorisnika");
    imeKorisnika.innerHTML = username;
    
    const navComponentLogOut:HTMLDivElement = createSomeDiv(navigationBarContainer,"navComponentLogOut");
    const navigateToLogOut:HTMLButtonElement = createSomeButton(navComponentLogOut,"navigateToLogOut");
    navigateToLogOut.innerHTML = "Odjavi se";
    console.log(router);
    navigateToLogOut.onclick=(ev:Event)=>
    {
        
        console.log(router.navigateToMainPage());
    }
}