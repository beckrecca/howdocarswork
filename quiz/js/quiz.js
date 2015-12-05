 window.onload = function() {
    $('#submit').click(function (e) {
        // correct answers
        var answers = ["a", "b", "c"];

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
                // if correct
                if (answers[i-1] == q) {
                    $(m).html("Hooray! Correct");
                }
                // if incorrect
                else {
                    $(m).html("False :( The correct answer is " + answers[i-1].toUpperCase());
                }  
            }
        }
    });
}