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


$("#obiWan").click(function(){
	var obiWan={
		name: "Obi Wan Kenobi",
		attackPriority: 3,
		hitPoints: 150,
		attackValue: 3,
		defenseValue: 3,
		imageUrl : "../assets/images/obiWan.png"
		}
	
		playerCharacter = obiWan.name;
      	$("#lightside").hide();
      	document.querySelector("#playerName").innerHTML = obiWan.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = obiWan.hitPoints +"HP";
      	randomEnemyCharacters(obiWan.name);
       	});


$("#anakin").click(function(){
	var anakin={
		name: "Anakin Skywalker",
		attackPriority: 2,
		hitPoints: 175,
		attackValue: 3,
		defenseValue: 3,
		imageUrl:  "../assets/images/anakin.png"
		}
		playerCharacter = anakin.name;
      	$("#lightside").hide();
      	document.querySelector("#playerName").innerHTML = anakin.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = anakin.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
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
      	$("#lightside").hide();
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
      	$("#lightside").hide();
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
      	$("#lightside").hide();
      	document.querySelector("#playerName").innerHTML = palpatine.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = palpatine.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});

$("#dooku").click(function(){
	var dooku={
		name: "Count Dooku",
		attackPriority: 2,
		hitPoints: 175,
		attackValue: 2,
		defenseValue: 4,
		imageUrl: "../assets/images/dooku.png"
		}
		playerCharacter = dooku.name;
      	$("lightside").hide();
      	document.querySelector("#playerName").innerHTML = dooku.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = dooku.hitPoints +"HP";
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
      	$("#lightside").hide();
      	document.querySelector("#playerName").innerHTML = maul.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = maul.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});

$("#vader").click(function(){
	var vadar={
		name: "Darth Vader",
		attackPriority: 1,
		hitPoints: 175,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "assets/images/vadar.png"
		}
		playerCharacter = vader.name;
      	$("#lightside").hide();
      	document.querySelector("#playerName").innerHTML = vader.name;
      	document.querySelector("#playerHitPoint").innerHTML = "Hit Points: ";
      	document.querySelector("#playerHealth").innerHTML = vader.hitPoints +"HP";
      	randomEnemyCharacters(playerCharacter);
      	});
