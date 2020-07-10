const result = document.getElementById("result");

function clr() {
    result.value = "";
}

function edit(elem) {
    result.value = result.value + elem.value;
}

function calc() {
    result.value = new Function("return　" + result.value)();
}
