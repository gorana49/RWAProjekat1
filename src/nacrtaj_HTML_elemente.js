export function nacrtajPocetnuStranu(roditelj)
{
    const kontejner = napraviElement(roditelj, "div", "kontejner");
    const naslov= napraviElement(roditelj, "div", "naslov");
    const dugmiciSlika= napraviElement(roditelj,"div", "dugmiciSlika");

    const dugmici= nacrtajDugmice(dugmiciSlika);
    const slika= napraviElement(dugmiciSlika,"div","slika");
    
     let image = napraviElement(slika, "img","image");
     image.src= 'C:\Users\radov\RWAProjekat1\RWAProjekat1\photos\slika1.jpg';
     
}

export function napraviElement(roditelj, tip, imeKlase)
{
    let element = document.createElement(tip);
    element.className = imeKlase;
    roditelj.appendChild(element);
    return element;
}

export function nacrtajDugmice(roditelj)
{
    let dugmeDiv=napraviElement(roditelj, "div", "dugmeDiv");
    let dugme1 = napraviElement(roditelj, "button", "dugme");
    let dugme2 = napraviElement(roditelj, "button", "dugme");
    let dugme3 = napraviElement(roditelj, "button", "dugme");

}