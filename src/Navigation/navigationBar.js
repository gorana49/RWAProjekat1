import {Router} from "../../classes/router.js";
import * as urlLogo from "../../assets/resources/logoApp.png";
import {createSomeElement} from "../../constants/createSomeElement";
var router=new Router();

export function createNavigationBar(){

    const navigationBarContainer=document.getElementById("nav-bar");
    navigationBarContainer.className="navigationBarContainer";

    const navComponent=document.createElement("span");
    navComponent.className="navComponent";
    navigationBarContainer.appendChild(navComponent);

    const navigateToHome=document.createElement("img");
    navigateToHome.className="imageLogo";
    navigateToHome.src=urlLogo.default;

    navigateToHome.onclick=(ev)=>{
        router.navigateToMainPage();
    }
    navComponent.appendChild(navigateToHome);
}

export function createNavigationBarRecipesPage()
{
    const navigationBarContainer=document.getElementById("nav-bar");
    navigationBarContainer.className="navigationBarContainer";

    const navComponent=document.createElement("span");
    navComponent.className="navComponent";
    navigationBarContainer.appendChild(navComponent);

    const inputSearch=document.createElement("input");
    inputSearch.className="inputSearch";
    navComponent.appendChild(inputSearch);
    
    const inputSearchType=document.createElement("input");
    inputSearchType.className="inputSearchType";
    navComponent.appendChild(inputSearchType);


    const searchButton=document.createElement("button");
    searchButton.className="searchButton";
    navComponent.appendChild(searchButton);
    searchButton.innerHTML = "pretrazi";
}