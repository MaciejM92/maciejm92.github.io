this.Arsenal = this.Arsenal || {};
this.Arsenal.rank = this.Arsenal.rank || {};

this.Arsenal.rank.getRank = function(callback) {
    Arsenal.data.getData(Arsenal.config.RANK_SHEET, function(data) {
        callback(data);
    });
};

$(document).ready(function() {
    Arsenal.rank.getRank(function(data) {
        var templateConfig = {};
        templateConfig.data = data;
        templateConfig.labels = Arsenal.config.labels || {
            ranking_place: "Miejsce",
            ranking_groupName: "Nazwa grupy",
            ranking_points: "Punkty"
        };
        $('#rank').append(
            Handlebars.templates.rank(templateConfig)
        );
    });
});
