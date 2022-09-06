let Start = document.querySelector(".startbutton");
let words = document.querySelector(".words");
let newScore = document.querySelector(".scoredisplay .score");
let newTime = document.querySelector(".time");
let points = 0;
let seconds = 120;
let holderwrap;
let typed;
let newgame = document.querySelector(".restartbutton")
let highScore = 0
let highScoreElement = document.querySelector(".highscore .score");
let highScorePlayer = document.querySelector(".winnerName");
let nextlevel = document.querySelector(".level2Button");
let newName = document.querySelector(".playerName");
let level = 1;
let winnerName = "";
let Name;



const wordList1 = ['ACRES','ACROSS','ACT','ACTION','ACTIVE',
'ADD','ADULT',
'ADVICE','AFFECT','AFRAID','AFTER','AGAIN','AGAINST','AGE',
'AGO','AGREE','AHEAD','AID','AIR','ALIKE','ALIVE',
'ALL','ALLOW','ALMOST','ALONE','ALONG']


const wordList2 = [ 'BOW','BOWL','BOX','BOY','BRAIN','BRANCH','BRASS','BRAVE']
const wordList3 = ['ADVENTURE','ACCOUNT','ACCURATE','ADDITION','ADDITIONAL',
'ADJECTIVE','ACTUAL','ACTUALLY','AIRPLANE','AFTERNOON','ACTIVITY']




const countdown = () => {
    points = 0;
 		let timer = setInterval(() => {
            Start.disabled = true;
    		seconds--;
    		newTime.innerHTML = seconds;
    		if (seconds === 0) {
    			alert("Game over! Your score is " + points);
    			newScore.innerHTML = "0";
    			words.innerHTML = "";
    			Start.disabled = false;
    			clearInterval(timer);
    			seconds = 10;
    			newTime.innerHTML = "10";
                	
                if(highScore < points){
                    highScore = points;
                    highScoreElement.innerHTML = highScore;
                    winnerName = Name;
                    highScorePlayer.innerHTML = winnerName;
                    
                 }
                
    		}
 		}, 1000);
}




const random = (list) => {
    words.innerHTML = "";
  		let randomword = Math.floor(Math.random() * list.length ) ;
  		let wordArray = list[randomword].split("");
  		for (let i = 0; i < wordArray.length; i++) { 
  			let holder = document.createElement("holder");
  			holder.classList.add("holder");
  			holder.innerHTML = wordArray[i];
  			words.appendChild(holder);
  		}
  		holderwrap = document.querySelectorAll(".holder");
}

Start.addEventListener("click", (e) => {
     Name = window.prompt("Enter your name: ");
    newName.innerHTML = Name;
    
    countdown();
    random(wordList1);
    Start.disabled = true;	
    
});


const typing = (e) => {
    typed = String.fromCharCode(e.which);
    for (let i = 0; i < holderwrap.length; i++) {
        if (holderwrap[i].innerHTML === typed) { 
            if (holderwrap[i].classList.contains("bg")) { 
                continue;
            } else if 
            (holderwrap[i].classList.contains("bg") === false && holderwrap[i-1] === undefined ||
             holderwrap[i-1].classList.contains("bg") !== false ) { 
                holderwrap[i].classList.add("bg");
                break;
            }
        }
    }
    let checker = 0;
    for (let j = 0; j < holderwrap.length; j++) { 
       console.log(holderwrap[j]);
        if (holderwrap[j].className === "holder bg") {
            checker++;
        }
        console.log(checker, holderwrap);
        if (checker === holderwrap.length) { 
            words.classList.add("animated");
            words.classList.add("fadeOut");
            points++; 
            newScore.innerHTML = points; 
            document.removeEventListener("keydown", typing, false);
            setTimeout(() => {
                words.className = "words";
                let levelChange = document.querySelector(".levels")
                if(points < 2 ) {
                    random(wordList1); 
                    levelChange.innerHTML= "1"

                }
                else if (points >= 2 && points < 3){
                    random(wordList2); 
                    levelChange.innerHTML= "2"
                }
                else if(points >=3){
                    random(wordList3); 
                    levelChange.innerHTML= "3"
                }
                
                // random(wordList1); 
                document.addEventListener("keydown", typing, false);
            }, 400);
        }

    }
}

document.addEventListener("keydown", typing, false);



newgame.addEventListener('click', () => {
    alert(`The winner is ${winnerName}`)
    location.reload();
});







