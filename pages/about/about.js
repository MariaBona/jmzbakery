//Author: Jayasri Kusuma

// Default values for Login ID and Cart value
document.getElementById('cart').innerHTML="0 \(€\)" ;	


//local storage variable used to store a default value on website first loading - index.html
document.getElementById('LoginId').innerHTML = "John";   


// Scroll back to top function: copied from https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd 
const toTop = () => window.scrollTo({top:0,behavior:'smooth'});
