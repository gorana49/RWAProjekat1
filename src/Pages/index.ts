import { createNavigationBar } from '../Navigation/navigationBar'
import {MainPage} from "./mainPage";
import '../../assets/css/styleMainPage.css';


const mainPage=new MainPage();
createNavigationBar();
const pomocna:HTMLDivElement= document.getElementById("contentContainer")as HTMLDivElement;
mainPage.drawMainPage(pomocna);

