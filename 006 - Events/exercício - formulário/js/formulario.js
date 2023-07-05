const titleInput = document.getElementById("txtTitulo")
const descriptionInput = document.getElementById("txtDescricao")
const termsCheckbox = document.getElementById("chkAceito")
const sendButton = document.getElementById("btn")
const form = document.getElementById("shopping-add")
const feedbackCloseButton = document.querySelector("[id=\"feedbackMessage\"] button")

let executeFocusOnForm = false

function validateForm(event) {
    if (!titleInput.value ||
        !descriptionInput.value ||
        !termsCheckbox.checked) {
        showErrorMessage("Preencha todos os campos do formulário!")
        executeFocusOnForm = true
        event.preventDefault()
    }
}

function check() {
    sendButton.disabled = !termsCheckbox.checked
}

function characterCountForDescription() {
    document.querySelector("[id=\"contador\"] span").textContent = descriptionInput.maxLength - descriptionInput.value.length
}

function showErrorMessage(message) {
    document.querySelector("[id=\"feedbackMessage\"] p").textContent = message
    document.querySelector("[id=\"feedbackMessage\"]").classList.add("show")
    feedbackCloseButton.focus()
}

function hideErrorMessage() {
    document.querySelector("[id=\"feedbackMessage\"]").classList.remove("show")
    if (executeFocusOnForm)
        focusOnForm()
}

function closeFeedbackWithEsc(event) {
    if (event.keyCode == 27)
        hideErrorMessage()
}

function focusOnForm() {
    if (!titleInput.value) {
        titleInput.focus()
    } else if (!descriptionInput.value) {
        descriptionInput.focus()
    } else (termsCheckbox.focus())
    executeFocusOnForm = false
}

check()
termsCheckbox.addEventListener("change", check)

descriptionInput.addEventListener("input", characterCountForDescription)
characterCountForDescription()
document.getElementById("contador").style.display = true

feedbackCloseButton.addEventListener("click", hideErrorMessage)
feedbackCloseButton.addEventListener("keyup", closeFeedbackWithEsc)

form.addEventListener("submit", validateForm)