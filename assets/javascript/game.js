$(document).ready(function() {
        // Assign the firebase URL database to new variable 
        var firebase = new Firebase("https://rpsmultiplayer.firebaseio.com/");
        // Declare global variables 
        var player1;
        var player2;
        var player1Wins = 0;
        var player1Losses = 0;
        var player1choice;
        var player2Wins = 0;
        var player2Losses = 0;
        var player2choice;
        var ties = 0;
        //Adding the initial name form and button selections to the page
        $("#top").html("<input id='name' placeholder='NAME'>"+"<hr>"+"<button id='start'>Start</button>")
        $("#player1").html("<button id='rock'>Rock</button>"+"<br>"+ "<button id='paper'>Paper</button>"+"<br>"+ "<button id='scissors'>Scissors</button>")
        $("#player2").html("<button id='rock2'>Rock</button>"+"<br>"+ "<button id='paper2'>Paper</button>"+"<br>"+ "<button id='scissors2'>Scissors</button>")

        //Button that gets the player name on click
        $("#start").on("click", function() { 
            var name = $("#name").val();
            console.log(name);
        })
        //On click function that gets the player 1 choice based on which button is clicked & executes the check function
        $("#player1 button").on("click", function() {
            player1choice = $(this).text();
            console.log(player1choice);
            check();
        })
        //On click function that gets the player 2 choice based on which button is clicked & executes the check function
        $("#player2 button").on("click", function() {
            player2choice = $(this).text();
            console.log(player2choice);
            check();
           
        })
        
        //Rock paper scissors logic that checks both player choices, assigns winner/loser & executes the firebaseSet function to send the results to firebase
        function check() {
            if (player1choice == 'Rock' && player2choice =='Scissors') {
                player1Wins++;
                player2Losses++;
                console.log("first")
                firebaseSet();
            }
            else if (player1choice == 'Rock' && player2choice == 'Paper'){
            player1Losses++;
            player2Wins++;
            console.log("second")
            firebaseSet();
            }
            else if (player1choice == 'Scissors' && player2choice == 'Rock'){
            player1Losses++;
            player2Wins++;
            console.log("third")
            firebaseSet();
            }
            else if (player1choice == 'Scissors' && player2choice == 'Paper'){
            player1Wins++;
            player2Losses++;
            console.log("fourth")
            firebaseSet();
            }
            else if (player1choice == 'Paper' && player2choice == 'Rock'){
            player1Wins++;
            player2Losses++;
            console.log("fifth")
            firebaseSet();
            }
            else if (player1choice == 'Paper' && player2choice == 'Scissors'){
            player1Losses++;
            player2Wins++;
            console.log("sixth")
            firebaseSet();
            }
            else if (player1choice == player2choice){
            ties++;
            firebaseSet();
            }  
        
        //check function closer
        }

        //Updates firebase database in real time
        function firebaseSet() {
        firebase.set({
            player1: name,
            // player1choice: player1choice,
            player1Wins: player1Wins,
            player1Losses: player1Losses,
            // player2choice: player2choice,
            player2: name,
            player2Wins: player2Wins,
            player2Losses: player2Losses,
            ties: ties
        })

        //Firebase function closer
    }
        
      
//document ready function closer
});