var openedInfoWindow;

function initMap() {
  var center = {lat: 52.231838, lng: 21.005995};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center
  });

  function placeMarkersOnMap(markers) {
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: _.map(markers, function(marker) {
        return {
          location: new google.maps.LatLng(marker.position.lat, marker.position.lng),
          weight: marker.weight
        }
      }),
      gradient: [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
    });
    heatmap.setMap(map);
    _.forEach(markers, function(markerConfig) {
      var marker = new google.maps.Marker({
        position: markerConfig.position,
        map: map,
        title: markerConfig.title
      });

      var infoWindow = new google.maps.InfoWindow({
        content: getInfoWindow(markerConfig)
      });

      marker.addListener('click', function() {
        if(openedInfoWindow) {
          openedInfoWindow.close()
        }
        openedInfoWindow = infoWindow;
        infoWindow.open(map, marker);
      });
    });
  }

  getMarkers(placeMarkersOnMap);
}

function getInfoWindow(markerConfig) {
  return  '<div id="content">'+
            '<div id="site-notice">'+
            '</div>'+
            '<h1>'+ markerConfig.title +'</h1>'+
            '<div id="body-content">'+
              markerConfig.description +
            '</div>'+
          '</div>';
}
