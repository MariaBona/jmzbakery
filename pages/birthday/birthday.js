//Author: Jayasri Kusuma


priceList = [ 30, 40, 50, 70 ]; // Price based on the size - in the order of size listed in the UI
var messagePrice=1; // price for message
var candlePrice=3;  // price for Candle
var total = 0;  //total cost of the cake
var prevTotal = 0;  //previous value in cart
var userName = "Log-In"; //Default value for username when page loads

/* JQuery - javascript to invoke calculate cake cost - this function is called whenever input is selected, radio button checked  */
$( document ).ready(function() {
	calculate();  // calculate total value on page load
	/* call  calculate () whenever input is selected, radio button checked in the order-calc area */
	$('.order-calc input, .order-calc select').on('change keyup', function(e) {
		calculate();
	});
});

document.getElementById('cart').innerHTML="0 \(€\)" ;	 //cart value on navbar is written - cart is identified by id =cart"
document.getElementById('LoginId').innerHTML = userName; //Login value on navbar is written - Login is identified by id =LoginId"

function calculate() {	 		
	 
	 /* reads form values based on their ids  (size, message, candle) */	 
	 let size = $('#size').val();	 //size value identified using id=size
	 let isMessageA = document.getElementsByName('isMessage'); //Get radio button values for Message needed	 
	 let isCandleA = document.getElementsByName('isCandle'); //Get radio button values for Candle needed
	 
	 total=priceList[size];  // For a given "size", get price value from Price array
	 
	 //Loop through radiobutton status to get which one is checked  - for message/name and candle
	 for(i = 0; i < isMessageA.length; i++) {
                if(isMessageA[i].checked){
					isMessage = isMessageA[i].value;
				}
				if(isCandleA[i].checked){
					isCandle = isCandleA[i].value;
				}
	}
	 
	 /* when message required is checked price is increased by messagePrice */
	 if( isMessage == "Yes" ){		 
		total += messagePrice;	 
	 }

	 /* when candle required is checked price is increased by candlePrice */
	 if (isCandle == "Yes"){
		 total += candlePrice;
	 }
	 
	 /* fills the form for Total Price  - identified by id=price*/
	$('#price').val(total);  	
	
}

// ------   Add to Cart
function add2Cart(e){			
			prevTotal += total; //Add total price of cake to previously added items in the cart			
			document.getElementById('cart').innerHTML = ("€"+prevTotal) ; // updates  cart value on navbar for id=cart			
			alert("Item is successfully added to cart! \n Cost of Item: €"+ total ); 			

}

	
	


	
