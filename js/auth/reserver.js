const inputNom = document.getElementById("NomInputResa");
const inputPreNom = document.getElementById("PrenomInputResa");
const inputNbConvives = document.getElementById("NbConvivesInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputNbConvives.addEventListener("keyup", validateForm);

function validateForm(){
      const nomOk = validateRequired(inputNom);
      const prenomOk = validateRequired(inputPreNom);
      const nbConvivesOk = validateRequired(inputNbConvives);
      if(nomOk && prenomOk && nbConvivesOk){
         btnValidation.disabled = false;
      }
      else{
        btnValidation.disabled = true;
      }
    }

    function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}