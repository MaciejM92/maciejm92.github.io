this.Arsenal = this.Arsenal || {};
this.Arsenal.config = this.Arsenal.config || {};


this.Arsenal.config.getLabels = function(callback) {
    if(Arsenal.config.labels) {
        callback(Arsenal.config.labels);
    } else {
        Arsenal.data.getData(Arsenal.config.LABELS_SHEET, function(data) {
            Arsenal.config.labels = data[0];
            if(callback) {
                callback(data[0]);
            }
        });
    }
}
