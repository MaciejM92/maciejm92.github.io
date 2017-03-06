this.Arsenal = this.Arsenal || {};
this.Arsenal.game = this.Arsenal.game || {};

this.Arsenal.game.submitAnswer = function(markerConfig, answer) {
    if(Arsenal.auth.checkIfAuthorized()) {
        $("#info-window-loading").removeClass('hide');
        $("#info-window-success").addClass('hide');
        $("#info-window-error").addClass('hide');
        $.ajax({
            url: Arsenal.config.GAME_FORM_URL,
            method: 'POST',
            dataType: 'jsonp',
            data: {
                placeId: markerConfig.uid,
                groupName: Arsenal.auth.getGroupName(),
                answer: answer
            }
        })
        .done(function() {
            $("#info-window-success").removeClass('hide');
        })
        .fail(function() {
            $("#info-window-error").removeClass('hide');
        })
        .always(function() {
            $("#info-window-loading").addClass('hide');
        });
    } else {
        //TODO: UNAUTHORIZED!
    }
}