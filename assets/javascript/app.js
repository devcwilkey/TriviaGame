var that = this;
var questionIntervalId;
var answerIntervalId;

var triviaGame = {
    gameSettings : {
        Easy : {
            totalQuestions : 2,
            secondsPerQuestion : 30,
            secondsToDisplayAnswer : 7,
        },
        Medium : {
            totalQuestions : 3,
            secondsPerQuestion : 20,
            secondsToDisplayAnswer : 5,
        },
        Hard : {
            totalQuestions : 5,
            secondsPerQuestion : 15,
            secondsToDisplayAnswer : 3,
        }
    },
    gameVariables : {
        mode : "",
        questionAnswer : {} ,
        totalQuestionsAsked: 0
    },
    Trivia : {
        Easy : {
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
            interval : ""
        },
        Answer : {
            secondsPer : 0,
            clockRunning : false,
            interval : ""
        }
    },
    startGame : function(userMode){
        this.gameVariables.mode = userMode;

    },
    resetGame : {

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
        clearInterval(function(){
            that.triviaGame.countTimer(Timer)
        });
        this.Timers[Timer].clockRunning = false;
    },
    countTimer : function(Timer){
        if((this.Timers[Timer].secondsPer + 1) !== this.gameSettings[this.gameVariables.mode].secondsPerQuestion){
            this.Timers[Timer].secondsPer++
        } else {
            this.clearTimer(Timer);
        }
    },
    getRandomNumber : function(){
        var randNumber = math.Random() * (10 - 1) + 1
        return randNumber;
    },
    questionAndAnswer : function(){
        var questionIndex = this.getRandomNumber();
        this.printQuestion(questionIndex);
        this.startTimer("Question");
        while(!this.Timers["Question"].clockRunning){

        }

    
    },
    printQuestion : function (questionIndex){
        var actualQuestion = this.Trivia[this.gameVariables.mode]['"' + questionIndex + '"'].Question
        var actualOptions = this.Trivia[this.gameVariables.mode]['"' + questionIndex + '"'].Options
        $("#gameArea").text(actualQuestion + '      ' + actualOptions);
    },
    printAnswer : function (questionIndex){
        var actualAnswer = this.Trivia[this.gameVariables.mode]['"' + questionIndex + '"'].answer
        $("#gameArea").text(actualAnswer);
    }
}


$(document).ready(function() {
});

$("#start").on("click", function(){
    that.triviaGame.startGame($(this).attr("value"));
})


/// Choose a Mode to Start --> Starts Game --> Sets Mode
/// Mode tells us our Settings via this.triviaGame.gameSettings[this.triviaGame.gameVariables.mode]
/// 
/// 
/// 
/// 
/// 
/// 