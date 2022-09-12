let Start1 = document.querySelector(".Player1button");
let Start2 = document.querySelector(".Player2button");
let words = document.querySelector(".words");
let newScore = document.querySelector(".scoredisplay .score");
let Score1 = document.querySelector(".player1score");
let Score2 = document.querySelector(".player2score");
let newTime = document.querySelector(".time");
let points = 0;
let seconds = 10;
let holderwrap;
let typed;
let newgame = document.querySelector(".restartbutton")
let highScorePlayer = document.querySelector(".winnerName");
let nextlevel = document.querySelector(".level2Button");
let newName1 = document.querySelector(".player1Name");
let newName2 = document.querySelector(".player2Name");
let level = 1;
let winnerName = "";
let Name;
let levelChange = document.querySelector(".levels")
let audio = document.querySelector(".music")
let currentLetter = 0;
Start2.disabled = true;



const Instructions = "<ul><li>Welcome to the TypeRacer!!</li><li>This is a Two Player Game.</li><li>First player would Click on Player1 button to play.</li><li>Enter name and press OK to start the game.</li><li>There will be 60 seconds of play time.</li><li>Level keeps going up as player keeps typing.</li><li>After the time is up, score pops up.</li><li>Second player would Click on Player2 button to play .</li><li>Enter name and press OK to start the game.</li><li>There will be 60 seconds of play time.</li><li>Level keeps going up as player keeps typing.</li><li>After the time is up, score pops up.</li><li>Winner is displayed!!</li><li>Click on Reset Game to start the game from the beginning.</li></ul>"
const displayButton = () => {
    let DisplayInstructions = document.querySelector(".instructionsdisplay")
    DisplayInstructions.innerHTML = `${Instructions}` 
    if(DisplayInstructions.innerHTML === `${Instructions}`){
        DisplayInstructions.classList.toggle("hide")
        }
}


const wordList1 = ['ACT','AGE','AGO','AID','AIR','ALL','ALSO','AM','ANTS','AT','ATE','ATOM','AWAY',
'BABY','BACK','BAD','BAG','BALL','BAND','BANK','BAR','BARE','BARK','BARN','BASE','BAT','BE',
'BEE','BEEN','BELL','BELT','BEND','BENT','BEST','BET','BILL','BIT','BITE','BY','CAGE','CAKE','CALL','CALM','CAME',
'CAMP','CAN','CAP','CAR','CARD','CARE','CASE','CAST','CAT','CELL','CEN','CITY','CLAY','COLD','COME','COOK','DID','DIE','DIG','DIRT',
'DISH','DO','DOES','DOG','DOLL','DONE','DOOR','DRAW','DREW','DROP','DRY','DUCK','DUE','DUG','DULL','DUST','DUTY','EACH',
'EAR','EARN','EAST','EASY','EAT','EDGE','EGG','ELSE','EMPTY','END','EVER','EYE','FACE','FACT','FAIR','FALL','FAR','FARM','FAST',
'FAT','FEAR','FED','FEED','FEEL','FEET','FILM','FIND','FINE','GAIN','GAME',,'GAS','GATE','GAVE','GET','GIFT','GIRL','GIVE',
'GLAD','GO','GOES','GOLD','GONE','GOOD','HAVE','HAY','HE','HOT','HOUR','HOW','HUGE','HUNG','HUNT','HURT','ICE','IDEA',
'IF','ILL','IN','INCH','IRON','IS','IT','ITS','JACK','JAR','JET','JOB','JOIN','JOY','JUMP','JUST','KEEP','KEPT','KEY','KIDS','KILL',
'KIND','KNEW','LACK','LADY','LAID','LAKE','LOST','LOT','LOUD','LOVE','MAD','MADE','MAN','MANY','MAP','MARK','MASS','MAY','ME','MEAL',
'MEAN','MICE','MILK','MILL','MIND','MINE','NEAR','NEST','NEW','NEWS','NEXT','NICE','NINE','OIL','OLD','ON','ONCE','ONE','ONLY','ONTO',
'PICK','PICTURE','PIE','PIG','PILE','PILOT','PINE','PINK','PIPE','RACE','RAIN','RAN','RATE','RAW','RAYS','READ','REAL',
'REAR','RUN','SALE','SALT','SAME','SAND','SANG','SAT','SAVE','SAW','SAY','SEA','SEE','SEED','SHIP','SON','SONG','SOON','SORT','TALK',
'TALL','TANK','TAPE','TASK','TAX','TEA','TEAM','TELL','THIN','TILL','TIME','TIN','TINY','TIP','UP','UPON','VAST','VERB','VERY','WAIT',
'WALK','WALL','WANT','WAR','WARM','WARN','WAS','WASH','WELL','WENT','WERE','WEST','YARD','YEAR','YES','YET','YOU','YOUR','ZERO','ZOO'];


