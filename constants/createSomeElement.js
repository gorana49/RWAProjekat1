export function createSomeElement(parent, type, classNames)
{
let element = document.createElement(type);
element.className = classNames;
parent.appendChild(element);
return element;
}