this.Arsenal = this.Arsenal || {};
this.Arsenal.data = this.Arsenal.data || {};

this.Arsenal.data.getData = function(sheet, callback, postProcess) {
    Tabletop.init({
        key: Arsenal.config.SOURCE_SPREADSHEET,
        callback: function(data, tabletop) {
            if(postProcess) {
                data = postProcess(data);
            }
            callback(data);
        },
        simpleSheet: true,
        wanted: [sheet],
        parseNumbers: true
    });
}
