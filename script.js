/* let clientName = prompt("Bem vindo a Fashion Driven, qual é o seu nome?") */

/* const buttonDisabled = document.querySelector(".buttonDisabled")
const confirmationModel = document.querySelector(".model .selected")
const confirmationNeck = document.querySelector(".neck .selected")
const confirmationMaterial = document.querySelector(".material .selected") */

let itemsSelected = 0;

let model
let neck;
let material;

alert(confirmationRefImage)

function selectModel(element) {

    const selected = document.querySelector(".model .selected")

    if(selected != null){
        selected.classList.remove("selected")
    }else{

        itemsSelected = itemsSelected + 1
    }

    element.classList.add("selected")


    validateSelection(); 

}

function selectNeck(element) {

    const selected = document.querySelector(".neck .selected")

    if(selected != null){
        selected.classList.remove("selected")
    }else{
        
        itemsSelected = itemsSelected + 1
    }

    element.classList.add("selected")

    
    validateSelection(); 

}

function selectMaterial(element) {

    const selected = document.querySelector(".material .selected")

    if(selected != null){
        selected.classList.remove("selected")
    }else{

        itemsSelected = itemsSelected + 1
    }

    element.classList.add("selected")

    
    validateSelection();

}

function validateSelection (confirmationModel, confirmationNeck, confirmationMaterial, confirmationReferenceImage){

    const inputRefImage = document.querySelector(".refImage")
    const botao = document.querySelector(".classeDoBotao")

    if(itemsSelected === 3 && validURL(inputRefImage.value) === true){
        botao.classList.remove("buttonDisabled")
        
    }else{
        botao.classList.add("buttonDisabled")
    }
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

/* function statusDaCompra(){

    
    if(){
        alert("Encomenda confirmada!")
    }else{
        alert("Ops, não conseguimos processar sua encomenda")
    }
} */



