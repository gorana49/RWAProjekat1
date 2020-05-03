import * as urlLogo from '../src/photos/logoApp.png';
import { map} from 'rxjs/operators';
import { fromEvent, from } from 'rxjs';


export function nacrtajPocetnuStranu(roditelj)
{
    let index=0;
    const kontejner = napraviElement(roditelj, "div", "kontejner");
    const naslov= napraviElement(kontejner, "div", "naslov");
    const imageLogo= napraviElement(naslov,"img","imageLogo");
    imageLogo.src= urlLogo.default;
    let dugmeDiv=napraviElement(kontejner, "div", "dugmeDiv");
    let dugme1 = napraviElement(dugmeDiv, "div", "dugme");
    let dugme2 = napraviElement(dugmeDiv, "div", "dugme");
    let dugme3 = napraviElement(dugmeDiv, "div", "dugme");

    let boksDiv= napraviElement(kontejner,"div","boksDiv");
    boksDiv.innerHTML="Dobrodošli, na korak ste od savršenog obroka!"
    
    

    let dugmeRegistracija= napraviElement(boksDiv,"button","dugmeRegistracija");
    dugmeRegistracija.innerHTML="Registracija";
    
    
    let dugmeLogovanje= napraviElement(boksDiv,"button","dugmeLogovanje");
    dugmeLogovanje.innerHTML="Logovanje";

    
    const klik1= fromEvent(dugme1,'click');
    const klikni1= klik1.subscribe(() => {
        let body1= document.body;
        body1.className="body";
    });
    const klik2= fromEvent(dugme2,'click');
    const klikni2= klik2.subscribe(() => {
        let body2= document.body;
        body2.className="body2 body";
    });

    const klik3= fromEvent(dugme3,'click');
    const klikni3= klik3.subscribe(() => {
        let body3= document.body;
        body3.className="body3 body";
    });
};
function nacrtajRegistraciju(roditelj)
{
  document.body.innerHTML="";
  document.body.innerHTML="<h2>Loading...<h2>";

}
export function napraviElement(roditelj, tip, imeKlase)
{
    let element = document.createElement(tip);
    element.className = imeKlase;
    roditelj.appendChild(element);
    return element;
};