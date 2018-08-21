vue.viewAdventure2 = `
<header class="bar bar-nav" style="font-size:50px; font-family: Oswald; text-shadow: 5px 5px #b0c5fc;">
  <img id="venture" src="splash.png" style="width:15%; float:left; padding: 17px;">
  <h1 class="title">Venture</h1>
</header>

<h1>My First Google Map</h1>

<div id="googleMap" style="width:100%; height:930px; bottom: 0;"></div>

<script>
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzSJ5CMm5bwiqt3_CrTQz-UWm0N12Td40&callback=myMap"></script>
`