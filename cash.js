const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("error-message");

checkButton.addEventListener("click", function validateBillAndCashAmount(){
     message.getElementsByClassName.display = "none";
     if(billAmount.value > 0){

     } else{
         message.getElementsByClassName.display = "block";
         message.innerText="The bill amount should be greater than 0";


     }

 })

