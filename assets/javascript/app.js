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
            secondsPerQuestion : 10,
            secondsPerAnswer : 5,
        },
        Hard : {
            totalQuestions : 5,
            secondsPerQuestion : 5,
            secondsPerAnswer : 3,
        }
    },
    gameVariables : {
        mode : "",
        questionAnswer : {} ,
        totalQuestionsAsked: 0,
        currentQuestionIndex: ""
    },
    Trivia : {
        Easy : {
            1 : {
                Question : "Easy - Question 1",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            2 : {
                Question : "Easy - Question 2",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            3 : {
                Question : "Easy - Question 3",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            4 : {
                Question : "Easy - Question 4",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            5 : {
                Question : "Easy - Question 5",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            6 : {
                Question : "Easy - Question 6",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            7 : {
                Question : "Easy - Question 7",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            8 : {
                Question : "Easy - Question 8",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            9 : {
                Question : "Easy - Question 9",
                Options : ["A","B","C","D"],
                Answer : ""
            },
            10 : {
                Question : "Easy - Question 10",
                Options : ["A","B","C","D"],
                Answer : ""
            },
        },
        Medium : {
            1 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            2 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            3 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            4 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            5 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            6 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            7 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            8 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            9 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            10 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
        },
        Hard : {
            1 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            2 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            3 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            4 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            5 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            6 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            7 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            8 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            9 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
            },
            10 : {
                Question : "",
                Options : ["","","",""],
                Answer : ""
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
        }
    },
    startGame : function(userMode){
        this.gameVariables.mode = userMode;
        this.questionPhase();
    },
    resetGame : function (){
        this.gameVariables.mode = "";
        this.gameVariables.questionAnswer = {};
        this.gameVariables.totalQuestionsAsked = 0;
        this.gameVariables.currentQuestionIndex = ""
        this.Timers.Question.secondsPer = 0;
        this.Timers.Question.clockRunning = false;
        this.Timers.Question.interval = 0;
        this.Timers.Answer.secondsPer = 0;
        this.Timers.Answer.clockRunning = false;
        this.Timers.Answer.interval = 0;
        return true;

    },
    startTimer : function (Timer) {
        if(!this.Timers[Timer].ClockRunning){
            this.Timers[Timer].interval = setInterval(function(){
                that.triviaGame.countTimer(Timer)
            }, 1000);
            this.Timers[Timer].clockRunning = true;
        }
    },
    clearTimer : function (Timer) {
        clearInterval(this.Timers[Timer].interval);
        this.Timers[Timer].clockRunning = false;
        this.Timers[Timer].secondsPer = 0;
    },
    countTimer : function(Timer){
        if((this.Timers[Timer].secondsPer + 1) !== this.gameSettings[this.gameVariables.mode]["secondsPer"+Timer]){
            this.Timers[Timer].secondsPer++
        } else {
            this.clearTimer(Timer);
            if(Timer === "Question"){
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
            this.gameVariables.currentQuestionIndex = (this.getRandomNumber()).toString();
            this.printQuestion("Question");
            this.startTimer("Question");
            this.gameVariables.totalQuestionsAsked++

        }
    },
    answerPhase : function (){
        this.printQuestion("Answer");
        this.startTimer("Answer");
    },
    printQuestion : function (triviaObject){
        var actualMessage = this.Trivia[this.gameVariables.mode][this.gameVariables.currentQuestionIndex][triviaObject]
        if(triviaObject === "Question"){
            var actualOptions = this.Trivia[this.gameVariables.mode][this.gameVariables.currentQuestionIndex].Options
        }
        if(actualOptions){
            actualMessage += '     ' + actualOptions
        }
        $("#gameArea").text(actualMessage);
    },
    endGameSequence : function () {
        console.log("Winner Winner")
        $(".gameMode").show()
        this.resetGame()
    }
}


$(document).ready(function() {
});

$(".btn").on("click", function(){
    $(".gameMode").hide()
    that.triviaGame.startGame($(this).attr("value"));
})
$(".reset").on("click", function(){
    $(".gameMode").show()
    that.triviaGame.resetGame();
})


/// Choose a Mode to Start --> Starts Game --> Sets Mode
/// Mode tells us our Settings via this.triviaGame.gameSettings[this.triviaGame.gameVariables.mode]
/// 
/// 
/// 
/// 
/// 
/// 
