var output = document.getElementById('output');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

function addBy(){
    outC(num1.value,num2.value, "+",function(a,b){
        return a+b;
    })
}

function subBy(){
    //once subBy is clicked num1 and num 2 turns into the values provided by the user which is in the function outC
    outC(num1.value,num2.value, "-", function(a,b){
        
        return a-b;
    })
}

function mulBy(){
    outC(num1.value,num2.value, "*", function(a,b){
        return a*b;
    })
}

function divBy(){
    outC(num1.value,num2.value, "/",function(a,b){
        return a/b;
    })
}


function outC(a,b,s, cback ){
    //cback takes the space of function  giving it the values from the function to cback and changing them to number values which returns  to the result.
    //the function outC prints out the result.
    var result = cback(Number(a),Number(b));
    output.innerHTML += a + "" + s + "" + b + "=" + result + "<br>";
}
