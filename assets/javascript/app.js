var correct = 0;
var incorrect = 0;
var unanswered = 8;
var seconds = 30;
var intervalId;

$("#page2").hide();
$("#page3").hide();

//Calculate the correct, incorrect and unanswered totals and display totals screen
function checkAnsers(){
    var radioValue1 = $("input[name='answer1']:checked").val();
    if (radioValue1 === "Lake Superior"){
        correct++;
        unanswered--;
    } else if (radioValue1 === "Lake Huron"){
        incorrect++;
        unanswered--;
    } else if (radioValue1 === "Lake Michigan"){
        incorrect++;
        unanswered--;
    } else if (radioValue1 === "Lake Erie"){
        incorrect++;
        unanswered--;
    }
    var radioValue2 = $("input[name='answer2']:checked").val();
    if (radioValue2 === "350"){
        correct++;
        unanswered--;
    } else if (radioValue2 === "None"){
        incorrect++;
        unanswered--;
    } else if (radioValue2 === "143"){
        incorrect++;
        unanswered--;
    } else if (radioValue2 === "492"){
        incorrect++;
        unanswered--;
    }
    var radioValue3 = $("input[name='answer3']:checked").val();
    if (radioValue3 === "36°F"){
        correct++;
        unanswered--;
    } else if (radioValue3 === "12°F"){
        incorrect++;
        unanswered--;
    } else if (radioValue3 === "45°F"){
        incorrect++;
        unanswered--;
    } else if (radioValue3 === "57°F"){
        incorrect++;
        unanswered--;
    }
    var radioValue4 = $("input[name='answer4']:checked").val();
    if (radioValue4 === "Lake Michigan"){
        correct++;
        unanswered--;
    } else if (radioValue4 === "Lake Superior"){
        incorrect++;
        unanswered--;
    } else if (radioValue4 === "Lake Erie"){
        incorrect++;
        unanswered--;
    } else if (radioValue4 === "Lake Ontario"){
        incorrect++;
        unanswered--;
    }
    var radioValue5 = $("input[name='answer5']:checked").val();
    if (radioValue5 === "35,000"){
        correct++;
        unanswered--;
    } else if (radioValue5 === "700"){
        incorrect++;
        unanswered--;
    } else if (radioValue5 === "2,000"){
        incorrect++;
        unanswered--;
    } else if (radioValue5 === "11,000"){
        incorrect++;
        unanswered--;
    }
    var radioValue6 = $("input[name='answer6']:checked").val();
    if (radioValue6 === "Lake Sturgeon"){
        correct++;
        unanswered--;
    } else if (radioValue6 === "Basking Shark"){
        incorrect++;
        unanswered--;
    } else if (radioValue6 === "Walleye"){
        incorrect++;
        unanswered--;
    } else if (radioValue6 === "Blue Whale"){
        incorrect++;
        unanswered--;
    }
    var radioValue7 = $("input[name='answer7']:checked").val();
    if (radioValue7 === "Lake Huron"){
        correct++;
        unanswered--;
    } else if (radioValue7 === "Lake Superior"){
        incorrect++;
        unanswered--;
    } else if (radioValue7 === "Lake Michigan"){
        incorrect++;
        unanswered--;
    } else if (radioValue7 === "Lake Erie"){
        incorrect++;
        unanswered--;
    }
    var radioValue8 = $("input[name='answer8']:checked").val();
    if (radioValue8 === "20%"){
        correct++;
        unanswered--;
    } else if (radioValue8 === "1%"){
        incorrect++;
        unanswered--;
    } else if (radioValue8 === "5%"){
        incorrect++;
        unanswered--;
    } else if (radioValue8 === "7%"){
        incorrect++;
        unanswered--;
    }
    $("#page3").show();
    $("#page2").hide();
    $("#correct").html("Correct: " + correct);
    $("#incorrect").html("Incorrect: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);
};

//Change screen when the start button is clicked and start timeout
$("#start").click(function(){
    $("#page2").show();
    $("#start").hide();
    setTimeout(function(){
        checkAnsers();
    }, 30000);
    run();
    $(".time").text(seconds);
});

//Change screen to totlas screen and calculate totals when the submit button is clicked
$("#submit").click(function(){
    checkAnsers();
});

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $(".time").text(seconds);
    if (seconds === 0) {
    stop();
  }
}

function stop() {
    clearInterval(intervalId);
}













