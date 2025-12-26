const speech = new SpeechSynthesisUtterance();
speech.text = "Luciano go to back";
window.speechSynthesis.speak(speech);
const lines = ["LUCIANO", "GO", "TO", "BACK"];
let currentIndex = 0;
setTimeout(function () {
  let loop = setInterval(function () {
    document.getElementById("display").innerText = lines[currentIndex];
    if (currentIndex >= lines.length - 1) {
      clearInterval(loop);
    } else {
      currentIndex++;
    }
  }, 200);
}, 300);
