


function calculate(){


     const bill = parseFloat(document.querySelector('.num').value);
     const tipPercentage = parseFloat(document.querySelector('.bill-percentage').value);
     const resultdiv = document.querySelector('.result');
     const errordiv = document.querySelector('.error');

     errordiv.textContent = '';
     resultdiv.textContent ='';
   
    if(bill<=0 || bill===''){
        errordiv.textContent ='Plese eneter a valid amount';
        return;
    }
    else if(tipPercentage<= 0){
        errordiv.textContent = 'Please eneter a valid tip percentage';
        return;
    }
    else {
        const tipAmount = (bill*tipPercentage)/100;
        const totalAmount = tipAmount + bill;
        resultdiv.innerHTML =` 🧾 Total Bill: ₹${totalAmount.toFixed(2)}`;
    }
}