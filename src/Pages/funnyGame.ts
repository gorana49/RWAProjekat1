import { Router } from "../../classes/router";
import {createSomeDiv, createSomeButton} from "../../constants/createSomeElement";
import { fromEvent, merge} from 'rxjs';
import { take} from 'rxjs/operators';


export class FunnyGame {
    _router:Router;
    constructor() {
       // this._contentDiv = document.getElementById("contentContainer");
        this._router = new Router();
    }
    drawFunnyGame(content:HTMLDivElement)
    {
        content.innerHTML = "";

        const cardBox:HTMLDivElement = createSomeDiv(content,"cardBox");
     
        const cardBoxManual:HTMLDivElement = createSomeDiv(cardBox,"cardBoxManual");
        cardBoxManual.innerHTML = "Poigrajte se malo i vidite šta vam savetuje naša igrica!";
        const cardBoxUput:HTMLDivElement = createSomeDiv(cardBox,"cardBoxUput");
        cardBoxUput.innerHTML ="Ispred Vas je 5 kartica sa različitim nazivima. Klikom na dve Vama najsmešnije kartice, mi Vam dajemo razlog zašto je dobro da baš sa nama kuvate!";
        const cardsBox:HTMLDivElement = createSomeDiv(cardBox, "cardsBox");
        const cardOutput:HTMLDivElement = createSomeDiv(cardBox, "cardOutput");
        const card1:HTMLDivElement = createSomeDiv(cardsBox, "card");
        card1.innerHTML ="Kuhinjski moljac";
        const card2:HTMLDivElement = createSomeDiv(cardsBox, "card");
        card2.innerHTML ="Pravi mislilac";
        const card3:HTMLDivElement = createSomeDiv(cardsBox, "card");
        card3.innerHTML ="Unapred organizovan";
        const card4:HTMLDivElement = createSomeDiv(cardsBox, "card");
        card4.innerHTML ="Kuvanje je mudrost";
        const card5:HTMLDivElement = createSomeDiv(cardsBox, "card");
        card5.innerHTML ="Hrana je lek";
        const card1Klik = fromEvent(card1, 'click');
        const card2Klik = fromEvent(card2, 'click');
        const card3Klik = fromEvent(card3, 'click');
        const card4Klik = fromEvent(card4, 'click');
        const card5Klik = fromEvent(card5, 'click');
        let index = 0;
        let nizRecenica = ['Kuvajte sa nama češće, naučićete mnogo korisnih stvari!', 'Kuvanje nije samo mudrost, već i motivacija za dalje napredovanje', 'Ubrzajte svoje vreme, spremajte paralelno. Zainteresovani ste? '];
        const example = merge( card1Klik.pipe(take(1)) , card2Klik.pipe(take(1)),card3Klik.pipe(take(1)), card4Klik.pipe(take(1)),card5Klik.pipe(take(1))).pipe(take(2));
        example.subscribe(() => {
            index++;
            if(index == 2)
            {
                let random = Math.floor(Math.random() * 2); 
                cardOutput.innerHTML = nizRecenica[random];
            }   
        });

        const backButtonDiv:HTMLDivElement = createSomeDiv(cardBox, "backButtonDiv");
        const backButton:HTMLButtonElement = createSomeButton(backButtonDiv, "backButton");
        backButton.innerHTML = "nazad";
        backButton.onclick = (ev:Event) =>
        {
            this._router.navigateToMainPage();
        }

    }
}