$(document).ready(function() {
        // Sets the computer choices 
        var computerChoices = ['r', 'p', 's'];
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

        $("#player1 button").on("click", function() {
            player1choice = $(this).text();
            console.log(player1choice)
            if (player1choice == 'Rock' && player2choice =='Scissors') {
                player1Wins++;
                console.log("geg")
            }
        })
        $("#player2 button").on("click", function() {
            player2choice = $(this).text();
            console.log(player2choice)
           
        })
        // if ((player1choice == 'r') || (userGuess == 'p') || (userGuess == 's')){
        // // It tests to determine if the computer or the user won the round and then increments 
        // if ((userGuess == 'r') && (computerGuess == 's')){
        // wins++;
        // }else if ((userGuess == 'r') && (computerGuess == 'p')){
        // losses++;
        // }else if ((userGuess == 's') && (computerGuess == 'r')){
        // losses++;
        // }else if ((userGuess == 's') && (computerGuess == 'p')){
        // wins++;
        // }else if ((userGuess == 'p') && (computerGuess == 'r')){
        // wins++;
        // }else if ((userGuess == 'p') && (computerGuess == 's')){
        // losses++;
        // }else if (userGuess == computerGuess){
        // ties++;
        // }  
        
        

//document ready function closer
});