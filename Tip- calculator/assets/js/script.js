let num1 = document.getElementById("num1");
let math = document.getElementById("math");
let num2 = document.getElementById("num2");
let active = 1;
focus();

function calculate(value) {
    console.log(value)

    if (active == 1) {
        if (value == "del" || value == "+" || value == "-" 
            || value == "/" || value == "x" || value == "reset" || value == "=" 
        ) {
            if (value == "del") {
                let deletedval = num1.value.slice(0, -1);
                num1.value = deletedval;
            }else if (value == "reset") {
                num1.value = null;
                num2.value = null;
                math.value = null;
            }else if (value == "=") {
                if (math.value == "+") {
                    num2.value = parseInt(num1.value) + parseInt(num2.value)
                }else if (math.value == "-") {
                    
                }else if (math.value == "/") {
                    
                }else if (math.value == "x") {
                    
                }
            }else {
                math.value = value;
                focus(3);
            }
        }else{
            num1.value = ""+num1.value + value;
        }
    }else{
        if (value == "del" || value == "+" || value == "-" 
            || value == "/" || value == "x" || value == "reset" || value == "=" 
        ) {
            if (value == "del") {
                let deletedval = num2.value.slice(0, -1);
                num2.value = deletedval;
            }else if (value == "reset") {
                num1.value = null;
                num2.value = null;
                math.value = null;
                active = 1;
                focus(1);
            }else {
                if (math.value == "+") {
                    num2.value = parseInt(num1.value) + parseInt(num2.value)
                }else if (math.value == "-") {
                    num2.value = parseInt(num1.value) - parseInt(num2.value)
                }else if (math.value == "/") {
                    num2.value = parseInt(num1.value) / parseInt(num2.value)
                }else if (math.value == "x") {
                    num2.value = parseInt(num1.value) * parseInt(num2.value)
                }
                num1.value = null;
                    math.value = "Result=";
            }
        }else{
            num2.value = ""+num2.value + value;
        }
    }
    
}

function focus(val = 1) {
    active = val;
    if (val == 1) {
        num1.focus();
    }else if (val == 2) {
        math.focus();
    }else{
        num2.focus();
    }
}


