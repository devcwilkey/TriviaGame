var that = this;

var triviaGame = {
    gameSettings : {
        Easy : {
            totalQuestions : 2,
            secondsPerQuestion : 20,
            secondsPerAnswer : 7,
        },
        Medium : {
            totalQuestions : 3,
            secondsPerQuestion : 15,
            secondsPerAnswer : 5,
        },
        Hard : {
            totalQuestions : 5,
            secondsPerQuestion : 10,
            secondsPerAnswer : 3,
        }
    },
    gameVariables : {
        mode : "",
        category : "",
        questionAnswer : [],
        totalQuestionsAsked: 0,
        currentQuestionIndex: "",
        incorrectAnswers: 0
    },
    Trivia : {
        Disney : {
            1 : {
                Question : "In 'The Sword in the Stone', what does Merlin call 'The Greatest Force' on Earth?",
                Options : ["Gravity","Hate","Love","Nature"],
                Answer : "Love"
            },
            2 : {
                Question : "During the battle with Aladdin, what type of animal does Jafar transform himself into",
                Options : ["Tiger","Cobra","Elephant","Camel"],
                Answer : "Cobra"
            },
            3 : {
                Question : "In 'Mary Poppins', what animal was on the end of Mary Poppins’ umbrella that spoke?",
                Options : ["Penguin","Frog","Eagle","Parrot"],
                Answer : "Parrot"
            },
            4 : {
                Question : "What Country is Belle from in 'Beauty and the Beast'?",
                Options : ["France","Spain","Italy","Belgium"],
                Answer : "France"
            },
            5 : {
                Question : "Who was the first Disney Princess?",
                Options : ["Tiana","Snow White","Cinderella","Sleeping Beauty"],
                Answer : "Snow White"
            },
            6 : {
                Question : "In 'The Little Mermaid', who is NOT one of Triton's daughter's?",
                Options : ["Andrina","Adora","Attina","Alana"],
                Answer : "Adora"
            },
            7 : {
                Question : "In 'Snow White' which phrase does the Evil Queen actually say?",
                Options : ["Mirror, mirror, on the wall - who is the fairest of them all?","Magic Mirror, on the wall - who is the fairest one of all?","Mirror, mirror, on the Wall - who is the fairest one of all?","Magic mirror, on the wall - who is the fairest of them all?"],
                Answer : "Magic Mirror, on the wall - who is the fairest one of all?"
            },
            8 : {
                Question : "In the movie 'Tangled', Flynn Rider is wanted dead or alive according to his wanted poster because he's a...",
                Options : ["Thief","Bandit","Robber","Treasonist"],
                Answer : "Thief"
            },
            9 : {
                Question : "In 'Sleeping Beauty', what is the name of Maleficent’s pet raven?",
                Options : ["Malfoy","Demetrius","Mauvais","Diablo"],
                Answer : "Diablo"
            },
            10 : {
                Question : "In 'Frozen', how many brothers does Hans have?",
                Options : ["7","9","12","15"],
                Answer : "12"
            },
        },
        Survival : {
            1 : {
                Question : "What is the single most important thing you need to survive in the wild",
                Options : ["Food","Knife","Water","Fire"],
                Answer : "Water"
            },
            2 : {
                Question : "What is the easiest way to catch fish in a survival situation?",
                Options : ["Your Bare Hands","Spear Fishing","with Traps and Snares"],
                Answer : "Spear Fishing"
            },
            3 : {
                Question : "The first thing you do when you are lost in the wilderness or stranded on a deserted island is ...",
                Options : ["Gather Water","Build a Fire","Locate Food","Don't Panic"],
                Answer : "Don't Panic"
            },
            4 : {
                Question : "How long can the average person live withough Food and Water?",
                Options : ["Food - 3 Weeks; Water - 3 Days","Food - 2 Weeks; Water - 2 Days","Food - 4 Weeks; Water - 5 Days","Food - 3 Weeks; Water - 1 Days"],
                Answer : "Food - 3 Weeks; Water - 3 Days"
            },
            5 : {
                Question : "What type of Bear is the most likely to attack a human?",
                Options : ["A Mother Bear","An Adolescent Male","A Fully Grown Male","An Old Female"],
                Answer : "A Mother Bear"
            },
            6 : {
                Question : "What does lush vegetation and swarming insects often indicate?",
                Options : ["Dead Animals","A Water Source","Fertilized Soil","Imminent Danger"],
                Answer : "A Water Source"
            },
            7 : {
                Question : "If you are in the Northern Hemisphere facing the Sun at Noon and walk toward the Sun what direction are you heading?",
                Options : ["North","South","East","West"],
                Answer : "South"
            },
            8 : {
                Question : "If you're going to carry two of anything, which of these would be best?",
                Options : ["An Extra Flashlight","An Extra Blanket","An Extra Compass","An Extra Set of Clothes"],
                Answer : "An Extra Compass"
            },
            9 : {
                Question : "What everyday object can be used to help signal for help in an Emergency?",
                Options : ["A Belt","A White Shirt","A Mirror","A ToothBrush"],
                Answer : "A Mirror"
            },
            10 : {
                Question : "Why should you try to avoid sleeping directly on the ground?",
                Options : ["To Avoid Bugs","To Reduce the Change of Disease","Because it is Dirty","To Keep From Losing Body Heat"],
                Answer : "To Keep From Losing Body Heat"
            },
        },
        Useless : {
            1 : {
                Question : "What is the Shape of Wombats Poop?",
                Options : ["Wombats do not poop","Spherical","Cylindrical","Cubic"],
                Answer : "Cubic"
            },
            2 : {
                Question : "Windsor, Ontario (CA) is primarily located '________' of Detroit, Michigan (USA)",
                Options : ["North","South","East","West"],
                Answer : "South"
            },
            3 : {
                Question : "Butterflies taste using their ...",
                Options : ["Antennas","Wings","Feet","Tongues"],
                Answer : "Feet"
            },
            4 : {
                Question : "Which king in a deck of cards does not have a mustache?",
                Options : ["Spades","Hearts","Diamonds","Clovers"],
                Answer : "Hearts"
            },
            5 : {
                Question : "Of the options below Kills more people in the world than Sharks?",
                Options : ["Buffalo","Fish","Coconuts","Cats"],
                Answer : "Coconuts"
            },
            6 : {
                Question : "Panophobia is the Fear of...",
                Options : ["Peter Pan","Pans","Everything","Pan Handlers"],
                Answer : "Everything"
            },
            7 : {
                Question : "In the Scooby-Doo World, what is Shaggy's real name?",
                Options : ["Samuel","David","Shaggy","Norville"],
                Answer : "Norville"
            },
            8 : {
                Question : "What is Scotland's National Animal",
                Options : ["Horse","Dragon","Unicorn","Squirrel"],
                Answer : "Unicorn"
            },
            9 : {
                Question : "What Animal is on the Welsh Flag",
                Options : ["Snake","Girafee","Chipmunk","Dragon"],
                Answer : "Dragon"
            },
            10 : {
                Question : "What company did Ronald Wayne co-found?",
                Options : ["Microsoft","Apple","McDonald's","Xerox"],
                Answer : "Apple"
            },
        }
    },
    Timers : {
        Question : {
            secondsPer : 0,
            clockRunning : false,
            interval : 0
        },
        Answer : {
            secondsPer : 0,
            clockRunning : false,
            interval : 0
        },
        resetGame : {
            secondsPer : 0,
            clockRunning : false,
            interval : 0
        }
    },
    startGame : function(){
        if(this.Timers.resetGame.clockRunning){
            clearTimeout(this.Timers.resetGame.interval);
            this.Timers.resetGame.clockRunning = false;
        }
        this.printScore();
        $(".gameCategory").hide();
        $(".gameMode").hide();
        $("#gameArea").show();
        this.questionPhase();
    },
    resetGame : function (){
        this.clearTimer("Question");
        this.clearTimer("Answer");
        this.gameVariables.questionAnswer = [];
        this.gameVariables.totalQuestionsAsked = 0;
        this.gameVariables.currentQuestionIndex = "";
        this.gameVariables.incorrectAnswers = 0;
        this.Timers.Question.secondsPer = 0;
        this.Timers.Question.clockRunning = false;
        this.Timers.Question.interval = 0;
        this.Timers.Answer.secondsPer = 0;
        this.Timers.Answer.clockRunning = false;
        this.Timers.Answer.interval = 0;
        $(".gameCategory").show();
        $(".gameMode").show();
        $("#gameArea").hide();
        return true;

    },
    startTimer : function (Timer) {
        if(!this.Timers[Timer].ClockRunning){
            this.Timers[Timer].secondsPer = this.gameSettings[this.gameVariables.mode]["secondsPer"+Timer];
            this.printClock(Timer,this.Timers[Timer].secondsPer);
            this.Timers[Timer].interval = setInterval(function(){
                that.triviaGame.countTimer(Timer);
            }, 1000);
            this.Timers[Timer].clockRunning = true;
        }
    },
    clearTimer : function (Timer) {
        console.log("Clearing Timer: "+ Timer)
        clearInterval(this.Timers[Timer].interval);
        this.Timers[Timer].clockRunning = false;
        this.Timers[Timer].secondsPer = 0;
    },
    countTimer : function(Timer){
        this.Timers[Timer].secondsPer--
        this.printClock(Timer,this.Timers[Timer].secondsPer)
        if((this.Timers[Timer].secondsPer) === 0){
            this.clearTimer(Timer);
            if(Timer === "Question" || Timer === "resetGame"){
                this.answerPhase();
            } else if ("Answer"){
                this.questionPhase();
            }
        }
    },
    getRandomNumber : function(){
        var randNumber = Math.trunc(Math.random() * (10 - 1) + 1)
        return randNumber;
    },
    questionPhase : function(){
        if(this.gameVariables.totalQuestionsAsked === this.gameSettings[this.gameVariables.mode].totalQuestions){
            this.endGameSequence();
        } else {
            if(this.gameVariables.questionAnswer.length !==0){
                do {
                    var tempRandomNumber = this.getRandomNumber().toString()
                    console.log(tempRandomNumber)
                }
                while (this.gameVariables.questionAnswer.indexOf(tempRandomNumber) !== -1)
            } else {
                var tempRandomNumber = this.getRandomNumber().toString()
            }
            this.gameVariables.questionAnswer.push(tempRandomNumber)            
            
            this.gameVariables.currentQuestionIndex = (tempRandomNumber)
            this.printQandA("Question");
            this.startTimer("Question");
            $("#gameArea").show()
            this.gameVariables.totalQuestionsAsked++

        }
    },
    answerPhase : function (userSelection){
        if(userSelection){
            this.printQandA("Answer",userSelection);
        } else {
            this.printQandA("Answer");
        }
        this.printScore();
        this.startTimer("Answer");
        
    },
    printQandA : function (triviaObject,userSelection){
        var numberofOptions = ""
        var onScreenButton = ""
        var onScreenMessage = ""
        var userSelectedButton = ""
        var onScreenDisplay = ""
        /// Build User Question with Buttons
        if(triviaObject === "Question"){
            $("#subGameArea").empty()
            $("#answerButtons").empty()
            var numberofOptions = this.Trivia[this.gameVariables.category][this.gameVariables.currentQuestionIndex].Options.length
            for(i=0;i < numberofOptions; i++){
                var onScreenButton = $("<btn>")
                onScreenButton.attr("class","btn btn-primary p-2 m-2 gameOption")
                onScreenButton.attr("value",this.Trivia[this.gameVariables.category][this.gameVariables.currentQuestionIndex].Options[i])
                onScreenButton.html("<span>"+this.Trivia[this.gameVariables.category][this.gameVariables.currentQuestionIndex].Options[i]+"</span>")
                $("#answerButtons").append(onScreenButton);
            }

            var onScreenMessage = $("<p>")
            onScreenMessage.text(this.Trivia[this.gameVariables.category][this.gameVariables.currentQuestionIndex][triviaObject])
            var onScreenDisplay = $("<div>")
            onScreenDisplay.attr("id","wrapper")
            onScreenDisplay.attr("class","")
            onScreenDisplay.append(onScreenMessage)
            $("#subGameArea").html(onScreenDisplay);
        }

        /// Update Buttons to display the Correct Answer.
        if(triviaObject === "Answer"){
            if(!userSelection || !(userSelection === this.Trivia[this.gameVariables.category][this.gameVariables.currentQuestionIndex].Answer)){
                var userSelectedButton = document.querySelectorAll('btn[value="'+userSelection+'"]')[0];
                $(userSelectedButton).attr("class","btn btn-danger p-2 m-2 gameOption")
                this.gameVariables.incorrectAnswers++
            }
            var userSelectedButton = document.querySelectorAll('btn[value="'+this.Trivia[this.gameVariables.category][this.gameVariables.currentQuestionIndex].Answer+'"]')[0];
            $(userSelectedButton).attr("class","btn btn-success p-2 m-2 gameOption")
        }
    },
    printClock : function (Timer,remainingTime){
        var clockDesc = $("<dt>");
        clockDesc.attr("class","col-8");
        clockDesc.text(Timer + " Timer: ");
        var clockTime = $("<dd>");
        clockTime.attr("class","col-4");
        clockTime.text(remainingTime);
        var fullClock = $("<dl>");
        fullClock.attr("class","row");
        fullClock.append(clockDesc);
        fullClock.append(clockTime);
        $("#timeClock").html(fullClock);
    },
    printScore : function(){
        var correctlyAnsweredDesc = $("<dt>");
        correctlyAnsweredDesc.attr("class","col-8");
        correctlyAnsweredDesc.text("Correctly Answered: ");
        var correctlyAnsweredScore = $("<dd>");
        correctlyAnsweredScore.attr("class","col-4");
        correctlyAnsweredScore.text(this.gameVariables.totalQuestionsAsked - this.gameVariables.incorrectAnswers);
        var incorrectlyAnsweredDesc = $("<dt>");
        incorrectlyAnsweredDesc.attr("class","col-8");
        incorrectlyAnsweredDesc.text("incorrectly Answered: ");
        var incorrectlyAnsweredScore = $("<dd>");
        incorrectlyAnsweredScore.attr("class","col-4");
        incorrectlyAnsweredScore.text((this.gameVariables.incorrectAnswers));
        var totalQuestionsAskedDesc = $("<dt>");
        totalQuestionsAskedDesc.attr("class","col-8");
        totalQuestionsAskedDesc.text("Questions Remaining: ");
        var totalQuestionsAskedScore = $("<dd>");
        totalQuestionsAskedScore.attr("class","col-4");
        totalQuestionsAskedScore.text((this.gameSettings[this.gameVariables.mode].totalQuestions - this.gameVariables.totalQuestionsAsked));
        var fullScore = $("<dl>");
        fullScore.attr("class","row");
        fullScore.append(correctlyAnsweredDesc);
        fullScore.append(correctlyAnsweredScore);
        fullScore.append(incorrectlyAnsweredDesc);
        fullScore.append(incorrectlyAnsweredScore);
        fullScore.append(totalQuestionsAskedDesc);
        fullScore.append(totalQuestionsAskedScore);
        $("#currentScore").html(fullScore);
    },
    endGameSequence : function () {
        $("#subGameArea").empty();
        $(".gameMode").show();
        this.resetGame();
        this.Timers.resetGame.interval = setTimeout(function(){
            that.triviaGame.startGame();
        }, 10000);
        this.Timers.resetGame.clockRunning = true;
    }
}


$(document).ready(function() {
    $("#gameArea").hide();
});
$("#gameMode").on("change", function(){
    that.triviaGame.gameVariables.mode = $("#gameMode option:selected").attr("value");
    that.triviaGame.printClock("Question", that.triviaGame.gameSettings[that.triviaGame.gameVariables.mode].secondsPerQuestion);
});
$(".gameCategory").on("click", function(){
    that.triviaGame.gameVariables.mode = $("#gameMode option:selected").attr("value");
    that.triviaGame.gameVariables.category = $(this).attr("value");
    that.triviaGame.startGame($(this).attr("value"));
});
$("#answerButtons").on("click", ".gameOption", function(){
    if(that.triviaGame.Timers.Question.clockRunning){
        var selectedAnswer = $(this).attr("value");
        that.triviaGame.clearTimer("Question");
        that.triviaGame.answerPhase(selectedAnswer);
    }
});
$(".reset").on("click", function(){
    that.triviaGame.resetGame();
})