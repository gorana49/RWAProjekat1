import { createNavigationBar } from '../Navigation/navigationBar'
import {MainPage} from "./mainPage";
import '../../assets/css/styleMainPage.css';


const mainPage=new MainPage();
createNavigationBar();
const pomocna= document.getElementById("contentContainer");
mainPage.drawMainPage(document.getElementById("contentContainer"));