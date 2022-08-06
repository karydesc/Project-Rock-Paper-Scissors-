function GetComputerChoice() {
  const opt = ["rock","paper","scissors"];
  const random = Math.floor(Math.random() * opt.length);
  return opt[random]
}

function Round(playerChoice,computerSelection){
   if (playerChoice.toLowerCase()===computerSelection){
    return "Tie"
   }
    else if (playerChoice.toLowerCase()==="rock"){
      if(computerSelection==="paper"){
        return "Computer wins"
      }else{
        return "Player wins"
    }
    }
    else if (playerChoice.toLowerCase()==="paper"){
        if(computerSelection==="scissors"){
            return "Computers wins"
        }else{
            return "Player wins"
        }

    }
    else if (playerChoice.toLowerCase()==="scissors") {
        if (computerSelection==="rock"){
            return "Computer wins"
        }else{
            return "Player wins"
        }

    }




  }

  function Game(){
    globalThis.choice=window.prompt("Enter your choice: ");
    globalThis.computerSelection = GetComputerChoice();
    globalThis.results = Round(choice,computerSelection);
  }

let retry;
while(retry!="no"){
  let score = window.prompt("Winning score: ");
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore<score && computerScore<score){
    Game();
    if (results=="Player wins"){
        playerScore++;
        window.alert(`You entered: '${choice}' and the computer chose: '${computerSelection}'... the result is '${results}'`)
    }else if(results=="Computer wins"){
        computerScore++;
        window.alert(`You entered: '${choice}' and the computer chose: '${computerSelection}'... the result is '${results}'`)
    }
     else{
        window.alert("Tie!")
     }

    
    window.alert(`Player score: ${playerScore}, Computer score: ${computerScore}`);
  }
  window.alert(`Game is over! final score: P:${playerScore}-C:${computerScore}`)
  retry=window.prompt("Would you like to try again?")
    
  
}
   
  


    
   

  








  


