function insert(num){
    document.getElementById("textbox").value = document.getElementById("textbox").value + num;
}

function equal(){
    var exp = document.getElementById("textbox").value;
    if(exp){
        document.getElementById("textbox").value = eval(exp);
    }
}

function clr(){
    document.getElementById("textbox").value = "";
}

function bk(){
    var exp =document.getElementById("textbox").value;
    document.getElementById("textbox").value = exp.substring(0,exp.length-1);
}

