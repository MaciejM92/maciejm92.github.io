this.Arsenal = this.Arsenal || {};
this.Arsenal.auth = this.Arsenal.auth || {};

this.Arsenal.auth.getGroupName = function() {
    var authCookie = Cookies.getJSON('auth') || {};
    return authCookie.groupName;
}

this.Arsenal.auth.checkIfAuthorized = function() {
    return !!Arsenal.auth.getGroupName();
};

this.Arsenal.auth.login = function(groupName) {
    $("#auth-error").addClass('hide');
    $("#auth-server-error").addClass('hide');
    $.ajax({
        url: Arsenal.config.AUTH_URL,
        method: 'GET',
        dataType: 'jsonp',
        data: {
            groupName: groupName
        }
    })
    .done(function(result) {
        if(result.result === 'error') {
            $("#auth-error").removeClass('hide');
        } else {
            Cookies.set('auth', { groupName: groupName }, { expires: 7 });
            window.location.pathname = Arsenal.config.GAME_RELATIVE_URL;
        }
    })
    .fail(function(error) {
        $("#auth-server-error").removeClass('hide');
    })
};

$(document).ready(function() {
    if(!Arsenal.auth.checkIfAuthorized() && window.location.pathname != '/') {
        window.location.replace(window.location.origin);
    }
});
