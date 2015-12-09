 window.onload = function() {
    // Reload the page
    $("#refresh").click(function () {
        location.reload();
    });

    // Navigation
    $(".nav-link").click(function () {
        // get the id of the nav item clicked
        var linkId = $(this).attr('id');
        // generate the id of the relevant content div
        var id = linkId + "Div";

        // hide all of the visible content divs
        $(".visible").attr("class", "hidden");

        // display the selected item's content
        $("#" + id).attr("class", "visible");
    });

    // In-article navigation
    $(".article-link").click(function () {
        // get the id of the nav item clicked
        var linkId = $(this).attr('id');
        // generate the id of the relevant content div
        var id = linkId + "iv";

        // hide all of the visible content divs
        $(".visible").attr("class", "hidden");

        // display the selected item's content
        $("#" + id).attr("class", "visible");
    });

    // Open-Ended Questions
    $(".btn.btn-primary.think").click(function () {
        // get the id of the button clicked
        var buttonId = $(this).attr('id');
        // generate the id of the relevant textarea
        var textareaId = buttonId + "T";
        // generate the id of the relevant message span
        var spanId = buttonId + "A";

        // if the textarea is empty or less than 20 characters
        if (($("#" + textareaId).val().length) < 20) {
            $("#" + spanId).html("Please provide a complete answer.");
        }
        // otherwise provide the correct answer
        else {
            // if it's the fuelandair section
            if (buttonId == "fuelandairQ") {
                $("#" + spanId).html("[correct answer for the fuel and air question]");
            }
            else if (buttonId == "sparkQ") {
                $("#" + spanId).html("[correct answer for the spark question]");
            }
            else if (buttonId == "oilQ") {
                $("#" + spanId).html("[correct answer for the oil question]");
            }
            else if (buttonId == "coolingQ") {
                $("#" + spanId).html("[correct answer for the cooling question]");
            }
            else if (buttonId == "exhaustQ") {
                $("#" + spanId).html("[correct answer for the exhaust question]");
            }
        }
    });

    // Quiz
    $('#submit').click(function (e) {
        // correct answers
        var answers = ["b", "c", "c", "a", "e", "a", "b", "d", "d", "c", "a", "c", "d", "c", "a"];

        // initiate a count of the valid answers
        var valid = 0;

        // initiate a count of the correct answers
        var correct = 0;

        for (var i = 1; i <= answers.length; i++) {
            // obtain answer from radio button
            var inputString = "input:radio[name=q" + i + "]:checked";
            var q = $(inputString).val();

            // create string for message span id
            var m = "#m" + i;
            
            // validate the existence of an answer
            if (!q) {
                $(m).html("Please select an answer.");
            }
            // otherwise assess
            else {
                // count a valid answer
                valid++;
                if (answers[i-1] == q) {
                    $(m).html("Hooray! Correct");
                    // count a correct answer
                    correct++;
                }
                // if incorrect
                else {
                    $(m).css("color", "#ff0000");
                    $(m).html("False :( The correct answer is " + answers[i-1].toUpperCase());
                }  
            }
        }

        // if all the questions were answered
        if (valid == (answers.length)) {
            // calculate the number correct
            var score = correct/valid;
            $("#score").html("You scored " + ((score * 100).toFixed(2)) + " percent");
        }
    });
}