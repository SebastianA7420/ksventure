vue.viewAdventures = `
<div v-show=false>
<a id="link_Met" href="#Met">1</a>
<a id="link_Dream" href="#Dream">2</a>
<a id="link_Needle" href="#Needle">3</a>
<a id="link_AppNexus" href="#AppNexus">4</a>
</div>

<div id="Met" class="modal">
  <header class="bar bar-nav">
    <a class="icon icon-close pull-right" href="#Met"></a>
    <h1 class="titleAd">Jurassic Park @ the Natural History Museum</h1>
  </header>

  <div class="content">
    <p class="content-padded">Go to the Museum of Natural History and find the scariest dinosaur fossil. Get a stranger, and pretend to run away like the dinosaur is about to chase you!</p>
  </div>
</div>

<div id="Dream" class="modal">
  <header class="bar bar-nav">
    <a class="icon icon-close pull-right" href="#Dream"></a>
    <h1 class="titleAd">Dream Machine in Williamsburg</h1>
  </header>

  <div class="content">
    <p class="content-padded">Theres a pop-up exhibit in Williamsburg, Brooklyn called Dream Machine. Go there and ask 3 people to show the best photo they took inside, and give a silly review of each one! </p>
  </div>
</div>

<div id="Needle" class="modal">
  <header class="bar bar-nav">
    <a class="icon icon-close pull-right" href="#Needle"></a>
    <h1 class="titleAd">Cleo's Needle in Central Park</h1>
  </header>

  <div class="content">
    <p class="content-padded">Go to Central Park and find Cleopatra's Needle. Film yourself holding the needle by the point.</p>
  </div>
</div>

<div id="AppNexus" class="modal">
  <header class="bar bar-nav">
    <a class="icon icon-close pull-right" href="#AppNexus"></a>
    <h1 class="titleAd"><center>Demo at AppNexus!</center></h1>
  </header>

  <div class="content">
    <p class="content-padded" style="font-size: 40px" > <br><br><br><br><br><br><br><br><center>Go to AppNexus and act like you are giving a pitch presentation for a make-believe app!</center></p>
  <br><br><br><br><center><div style="font-size: 36px">Amount of Points: 100</div><br><br><br>
  <center><button class="btn-outlined">Venture!</button></center>
  </div>
</div>
`;

var NewYork = {lat: 40.730610, lng: -73.935242};
var adventures = [
  {
    label: 'Met',
    place: {lat: 40.7813, lng: -73.9740},
    info: `Go to the Museum of Natural History and find the scariest dinosaur fossil. Film yourself running away from your chosen fossil in a frightened way.`
  },
  {
    label: 'Dream',
    place: {lat: 40.720734, lng: -73.958764},
    info: `Theres a pop-up exhibit in Williamsburg, Brooklyn called Dream Machine. Go there and ask 3 people to show the best photo they took inside.`
  },
  {
    label: 'Needle',
    place: {lat: 40.7796, lng: -73.9654},
    info: `Go to Central Park and find Cleopatra's Needle. Film yourself holding the needle by the point.`
  },
  {
    label: 'AppNexus',
    place: {lat: 40.7418968, lng: -73.9909143},
    info: ``
  },
];

var map;
var infoWindows = {};
var markersArray = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: NewYork,
    minZoom: 12
  });

  console.log('google maps loaded');

  adventures.forEach(function(adventure) {
    var marker = new google.maps.Marker({
      position: adventure.place,
      label: adventure.label,
      map: map,
    });

    infoWindows[adventure.label] = new google.maps.InfoWindow({
      content: adventure.info,
      maxWidth: 200
    });

   // infoWindows[adventure.label].isOpen = false;
    infoWindows[adventure.label] = {isOpen: false};

    marker.addListener('click', bounceAndInfo);
    markersArray.push(marker);
  });

  // get user's current location
  navigator.geolocation.getCurrentPosition(function(pos) {
    markersArray.push(new google.maps.Marker({
        position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
        title: 'You Are Here',
        map: map
    }));
  });

  console.log('markers placed');

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markersArray.length; i++) {
   bounds.extend(markersArray[i].getPosition());
  }

  map.fitBounds(bounds);
  console.log('map resized');
};

function bounceAndInfo() {
  var infoWindow = infoWindows[this.label];
  if (infoWindow.isOpen) {
    this.setAnimation(null);
   // infoWindow.close();
    infoWindow.isOpen = false;
  } else {
    this.setAnimation(google.maps.Animation.BOUNCE);
    //infoWindow.open(map, this);
    document.getElementById('link_' + this.label).click();
    infoWindow.isOpen = true;
  }
}

google.maps.event.addDomListener(window, 'load', initMap);

// <div style="font-family: Montserrat;">
//  <br>
//  <h1 class="catchphrase">Adventures</h1>
//  <ul class="table-view">
//    <li class="table-view-cell media">
//      <a class="navigate-right">
//       <img class="media-object pull-left" src="http://placehold.it/42x42">
//             <div class="media-body">
//          Adventure One
//          <h4>Go to the Museum of Natural History and find the scariest dinosaur fossil. Film yourself running away from your chosen fossil in a frightened way.</h4>
//        </div>
//      </a>
//    </li>
//    <li class="table-view-cell media">
//      <a class="navigate-right">
//        <img class="media-object pull-left" src="http://placehold.it/42x42">
//        <div class="media-body">
//          Adventure Two
//          <h4>Theres a pop-up exhibit in Williamsburg, Brooklyn called Dream Machine. Go there and ask 3 people to show the best photo they took inside.</h4>
//        </div>
//      </a>
//    </li>
//    <li class="table-view-cell media">
//      <a class="navigate-right">
//        <img class="media-object pull-left" src="http://placehold.it/42x42">
//        <div class="media-body">
//          Adventure Three
//          <h4>Go to Central Park and find Cleopatra's Needle. Film yourself holding the needle by the point.</h4>
//        </div>
//      </a>
//    </li>
//  </ul>
//  </div>
