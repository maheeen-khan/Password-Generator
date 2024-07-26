function checkAll() {  
    var inputs = document.querySelectorAll('.all');   
    for (var i = 0; i < inputs.length; i++) {   
        inputs[i].checked = true;   
    }   
}

// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers   = "0123456789";
// var specialChar = "~!@#$%^&*_";

// var randomLower = lowerCase[Math.floor(Math.random()*lowerCase.length)];
// var randomUpper = upperCase[Math.floor(Math.random()*upperCase.length)];
// var randomNumbers = numbers[Math.floor(Math.random()*numbers.length)];
// var randomSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)];

// var randomArray = [randomLower, randomUpper, randomNumbers, randomSpecialChar];
// var a = document.getElementById('password-length').value;
// console.log(a) ;

// console.log(randomArray[Math.floor(Math.random()*randomArray.length)]);

// console.log(lowerCase[Math.floor(Math.random()*lowerCase.length)]);
// console.log(upperCase[Math.floor(Math.random()*upperCase.length)]);
// console.log(numbers[Math.floor(Math.random()*numbers.length)]);
// console.log(specialChar[Math.floor(Math.random()*specialChar.length)]);

function generate(){

    // var randomLower = lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // var randomUpper = upperCase[Math.floor(Math.random()*upperCase.length)];
    // var randomNumbers = numbers[Math.floor(Math.random()*numbers.length)];
    // var randomSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)];


     var a = document.getElementById('password-length').value;
    //  console.log(a) ;

    var isLower = document.getElementById('myCheckLower').checked;
    var isSpecialSymbol = document.getElementById('myCheckSymbol').checked;
    var isNum = document.getElementById('myCheckNumber').checked;
    var isUpper = document.getElementById('myCheckUpper').checked;
    // console.log(isUpper);

    if(isNum === true){
        var randomArray = "0123456789";
    }

    if(isUpper === true){
        randomArray += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(isLower === true){
        randomArray += "abcdefghijklmnopqrstuvwxyz";
    }
    
    if(isSpecialSymbol === true){
        randomArray += "~!@#$%^&*_";
    }
    console.log(isUpper);
    console.log(isLower);
    console.log(isNum);
    console.log(isSpecialSymbol);
    


    console.log(randomArray)

     for(var i = 0; i < a; i++){
        var temp = randomArray[Math.floor(Math.random()*randomArray.length)];
        document.getElementById('password').innerHTML += `${temp}`;
        // document.write(randomArray[Math.floor(Math.random()*randomArray.length)]);
     }

}
