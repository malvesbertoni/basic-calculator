window.onload = function() {
    const buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.addEventListener('click', function(event) {
        


        if (event.target.tagName === 'BUTTON') {
            //alert(`You clicked on button ${event.target.innerText}`);

            printResult(event.target.innerText);
        }
    


      });
}


function printResult(value) {
    let printedResult = document.querySelector('.printed-result');
    
    if (value === 'C')
        printedResult.innerText = '0';

    else if (value === '←')
        printedResult.innerText = printedResult.innerText.slice(0,-1);
    
    else if (value === '+') {
        calculateSum(printedResult.innerText);
        
        
    }

    else if (value === '÷' || value === '×' || value === '−'
        || value === '+' || value === '=') {
        alert("You have clicked on a special button");
        printedResult.innerText = '0'
    }

    else if (printedResult.innerText === '0')
        printedResult.innerText = value;

    else if (printedResult.innerText !== '0')
    printedResult.innerText = printedResult.innerText.concat(value);
}

function calculateSum(value) {
    value = parseInt(value,10);
   


}