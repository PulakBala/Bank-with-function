
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = getInputFieldValueById('withdraw-field');
    const textWithdraw = getTextElementValueById('withdraw-total');

    const newWithdraw = textWithdraw + withdrawInput;

    setTextElementValueById('withdraw-total', newWithdraw);

    const newWithdrawTotal = getTextElementValueById('balnace-total');
    const newWithdrawTotalBalnace = newWithdrawTotal - newWithdraw;

    setTextElementValueById('balnace-total', newWithdrawTotalBalnace);
})