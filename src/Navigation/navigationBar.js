import {Router} from "../../classes/router.js";
import * as urlLogo from "../../assets/resources/logoApp.png";

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