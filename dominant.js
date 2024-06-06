const dominant = [
  'Ab7', 'A7', 'Bb7', 'B7', 'C7', 'C#7', 'Db7', 'D7', 'Eb7', 'E7', 'F7', 'F#7', 'G7'
];

const chordInput = document.getElementById('chord');
const resultDvision = document.getElementById('result-area');

chordInput.addEventListener(
  "keydown",
  (event) => {
    if(event.code === 'Enter'){
      inputEnter();
    }
  }
);

function inputEnter() {
  //コードの取得
  const chord = chordInput.value;
  if(chord.length === 0){
    return;
  }
  const result = dominantSearch(chord);

  //結果の表示
  resultDvision.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '対応するドミナントコード';
  resultDvision.appendChild(header);
  const paragraph = document.createElement('p');
  paragraph.innerText = result;
  resultDvision.appendChild(paragraph);
};

function dominantSearch (chord) {
  if(chord === 'Db'){
    return dominant[0];
  }else if(chord === 'D'){
    return dominant[1];
  }else if(chord === 'Eb'){
    return dominant[2];
  }else if(chord === 'E'){
    return dominant[3];
  }else if(chord === 'F'){
    return dominant[4];
  }else if(chord === 'F#'){
    return dominant[5];
  }else if(chord === 'Gb'){
    return dominant[6];
  }else if(chord === 'G'){
    return dominant[7];
  }else if(chord === 'Ab'){
    return dominant[8];
  }else if(chord === 'A'){
    return dominant[9];
  }else if(chord === 'Bb'){
    return dominant[10];
  }else if(chord === 'B'){
    return dominant[11];
  }else if(chord === 'C'){
    return dominant[12];
  }else{
return 'a';
};
