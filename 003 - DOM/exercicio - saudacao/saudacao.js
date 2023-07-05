(function(){
    const usuario = "Daniel"
    const addElement = false
    // const usuario = null
    const welcome = document.getElementById("userWelcome")

    if (usuario) {
        welcome.innerHTML += "<b>" + usuario + "</b>"

        //add element
        if (addElement) {
            const elementToAdd = document.createElement("p")
            elementToAdd.innerHTML = "<br/> É bom te ter de volta!"
            welcome.parentElement.appendChild(elementToAdd)
        }
    } else {
        welcome.parentElement.style.display = "none"
        // welcome.parentElement.remove

    }
})()