var app = angular.module('tictactoeApp', ['firebase']);
	
	app.controller('TictactoeController', TictactoeController);

	TictactoeController.$inject = ['$firebase'];

	function TictactoeController($firebase){
		  var controller = this;

		  controller.game = getGameObject();

		  controller.gameOver = "GAME OVER";

		  controller.newGame = newGame;
		  controller.joinTeam = joinTeam;
		  controller.startGame = startGame;
		  controller.checkScore = checkScore;
		  controller.changeScore = changeScore;
		  
		  controller.team = null;
		  controller.hansWins = 0;
		  controller.mcclaneWins = 0;

	  function getGameObject() {
    var ref = new Firebase("https://diehardtictactoe.firebaseio.com/game");
    return $firebase(ref).$asObject();
  }

		 function newGame(){
		 	  controller.row = [{},{},{},{},{},{},{},{},{}];	  
		 	  controller.status = "";	
		 	  controller.source = "";
		 	  controller.team = "";
		 	  controller.turn = "";
		 	  controller.choose = "";		   
		 }

		 function joinTeam(teamPick){
		 	controller.team = teamPick;
		 	controller.turn = teamPick;
		 }

		 function startGame(){
		 	controller.game.row = [{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}];
		 	controller.game.status = "";	
		 	controller.game.source = "";
		  controller.team = "";
		  controller.turn = "";
		  controller.choose = "CHOOSE YOUR TEAM";
		  controller.game.$save();
		 }

		 function checkScore(){
		 	    if(controller.row[0].className == "markerx" && controller.row[1].className == "markerx" && controller.row[2].className == "markerx"){
		 	    controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	    controller.source = "images/one_wins.gif";
		 	    controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[3].className == "markerx" && controller.row[4].className == "markerx" && controller.row[5].className == "markerx"){
		 	    controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	    controller.source = "images/one_wins.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[6].className == "markerx" && controller.row[7].className == "markerx" && controller.row[8].className == "markerx"){
		 	    controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	    controller.source = "images/one_wins.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[0].className == "markerx" && controller.row[3].className == "markerx" && controller.row[6].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[1].className == "markerx" && controller.row[4].className == "markerx" && controller.row[7].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[2].className == "markerx" && controller.row[5].className == "markerx" && controller.row[8].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[0].className == "markerx" && controller.row[4].className == "markerx" && controller.row[8].className == "markerx"){
		 	    controller.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
		 	    controller.source = "images/one_wins4.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[2].className == "markerx" && controller.row[4].className == "markerx" && controller.row[6].className == "markerx"){
		 	    controller.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
		 	    controller.source = "images/one_wins4.gif";
		 	     controller.mcclaneWins++;
		 	    }
		 	    else if(controller.row[0].className == "markero" && controller.row[1].className == "markero" && controller.row[2].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[3].className == "markero" && controller.row[4].className == "markero" && controller.row[5].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[6].className == "markero" && controller.row[7].className == "markero" && controller.row[8].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[0].className == "markero" && controller.row[3].className == "markero" && controller.row[6].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[1].className == "markero" && controller.row[4].className == "markero" && controller.row[7].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[2].className == "markero" && controller.row[5].className == "markero" && controller.row[8].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[0].className == "markero" && controller.row[4].className == "markero" && controller.row[8].className == "markero"){
		 	    controller.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
		 	    controller.source = "images/two_wins3.gif";
		 	    controller.hansWins++;
		 	    }
		 	    else if(controller.row[2].className == "markero" && controller.row[4].className == "markero" && controller.row[6].className == "markero"){
		 	    controller.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
		 	    controller.source = "images/two_wins3.gif";
		 	    controller.hansWins++;
		 	    }
		 	};

		 	function changeScore(row){
		 		if(controller.team == "McClane" || controller.team == "Gruber"){
		 			if(controller.team == controller.turn){
		 				if(row.className != "markerx" || row.className != "markero"){
		 					if(controller.team == "McClane"){
		 						row.className = "markerx";
		 		    		controller.turn = "Gruber";
		 					}
		 					else if(controller.team == "Gruber") {
		 		   			row.className = "markero";
		 		   			controller.turn = "McClane";		
		 					} 
		 				}
			  	}
				}
				controller.checkScore();
			};


};