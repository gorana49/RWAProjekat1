export function nacrtajPocetnuStranu(roditelj)
{
    const kontejner = napraviElement(roditelj, "div", "kontejner");
    const naslov= napraviElement(roditelj, "div", naslov);
    const dugmiciSlika= napraviElement(roditelj,"div", "dugmiciSlika");

    const dugmici= nacrtajDugmice(dugmiciSlika);
    const slika= napraviElement(dugmiciSlika,"div","slika");



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
        


}