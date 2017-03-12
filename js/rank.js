this.Arsenal = this.Arsenal || {};
this.Arsenal.rank = this.Arsenal.rank || {};

this.Arsenal.rank.getRank = function(callback) {
    Arsenal.data.getData(Arsenal.config.RANK_SHEET, function(data) {
        callback(data);
    });
};

this.Arsenal.rank.updateRankComponent = function() {
    $('#rank-loading').removeClass('hide');
    Arsenal.rank.getRank(function(data) {
        var templateConfig = {};
        templateConfig.data = data;
        templateConfig.labels = Arsenal.config.labels || {
            ranking_place: "Miejsce",
            ranking_groupName: "Nazwa grupy",
            ranking_points: "Punkty"
        };
        $('#rank').html(
            Handlebars.templates.rank(templateConfig)
        );
        $('#rank-loading').addClass('hide');
    });
}


$(document).ready(function() {
    Arsenal.rank.updateRankComponent();
});
