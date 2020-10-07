$(document).ready(function(){

	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain.", "As I see it.", "yes", "Reply hazy, try again.", "Don't count on it."];
  
  $("#answer").hide( );

	magic8Ball.askQuestion = function (question)
	{	
    $("#answer").fadeIn(4000);
		var randomNumber = Math.random();
		var randomNumberForListofAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListofAnswers);
		var answer = this.listOfAnswers[randomIndex];
	$("#8ball").effect( "shake" );
    setTimeout(
    function() {
              
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
      
  $("#answer").text( answer );
		
	console.log(question);
    console.log(answer);
    }, 1000);
};
	
	var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
   setTimeout(
       function() {
           var question = prompt("Ask a yes or no question")
         magic8Ball.askQuestion(question)
       }, 500);
};
	
$("#questionButton").click( onClick );
	
});