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

    // Open-Ended Questions
    $("button").click(function () {
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
            console.log(buttonId);
            // if it's the fuelandair section
            if (buttonId == "fuelandairQ") {
                $("#" + spanId).html("Here is the correct answer for the fuel and air section.");
            }
            else if (buttonId == "sparkQ") {
                $("#" + spanId).html("Here is the correct answer for the spark section.");
            }
            else if (buttonId == "oilQ") {
                $("#" + spanId).html("Here is the correct answer for the oil section.");
            }
            else if (buttonId == "coolingQ") {
                $("#" + spanId).html("Here is the correct answer for the cooling section.");
            }
            else if (buttonId == "exhaustQ") {
                $("#" + spanId).html("Here is the correct answer for the exhaust section.");
            }
        }
    });
}