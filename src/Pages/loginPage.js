import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import '../../assets/css/styleLoginPage.css'
import {UsersService} from "../../services/serviceUser"
import { of } from "rxjs";
import {fromFetch} from "rxjs/fetch";
import { switchMap, catchError } from 'rxjs/operators';
export class LoginPage {
    constructor() {
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._userService = new UsersService();
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
        const formBoxUsernameInput= createSomeElement(formBoxUsernameInputDiv,"input","formBoxUsernameInput");

        const formBoxPasswordDiv= createSomeElement(formBox,"div","formBoxPasswordDiv");
        formBoxPasswordDiv.innerHTML= "Vaša sifra:"
        const formBoxPasswordInputDiv= createSomeElement(formBox,"div","formBoxPasswordInputDiv");
        const formBoxPasswordInput= createSomeElement(formBoxPasswordInputDiv,"input","formBoxPasswordInput");

        const dugmici = createSomeElement(formBox,"div", "dugmici");
        const formBoxButtonDiv= createSomeElement(dugmici,"div", "formBoxButtonDiv");
        const formBoxButton= createSomeElement(formBoxButtonDiv, "button", "formBoxButton");
        formBoxButton.innerHTML="Potvrdi";
        
        formBoxButton.onclick = (ev) =>
        {
            this.findUser(formBoxUsernameInput.value, formBoxPasswordInput.value);
        }

        const boxBackButtonDiv= createSomeElement(dugmici,"div", "formBoxButtonDiv");
        const boxBackButton= createSomeElement(boxBackButtonDiv, "button", "boxBackButton");
        boxBackButton.innerHTML="nazad";
        boxBackButton.onclick= (ev) => {
            this._router.navigateToMainPage();
        }
    }
    findUser(username, password)
    {
        const formBoxButton = document.getElementsByClassName("formBoxButton");
        const data$ = fromFetch(`http://localhost:3000/korisnik?korisnicko_ime=${username}`).pipe(
            switchMap(response => {
              if (response.ok) {
                return response.json();
              } else {
                return of({ error: true, message: `Error ${response.status}` });
              }
            }),
            catchError(err => {
              console.error(err);
              return of({ error: true, message: err.message })
            })
           );
        data$.subscribe({
            next: result => {
                console.log(result);
                if(result.length == 0)
                 {
                     this._router.navigateToRegistrationPage();
                 }
                 else{
                     if(result[0].sifra == password)
                     {
                         console.log(1);
                        this._router.navigateToRecepiesPage();
                     }
                     else{
                        this._router.navigateToLoginPage();
                     }
                 }
            },
            complete: () => console.log('done')
           })   
    }
}