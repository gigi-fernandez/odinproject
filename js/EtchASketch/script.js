const gameScreen = document.getElementById('squares')

const colorInput = document.getElementById('color')
const randomizeInput = document.getElementById('randomize')

const squareArray = [];

function CreateSreen(size) {
  const gSHeight = Number(gameScreen.clientHeight);
  const gSWidth = Number(gameScreen.clientWidth);
  
  console.log(gSHeight, gSWidth)
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.display = 'block';
    square.setAttribute('style', `height: ${ gSHeight / size}px; width: ${ gSWidth / size}px;`);
    square.textContent = '';
    
    gameScreen.appendChild(square);
    squareArray.push(square);
    
    square.addEventListener('mouseover', (ev)=> {
      if (ev.shiftKey) {
        applyColor(square, colorInput.value)
        return
      }
      if (ev.ctrlKey) {
        clearColor(square)
        return
      }
    })
  }
  console.log(`Screen size: ${gameScreen.childElementCount}`);
}

function colorSquare(square, color) {
  square.style.backgroundColor = color;
  square.style.borderColor = color;
}

function clearColor(square){
  square.style.backgroundColor = 'transparent';
  square.style.borderColor = '#00000014';  
}

function applyColor(square, color) {
  console.log(`applyColor ${color}`)
  if (randomizeInput.checked == false){
    colorSquare(square, color)
    console.log('applyColor not random')
    return
  }
  const randomColor = `#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`
  colorSquare(square, randomColor)
  console.log(`applyColor random ${randomColor}`)
}

const initialDimensions = 32;
CreateSreen(initialDimensions)

function cleanSquares() {
  squareArray.forEach((element, i) => {
    element.remove()
    console.log(`deleting square id ${i}`)
  });
}

const inputDimensions = document.getElementById('dimensions')
inputDimensions.addEventListener('keydown', (ev)=>{
  if (ev.key != "Enter") return;
  let newDimensions = Number(inputDimensions.value)
  if (newDimensions > 64 || newDimensions <= 0){
    alert('Incorrect dimensions. Must be a number between 1 and 64.')
    return
  }
  cleanSquares()
  CreateSreen(newDimensions)
})