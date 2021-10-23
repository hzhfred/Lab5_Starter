// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var curimg = '';
  const jsConfetti = new JSConfetti();

  const selectHorn = document.querySelector('#horn-select');
  selectHorn.addEventListener('change', (event) => {
    let img = document.querySelector("[alt='No image selected']");
    let audio  = document.querySelector("audio");

    if (event.target.value === 'air-horn'){
      img.src = './assets/images/air-horn.svg';
      audio.src = './assets/audio/air-horn.mp3';
      curimg = 'air';
    }
    else if (event.target.value === 'car-horn'){
      img.src = './assets/images/car-horn.svg';
      audio.src = './assets/audio/car-horn.mp3';
      curimg = 'car';
    }
    else if (event.target.value === 'party-horn'){
      img.src = './assets/images/party-horn.svg';
      audio.src = './assets/audio/party-horn.mp3';
      curimg = 'party';
    }
  });

  var changeVolume = document.querySelector('#volume');
  changeVolume.addEventListener('change',(event) => {
    console.log(event.target.value);
    let img = document.querySelector("[alt='Volume level 2']");
    let audio  = document.querySelector("audio");

    if (event.target.value == 0){
      img.src = './assets/icons/volume-level-0.svg';
    }
    else if (event.target.value >= 1 && event.target.value < 33){
      img.src = './assets/icons/volume-level-1.svg';
    }
    else if (event.target.value >= 33 && event.target.value < 67){
      img.src = './assets/icons/volume-level-2.svg';

    }
    else if (event.target.value >= 67){
      img.src = './assets/icons/volume-level-3.svg';
    }
    audio.volume = event.target.value / 100;
  });

  var playSound = document.querySelector('button');
  playSound.addEventListener('click',(event) => {
    console.log('button clicked');
    let audio  = document.querySelector("audio");
    audio.play();
    if (curimg === 'party'){
      jsConfetti.addConfetti();
    }

  });



}