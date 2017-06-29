//full attack DMG + 10% 
//	Parry Attack 1/2 block +50% Defense -50% damage
//	Full Block - 2x Defense, Attack = 0
//	Force Power
//	Swift strike 2x attack priority, 1/2 damage
//Character (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

//Yoda (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var yoST = [4, 1, 2, 4 , 1];
var yoFA = [4, 1, 2, 4, 1.1];
var yoPA = [4, 1, 2, 6, .50];
var yoBL = [0, 1, 0, 8, 0];
var yoSS = [8, 1, 2, 4, .50];
var yoKey = [yoST, yoFA, yoPA, yoBL, yoSS];

	Force Power - Force: Levitate

//Mace Windu (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var mwST = [1, 3, 4, 3, 1];
var mwFA = [1, 3, 4, 3, 1.1];
var mwPA = [1, 3, 4, 5, .50];
var mwBL = [0, 3, 0, 6, 0];
var mwSS = [2, 3, 4, 3, .50];
var mwKey = [mwST, mwFA, mwPA, mwBL, mwSS];

	Force Power - Force Focus

//Anakin (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var asST = [2, 2, 3, 3, 1];
var asFA = [2, 2, 3, 3, 1.1];
var asPA = [2, 2, 3, 5, .50];
var asBL = [0, 2, 0, 6, 0];
var asSS = [4, 2, 3, 3, .50];
var asKey = [asST, asFA, asPA, asBL, asSS];

	Force Power - Force Jump

//Obi Wan (average) (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)
	
var owST = [2, 3, 3, 3, 1];
var owFA = [2, 3, 3, 3, 1.1];
var owPA = [2, 3, 3, 5, .50];
var owBL = [0, 3, 0, 6, 0];
var owSS = [4, 3, 3, 3, .50];

var owKey = [owST, owFA, owPA, owBL, owSS];

	Force Power - force push

//Palpatine (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)
 
var paST = [2, 2, 4, 3, 1];
var paFA = [2, 2, 4, 3, 1.1];
var paPA = [2, 2, 4, 5, .50];
var paBL = [0, 2, 0, 6, 0];
var paSS = [4, 2, 4, 3. .50];
var paKey = [paST, paFA, paPA, paBL, paSS];

	Force Power - Force Lightning

//Count Dukuu (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var cdST = [2, 3, 2, 4, 1];
var cdFA = [2, 3, 2, 4, 1.1];
var cdPA = [2, 3, 2, 6, .50];
var cdBL = [0, 3, 0, 6, 0];
var cdSS = [4, 2, 2, 4, .50];
var cdKey = [cdST, cdFA, cdPA, cdBL, cdSS];

	Force Power - Force Lightning

//Darth Maul (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var dmST = [4, 2, 2, 3, 1];
var dmFA = [4, 2, 2, 3, 1.1];
var dmPA = [4, 2, 2, 5, .50];
var dmBL = [0, 2, 0, 6, 0];
var dmSS = [8, 2, 2, 3, .50];
var dmKey = [dmST, dmFA, dmPA, dmBL, dmSS];

	Force Power - Force Fury

//Dark Vader (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var dvST = [1, 3, 4, 3, 1];
var dvFA = [1, 3, 4, 3, 1.1];
var dvPA = [1, 3, 4, 5, .5];
var dvBL = [0, 3, 0, 6, 0];
var dvSS = [2, 3, 4, 3, .5];
var dvKey = [dvST, dvFA, dvPA, dvBL, dvSS];


	Force Power - Force Choke

//Darth Jar Jar (Attack Priority; Hit Points; Base Attack Value; Base Defense Value, Base Damage)

var djST = [4, 4, 4, 4, 1];
var djFA = [4, 4, 4, 4, 1.1];
var djPA = [4, 4, 4, 6, .5];
var djBL = [0, 4, 0, 8, 0];
var djSS = [8, 4, 4, 4, .5];
var djKey = [djST, djFA, djPA, djBL, djSS];

	Force Power - Force: Trilogy Killer
