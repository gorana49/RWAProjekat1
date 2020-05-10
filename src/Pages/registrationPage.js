import { Router } from "../../classes/router";
import {createSomeElement} from "../../constants/createSomeElement";
import '../../assets/css/styleRegistrationPage.css'
import {RecipesUsers} from "../../services/serviceUser"
import {Korisnik} from "../../models/korisnik";
import { fromEvent, Subject,merge } from "rxjs";
import { map, combineLatest, forkJoin, sampleTime, debounceTime} from "rxjs/operators";
export class RegistrationPage {
    constructor() {
        this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
        this._userService = new RecipesUsers();
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
        const formBoxUsernameInput= createSomeElement(formBoxUsernameDiv,"input","formBoxUsernameInput");

        const formBoxPasswordDiv= createSomeElement(formBox,"div","formBoxPasswordDiv");
        formBoxPasswordDiv.innerHTML= "Vaša sifra:"
        const formBoxPasswordInputDiv= createSomeElement(formBox,"div","formBoxPasswordInputDiv");
        const formBoxPasswordInput= createSomeElement(formBoxPasswordInputDiv,"input","formBoxPasswordInput");

        const formBoxButtonDiv= createSomeElement(formBox,"div", "formBoxButtonDiv");
        const formBoxButton= createSomeElement(formBoxButtonDiv, "button", "formBoxButton");
        formBoxButton.innerHTML="Potvrdi";
            const streamInputUsername$=fromEvent(formBoxUsernameInput,"input")
            .pipe(
              map(input=>input.target.value));
            const streamInputPass$=fromEvent(formBoxPasswordInputDiv,"input")
              .pipe(
                debounceTime(1000),
                map(input=>input.target.value));
            forkJoin(streamInputUsername$ , streamInputPass$).subscribe(([username, pass]) => {
                console.log(username, pass);

            });  


        this._userService.getUsers()
        .then(nizKorisnika => {
          nizKorisnika.forEach(korisnik => {
              console.log(korisnik);
              let  pomocniKorisnik = new Korisnik(korisnik.korisnicko_ime,korisnik.sifra);
              this._users.push(pomocniKorisnik);
          });
        })
    }
    checkDatabase(username)
    {
        const result  = this._users.filter(el => el.username == username);
        if(result == null)
        {
            this._userService.updateUsers(result);
        }
        else {
            this.alertAboutEmptyFields();
        }
    }
    alertAboutEmptyFields(){
        let alertSubject=new Subject();
        alertSubject.pipe(
          sampleTime(1000)
        ).subscribe(message=>alert(message));

        alertSubject.next("Popunite prazna polja!");
      }

}