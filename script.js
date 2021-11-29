/* let clientName = prompt("Bem vindo a Fashion Driven, qual é o seu nome?") */

/* const buttonDisabled = document.querySelector(".buttonDisabled")
const confirmationModel = document.querySelector(".model .selected")
const confirmationNeck = document.querySelector(".neck .selected")
const confirmationMaterial = document.querySelector(".material .selected") */
const usersModelsContainer = document.querySelector(".usersModelsContainer")
const usersModelsBox = document.querySelector(".usersModelsBox")


let itemsSelected = 0;

let model;
let neck;
let material;

let modelPost;
let neckPost;
let materialPost;
let imagePost;
let ownerPost;

function userName (){
   ownerPost = prompt("Qual é o seu nome")
}
userName()

function selectModel(element, selectedModel) {

    const selected = document.querySelector(".model .selected")

    modelPost = selectedModel

    if(selected != null){
        selected.classList.remove("selected")
    }else{
        
        itemsSelected = itemsSelected + 1
    }
    
    element.classList.add("selected")
    

    validateSelection(); 
    
}

function selectNeck(element, selectedNeck) {

    const selected = document.querySelector(".neck .selected")

    neckPost = selectedNeck

    if(selected != null){
        selected.classList.remove("selected")
    }else{
        
        itemsSelected = itemsSelected + 1
    }
    
    element.classList.add("selected")
    
    
    validateSelection(); 
    
}

function selectMaterial(element, selectedMaterial) {

    const selected = document.querySelector(".material .selected")
    materialPost = selectedMaterial

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

    imagePost = inputRefImage.value

    usersModelsContainer
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
  
const getUsersModels = () => {
    modelsAnswer = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

    modelsAnswer.then((answer) => {
        console.log(answer);
        let data = answer.data;
        for (let i = 0; i < data.length; i++) {
            let image = data[i].image;
            let owner = data[i].owner;
            
            usersModelsContainer.innerHTML += renderizeUsersModels(image, owner)
        }
    });
};

getUsersModels();

function renderizeUsersModels(image, owner){
    return `
      <div class="usersModelsBox">
        <img class="usersModelsImage" src="${image}">
        <span class="usersModelsSpan2">Criador: <span class="usersModelsSpan1">${owner}</span>
      </div>
    `
}


function confirmORder() {
   const post = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", {model:modelPost, neck:neckPost, material:materialPost, image: imagePost, owner:ownerPost, author:ownerPost}); 
   
   

};







