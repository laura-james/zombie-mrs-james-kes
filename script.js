var zombie_map;
      function initMap() {
        zombie_map = new google.maps.Map(
          document.getElementById("zombie_map"),
          {
            zoom: 18,
            center: { lat: 51.386634, lng: -2.344206 }
          }
        );
        zombie_map.addListener("click", function(e) {
           var location = e.latLng;
          placemarker(location);
        });
      }
      function placemarker(location) {
        var emoji = document.getElementById('icon_to_use').value;
        var marker = new google.maps.Marker({
          position: location,
          map: zombie_map,
          icon: emoji
        });
        console.log(location.lat() +" "+location.lng() +" "+emoji)
      }