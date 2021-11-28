/* let clientName = prompt("Bem vindo a Fashion Driven, qual é o seu nome?") */

/* const buttonDisabled = document.querySelector(".buttonDisabled")
const confirmationModel = document.querySelector(".model .selected")
const confirmationNeck = document.querySelector(".neck .selected")
const confirmationMaterial = document.querySelector(".material .selected") */

let itemsSelected = 0;

let model
let neck;
let material;
let confirmationRefImage = refImage.value

alert(confirmationRefImage)

function selectModel(element) {

    const selected = document.querySelector(".model .selected")

    if(selected != null){
        selected.classList.remove("selected")
    }

    element.classList.add("selected")

    itemsSelected = itemsSelected + 1

    /* function validateSelection(); */

}

function selectNeck(element) {

    const selected = document.querySelector(".neck .selected")

    if(selected != null){
        selected.classList.remove("selected")
    }

    element.classList.add("selected")

    itemsSelected = itemsSelected + 1

    /* function validateSelection(); */

}

function selectMaterial(element) {

    const selected = document.querySelector(".material .selected")

    if(selected != null){
        selected.classList.remove("selected")
    }

    element.classList.add("selected")

    itemsSelected = itemsSelected + 1

    /* function validateSelection(); */

}

/* function validateSelection (confirmationModel, confirmationNeck, confirmationMaterial, confirmationReferenceImage){


    if(itemsSelected === 3 && confirmationRefImage != null){
        buttonDisabled.classList.remove("buttonDisabled")
    }
} */


