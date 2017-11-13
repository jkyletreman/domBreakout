// First change line 18
document.querySelector('h3').textContent = "I'm different!";

// document.querySelector('h3').innerHTML = "Method 2!"

// let header = document.querySelector('h3');
// header.innerHTML = 'Method 3';


// Second change line 23
// let box = document.getElementsByClassName('red');
// box[0].style.background = 'blue';

// Method 2
let box2 = document.querySelector('.red');
box2.style.background = 'blue';

// Third change line 28
let boxes = document.getElementsByClassName('empty');

function addThree(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('red');
  }
}
addThree(boxes);
