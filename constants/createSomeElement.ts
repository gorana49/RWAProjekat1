export function createSomeElement(parent: HTMLDivElement,type:string, classNames:string)
{
let element = document.createElement(type);
element.className = classNames;
parent.appendChild(element);
return element;
}

export function createSomeDiv(parent: HTMLDivElement, classNames:string)
{
    let element:HTMLDivElement = document.createElement("div");
    element.className = classNames;
    parent.appendChild(element);
    return element;
}

export function createSomeButton(parent: HTMLDivElement, classNames:string)
{
    let element:HTMLButtonElement = document.createElement("button");
    element.className = classNames;
    parent.appendChild(element);
    return element;
}

export function createSomeImage(parent: HTMLDivElement, classNames:string)
{
    let element:HTMLImageElement = document.createElement("img");
    element.className = classNames;
    parent.appendChild(element);
    return element;
}

export function createSomeInput(parent: HTMLDivElement, classNames:string)
{
    let element:HTMLInputElement = document.createElement("input");
    element.className = classNames;
    parent.appendChild(element);
    return element;
}