vue.viewAdventure2 = `

<h1>My First Google Map</h1>

<div id="googleMap" style="width:100%;height:100%;"></div>

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