const wordList2 = ['ADDITION','ADDITIONAL','ADJECTIVE','ADVENTURE','APARTMENT','APPEARANCE','APPROPRIATE','ARRANGEMENT','ATMOSPHERE','AUTOMOBILE',
'AVAILABLE','BASEBALL','BEAUTIFUL','BEGINNING','BELIEVED','BREAKFAST','BREATHE','BREATHING','BREEZE','BROKEN','BROTHER','BROUGHT','CAPTAIN','CAPTURED',
'CAREFULLY','CENTURY','CHARACTER','CHARACTERISTIC','CHARGE','CHART','CLOTHES','CLOTHING','COMFORTABLE',
'COMPLETELY','COMPLEX','COMPOSED','COMPOSITION','COMPOUND','CONCERNED','CONDITION','CONGRESS','CONNECTED','CONSIDER','CONSIST','CONSONANT','CONSTANTLY','CONSTRUCTION','CONTINENT','CONTINUED',
'CONVERSATION','CORRECTLY','CREATURE','DANGEROUS','DARKNESS','DAUGHTER','DECLARED','DEFINITION','DESCRIBE','DESERT','DIAMETER','DIFFERENCE','DIFFERENT',
'DIFFICULT','DIFFICULTY','DIRECTION','DISCOVERY','DISCUSSION','DRIVING','EITHER','ELECTRIC','ELECTRICITY','ELEMENT','ELEPHANT','ELEVEN','ESPECIALLY','ESSENTIAL','ESTABLISH',
'EVENTUALLY','EVERYBODY','EVERYONE','EVERYTHING','EVERYWHERE','EVIDENCE','EXACTLY',,'EXCHANGE','EXCITED','EXCITEMENT','EXCITING','EXCLAIMED',
'EXERCISE','EXPERIENCE','EXPERIMENT','EXPLAIN','EXPLANATION','EXPLORE','EXPRESS','EXPRESSION','FACTORY','FAILED','FALLEN','FAMILIAR','FAMILY',
'FAMOUS','FASTENED','FATHER','FAVORITE','FEATHERS','FEATURE','FIGHTING','FINALLY','FINEST','FINGER','FINISH','FIREPLACE','FLOATING','FOOTBALL',
'FORGOTTEN','FREQUENTLY','GASOLINE','GENERALLY','GOVERNMENT','GRABBED','GRADUALLY','GRANDFATHER','GRANDMOTHER','HANDSOME','HOSPITAL','HURRIED',
'HUSBAND','IMAGINE','IMMEDIATELY','IMPORTANCE','IMPORTANT','IMPOSSIBLE','INCLUDE','INCLUDING','INCREASE','INDEPENDENT','INDICATE','INDIVIDUAL',
'INDUSTRIAL','INDUSTRY','INFLUENCE','INFORMATION','INTRODUCED','INVENTED','INVOLVED','JOURNEY','JUNGLE','KNOWLEDGE','LANGUAGE','LEATHER','LIMITED',
'MACHINERY','MATHEMATICS','MOUNTAIN','MOVEMENT','NATURALLY','NEIGHBOR','NEIGHBORHOOD','NEWSPAPER','OBSERVE','OCCASIONALLY',
'ORDINARY','ORGANIZATION','PARAGRAPH','PARTICLES','PARTICULAR','PLANNING','PRESIDENT','PRIMITIVE','PRINCIPAL','PROBABLY','PROTECTION','QUESTION','QUICK',
'QUICKLY','QUIETLY','RECOGNIZE','RELATED','RELATIONSHIP','RELIGIOUS','REMAIN','REMARKABLE','REMEMBER','REPRESENT','REQUIRE','RESEARCH','RESPECT',
'SATELLITES','SATISFIED','SCIENTIFIC','SCIENTIST','SIMPLEST','SOMEONE','SOMETHING','SOMETIME','SOMEWHERE','SOUTHERN','STANDARD','STRONGER','STRUCK',
'STRUCTURE','STRUGGLE','SUCCESSFUL','SURPRISE','SURROUNDED','TELEPHONE','TELEVISION','TEMPERATURE','THEMSELVES','THOUGHT','THOUSAND','THROUGH',
'THROUGHOUT','TOGETHER','TOMORROW','TRANSPORTATION','UNDERLINE',
'UNDERSTANDING','UNIVERSE','USUALLY','VALLEY','VALUABLE','VARIETY','VEGETABLE','VERTICAL','WELCOME','WHEREVER','WHETHER','WHISPERED',
'WILLING','WONDER','WONDERFUL','WRAPPED','WRITE','WRITER','WRITING','WRITTEN','YESTERDAY','YOUNGER','YOURSELF','YOUTH','ZIRAFFE'];



