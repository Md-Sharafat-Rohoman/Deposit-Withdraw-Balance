// step -1: add even listenar or click handler
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step -2: for input field use. value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositTotalString = depositField.value;
    const newDepositTotal = parseFloat(newDepositTotalString);


    // step -3: 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(depositTotal)
    const currentDepositTotal = newDepositTotal + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // step -5:
    const balanceTotalElement = document.getElementById('balace-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step -6:
    const currentBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step -7: clear the value
    depositField.value = ''

})