var yoda = {
	name: "Yoda",
	"attackPriority" : 4,
	"hitPoints" : 125,
	"attackValue" : 2,
	"defenseValue" : 4,
	imageUrl : "../assets/images/yoda.png",
};


var mace = {
	name: "Mace Windu",
	"attackPriority" : 1,
	"hitPoints" : 175,
	"attackValue" : 4,
	"defenseValue" : 3,
	imageUrl : "../assets/images/mace.png",
};

var anakin = {
	name: "Anakin Skywalker",
	"attackPriority" : 2,
	"hitPoints" : 175,
	"attackValue" : 3,
	"defenseValue" : 3,
	imageUrl : "../assets/images/anakin.png",
};

var obiWan = {
	name: "Obi Wan Kenobi",
	"attackPriority" : 3,
	"hitPoints" : 150,
	"attackValue" : 3,
	"defenseValue" : 3,
	imageUrl : "../assets/images/obiWan.png",
};

var palpatine = {
	name: "Emperor Palpatine",
	"attackPriority" : 2,
	"hitPoints" : 150,
	"attackValue" : 4,
	"defenseValue" : 3,
	imageUrl : "../assets/images/palapatine.png",
};

var dooku = {
	name: "Count Dooku",
	"attackPriority" : 2,
	"hitPoints" : 175,
	"attackValue" : 2,
	"defenseValue" : 4,
	imageUrl : "../assets/images/dooku.png",
};

var maul = {
	name: "Darth Maul",
	"attackPriority" : 4,
	"hitPoints" : 150,
	"attackValue" : 2,
	"defenseValue" : 3,
	imageUrl : "../assets/images/maul.png",
};

var vadar = {
	name: "Darth Vader",
	"attackPriority" : 1,
	"hitPoints" : 175,
	"attackValue" : 4,
	"defenseValue" : 3,
	imageUrl : "assets/images/vadar.png",
};

var darthJarJar = {
	name: "Darth JarJar"
	"attackPriority" : 4,
	"hitPoints" : 200,
	"attackValue" : 4,
	"defenseValue" : 4,
	imageUrl : "assets/images/JarJar.jpg",
};


window.onload = function() {



}
//	Player selects characters
//  computer selects characters
//	stage set, characters moved into place

  $(".character").on("click", function() {
      $("#").html(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
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



	


