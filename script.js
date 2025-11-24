// A simple typed text effect
const phrases = ["Web Developer", "Designer", "Student"];
let part = 0;
let partIndex = 0;
let intervalVal;

const typedTextSpan = document.getElementById("typed-text");

function type() {
  const text = phrases[part].substring(0, partIndex + 1);
  typedTextSpan.textContent = text;
  partIndex++;

  if (text === phrases[part]) {
    clearInterval(intervalVal);
    setTimeout(() => {
      intervalVal = setInterval(deleteText, 100);
    }, 1500);
  }
}

function deleteText() {
  const text = phrases[part].substring(0, partIndex - 1);
  typedTextSpan.textContent = text;
  partIndex--;

  if (text === "") {
    clearInterval(intervalVal);
    part = (part + 1) % phrases.length;
    partIndex = 0;
    setTimeout(() => {
      intervalVal = setInterval(type, 100);
    }, 200);
  }
}

intervalVal = setInterval(type, 100);

function submitForm(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  // You can replace this with real form submission (backend) if you want
}
