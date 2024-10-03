let inputsBox = document.querySelectorAll('.input-box');
inputsBox = Array.from(inputsBox);
let inputsAll = document.querySelectorAll('.input');
inputs = Array.from(inputsAll);
let iconsError = document.querySelectorAll('.icon-error');
iconsError = Array.from(iconsError);
let inputsTextEmpty = document.querySelectorAll('.input-empty-text');
inputsTextEmpty = Array.from(inputsTextEmpty);
const button = document.querySelector('.btn');

for(let i = 0; i < inputsTextEmpty.length; i++){
    const placeholderValue = inputs[i].getAttribute('placeholder'); // Pridá k poli textu value placeholderu
    inputsTextEmpty[i].innerText = `${placeholderValue} ${inputsTextEmpty[i].innerText}`;
}

inputs.forEach(input => {
    const defaultPlaceholder = input.placeholder; // Store the default placeholder

    input.addEventListener('click', function(event) {
        input.placeholder = ''; // Remove placeholder when input is clicked
    });

    document.addEventListener('click', function(event) {
        if (!input.contains(event.target) && input.value === '') {
            input.placeholder = defaultPlaceholder; // Restore placeholder if click occurs outside input and input value is empty
        }
    });

    input.addEventListener('input', function(event) {
        if (input.value !== '') {
            input.classList.add('input-filled'); // Add class when input has value
        } else {
            input.classList.remove('input-filled'); // Remove class when input is empty 
        }
    });
    
});


button.addEventListener('click', function(){

        for(let i = 0; i < inputs.length; i++){
            if (inputs[i].value === '') { // Prida tridy k nevyplněným polím, včetně textu s placeholderem na začátku
                inputsTextEmpty[i].style.display = 'inherit';
                iconsError[i].style.display = 'inherit';
                inputsBox[i].classList.add('input-box-failed');
            }else{
                inputsTextEmpty[i].style.display = 'none'; // Odstrani třídy a pole s textem
                iconsError[i].style.display = 'none';
                inputsBox[i].classList.remove('input-box-failed');
            }
        }
         
    const emailInput = document.querySelector('.input-email');
    const emailValue = emailInput.value.trim(); // Trim the email value to remove leading and trailing spaces

    //Funkce, která zkontroluje, zda je email validní
    function isValidEmail(email){
        const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        return regex.test(email); 
    }

    if(emailValue !== ''){
        if(!isValidEmail(emailValue)){ //Pokud není validní
            inputsTextEmpty[2].style.display = 'inherit';
            inputsTextEmpty[2].innerText = 'Looks like this is not an email';
            iconsError[2].style.display = 'inherit';
            inputsBox[2].classList.add('input-box-failed');
        }else{ 
            inputsTextEmpty[i].style.display = 'none'; // Odstrani třídy a pole s textem
            iconsError[i].style.display = 'none';
        }
    }



});