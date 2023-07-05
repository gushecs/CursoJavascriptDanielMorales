function enableOrDisableButton() {
    document.querySelector("form input[type=submit]").disabled = !document.getElementById("contrato").checked
}

enableOrDisableButton()