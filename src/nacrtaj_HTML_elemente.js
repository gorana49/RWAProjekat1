import * as urlLogo from '../src/photos/logoApp.png';
import { switchMap, takeUntil } from 'rxjs/operators';
import { timer, fromEvent } from 'rxjs';


export function nacrtajPocetnuStranu(roditelj)
{
    const kontejner = napraviElement(roditelj, "div", "kontejner");
    const naslov= napraviElement(kontejner, "div", "naslov");
    const imageLogo= napraviElement(naslov,"img","imageLogo");
    imageLogo.src= urlLogo.default;

    let dugmeDiv=napraviElement(kontejner, "div", "dugmeDiv");
    let dugme1 = napraviElement(dugmeDiv, "div", "dugme");
    let dugme2 = napraviElement(dugmeDiv, "div", "dugme");
    let dugme3 = napraviElement(dugmeDiv, "div", "dugme");

    const mouseDown$ = fromEvent(kontejner, 'mousedown')
    const mouseUp$ = fromEvent(kontejner, 'mouseup')

    const stream$ = mouseDown$.pipe(
    switchMap(() => timer(500).pipe(takeUntil(mouseUp$))));

    stream$.subscribe(() => console.log('Only Fired after 500ms'))
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
    
};