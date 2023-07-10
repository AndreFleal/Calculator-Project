let numberOne = '';
let numberTwo = '';
let operation = '';
let result = '0';
const displayLimit = '15';

const button0 = document.getElementById('button0');
button0.addEventListener('click', function(){
    showDisplay('0');
});

const button1 = document.getElementById('button1');
button1.addEventListener('click', function(){
    showDisplay('1');
});
const button2 = document.getElementById('button2');
button2.addEventListener('click', function(){
    showDisplay('2');
});
const button3 = document.getElementById('button3');
button3.addEventListener('click', function(){
    showDisplay('3');
});
const button4 = document.getElementById('button4');
button4.addEventListener('click', function(){
    showDisplay('4');
});
const button5 = document.getElementById('button5');
button5.addEventListener('click', function(){
    showDisplay('5');
});
const button6 = document.getElementById('button6');
button6.addEventListener('click', function(){
    showDisplay('6');
});
const button7 = document.getElementById('button7');
button7.addEventListener('click', function(){
    showDisplay('7');
});
const button8 = document.getElementById('button8');
button8.addEventListener('click', function(){
    showDisplay('8');
});
const button9 = document.getElementById('button9');
button9.addEventListener('click', function(){
    showDisplay('9');
});
const buttonDot = document.getElementById('buttonDot');
buttonDot.addEventListener('click', function(){
    showDisplay('.');
});
const buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click', function(){
    setOperation('+');
});
const buttonSubtract = document.getElementById('buttonSubtract');
buttonSubtract.addEventListener('click', function(){
    setOperation('-');
});
const buttonMultiply = document.getElementById('buttonMultiply');
buttonMultiply.addEventListener('click', function(){
    setOperation('*');
});
const buttonDivide = document.getElementById('buttonDivide');
buttonDivide.addEventListener('click', function(){
    setOperation('/');
});
const buttonEqual = document.getElementById('buttonEqual');
buttonEqual.addEventListener('click', function(){
    calculate()
});
const buttonClear = document.getElementById('buttonClear');
buttonClear.addEventListener('click', function(){
    clearDisplay()
});
const buttonBack = document.getElementById('buttonBack');
buttonBack.addEventListener('click', function(){
    back()
});


function showDisplay(digit) {
    
    if (operation === '') {
        numberOne += digit;
        display.textContent = numberOne;
    } else {
        numberTwo += digit;
        display.textContent = numberTwo;
    }
}
function back() {
    if (operation === '') {
        numberOne = numberOne.slice(0, -1); 
        display.textContent = numberOne; 
    } else {
        numberTwo = numberTwo.slice(0, -1); 
        display.textContent = numberTwo;
    }
}

function setOperation(op){
    if (numberOne !== '' && numberTwo === ''){
        operation = op;
        display.textContent = op;
    }
}

function clearDisplay (){
    numberOne = '';
    numberTwo = '';
    operation = '';
    result = '0';
    display.textContent = '';
}

function calculate() {
if (numberOne !== '' && numberTwo !== '' && operation !== '') {
    switch (operation) {
        case '+':
            result = parseFloat(numberOne) + parseFloat (numberTwo) ;
            break;
            case '-':
                result = parseFloat(numberOne) - parseFloat(numberTwo);
                break;
                case '*':
                    result = parseFloat(numberOne) * parseFloat(numberTwo);
                    break;
                    case '/':
                        if (parseFloat(numberTwo) === 0 ){
                            result = 'Error: Cannot Divide by 0';
                        }else {
                            result = parseFloat(numberOne) / parseFloat(numberTwo);
                        }
                        break;

    }

display.textContent = result;

numberOne = '';
numberTwo = '';
operation = '';

}
}