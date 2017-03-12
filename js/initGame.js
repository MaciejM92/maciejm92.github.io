$(document).ready(function() {
    $("#clock")
    .countdown("2017/03/25 17:00:00", function(event) {
        $(this).text(
            event.strftime('%H:%M:%S')
        );
    });
});
