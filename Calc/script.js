let string = '';
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (el) => {
        const buttonText = el.target.innerHTML;
        if(buttonText == '=') {
            try {
                if (string.includes('/0')) {
                    document.querySelector('textarea').innerText = 'Division by zero';
                    return;
                } 
                string = eval(string);
                document.querySelector('textarea').innerText = string;
            } catch(error) {
                document.querySelector('textarea').innerText = 'Error';
            }
        } else if(buttonText == 'AC') {
            console.log('Hello');
            string = '';
            document.querySelector('textarea').innerText = string;
        } 
        else if(buttonText == '±' && string != '') {
            console.log('Hello');
            string = -parseFloat(string);
            document.querySelector('textarea').innerText = string;
        } 
        else {
            console.log('Hello');
            string += buttonText;
            document.querySelector('textarea').innerText = string;
        };
    });
});
