
$(function() {
    $("#dialog").dialog();

    return false;
});


$(".close").click(function() {
    $("#dialog").dialog("close");
});

$(".open").click(function() {
    $("#dialog").dialog("open");
});

$("td").click(function() {
    if ($("#dialog").dialog("isOpen")) {
        $("#dialog").dialog("close");
    } else {
        $("#dialog").dialog("open");
    }
});


$(window).resize(function() {
    $("#dialog").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    });
});
