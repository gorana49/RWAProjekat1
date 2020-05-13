import { Router } from "../../classes/router";
import {createSomeDiv, createSomeButton, createSomeInput} from "../../constants/createSomeElement";
import '../../assets/css/styleLoginPage.css'
import {UsersService} from "../../services/serviceUser"
import {Korisnik} from "../../models/korisnik";
export class RegistrationPage {
    _router:Router;
    _userService:UsersService;
    _users:Array<Korisnik>;
    constructor() {
        //this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._userService = new UsersService();
        this._users = [];
    }
    drawRegistrationPage(content: HTMLDivElement)
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
            this.proveriSve(formBoxUsernameInput.value, formBoxPasswordInput.value);
        }

        const boxBackButtonDiv:HTMLDivElement= createSomeDiv(dugmici,"formBoxButtonDiv");
        const boxBackButton:HTMLButtonElement= createSomeButton(boxBackButtonDiv, "boxBackButton");
        boxBackButton.innerHTML="nazad";
        boxBackButton.onclick= (e:Event) => {
            this._router.navigateToMainPage();
        }
        this._userService.getUsers()
        .then(nizKorisnika => {
            nizKorisnika.forEach((korisnik:Korisnik) => {
              let  pomocniKorisnik = new Korisnik(korisnik.id,korisnik.korisnicko_ime,korisnik.sifra,korisnik.br_napisanih_recepata);
              this._users.push(pomocniKorisnik);
            })
        })      
    } 
    proveriSve (username:string, pass:string)
    {

        if(this.validacija(username,pass) == 1)
        {
            let redniBroj= this._users.length;

            const result = this._users.filter(el => el.korisnicko_ime == username);
            if(result.length == 0)
            {
                let korisnik:Korisnik = {
                    id:redniBroj,
                    korisnicko_ime:username,
                    sifra:pass,
                    br_napisanih_recepata:0
                }
                this._userService.updateUsers(korisnik);
                this._router.navigateToRecepiesPage(username, pass);
            }   
            else
            {
                this._router.navigateToLoginPage();
            } 
        }
        else{
            this._router.navigateToRegistrationPage();
        }
        
    }
    validacija(username:string, pass:string)
    {
        if(username == "")
        {
            alert('popunite sva polja!');
            this._router.navigateToRegistrationPage();
        }
           
        else if(pass == "")
        {
            alert('popunite sva polja!');
            this._router.navigateToRegistrationPage();
        }
        else{
            return 1;
        }
          
    }
}