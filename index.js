var inputValue = document.getElementById('Input-field')
function getNum(num) {
    inputValue.value += num
}

function calculate() {
    var value = inputValue.value
    var result = eval(value)
    inputValue.value = result

}

function cls() {
    inputValue.value = ''
}