const wordList3 = ['THE TRAIN LEAVES IN 10 MINUTES','100 DUCK SIZED HORSES','90S KIDS WILL REMEMBER','AAND ITS GONE','SHE ENJOYS COOKING',
'ALEX FROM TARGET','ALEXA PLAY DESPACITO','ALL THOSE CHICKENS','IM THE CAPTAIN NOW','I LIKE TURTLES','ICE AGE BABY','ITS A TRAP',
'THE CAR TURNED THE CORNER','SHE OPENED THE DOOR', 'KELLY TWIRLED IN CIRCLES', 'MAKE THE BEST OF THINGS','SHE LIKES BANANA', 
'OPEN THE JAR CAREFULLY','HE LOVES FISH TACOS', 'I ATE DINNER','NOTHING BEATS A COMPLETE SENTENCE','ITS FREE REAL ESTATE','ITS GONNA BE MAY','ITS MONDAY MY DUDES','I UNDERSTOOD THAT REFERENCE'];



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

const countdown = () => {
    points = 0;
 		let timer = setInterval(() => {
    		seconds--;
    		newTime.innerHTML = seconds;
    		if (seconds === 0) {
    			alert("Game over! Your score is " + points);
                if(newName1.innerHTML != '' && newName2.innerHTML === ''){
                    Score1.innerHTML = points;
                }
                else{
                    Score2.innerHTML = points;
                }
    			words.innerHTML = "";
    			clearInterval(timer);
    			seconds = 10;
    			newTime.innerHTML = "0";
                if(Start2.disabled === false){
                    highScorePlayer.innerHTML = ''
                }
                else if(Score2.innerHTML > 0 && Score2.innerHTML  < Score1.innerHTML){
                    highScorePlayer.innerHTML = `Winner is ${newName1.innerHTML}`
                 }
                 else if(Score1.innerHTML  === Score2.innerHTML){
                    highScorePlayer.innerHTML = "Tie Game, play again"; 
                 }
                 else{
                    highScorePlayer.innerHTML = `Winner is ${newName2.innerHTML}`
                 } 
                 
                
    		}
 		}, 1000);
}



Start1.addEventListener("click", () => { 	
     Name = window.prompt("Enter your name: ");
     if(Name === null || Name === '' ){
        text = "No name provided! Click on Player button again and enter your Name to start playing"
        alert(text);
        return;
    }
    else{
        text = `Hello ${Name} !`
    }
    alert(text);
    newName1.innerHTML = Name;
    Start1.disabled = true;
    Start2.disabled = false;
    
    countdown();
    random(wordList1);  
});


Start2.addEventListener("click", () => {
    Name = window.prompt("Enter your name: ");
    if(Name === null || Name === '' ){
        text = "No name provided! Click on Player button again and enter your Name to start playing"
        alert(text);
        return;
   }
   else{
       text = `Hello ${Name} !`
   }
   alert(text);
   Start2.disabled = true;
   newName2.innerHTML = Name;
   countdown();
   random(wordList1); 
});


const typing = (str) => {
    typed = String.fromCharCode(str.which);
    currentLetter = currentLetter + 1;
    for (let i = 0; i < holderwrap.length; i++) {
        if (holderwrap[i].innerHTML === typed) { 
            if (holderwrap[i].classList.contains("bg")) { 
                continue;
            } else if 
            (holderwrap[i].classList.contains("bg") === false && holderwrap[i-1] === undefined ||
             holderwrap[i-1].classList.contains("bg") !== false ) { 
                holderwrap[i].classList.add("bg");
                if(currentLetter != i)
                {
                    currentLetter = i;
                }   
                break;
            }
        }
        else if(holderwrap[currentLetter].innerHTML != typed && holderwrap[i].className != "holder bg")
        {
            currentLetter = currentLetter - 1;
            audio.play();
            continue;
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
            points++; 
            newScore.innerHTML = points; 
            document.removeEventListener("keydown", typing, false);
            setTimeout(() => {
                words.className = "words";
                
                if(points < 2 ) {
                    random(wordList1); 
                    levelChange.innerHTML= "1"
                }
                else if (points >= 2 && points < 3){
                    random(wordList2); 
                    levelChange.innerHTML= "2"
                }
                else if(points >= 3){
                    random(wordList3); 
                    levelChange.innerHTML= "3"
                } 
                document.addEventListener("keydown", typing, false);
            }, );
        }

    }
}

document.addEventListener("keydown", typing, false);



newgame.addEventListener('click', () => { 
    location.reload();
});




