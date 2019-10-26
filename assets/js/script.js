var specialChar = confirm("special characters?");
var numericChar = confirm("number characters?");
var upperChar = confirm("upper characters?");
var lowerChar =confirm("lower characters?");
while(specialChar === false && numericChar===false && upperChar===false && lowerChar===false){
	console.log("hello");
	alert("Please at least choose one type of charater!");
	specialChar = confirm("special characters?");
	numericChar = confirm("number characters?");
	upperChar = confirm("upper characters?");
	lowerChar =confirm("lower characters?");
};

var pwLength = prompt("Please enter your password length");
while(pwLength<8 || pwLength>128){
	alert("Please define your password between 8 and 128!");
	var pwLength = prompt("Please enter your password length");
};
var btnGen = document.getElementById("btnGenerate");
var btnCopy = document.getElementById("btnCopy");

var passwordBox = document.getElementById("password");

var charset0 = "abcdefghijklmnopqrstuvwxyz";//26
var charset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//26
var charset2 = "0123456789";//10
var charset3 = "~·!@#$%^&*()<>/?.,;:=-+-[]{}|";


// function identify(){
// 	// console.log("hello2");
// 	if(specialChar === false && numericChar===false && upperChar===false && lowerChar===false){
// 		console.log("hello");
// 		alert("Please at least choose one type of charater!");
// 		specialChar = confirm("special characters?");
// 		numericChar = confirm("number characters?");
// 		upperChar = confirm("upper characters?");
// 		lowerChar =confirm("lower characters?");
// 	}
// 	else if(pwLength<8 || pwLength>128){
// 		alert("Please define your password between 8 and 128!");
// 		var pwLength = prompt("Please enter your password length");
// 	}

// }


function generateSpec(number){
	this.N =number;
	var password ="";
	for (var i=0; i<N; i++){
			password += charset3.charAt(Math.floor(Math.random() * 29));
	}
	return password;
}

function generateNum(number){
	this.N =number;
	var password="";
	for (var i=0; i< N; i++){
			password += charset2.charAt(Math.floor(Math.random() * 10));
	}
	return password;

}

function generateUpper(number){
	this.N =number;
	var password="";
	for (var i=0; i< N; i++){
			password += charset1.charAt(Math.floor(Math.random() * 26));
	}
	return password;

}

function generateLow(number){
	this.N =number;
	var password="";
	for (var i=0; i< N; i++){
			password += charset0.charAt(Math.floor(Math.random() * 26));
	}
	return password;

}



function generatePassword(isLength){
	var password = "";
	this.L = isLength;
	var t = Math.round(L/2);
	var x = Math.round(L/3);
	var y = Math.round(L/4);
	console.log(y);
	if(specialChar && !numericChar && !upperChar && !lowerChar){	
		password = generateSpec(L);
		console.log(password);	
	}
	else if(numericChar && !specialChar && !upperChar && !lowerChar){
		
		password = generateNum(L);
		
	}
	else if(upperChar && !numericChar && !specialChar && !lowerChar){
		password = generateUpper(L);
	}
	else if(lowerChar && !numericChar && !specialChar && !upperChar){
		password = generateLow(L);
	}

	else if (specialChar && numericChar && !upperChar && !lowerChar){
		password = generateSpec(t);

		password += generateNum(L-t);
	}
	else if (specialChar && upperChar && !numericChar && !lowerChar){
		password = generateSpec(t);

		password += generateUpper(L-t);
	}
	else if (specialChar && lowerChar && !upperChar && !numericChar){
		password = generateSpec(t);

		password += generateLow(L-t);
	}
	else if (numericChar && upperChar && !specialChar && !lowerChar){
		password = generateNum(t);
		password += generateUpper(L-t);
	}
	else if(numericChar && lowerChar && !specialChar && !upperChar){
		password = generateNum(t);
		password += generateLow(L-t);
	}
	else if(upperChar && lowerChar && !specialChar && !numericChar){
		password = generateUpper(t);

		password += generateLow(L-t);
	}
	else if (specialChar && numericChar && lowerChar && !upperChar){
		password = generateSpec(x);
		password += generateNum(x);
		password += generateLow(L-2*x);
	}
	else if (specialChar && numericChar && upperChar && !lowerChar){
		password = generateSpec(x);
		password += generateNum(x);
		password += generateUpper(L-2*x);
	}
	else if (specialChar && !numericChar && lowerChar && upperChar){
		password = generateSpec(x);
		password += generateUpper(x);
		password += generateLow(L-2*x);
	}
	else if (!specialChar && numericChar && lowerChar && upperChar){
		password = generateNum(x);
		password += generateUpper(x);
		password += generateLow(L-2*x);
	}
	else if (specialChar && numericChar && lowerChar && upperChar){
		password = generateSpec(y);
		password += generateNum(y);
		password += generateUpper(y);
		password += generateLow(L-3*y);
	}
	// else if (!specialChar && !numericChar && !lowerChar && !upperChar){
	// 	alert("Please at least choose one type of charater!");
	// }
	return password;
	

}


passwordBox.innerHTML = generatePassword(pwLength);

btnGen.addEventListener("click", function(){
	passwordBox.innerHTML = generatePassword(pwLength);
})

btnCopy.addEventListener("click",function(){
	passwordBox.select();
	document.execCommand("copy");
	
});

// // generatePassword(pwLength);
// console.log(generatePassword(pwLength));

