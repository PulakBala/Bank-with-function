
document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1.get element by id
    2.get the value from the element 
    3.convert string value to a number
    */
   const newDepositAmount = getInputFieldValueById('deposit-field');
   
   //get previous deposit total by id
   const previousDepositTotal = getTextElementValueById('deposit-total');
  
   //clculate new deposit total
   const newDepositTotal = previousDepositTotal + newDepositAmount; 
   //set deposit total value
   setTextElementValueById('deposit-total', newDepositTotal);

   //get previous balnce by using the function 
   const previousBalnaceTotal = getTextElementValueById('balnace-total');
   const newBalnaceTotal = previousBalnaceTotal + newDepositTotal;
   setTextElementValueById('balnace-total', newBalnaceTotal);

});

