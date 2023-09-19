function appendToDisplay(value){
	let display=document.getElementById("display");
	if(display.value==''){
		if(value=='00' || value=='0'){
			display.value='0';
		}
		else if('+*/'.includes(value)){
			return;
		}
		else if(value=='.'){
			display.value='0.';
		}
		else{
			display.value=value;
		}
	}
	else if(display.value=='0'){
		if(value=='0' || value=='00'){
			return
		}
		else{
			display.value+=value;
		}
	}
	else if (value === ".") {
    		const currentValue = display.value;
   		 if ( "+-*/%".includes(currentValue.slice(-1))) {
       		 // Do nothing if the last character is a decimal point or an operator
       			display.value+='0.';
    		}else if('.'.includes(currentValue.slice(-1))){
			return;
		}
			
		 else {
        		display.value += value;
    		}
	}
	
       else if ('+-*/%'.includes(value)) {
	   let lastChar = display.value.charAt(display.value.length - 1);
          if ('+-*/%'.includes(lastChar)) {
            // Don't allow consecutive operators
             return;
          }
	  else {
		display.value+=value;
	  }
       }
	else{
		display.value+=value;
	}
}
function Clear(){
	document.getElementById("display").value="";
}
function backspace() {
    let display = document.getElementById("display");
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
function calculate(){
	let expression=document.getElementById("display").value;
	if(expression.includes('/0') || expression.includes('0%')){
		document.getElementById("display").value='Cannot Divide by zero!!';
	}
	else if('+-*%/.'.includes(expression.slice(-1))){
		document.getElementById("display").value='Invalid Expression!!';
	}
	else{
		document.getElementById("display").value=eval(expression);
	}
}