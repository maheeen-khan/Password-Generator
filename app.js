function checkAll() {
    var inputs = document.querySelectorAll('.all');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
    }
}



function generate() {

    //fetch value of Password Length
    var a = document.getElementById('password-length').value;
    //  console.log(a) ;


    //checked whether a checkbox is checked or not
    var isLower = document.getElementById('myCheckLower').checked;
    var isSpecialSymbol = document.getElementById('myCheckSymbol').checked;
    var isNum = document.getElementById('myCheckNumber').checked;
    var isUpper = document.getElementById('myCheckUpper').checked;


    var randomArray = "";

    if (isNum === true) {
        randomArray += "0123456789";
    }

    if (isUpper === true) {
        randomArray += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (isLower === true) {
        randomArray += "abcdefghijklmnopqrstuvwxyz";
    }

    if (isSpecialSymbol === true) {
        randomArray += "~!@#$%^&*_";
    }

    // console.log(isUpper);
    // console.log(isLower);
    // console.log(isNum);
    // console.log(isSpecialSymbol);

    //  console.log(randomArray)
    
    document.getElementById('password').innerHTML = ""; // Clear previous password

    for (var i = 0; i < a; i++) {
        var temp = randomArray[Math.floor(Math.random() * randomArray.length)];
        document.getElementById('password').innerHTML += `${temp}`;
        // document.write(randomArray[Math.floor(Math.random()*randomArray.length)]);
    }

}
