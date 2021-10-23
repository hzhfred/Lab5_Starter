// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  var curVoice = null;
  var curText = '';

  var voiceSelect = document.querySelector('select');

  voices.map((voice,i)=>{
    let option = document.createElement('option');
    option.value = i;
    option.textContent = voice.name + ' (' + voice.lang + ')';
    voiceSelect.appendChild(option);
  });

  const selectVoice = document.querySelector('select');
  selectVoice.addEventListener('change', (event) => {
    curVoice = voices[event.target.value];
  })

  const selectText = document.querySelector('textarea');
  selectText.addEventListener('change', (event) => {
    curText = event.target.value;
  })

  const buttonClick = document.querySelector('button');
  buttonClick.addEventListener('click', (event) => {
    if (curVoice == null || curText == ''){return;}
    var utterThis = new SpeechSynthesisUtterance(curText);
    utterThis.voice = curVoice;
    synth.speak(utterThis);

    checkStatus = setInterval(() => {
      let img = document.querySelector("[alt='Smiling face']");
      if (synth.speaking){
        
        img.src = './assets/images/smiling-open.png';

      } else {
        img.src = './assets/images/smiling.png';
        clearInterval(checkStatus);
      }
    }, 100);
    

  })

}