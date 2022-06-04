// The JavaSkript code is owned by Kristiyan Valchev and can only be viewed
// You are not allowed to use any of the following code

// todo - 

function setActive(Element, activeClassName = "Active", onlyOneActive = false) {
    if (!Element) return;

    if (typeof Element == "string") Element = document.getElementById(Element);

    if (onlyOneActive && Element.parentElement.getElementsByClassName(activeClassName)[0])
        Element.parentElement.getElementsByClassName(activeClassName)[0].classList.remove(activeClassName);

    if (Element.classList.contains(activeClassName))
        Element.classList.remove(activeClassName);
    else Element.classList.add(activeClassName);
}