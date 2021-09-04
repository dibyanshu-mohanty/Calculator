let input = document.querySelector("#io")
let result= ""

function numPressed(num){
    result+=num
    input.value = result
}

function equalPressed(){
    result = (eval(result)).toFixed(2)
    input.value = result
    result=""
}

function clearPressed(){
    result = ""
    input.value = result
}
