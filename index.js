//Author: Zouboulia

//W3Schools Javascript slideshow below: 
let slideIndex = 1;
showSlides(slideIndex); //calls function showSlides and passing slideIndex

function plusSlides(n) {
  showSlides(slideIndex += n); //when plusSlides is clicked, index of the image that is showing changes by -1 or 1 according to which arrow was clicked
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//creating function showSlides():
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //fetching the slides by Class "mySlides from html document"
  //When the index exceed the total amount of images, the index is reset to 1, so it goes back to slide 1
  if (n > slides.length) {
    slideIndex = 1
    }  
  //if slideIndex is lower than 1 then it needs to be set to the total number of slides again, so it will be in this case index 4, so that it goes back around and executes the function that shows the slide according to the index.
  if (n < 1) {
    slideIndex = slides.length
    }
  //We hide all the images in the slideshow with this for loop that contains the array of images "slides"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  //We then display only the image according to our index 
  /*Since arrays start at index 0 and our slides start at index 1, the slideIndex passed into the array is decreased by 1 such as our image indexes go from 0 to 3, zero included, instead of from 1 to 4.*/
  slides[slideIndex-1].style.display = "block";  
}




// Code copied from: https://github.com/jamiewilson/form-to-google-sheets
// Connected Form Tutorial: https://www.youtube.com/watch?v=a8Om25FbaJA

  const scriptURL = 'https://script.google.com/macros/s/AKfycbycuxmeXUKvBUDqfJjYuehJVpkRWl2xFhZ1rRAiaY4iVk5pUONmfJc21cJll7wl2HE/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Thank you for subscribing to our newsletter!" //adding span message here as response
        //creating timeout function so message disappears after 2000ms
        setTimeout(function(){
          msg.innerHTML= "" //span msg is now empty
        }, 2000)
        form.reset() //resets the form
      })
      .catch(error => console.error('Error!', error.message))
  })
  
 
 
 // Default values for Login ID 
 localStorage.setItem("userName","John");   //local storage variable used to store a default value on website first loading - index.html
 document.getElementById('LoginId').innerHTML = localStorage.getItem("userName");
// Default values for Cart Value
document.getElementById('cart').innerHTML="0 \(€\)" ;	


