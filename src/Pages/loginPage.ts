import { Router } from "../../classes/router";
import {createSomeDiv,createSomeButton, createSomeInput} from "../../constants/createSomeElement";
import '../../assets/css/styleLoginPage.css'
import {UsersService} from "../../services/serviceUser"
import { of } from "rxjs";
import {fromFetch} from "rxjs/fetch";
import { switchMap, catchError } from 'rxjs/operators';
export class LoginPage {
    _router:Router;
    _userService: UsersService;
    constructor() {
        this._router = new Router();
        this._userService = new UsersService();
    }
    drawLoginPage(content:HTMLDivElement)
    {
    
        content.innerHTML="";
        
        const formBox:HTMLDivElement= createSomeDiv(content,"formBox");
        const formBoxText:HTMLDivElement= createSomeDiv(formBox,"formBoxText");
        formBoxText.innerHTML= "Dobrodošli natrag, prijavite se i na korak ste od novog zanimljivog recepta!";

        const formBoxUsernameDiv:HTMLDivElement= createSomeDiv(formBox,"formBoxUsernameDiv");
        formBoxUsernameDiv.innerHTML= "Korisničko ime:"
        const formBoxUsernameInputDiv:HTMLDivElement= createSomeDiv(formBox,"formBoxUsernameInputDiv");
        const formBoxUsernameInput:HTMLInputElement= createSomeInput(formBoxUsernameInputDiv,"formBoxUsernameInput");

        const formBoxPasswordDiv:HTMLDivElement= createSomeDiv(formBox,"formBoxPasswordDiv");
        formBoxPasswordDiv.innerHTML= "Vaša sifra:"
        const formBoxPasswordInputDiv:HTMLDivElement= createSomeDiv(formBox,"formBoxPasswordInputDiv");
        const formBoxPasswordInput:HTMLInputElement= createSomeInput(formBoxPasswordInputDiv,"formBoxPasswordInput");

        const dugmici:HTMLDivElement = createSomeDiv(formBox,"dugmici");
        const formBoxButtonDiv:HTMLDivElement= createSomeDiv(dugmici,"formBoxButtonDiv");
        const formBoxButton:HTMLButtonElement= createSomeButton(formBoxButtonDiv, "formBoxButton");
        formBoxButton.innerHTML="Potvrdi";
        
        formBoxButton.onclick = (e:Event) =>
        {
            this.findUser(formBoxUsernameInput.value, formBoxPasswordInput.value);
        }

        const boxBackButtonDiv:HTMLDivElement= createSomeDiv(dugmici,"formBoxButtonDiv");
        const boxBackButton:HTMLButtonElement= createSomeButton(boxBackButtonDiv, "boxBackButton");
        boxBackButton.innerHTML="nazad";
        boxBackButton.onclick= (e:Event) => {
            this._router.navigateToMainPage();
        }
    }
    findUser(username:string, password:string)
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
                        this._router.navigateToRecepiesPage(username, password);
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