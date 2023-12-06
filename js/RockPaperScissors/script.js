const choices = ["rock", "paper", "scissors"];
const winningPair = [
  {win:"scissors", lose:"paper"},
  {win:"paper", lose:"rock"},
  {win:"rock", lose:"scissors"}
]

function getComputerChoice(){
  return choices[Math.floor(Math.random() * choices.length)];
}

const rivalChoice = document.getElementById('rival-choice');
const black = document.createElement('img')
rivalChoice.appendChild(black)
const score = document.getElementById("score")
const gameOver = document.getElementById("game-over")

function changeCompIcon(choice){
  rivalChoice.textContent = ''
  rivalChoice.src = `./images/${choice}.png`
  black.src = './images/none.png'
  black.style.zIndex = '2'
}

function playRound(userChoice){
  if (isGameOver()) {
    console.log("Game finished. Restarting...")
    newGame()
    return
  }
  const compChoice = getComputerChoice()
  userChoice = String(userChoice).toLowerCase()
  changeCompIcon(compChoice)
  let result = ''
  if (userChoice == compChoice) result = "draw"
  else if (winningPair.find(pair=>(pair.win == userChoice && pair.lose == compChoice))) result = "win"
  else result = "lose"

  console.log(`User: ${userChoice}, Comp: ${compChoice} -> ${result}`)
  executeResult(result)
}

const maxPoints = 5
let userPoints = 0
let compPoints = 0

function executeResult(result){
  if (result == "draw") {
    console.log(`repeating round`)
  }
  else if (result == "win") {userPoints++}
  else {compPoints++};
  score.textContent = `You: ${userPoints} | Computer: ${compPoints}`

  if (!isGameOver()) return

  gameOver.style.fontSize = '16px'
  if (userPoints>compPoints) {
    console.log("You won!")
    gameOver.textContent = `You won!`
  }
  else {
    console.log("You lost! Try again.")
    gameOver.textContent = `You lost! Try again.`
  }
}

function newGame(){
  userPoints = 0
  compPoints = 0
  rivalChoice.src = './images/none.png'
  score.textContent = `You: ${userPoints} | Computer: ${compPoints}`
  gameOver.textContent = ''
  gameOver.style.fontSize = '0px'
}

function isGameOver(){
  if (userPoints >= maxPoints || compPoints >= maxPoints) return true
  return false
}

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', ()=>playRound('rock'))
paperButton.addEventListener('click', ()=>playRound('paper'))
scissorsButton.addEventListener('click', ()=>playRound('scissors'))