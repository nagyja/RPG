//a message informing the player to select a character
//character selection click -> lock out all other selections and hides them from display, loads the stats and characteristics unique to the selected character.
//radndom selection of opponents from the opposite lightside/darkside affiliation, random order of oppoennts.
//display larger images of the two characters that are fighting.
//player clicks to select their mode of attack; random selection of opponent's mode of attack
//attack priority as a combination of base stat and a modifier from the mode of attack compared between player and opponent's characters determine which character's attack is resolved first.
//two declining counters track and display the remaining hit points of both characters.
//fifth mode of attack "force power" unlocked based on the ammount of damage the playe or opponent have inflicted on the other.
//if player hit points == zero, game over; "you lose"
//if oppnent hit points == zero, "you defeated _____" ; on any key defeated opponent trackers are cleared and new opponent is rendedred from the predetermined randomized list.
//maintain a count of remaining opponent characters, count declines with each defeated opponent
//when remainting opponent characters = 0 , "you win"     
//
//modes of attack are buttons located across the bottom of the screen
//5 modes of attack:
//1. Attack - slight attack stat boost (do damage, take damage)
//2. Parry - 50% defense stat increase, 50% attack stat decrease (take less damage, do less damage)
//3. Block - doubles defense stat, significantly reduces attack stat (take low damage, do low damage)
//4. Swift Attack - double attack priority, lower attack stat (attack first, do less damage)
//5. Force Power - unlocked when enough damage has been caused against player or oppoenent; raise attack stat, opponents turn/counter attack skipped (do high damage , take no damage) 


//I originally attempted this by using arrays, then switched to objects of objects, then swithced to more basic arrays.
//this is all screwed up

$(document).ready(function(){

	
var playerCharacter= "";
var currDefender="";
var enemyCharacters=[];
var indexofSelChar="";
var attackResult="";
var turnCounter = 1;
var killCount = 3;
var playerHitPoints = 0;
var enemyHitPoints = 0;



//message instructions
var intMessage = function(message) {
	var startmessage = $("#instructions");
    var newMessage = $("<div>").text(message);
    instructionSet.append(newMessage);

    if (message == 'clearMessage') {
      instructionSet.text('');
    }
};


function initialCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.hitPoints = chosenCharacter.hitPoints;
  character.attackPriority = chosenCharacter.attackPriority;
  character.attackValue = chosenCharacter.attackValue;
  character.defenseValue = chosenCharacter.defenseValue;
};

//random enemy
var otherside;
var x;
var y;
var darksidefighters=["x","y","character.palpatine"];
var possibleDarkSiderFighters=["character.maul", "character.dooku", "character.vader"];

function randomEnemyfunction(){
	if (playerCharacter == anakin.name || playerCharacter ==  mace.name || playerCharacter == obiWan.name || playerCharacter == yoda.name){
	otherside = darkside;
	console.log(darkside);
	}
	else{
	otherside = lightside;
	console.log(darkside);
	}

	if (otherside == darkside){
		x = possibleDarksiderFighters[Math.floor(Math.random*2)+1];
		y = possibleDarksiderFighters[Math.floor(Math.random*2)+1];
		console.log(darksidefighters);
		}

} 

});

var clicker = true;

