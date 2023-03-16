/*
    Show/Hide Password On Click
*/

var myButton = document.getElementById('btn'),

    myInput = document.getElementById('input');

myButton.onclick = function () {

    'use strict';

    if (this.textContent === 'Show password') {
        
        myInput.setAttribute('type', 'text');

        this.textContent = 'Hide password';

    } else {
        
        myInput.setAttribute('type', 'password');

        this.textContent = 'Show password';

    }
};

    
