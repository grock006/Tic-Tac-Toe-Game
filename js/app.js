var tictactoeApp = angular.module("tictactoeApp", []);

tictactoeApp.controller('TictactoeContoller', ['$scope', function($scope){

//select playerOne, who always goes first

//MASTER OBJECT TO DB, to throw onto angularfire $scope.db = {}

 $scope.playerOne = false;
 $scope.playerTwo = false;	
 $scope.winningCombo = [];
 $scope.computerCombo = [];
 $scope.totalMoves = 0;

 //$scope.isDisabled = true, toggle with start game button
 //$scope.PlayerNameOne = ""
 //$scope.yourTurn
 //$scope.startGame = function(){}
 //$scope.playAgain - function(){}

// $scope.startGame = function(){};

 $scope.row = [    {section:8, className: ""}, 
 			       {section:3, className: ""}, 
 				   {section:4, className: ""}, 
 				   {section:1, className: ""}, 
 				   {section:5, className: ""}, 
 				   {section:9, className: ""}, 
 				   {section:6, className: ""}, 
 				   {section:7, className: ""}, 
 				   {section:2, className: ""}];

 $scope.className = null;

 $scope.playerTwo = function() {
 	var i = Math.floor(Math.random() * 9) + 1;
 	if($scope.row[i].className = "markerx"){
 		//i++;
 	   $scope.row[i].className != "markero";
 	   $scope.row[i].className != "markerx"
 	}
 	if($scope.row[i].className = "markero"){
 		//i++;
 		$scope.row[i].className != "markero"
 		$scope.row[i].className != "markerx"
 	}
 	else{
 		 $scope.row[i].className = "markero";
 	}
 	$scope.computerCombo.push($scope.row[i].section);
 	//console.log($scope.computerCombo);
 };

 //if playerOne then add X to the clicked section  

 //if playerOne clicks square then X appears. If X is played then player2 goes.

 //check the game logic
 //set up a reference variable to the winning numbers
 //create arrays with section numbers and reference them below
 //make this into a simpler function?
   $scope.checkScore = function(){
 	    if($scope.row[0].className == "markerx" && $scope.row[1].className == "markerx" && $scope.row[2].className == "markerx"){
 	    alert("yippie ki yay! motherfucker");	
 	    }
 	    else if($scope.row[0].className == "markerx" && $scope.row[3].className == "markerx" && $scope.row[6].className == "markerx"){
 	    alert("yippie kay yay motherfucker");	
 	    }
 	    else if($scope.row[0].className == "markerx" && $scope.row[4].className == "markerx" && $scope.row[8].className == "markerx"){
 	    alert("yippie kay yay motherfucker");	
 	    }
 	};

 $scope.changeClass = function(row){
 		var yourTotal = 0;
 		var computerTotal =0;
 		playerOne = true;
 		playerTwo = false;
 		// console.log(row);
 		// console.log(row.section);
 		
 		if(playerOne = true){
 		row.className = "markerx";
 		playerOne = true;
 	    }
 		
 		if(playerTwo = true){
 			row.className = "markero";
 			playerTwo = false;
 		}

 		//$scope.winningCombo.push(row.section);


		//$scope.playerTwo();
		$scope.checkScore();
 		
 		if($scope.winningCombo.length === 3){
 			console.log("Game Over");
 		}

 	    // console.log($scope.winningCombo);
 	    // // if(row.className == "markerx"){
 	    // // 	row.className == "markero"
 	    // // }

 	    for(var i = 0; i < $scope.winningCombo.length; i++){
 	    	yourTotal += $scope.winningCombo[i];
 	    	computerTotal += $scope.computerCombo[i];
 	    	//console.log(total);
 	    	if(yourTotal === 15){
 	    		console.log("You Are The Winner!")
 	    	}
 	    	else if(computerTotal === 15){
 	    		console.log("You Are The Loser!")
 	    	}
 	    }

 	    // do a for loop through the grid rows
 	    // $scope.row[i].className = "markero";
 	    //function checkScore
 	    //if($scope.row[0].className == "markero" && $scope.row[1].className == "markero" $scope.row[2].className = "markero"){
 	    // console.log("yippie kay yay motherfucker")	
 	    //}
 	};

}]);










































