
// var input = document.getElementById("input");
function getHistory(){
	return document.getElementById("history-value").innerText;
}

function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

function getinput(){
	return document.getElementById("input-value").innerText;
}
function printinput(num){
	// console.log(num);
	document.getElementById("input-value").innerText=num;
}

// console.log(printinput("99999"));
// var operator = document.getElementByClassName("operator");


var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click',function(){
		// alert("the operator is clicked",this.id);
		if(this.id == "clear"){
			printHistory("");
			printinput("");
			}
		else if(this.id == "backspace"){
			var input = getinput().toString();
			// console.log('////',input);
			if(input){ // if input has some value
				var input = input.substr(0,input.length-1);
				console.log(input);
				printinput(input);
			}
		}
		else{
		var input = getinput();
		var history1 = getHistory();
		if(input!="" || history1!=""){
			history1 = history1 + input;
			if(this.id == "=") {
				var result=eval(history1);
				printinput(result);
				printHistory("");
			}

			else{
				history1=history1+this.id;
				printHistory(history1);
				printinput("");
			}
		}
	}

	});
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click',function(){
		// alert("the number clicked",this.id);
		var input=getinput();
		if(input!=NaN){ //if output is a number
			input=input+this.id;
			printinput(input);
		}
	});
}