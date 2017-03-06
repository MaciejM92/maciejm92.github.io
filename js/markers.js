this.Arsenal = this.Arsenal || {};
this.Arsenal.map = this.Arsenal.map || {};

this.Arsenal.map.getMarkers = function(callback) {
    Arsenal.data.getData(Arsenal.config.MARKERS_SHEET, callback, Arsenal.map.postProcessMarkers);
}

this.Arsenal.map.postProcessMarkers = function(data) {
    return _.forEach(data, function(marker) {
        marker.position = {
            lat: marker.lat,
            lng: marker.lng
        };
        delete marker.lat;
        delete marker.lng;
    });
}
