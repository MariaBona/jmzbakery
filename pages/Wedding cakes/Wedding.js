 
 document.getElementById('LoginId').innerHTML = "log-in";
// Default values for Cart Value
document.getElementById('cart').innerHTML="0 \(€\)" ;		


//Contact us button redirect to contact page
    document.getElementById("wed-Btn").onclick = function () {
        window.location.href = "../contact/contact.html";
    };


//image on scroll animation (https://cssanimation.rocks/scroll-animations/#alternate-approach-intersection-observer)
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

            var elementsToShow = document.querySelectorAll('.wed-container');

            function loop() {

                elementsToShow.forEach(function (element) {
                  if (isElementInViewport(element)) {
                    element.classList.add('is-visible');
                  } else {
                    element.classList.remove('is-visible');
                  }
                });
              
                scroll(loop);
              }

              loop();
              
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  
 //Scroll back to top function: copied from https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd 
    const toTop = () => window.scrollTo({top:0,behavior:'smooth'});





  