$("#obiWan").click(function(){
	if (clicker==false){
    	e.stopPropagation();
	};
	else {
		var obiWan={
			name: "Obi Wan Kenobi",
			attackPriority: 3,
			hitPoints: 150,
			attackValue: 3,
			defenseValue: 3,
			}
			playerCharacter = obiWan.name;
	      	$("#yoda").hide();
	      	$("#mace").hide();
	      	$("#anakin").hide();
	      	document.querySelector("#playerName").innerHTML = obiWan.name;
	      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
	      	document.querySelector("#playerHealth").innerHTML = obiWan.hitPoints +"HP";
	      	randomEnemyCharacters(obiWan.name);
	      	clicker=false;
	      	};


$("#anakin").click(function(){
	if (clicker==false) {
    e.stopPropagation();
	};
	var anakin={
		name: "Anakin Skywalker",
		attackPriority: 2,
		hitPoints: 175,
		attackValue: 3,
		defenseValue: 3,
		imageUrl:  "../assets/images/anakin.png"
		}
		playerCharacter = anakin.name;
      	$("#yoda").hide();
      	$("#mace").hide();
      	$("#obiWan").hide();
      	document.querySelector("#playerName").innerHTML = anakin.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = anakin.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	clicker=false;
     });


$("#yoda").click(function(){
	var yoda={
		name: "Yoda",
		attackPriority: 4,
		hitPoints: 125,
		attackValue: 2,
		defenseValue: 4,
		imageUrl: "../assets/images/yoda.png"
		}
		playerCharacter = yoda.name;
      	$("#obiWan").hide();
      	$("#mace").hide();
      	$("#anakin").hide();
      	document.querySelector("#playerName").innerHTML = yoda.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = yoda.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});


$("#mace").click(function(){
	var mace={
		name: "Mace Windu",
		attackPriority: 1,
		hitPoints: 175,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "../assets/images/mace.png"
		}
		playerCharacter = yoda.name;
      	$("#yoda").hide();
      	$("#obiWan").hide();
      	$("#anakin").hide();
      	document.querySelector("#playerName").innerHTML = mace.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = mace.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});
	

$("#palpatine").click(function(){
 	var palpatine={
		name: "Emperor Palpatine",
		attackPriority: 2,
		hitPoints: 150,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "../assets/images/palapatine.png"
		}
		playerCharacter = palpatine.name;
      	$("#dooku").hide();
      	$("#vader").hide();
      	$("#maul").hide();
      	document.querySelector("#playerName").innerHTML = palpatine.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = palpatine.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});


$("#dooku").click(function(){
	if (clicker==false){
    e.stopPropagation();
	};
	else {
	var dooku={
		name: "Count Dooku",
		attackPriority: 2,
		hitPoints: 175,
		attackValue: 2,
		defenseValue: 4,
		imageUrl: "../assets/images/dooku.png"
		}
		playerCharacter = dooku.name;
      	$("#palpatine").hide();
      	$("#vader").hide();
      	$("#maul").hide();
      	document.querySelector("#playerName").innerHTML = dooku.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = dooku.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	clicker=false;}
      });


$("#vader").click(function(){
	var vader={
		name: "Darth Vader",
		attackPriority: 1,
		hitPoints: 175,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "../assets/images/vader.png"
		}
		playerCharacter = vader.name;
      	$("#dooku").hide();
      	$("#palpatine").hide();
      	$("#maul").hide();
      	document.querySelector("#playerName").innerHTML = vader.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = vader.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});


$("#maul").click(function(){
	var maul={
		name: "Darth Maul",
		attackPriority: 4,
		hitPoints: 150,
		attackValue: 2,
		defenseValue: 3,
		imageUrl: "../assets/images/maul.png"
		}
		playerCharacter = maul.name;
      	$("#dooku").hide();
      	$("#vader").hide();
      	$("#palpatine").hide();
      	document.querySelector("#playerName").innerHTML = maul.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = maul.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});

//  computer selects characters
//	stage set, characters moved into place

  $(".character").on("click", function() {
      
    });

//  computer randomly selects attack
var enemyAttack = enemyOptions[math.floor(math.random)];

//  player selects attack
$("button???").on("click", function(){

}


//  attacks are resolved in order of attack priority
//  health is subtracted from the player and computer character
//	repeats until player or computer health <= 0
// 	message "Game Over! You lose" if player loses
//	repeat from stage set


//	defeat 3 enemies and message "You WIN!"
var enemyCount = 3;

if (enemyHealth <= 0){
	enemyCount--;
	if (enemyCount = 0) {
//		return "You WIN"
	}
	else {
// reset stage for next enemy		
	}
}
