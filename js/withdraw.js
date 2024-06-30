document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawTotalString = withDrawField.value;
    const newWithDrawTotal = parseFloat(newWithDrawTotalString);

    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previouwWithDrawTotalString = withDrawTotalElement.innerText;
    const previouwWithDrawTotal = parseFloat(previouwWithDrawTotalString);
    const currentWithDrawTotal = newWithDrawTotal + previouwWithDrawTotal;
    // console.log(currentWithDrawTotal);
    withDrawTotalElement.innerText = currentWithDrawTotal;

    // total balace
    const balanceTotalElement = document.getElementById('balace-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString); 

    const currentBalanceTotal = previousBalanceTotal - newWithDrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal; 



    withDrawField.value = ''
})