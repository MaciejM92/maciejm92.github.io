this.Arsenal = this.Arsenal || {};
this.Arsenal.map = this.Arsenal.map || {};
this.Arsenal.map.openedInfoWindow = null;
this.Arsenal.map.infoWindows = {}

this.Arsenal.map.initMap = function() {
    var center = {lat: 52.231838, lng: 21.005995};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: center
    });

    function placeMarkersOnMap(markers) {
        Arsenal.map.loadInfoWindows(markers);
        _.forEach(markers, function(markerConfig) {
            var marker = new google.maps.Marker({
                position: markerConfig.position,
                map: map,
                title: markerConfig.title
            });

            var infoWindow = Arsenal.map.infoWindows[markerConfig.uid];

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

    Arsenal.config.getLabels(function() {
        Arsenal.map.getMarkers(placeMarkersOnMap);
    });

    $(document).ready(function() {
        Arsenal.map.scheduleInfoWindowsUpdate();
    });
}

this.Arsenal.map.loadInfoWindows = function(markers) {
    _.forEach(markers, function(markerConfig) {
        if(!Arsenal.map.infoWindows[markerConfig.uid]) {
            var infoWindow = new google.maps.InfoWindow({
                content: Arsenal.map.getInfoWindow(markerConfig)
            });
            Arsenal.map.infoWindows[markerConfig.uid] = infoWindow;
        } else if (Arsenal.map.infoWindows[markerConfig.uid] !== this.Arsenal.map.openedInfoWindow) {
            Arsenal.map.infoWindows[markerConfig.uid].setContent(Arsenal.map.getInfoWindow(markerConfig));
        } else if(Arsenal.map.infoWindows[markerConfig.uid] === this.Arsenal.map.openedInfoWindow) {
            Arsenal.map.reloadOpenedInfoWindow(markerConfig);
        }
    });
};

this.Arsenal.map.reloadOpenedInfoWindow = function(currentWindowConfig) {
    $("#info-window-visited-by-value").html(currentWindowConfig.visitedBy);
};

this.Arsenal.map.updateInfoWindows = function() {
    Arsenal.map.getMarkers(Arsenal.map.loadInfoWindows);
};

this.Arsenal.map.scheduleInfoWindowsUpdate = function() {
    setInterval(Arsenal.map.updateInfoWindows, (15 + Math.floor(15.0 * Math.random())) * 1000);
};

this.Arsenal.map.getInfoWindow = function(markerConfig) {
    markerConfig.labels = Arsenal.config.labels || {
        infoWindowForm_answerPlaceholder: 'Wpisz kod',
        infoWindowForm_submitButton: 'OK'
    };
    return Handlebars.templates.mapInfoWindow(markerConfig);
}
