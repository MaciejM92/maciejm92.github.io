$(document).ready(function() {
    Arsenal.config.getLabels(function(labels) {
        $('#login-form-loading').addClass('hide');
        $('#login-form-container').removeClass('hide');
        $('#login-form-container').append(Handlebars.templates.loginForm(labels));

        new Foundation.Abide($('#login-form'));

        $('#login-form')
        .on("formvalid.zf.abide", function(ev,frm) {
            Arsenal.auth.login($('#login-form input[name=group-name]').val());
        })
        // to prevent form from submitting upon successful validation
        .on("submit", function(ev) {
        ev.preventDefault();
        });
    });
});
