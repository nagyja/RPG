var character = {
	"yoda":{
		name: "Yoda",
		attackPriority: 4,
		hitPoints: 125,
		attackValue: 2,
		defenseValue: 4,
		imageUrl: "../assets/images/yoda.png"
	},

	"mace":{
		name: "Mace Windu",
		attackPriority: 1,
		hitPoints: 175,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "../assets/images/mace.png"
	},

	"anakin":{
		name: "Anakin Skywalker",
		attackPriority: 2,
		hitPoints: 175,
		attackValue: 3,
		defenseValue: 3,
		imageUrl:  "../assets/images/anakin.png"
	},

	"obiWan":{
		name: "Obi Wan Kenobi",
		attackPriority: 3,
		hitPoints: 150,
		attackValue: 3,
		defenseValue: 3,
		imageUrl : "../assets/images/obiWan.png"
	},

 	"palpatine":{
		name: "Emperor Palpatine",
		attackPriority: 2,
		hitPoints: 150,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "../assets/images/palapatine.png"
	},

	 "dooku":{
		name: "Count Dooku",
		attackPriority: 2,
		hitPoints: 175,
		attackValue: 2,
		defenseValue: 4,
		imageUrl: "../assets/images/dooku.png"
	},

	"maul":{
		name: "Darth Maul",
		attackPriority: 4,
		hitPoints: 150,
		attackValue: 2,
		defenseValue: 3,
		imageUrl: "../assets/images/maul.png"
	},

	"vadar":{
		name: "Darth Vader",
		attackPriority: 1,
		hitPoints: 175,
		attackValue: 4,
		defenseValue: 3,
		imageUrl: "assets/images/vadar.png"
	},
};

var playerCharacter;
var currDefender;
var enemyCharacters = [];
var indexofSelChar;
var attackResult;
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

//random darkside




$("#obiWan").click(function(){
      $("#lightside").hide();
      document.querySelector("#playerName").innerHTML = "Obi Wan Kenobi";
      document.querySelector("#hitPoint").innerHTML = "Hit Points: "
      document.querySelector("#playerHealth").innerHTML = "obiWan.hitPoints"
      });
