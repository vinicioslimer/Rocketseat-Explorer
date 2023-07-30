import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber } from './utils.js';

var form = document.querySelector('form');
var inputWeight = document.querySelector('#weight');
var inputHeight = document.querySelector('#height');

form.onsubmit = event => {
    event.preventDefault();

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);
    
    var showAlertError = notANumber(weight) || notANumber(height);

    if (showAlertError) {
        AlertError.open();
        return;
    }

    AlertError.close();

    var result = calculateIMC(weight, height); 
    displayResultMessage(result); 
}

function displayResultMessage(result) {
    var message = `Seu IMC é ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
