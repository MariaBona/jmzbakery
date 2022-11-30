//Author: Jayasri Kusuma

localStorage.setItem("userName","log-in");
document.getElementById('LoginId').innerHTML = localStorage.getItem("userName");

document.getElementById('cart').innerHTML="0 \(€\)" ;	
	
		
var attempt = 3; // Count number of attempts.
//Click on Login Checks if the login password are correct
function checkLogin(){
	


	var username = document.getElementById("userid").value;
	var password = document.getElementById("psw").value;
	if ( (username == "John" && password == "John") || (username == "Smith" && password == "Smith") ){
		document.getElementById('LoginId').innerHTML  = username ;
		alert ("Welcome " +username +"\n You are now in sweetest place JMZ Bakery");

		
		return window.location.href="../../index.html";
		
		//document.getElementById("login-form").style.display="block";
			
		/*[insert user name], thank you for your details. We will be in touch via [insert user email] shortly. */
		//document.getElementById("LoginId").innerHTML += "<h3>You have reached maximum tries. Start a fresh round!.</h3>";
		
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		document.getElementById('LoginId').innerHTML = "log-in" ;
		
		// Disabling input fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("userid").disabled = true;
			document.getElementById("psw").disabled = true;
			document.getElementById("submit").disabled = true;
			
		}
		return false;
	}
	
}
