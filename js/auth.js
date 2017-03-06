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
    Cookies.set('auth', { groupName: groupName }, { expires: 7 });
    window.location.pathname = Arsenal.config.GAME_RELATIVE_URL;
};

$(document).ready(function() {
    if(!Arsenal.auth.checkIfAuthorized() && window.location.pathname != '/') {
        window.location.replace(window.location.origin);
    }
});
