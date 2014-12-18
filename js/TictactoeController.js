angular
	.module('tictactoeApp')
	.controller('TictactoeController', TictactoeController);

	TictactoeController.$inject = ['$firebase']

	function TodosController($firebase){
		  var controller = this;

		  controller.className = null;
 		  controller.playerOne = true;
 		  controller.playerTwo = false;
 		  console.log(controller.playerOne);

		 controller.row = [{section:0, className: ""}, 
 			       {section:1, className: ""}, 
 				   {section:2, className: ""}, 
 				   {section:3, className: ""}, 
 				   {section:4, className: ""}, 
 				   {section:5, className: ""}, 
 				   {section:6, className: ""}, 
 				   {section:7, className: ""}, 
 				   {section:8, className: ""}];



		     function checkScore(){
		 	    if(controller.row[0].className == "markerx" && controller.row[1].className == "markerx" && controller.row[2].className == "markerx"){
		 	     controller.status = "YIPPIE KI YAY, MOTHERFUCKER!!!!!";	
		 	     controller.source = "images/one_wins.gif";
		 	    }
		 	    else if(controller.row[0].className == "markerx" && controller.row[3].className == "markerx" && controller.row[6].className == "markerx"){
		 	    controller.status = "WELCOME TO THE PARTY, PAL!";
		 	    controller.source = "images/one_wins2.gif";	
		 	    }
		 	    else if(controller.row[0].className == "markerx" && controller.row[4].className == "markerx" && controller.row[8].className == "markerx"){
		 	    controller.status = "Just a fly in the ointment, Hans. The monkey in the wrench. The pain in the ass.";	
		 	    controller.source = "images/one_wins4.gif";
		 	    }
		 	    else if(controller.row[0].className == "markero" && controller.row[1].className == "markero" && controller.row[2].className == "markero"){
		 	    controller.status = "Just another American who saw too many movies as a child? Another orphan of a bankrupt culture who thinks he's John Wayne? Rambo? Marshal Dillon?";	
		 	    controller.source = "images/two_wins.gif";
		 	    }
		 	    else if(controller.row[0].className == "markero" && controller.row[3].className == "markero" && controller.row[6].className == "markero"){
		 	    controller.status = "'And when Alexander saw the breadth of his domain, he wept, for there were no more worlds to conquer.' Benefits of a classical education.";
		 	    controller.source = "images/two_wins2.gif";	
		 	    }
		 	    else if(controller.row[0].className == "markero" && controller.row[4].className == "markero" && controller.row[8].className == "markero"){
		 	    controller.status = "This time John Wayne does not walk off into the sunset with Grace Kelly.";	
		 	    controller.source = "images/two_wins3.gif";
		 	    }
		 	};

				//change this to $index in the view
			    function changeClass(row){
			 		if(controller.playerOne == true){
			 		row.className = "markerx";
			 		controller.playerOne = false;
			 		console.log(controller.playerOne);
			 		//alert not your turn
			 		}
			 		else {
			 		   row.className = "markero";
			 		     controller.playerOne = true;
			 		}
			 		//set playerOne to false, check it in console.log
			 		// if playerOne is false then markero
					  controller.checkScore();

				};



	};