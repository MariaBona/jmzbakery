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

//Default value for username when page loads
localStorage.setItem("userName","John");
var userName = localStorage.getItem("userName"); 
var total = 0;  //total cost of the cake
var prevTotal = 0;  //previous value in cart

/* JQuery - javascript to invoke calculate cake cost - this function is called whenever input is selected, radio button checked  */
$( document ).ready(function() {
	calculate();  // calculate value on page load
	/* call  calculate () whenever input is selected, radio button checked in the order-calc area */
	$('.order-calc input, .order-calc select').on('change keyup', function(e) {
		calculate();
	});
});


//cart value on navbar is written - cart is identified by id =cart"
document.getElementById('cart').innerHTML="0 \(€\)" ;	
//Login value on navbar is written - Login is identified by id =LoginId"
document.getElementById('LoginId').innerHTML = userName;

function calculate() {	 		
	 
	 /* reads form values based on their ids  (shape, size, message, candle) *
	 /* ex: shape value identified using id=shape*/
	 let shape = $('#shape').val();
	 let size = $('#size').val();
	 let isMessageA = document.getElementsByName('isMessage');
	 let message = $('#message').val();
	 let isCandleA = document.getElementsByName('isCandle');
	 let messagePrice=extras.message;
	 let candlePrice=extras.candle;
	 total=priceList[size];  // Get value from Price array for a given size	
	 
	 //Loop through radiobutton status to get which one is checked  - for message/name and candle
	 for(i = 0; i < isMessageA.length; i++) {
                if(isMessageA[i].checked)
                isMessage = isMessageA[i].value;
				if(isCandleA[i].checked)
                isCandle = isCandleA[i].value;
	}
	 
	 /* when message required is checked price is increased by messagePrice */
	 if( isMessage == "Yes" ){		 
		total += messagePrice;	 
	 }

	 /* when candle required is checked price is increased by messagePrice */
	 if (isCandle == "Yes"){
		 total += messagePrice;
	 }
	 
	 /* fills the form for Total Price  - identified by id=price*/
	$('#price').val(total);  	
	
}

// ------   Add to Cart
function add2Cart(e){

			//Add total price of cake to previously added items in the cart
			prevTotal += total;
			// updates navbar cart value for id=cart
			document.getElementById('cart').innerHTML = ("€"+prevTotal) ;
			alert("Item is successfully added to cart! \n Cost of Item: €"+ total );
			

}

	
	


	
