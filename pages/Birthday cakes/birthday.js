//Author: Jayasri Kusuma

//Different Sizes - Codes and Descriptions
sizes ={
	'0':"6\" (Serves max.8 persons)",
	'1':"8\" (Serves max.12 persons) + €10",
	'2':"12\" (Serves max.20 persons) + €20",
	'3':"18\" (Serves max.30 persons) + €40"
};	

// Price based on the size - in the order of size listed in the UI
priceList = [ 30, 40, 50, 70 ];

// Additional Price information
extras = {
'message': 3,
'candle': 3
};


localStorage.setItem("userName","John");
var userName = localStorage.getItem("userName"); 
var total = 0;
var prevTotal = 0;

/* JQuery - javascript to invoke calculate function */
$( document ).ready(function() {
	calculate();
	$('.order-calc input, .order-calc select').on('change keyup', function(e) {
		calculate();
	});
});



document.getElementById('cart').innerHTML="0 \(€\)" ;	
document.getElementById('LoginId').innerHTML = userName;

function calculate() {	 
	

	document.getElementById('LoginId').innerHTML = userName ;
	 
	 let shape = $('#shape').val();
	 let size = $('#size').val();
	 let isMessageA = document.getElementsByName('isMessage');
	 let message = $('#message').val();
	 let isCandleA = document.getElementsByName('isCandle');
	 let messagePrice=extras.message;
	 let candlePrice=extras.candle;
	 total=priceList[size];  // Get value from Price array for a given size	
	 
	 //Loop through radiobutton status to get which one is checked
	 for(i = 0; i < isMessageA.length; i++) {
                if(isMessageA[i].checked)
                isMessage = isMessageA[i].value;
				if(isCandleA[i].checked)
                isCandle = isCandleA[i].value;
	}
	 
	 
	 if( isMessage == "Yes" ){		 
		total += messagePrice;	 
	 }

	 
	 if (isCandle == "Yes"){
		 total += messagePrice;
	 }
	 
	 
	$('#price').val(total);  
	

	//Get user Id from the local storage - a global variable used across the website
	//document.getElementById('userId').innerHTML += "Login";
	
	//document.getElementById('cart').innerHTML = ("€"+prevTotal) ;
	
	//alert("Total cost of this Item: "+ total + "\nCost in car so far: "+prevTotal);
	
	
	
}

// ------   Add to Cart
function add2Cart(e){

			//Add total price of cake to previously added items in the cart
			prevTotal += total;
			document.getElementById('cart').innerHTML = ("€"+prevTotal) ;
			alert("Item is successfully added to cart! \n Cost of Item: €"+ total );
			

}

	
	


	
