var app = angular.module('tictactoeApp', ['firebase']);
	
	app.controller('TictactoeController', TictactoeController);

	TictactoeController.$inject = ['$firebase'];

	function TictactoeController($firebase){
		  var controller = this;

		  controller.game = getGameObject();
		  controller.game.row = [{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}];
		  controller.game.choose = "";
		  controller.gameOver = "GAME OVER";

		  controller.newGame = newGame;
		  controller.joinTeam = joinTeam;
		  controller.startGame = startGame;
		  controller.checkScore = checkScore;
		  controller.changeScore = changeScore;
		
		  controller.hansWins = 0;
		  controller.mcclaneWins = 0;

	  function getGameObject() {
		    var ref = new Firebase("https://diehardtictactoe.firebaseio.com/game");
		    return $firebase(ref).$asObject();
		  }

		  function startGame(){
		 	controller.game.row = [{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}];
		 	controller.game.status = "";	
		 	controller.game.source = "";
			controller.game.team = "";
			controller.game.turn = "";
			controller.game.choose = "GAME IN PROGRESS: CHOOSE YOUR TEAM";
			console.log(controller.game)
			controller.game.$save();
		 }

		 function newGame(){
		 	  controller.game.row = [{},{},{},{},{},{},{},{},{}]; 	  
		 	  controller.status = "";	
		 	  controller.source = "";
		 	  controller.game.team = "";
		 	  controller.game.turn = "";
		 	  controller.game.choose = "";
		 	  controller.game.$save();		   
		 }

		 function joinTeam(teamPick){
		 	controller.game.team = teamPick;
		 	controller.game.turn = teamPick;
		 }

		 function checkScore(){
		 	    if(controller.game.row[0].className == "markerx" && controller.game.row[1].className == "markerx" && controller.game.row[2].className == "markerx"){
		 	    controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	    controller.source = "images/one_wins.gif";
		 	    controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[3].className == "markerx" && controller.game.row[4].className == "markerx" && controller.game.row[5].className == "markerx"){
		 	    controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	    controller.source = "images/one_wins.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[6].className == "markerx" && controller.game.row[7].className == "markerx" && controller.game.row[8].className == "markerx"){
		 	    controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	    controller.source = "images/one_wins.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[0].className == "markerx" && controller.game.row[3].className == "markerx" && controller.game.row[6].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[1].className == "markerx" && controller.game.row[4].className == "markerx" && controller.game.row[7].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[2].className == "markerx" && controller.game.row[5].className == "markerx" && controller.game.row[8].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[0].className == "markerx" && controller.game.row[4].className == "markerx" && controller.game.row[8].className == "markerx"){
		 	    controller.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
		 	    controller.source = "images/one_wins4.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[2].className == "markerx" && controller.game.row[4].className == "markerx" && controller.game.row[6].className == "markerx"){
		 	    controller.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
		 	    controller.source = "images/one_wins4.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.game.row[0].className == "markero" && controller.game.row[1].className == "markero" && controller.game.row[2].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[3].className == "markero" && controller.game.row[4].className == "markero" && controller.game.row[5].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[6].className == "markero" && controller.game.row[7].className == "markero" && controller.game.row[8].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[0].className == "markero" && controller.game.row[3].className == "markero" && controller.game.row[6].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[1].className == "markero" && controller.game.row[4].className == "markero" && controller.game.row[7].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[2].className == "markero" && controller.game.row[5].className == "markero" && controller.game.row[8].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[0].className == "markero" && controller.game.row[4].className == "markero" && controller.game.row[8].className == "markero"){
		 	    controller.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
		 	    controller.source = "images/two_wins3.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.game.row[2].className == "markero" && controller.game.row[4].className == "markero" && controller.game.row[6].className == "markero"){
		 	    controller.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
		 	    controller.source = "images/two_wins3.gif";
		 	    controller.hansWins++;
		 	    }
		 	};

		 	function changeScore(row){
		 			console.log(controller.game.team);
		 		if(controller.game.team == "McClane" || controller.game.team == "Gruber"){
		 			if(controller.game.team == controller.game.turn){
		 			    if(row.className !== "markerx" || row.className !== "markero"){

		 					if(controller.game.team == "McClane"){
		 						row.className = "markerx";
		 		    			controller.game.turn = "Gruber";
		 					}
		 					if(controller.game.team == "Gruber") {
		 		   				row.className = "markero";
		 		   				controller.game.turn = "McClane";	
		 					} 
		 					console.log(controller.game.team)

		 				}
			  	    }
				 }
				controller.game.$save();	
				controller.checkScore();
			};


};