// alert("zuba");



var n = document.querySelectorAll('button').length;
// alert(n);
//detecting button press
while(n--){
  document.querySelectorAll('button')[n].addEventListener("click", function (){
    // console.log(this.innerHTML);
    var bih = this.innerHTML;
    makeSound(bih);
    buttonAnimation(bih);
  })
}


//detecting key press
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function buttonAnimation(key)
{
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}


function makeSound(key)
{
  switch (key) {
    case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;
    case "a":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
      break;
    case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;
    case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
    case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;
    case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;
    case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;
    default: alert('you are out of mind');

  }

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
