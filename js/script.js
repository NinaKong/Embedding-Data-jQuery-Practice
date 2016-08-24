/*Nina Kong*/
$(document).ready(function () {
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#display').click(function (event) {
        alert(JSON.stringify($(".Embedding").data(), null, ""));
    });
    $('#save').click(function (event) {
        $(".Embedding").data("key2", 2020);
    });
    $('#delete').click(function (event) {
        $(".Embedding").removeData();
    });
});
