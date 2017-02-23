var publicSpreadsheetUrl = window.config.SOURCE_SPREADSHEET;

function getMarkers(callback) {
  getData(window.config.MARKERS_SHEET, callback, postProcessMarkers)
}

function postProcessMarkers(data) {
  return _.forEach(data, function(marker) {
    marker.position = {
      lat: marker.lat,
      lng: marker.lng
    };
    delete marker.lat;
    delete marker.lng;
  });
}
