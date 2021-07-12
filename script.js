/*global google*/
var zombie_map;
var old_position;
var tolerance = 10;
var all_markers = [];
var data = `51.387156546966665 -2.343340865629464 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fhospital.png
51.387133113126175 -2.345062843817025 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.38641335360857 -2.345738760488778 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fhospital.png
51.3859346235674 -2.343587628858834 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.386195749665234 -2.3426756777937707 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.38574379970742 -2.345717302816659 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.38726702062457 -2.342267982023507 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.38634974640908 -2.3432335772688684 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.38653052453408 -2.3429063477690515 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png
51.38666443379585 -2.3430619158919153 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fexplosion.gif
51.38639296288636 -2.3449784761962955 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.38698216247827 -2.3463732248840397 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.38741066650737 -2.348282957702643 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.38704911649733 -2.3501497751770084 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.38658043630668 -2.3487979418335025 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.38544219300176 -2.3491198069152897 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.384464620270556 -2.3492270952758854 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.3831254456465 -2.3495275026855533 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.38220139230798 -2.3501283175048893 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.381344282678185 -2.3493987566528385 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.379964838164476 -2.3492270952758854 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.379121079766655 -2.3492270952758854 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.37854517224669 -2.350063944488532 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/weapons.png
51.37778174878409 -2.3507720476684635 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/hospital.png
51.377286186388204 -2.3513514048156803 https://projects-static.raspberrypi.org/projects/zombie-apocalypse-map/01373a767ce8ab5f0d0a5335859c48ea6c8bf2e9/en/images/hospital.png
51.37796925748081 -2.351737642913825 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fexplosion.gif?v=1624287611691
51.3848496257224 -2.3461479193267887 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png?v=1623920720709
51.38412648237612 -2.345386171966559 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png?v=1623920720709
 51.38383856101147 -2.343819761901862 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png?v=1623920720709
51.38394569475412 -2.346813107162482 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png?v=1623920720709
 51.38465544946455 -2.345193052917487 https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fzombie.png?v=1623920720709

`;

var markers = data.split("\n");

function initMap() {
  zombie_map = new google.maps.Map(document.getElementById("zombie_map"), {
    zoom: 17,
    center: { lat: 51.386634, lng: -2.344206 }
  });
  old_position = new google.maps.Marker({
    position: { lat: 51.386634, lng: -2.344206 },
    map: zombie_map
  });
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(set_my_position);
  } else {
    alert("Geolocation doesn't work in your browser");
  }
  for (var i = 0; i < markers.length; i++) {
    console.log(markers[i] + "<br>");
    var marker_data = markers[i].trim();
    marker_data = marker_data.split(" ");
    var latitude = marker_data[0];
    var longitude = marker_data[1];
    var emoji = marker_data[2];

    var marker_position = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
      position: marker_position,
      map: zombie_map,
      icon: emoji
    });
    all_markers.push(marker);
  }
  zombie_map.addListener("click", function(e) {
    var location = e.latLng;
    placemarker(location);
  });
}
function placemarker(location) {
  var emoji = document.getElementById("icon_to_use").value;
  var marker = new google.maps.Marker({
    position: location,
    map: zombie_map,
    icon: emoji
  });
  console.log(location.lat() + " " + location.lng() + " " + emoji);
}
function set_my_position(position) {
  //console.log(position);
  old_position.setMap(null);
  var pos = new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude
  );
  //zombie_map.setCenter(pos);
  var me = new google.maps.Marker({
    position: pos,
    map: zombie_map,
    icon:
      "https://cdn.glitch.com/1bf28fcc-9c66-4df1-b451-dfe5f696fac7%2Fsmiley4.png?v=1625063691950"
  });
  old_position = me;
  for (var i = 0; i < all_markers.length; i++) {
    var distance = google.maps.geometry.spherical.computeDistanceBetween(
      pos,
      all_markers[i].getPosition()
    );
    console.log(distance);
    if (distance < tolerance) {
      var what_is_it = all_markers[i].getIcon();
      what_is_it = what_is_it.replace(".png", "");
      alert("Found the " + what_is_it);
      all_markers.setMap(null);
    }
  }
}
