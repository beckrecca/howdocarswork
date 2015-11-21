 window.onload = function() {
    // Reload the page
    $("#refresh").click(function () {
        location.reload();
    });

    // Navigation
    $(".nav-link").click(function () {
        // get the id of the nav item clicked
        var linkId = $(this).attr('id');
        // generated the id of the relevant content div
        var id = linkId + "Div";

        // hide all of the visible content divs
        $(".visible").attr("class", "hidden");

        // display the selected item's content
        console.log(id);
        $("#" + id).attr("class", "visible");
    });
}