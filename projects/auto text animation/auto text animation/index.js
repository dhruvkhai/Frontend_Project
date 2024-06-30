const containerEl = document.querySelector(".container");

const career = [
  "Youtuber","Web Developer","Student","Trekker","Instructor",];

let careerIndex = 0;
let characterIndex = 0;

updateText()

function updateText() {
  characterIndex++;
  
  containerEl.innerHTML = `<h1> I am a ${career[careerIndex].slice(0,characterIndex)} </h1>`

  if(characterIndex=== career[careerIndex].length){
     careerIndex++;
     characterIndex=0;
  }

  if (careerIndex === career.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 250);
}

