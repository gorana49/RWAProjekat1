import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import '../../assets/css/styleLoginPage.css'
import {UsersService} from "../../services/serviceUser"
import {Korisnik} from "../../models/korisnik";
export class RegistrationPage {
    constructor() {
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._userService = new UsersService();
        this._users = [];
    }
    drawRegistrationPage(content)
    {
        content.innerHTML="";

        const formBox= createSomeElement(content,"div", "formBox");
        const formBoxText= createSomeElement(formBox,"div","formBoxText");
        formBoxText.innerHTML= "Dobrodošli! Prijavite se i na korak ste od novog zanimljivog recepta!";

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
        formBoxButton.innerHTML="potvrdi";
        formBoxButton.onclick= (ev) => {
            this.proveriSve(formBoxUsernameInput.value , formBoxPasswordInput.value);
        }
        const boxBackButtonDiv= createSomeElement(dugmici,"div", "formBoxButtonDiv");
        const boxBackButton= createSomeElement(boxBackButtonDiv, "button", "boxBackButton");
        boxBackButton.innerHTML="nazad";
        boxBackButton.onclick= (ev) => {
            this._router.navigateToMainPage();
        }
        this._userService.getUsers()
        .then(nizKorisnika => {
            nizKorisnika.forEach(korisnik => {
              let  pomocniKorisnik = new Korisnik(korisnik.id,korisnik.korisnicko_ime,korisnik.sifra,korisnik.br_napisanih_recepata);
              this._users.push(pomocniKorisnik);
            })
        })      
    } 
    proveriSve (username, pass)
    {

        if(this.validacija(username,pass) == 1)
        {
            let redniBroj= this._users.length;

            const result = this._users.filter(el => el.korisnicko_ime == username);
            if(result.length == 0)
            {
                let korisnik = {
                    id:redniBroj,
                    korisnicko_ime:username,
                    sifra:pass,
                    br_napisanih_recepata:0
                }
                this._userService.updateUsers(korisnik);
                this._router.navigateToRecepiesPage();
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
    validacija(username, pass)
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