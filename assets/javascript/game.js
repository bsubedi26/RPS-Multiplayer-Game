$(document).ready(function() {
        // Sets the computer choices 
        var firebase = new Firebase("https://rpsmultiplayer.firebaseio.com/");
        // Declares the tallies to 0 
        var player1;
        var player2;
        var player1Wins = 0;
        var player1Losses = 0;
        var player1choice;
        var player2Wins = 0;
        var player2Losses = 0;
        var player2choice;
        var ties = 0;
        $("#top").html("<input id='name' placeholder='NAME'>"+"<hr>"+"<button id='start'>Start</button>")
        $("#player1").html("<button id='rock'>Rock</button>"+"<br>"+ "<button id='paper'>Paper</button>"+"<br>"+ "<button id='scissors'>Scissors</button>")
        $("#player2").html("<button id='rock2'>Rock</button>"+"<br>"+ "<button id='paper2'>Paper</button>"+"<br>"+ "<button id='scissors2'>Scissors</button>")

        //Get player name
        $("#start").on("click", function() { 
            var name = $("#name").val();
            console.log(name);
        })
        $("#player1 button").on("click", function() {
            player1choice = $(this).text();
            console.log(player1choice);
            check();
        })
        $("#player2 button").on("click", function() {
            player2choice = $(this).text();
            console.log(player2choice);
            check();
           
        })
        
        //Check player choices and assign winner/loser
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