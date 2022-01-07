// Function as the parameter of another function
function add(valOne, valTwo) {
    return valOne + valTwo;
}

function calculate(valOne, valTwo, func) {
    const ans = func(valOne, valTwo)
    console.log(ans)
}

calculate(1,2,add)