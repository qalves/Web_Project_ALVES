var index = 1;

function changeSlide(n) {

  index += n
  n = index
  var theSlides = document.getElementsByClassName("slide");

  if (n > theSlides.length) {
    index = 1
  }
  if (n < 1) {
    index = theSlides.length
  }

  for (var i = 0; i < theSlides.length; i++) {
    theSlides[i].style.display = "none";
  }
  theSlides[index - 1].style.display = "block";
}