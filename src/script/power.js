//The learning objective of this exercise is writing event listeners to handle 
//button clicks, and modifying the classList of 
//DOM elements when those events are broadcast by the browser.


/*Add the correct string as the first argument to addEventListener()
Write a function named flightHandlerFunction 
that will remove the disabled class on the corresponding <section id="flight"> 
(section, not button) and replace it with a class of enabled.
Have your developer tools open. When you click the button, the 
following element...
*/




flightHandlerFunction = () => {
    const section = document.getElementById("flight")

    section.classList.toggle("enabled")
    section.classList.toggle("disabled")

}
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)




mindHandlerFunction = () => {
    const section = document.getElementById("mindreading")
    section.classList.toggle("enabled")
    section.classList.toggle("disabled")



}
document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)




xrayHandlerFunction = () => {
    const section = document.getElementById("xray")
    section.classList.toggle("enabled")
    section.classList.toggle("disabled")
}
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)




//activationg all buttons.
activateAllFunction = () => {
    const sections = document.querySelectorAll(".power")
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("disabled")
        sections[i].classList.add("enabled")
    }
}
document.querySelector("#activate-all").addEventListener("click", activateAllFunction)



//deactivating all buttons
deactivateAllFunction = () => {
    const sections = document.querySelectorAll(".power")
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("enabled")
        sections[i].classList.add("disabled")
    }
}
document.querySelector("#deactivate-all").addEventListener("click", deactivateAllFunction)