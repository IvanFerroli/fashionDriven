/* let clientName = prompt("Bem vindo a Fashion Driven, qual é o seu nome?") */

/* const buttonDisabled = document.querySelector(".buttonDisabled")
const confirmationModel = document.querySelector(".model .selected")
const confirmationNeck = document.querySelector(".neck .selected")
const confirmationMaterial = document.querySelector(".material .selected") */
const usersModelsContainer = document.querySelector(".usersModelsContainer")

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

  function getUsersModels (){
      modelsAnswer = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

      modelsAnswer.then(answer)

        function answer (id, model, neck, material, image, owner, author){
            let data = answer.data;
    for (let i = 0; i < data.length; i++) {
      let id = data[i].id;
      let model = data[i].model;
      let neck = data[i].neck;
      let material = data[i].material;
      let image = data[i].image;
      let owner = data[i].owner;
      let author = data[i].author;

      usersModelsContainer.innerHTML += renderizeUsersModels(id, model, neck, material, image, owner, author)
        }
      }

      getUsersModels()

      function renderizeUsersModels(id, model, neck, material, image, owner, author){
          return `
            <div class="id${id} userModelsBox">
                <div class="usersModelsImage">
                    <img src="${image}">
                </div>
                <div class="usersModelsSpan">
                    <span>Criador: ${author}</span>
                </div>
            </div>
          `
      }

  }



  /* function statusDaCompra(){

    
    if(){
        alert("Encomenda confirmada!")
    }else{
        alert("Ops, não conseguimos processar sua encomenda")
    }
} */


  
