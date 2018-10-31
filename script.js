var inputHistory = [];
var input = "";
//sessionStorage.inputValues = input;

function addNumber(number)
{
    input = input + number;
    document.getElementById("input").value = input;
}

function addOperator(operator)
{
    inputHistory.push(input);
    inputHistory.push(operator);
    updateHistory();

    // TODO: Opdater input feltet med bereging.

    // TODO: Hvis man trykker to operatorer i rækkefølge, skal den sidste erstatte den seneste. 
    // Kig på sidste element i history og tjek om det ikke er et tal.
}

function updateHistory()
{
    var equation = "";

    inputHistory.forEach(element => {
        equation += element + " ";
    });

    document.getElementById("history").value = equation;
    clearInput();
}

function clearInput()
{
    input = "";
    document.getElementById("input").value = input;
}

function clearHistory()
{
    inputHistory = [];
    document.getElementById("history").value = inputHistory;
}

function clearAll()
{
    clearInput();
    clearHistory();
}

function calculate()
{
    // TODO: lav beregning som returnerer resulatt.
    var equation = "";

    inputHistory.forEach(element => {
        equation += element + " ";
    });
    
}