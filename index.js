let numOfDrumBtns = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   let audio = new Audio("sounds/tom-1.mp3");
   audio.play();
  });
}

