// var specialChar = confirm("special characters?");
// var number = confirm("number characters?");
// var upper = confirm("upper characters?");
// var lower =confirm("lower characters?");
// var pwLength = prompt("Please enter your password length");

var charset0 = "abcdefghijklmnopqrstuvwxyz";//26
var charset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//26
var charset2 = "0123456789";//10
var charset3 = "~·!@#$%^&*()<>/?.,;:=-+-[]{}|";


function passwordForUser(number,Type){
    this.N = number;
    this.C = Type;
    var password="";
    switch (C){
		case 0: 
		for (var i = 0; i<N; i++){
			password += charset0.charAt(Math.floor(Math.random() * 26));
		}
		break;

		case 1:
		for (var i = 0; i<N; i++){
			password += charset1.charAt(Math.floor(Math.random() * 26));
		}
		break;

		case 2:
		for (var i = 0; i<N; i++){
			password += charset2.charAt(Math.floor(Math.random() * 10));
		}
		break;

		case 3:
		for (var i = 0; i<N; i++){
			password += charset3.charAt(Math.floor(Math.random() * 29));
			console.log(password);
		}
		break;
	}
	return password;

}
