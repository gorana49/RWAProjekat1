import * as urlPocetna from '../src/photos/slikaPocetna.jpg';
import * as urlLogo from '../src/photos/logoApp.png';

export function nacrtajPocetnuStranu(roditelj)
{
    const kontejner = napraviElement(roditelj, "div", "kontejner");
    const naslov= napraviElement(kontejner, "div", "naslov");
    const imageLogo= napraviElement(naslov,"img","imageLogo");
    imageLogo.src= urlLogo.default;
    const slikaDugmici= napraviElement(kontejner,"div","slikaDugmici");
    const imagePocetna= napraviElement(slikaDugmici,"img", "imagePocetna");
    imagePocetna.src= urlPocetna.default;      
};
export function napraviElement(roditelj, tip, imeKlase)
{
    let element = document.createElement(tip);
    element.className = imeKlase;
    roditelj.appendChild(element);
    return element;
};

export function nacrtajDugmice(roditelj)
{
    let dugmeDiv=napraviElement(roditelj, "div", "dugmeDiv");
    let dugme1 = napraviElement(roditelj, "div", "dugme");
    let dugme2 = napraviElement(roditelj, "div", "dugme");
    let dugme3 = napraviElement(roditelj, "div", "dugme");
};