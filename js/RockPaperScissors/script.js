const choices = ["rock", "paper", "scissors"];
const winningPair = [
  {win:"scissors", lose:"paper"},
  {win:"paper", lose:"rock"},
  {win:"rock", lose:"scissors"}
]

function getComputerChoice(){
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, compChoice){
  userChoice = String(userChoice).toLowerCase()
  compChoice = String(compChoice).toLowerCase()
  console.log(userChoice, compChoice)
  if (userChoice == compChoice) return "draw"
  if (winningPair.find(pair=>(pair.win == userChoice && pair.lose == compChoice))) return "win"
  return "lose"
}

const maxRounds = 5
let userPoints = 0
let compPoints = 0
function game(){
  userPoints = 0
  compPoints = 0
  for (let round = 0; round < maxRounds; round++) {
    let input = prompt("Rock, paper or scissors?")
    while(!choices.includes(String(input).toLowerCase())){
      console.log("That is not a valid choice! Choose again!")
      input = prompt(`Choose again.
      Rock, paper or scissors?`)
    }
    const result = playRound(input, getComputerChoice())
    console.log(result)
    if (result == "draw") {
      console.log(`repeating round`)
      round = round - 1
    }
    else if (result == "win") {userPoints++}
    else {compPoints++};
  }

  if (userPoints>compPoints) console.log("You won!")
  else console.log("You lost! Try again.")
}

game()