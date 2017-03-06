this.Arsenal = this.Arsenal || {};
this.Arsenal.map = this.Arsenal.map || {};
this.Arsenal.map.openedInfoWindow = null;

this.Arsenal.map.initMap = function() {
    var center = {lat: 52.231838, lng: 21.005995};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: center
    });

    function placeMarkersOnMap(markers) {
        _.forEach(markers, function(markerConfig) {
            var marker = new google.maps.Marker({
                position: markerConfig.position,
                map: map,
                title: markerConfig.title
            });

            var infoWindow = new google.maps.InfoWindow({
                content: Arsenal.map.getInfoWindow(markerConfig)
            });

            marker.addListener('click', function() {
                if(Arsenal.map.openedInfoWindow) {
                    Arsenal.map.openedInfoWindow.close()
                }
                Arsenal.map.openedInfoWindow = infoWindow;
                infoWindow.open(map, marker);
                new Foundation.Abide($('#info-window-form'));
                $('#info-window-form')
                .on("formvalid.zf.abide", function(ev,frm) {
                    Arsenal.game.submitAnswer(markerConfig, $('#info-window-form input[name=answer]').val());
                })
                // to prevent form from submitting upon successful validation
                .on("submit", function(ev) {
                    ev.preventDefault();
                });
            });
        });
    }

    Arsenal.map.getMarkers(placeMarkersOnMap);
}

this.Arsenal.map.getInfoWindow = function(markerConfig) {
    markerConfig.labels = Arsenal.config.labels || {
        infoWindowForm_answerPlaceholder: 'Wpisz kod',
        infoWindowForm_submitButton: 'OK'
    };
    return Handlebars.templates.mapInfoWindow(markerConfig);
}
