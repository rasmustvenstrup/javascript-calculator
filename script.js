var _history = "";
var _display = "";
var _number1 = "";
var _number2 = "";
var _operator = "";

//sessionStorage.inputValues = input;

document.addEventListener('keyup', function (event) { 

    // https://medium.com/@uistephen/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a
    var key = event.key || event.keyCode;

    if (isNaN(key))
    {
        if (key == "+" || key == "-" || key == "*" || key == "%" )
        {
            addOperator(key);
        }
        else if (key == "=" || key == "Enter")
        {
            getResult();
        }
        else if (key == "c" || key == "C")
        {
            clearAll();
        }
        else if (key == "Backspace")
        {
            // TODO: SLet sidste indtastede tal.
        }
    }
    else
    {
        addNumber(key);
    }
    
});

function addNumber(number)
{
    if (_operator == "")
    {
        _number1 += number;    
        writeToDisplay(_number1);
    }
    else
    {
        _number2 += number;
        writeToDisplay(_number2);
    }
}

function addOperator(operator)
{
    calculate();
    _operator = operator;
    _history += _display + " " + _operator + " ";
    writeToHistory(_history);
    
    // TODO: Hvis man trykker to operatorer i rækkefølge, skal den sidste erstatte den seneste. 
    // Kig på sidste element i history og tjek om det ikke er et tal.
}

function clearAll()
{
    _number1 = "";
    _number2 = "";
    _operator = "";
    writeToDisplay("");
    writeToHistory("");
}

function getResult()
{
    calculate();
    writeToHistory("");
}

function calculate()
{
    if (_number1 != "" && _number2 != "" && _operator != "")
    {
        var result = "";
        var number1 = parseInt(_number1);
        var number2 = parseInt(_number2);

        if (_operator == "+")
        {
            result = number1 + number2;
        }
        else if (_operator == "-")
        {
            result = number1 - number2;
        }
        else if (_operator == "*")
        {
            result = number1 * number2;
        }
        else if (_operator == "%")
        {
            result = number1 % number2;
        }

        _number1 = result.toString();
        _number2 = "";
        writeToDisplay(_number1);
    }
}

function writeToDisplay(value)
{
    _display = value;
    document.getElementById("display").value = _display;
}

function writeToHistory(value)
{
    _history = value;
    document.getElementById("history").value = _history;
}