//Author: Jayasri Kusuma

/*storing value for  username to default login-in */
localStorage.setItem("userName","log-in");
/*setting login id on nav bar area under login icon */
document.getElementById('LoginId').innerHTML = localStorage.getItem("userName");
/*setting cart value on nav bar area under cart icon */
document.getElementById('cart').innerHTML="0 \(€\)" ;	
	
		
var attempt = 3; // Count number of attempts.
//Click on Login Checks if the login password are correct
function checkLogin(){
	var username = document.getElementById("userid").value;
	var password = document.getElementById("psw").value;
	
	/* Login will only work for two users as below  - John and Smith - password same as login id*/
	if ( (username == "John" && password == "John") || (username == "Smith" && password == "Smith") ){
		document.getElementById('LoginId').innerHTML  = username ;
		alert ("\nWelcome " +username +"\n You are now in sweetest place JMZ Bakery");
		return window.location.href="../../index.html";  /*Successful login redirect user to home*/
	}
	else{
		attempt --;// Decrementing by one.		
		/* to show login failure  when no more attempts left*/
		if( attempt == 0){					
			showMessage();			
		}else{
			alert("\nYou have "+attempt+" more attempts");
		}
	}	
}

/* to show login failure */
function showMessage( ){
	/* Set login name on navbar to log-in */
	document.getElementById('LoginId').innerHTML = "log-in" ;	
	/* Showing login failure message */
	document.getElementById("showMessage").style.display="block";
	document.getElementById("showMessage").innerHTML  = ("<h3 id=\"loginFail\">You have reached maximum tries. <br/><br/>Please try again later!</h3>"); 
	/* retry - Link to Login page */
	document.getElementById("showMessage").innerHTML  += ("<button class=\"btn btn-success\"  type=\"submit\" onClick=\"loginAgain\(\)\">Try again</button><br/>"); 
	
}

/* to redirect user to login form */
function loginAgain(){
	return window.location.href="login.html";  /*opens login page*/
}
