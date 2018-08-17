vue.leaderboards = `
<header class="bar bar-nav" style="font-size:50px; font-family: Oswald; text-shadow: 5px 5px #b0c5fc;">
  <img id="venture" src="splash.png" style="width:15%; float:left; padding: 17px;">
  <h1 class="title">Venture</h1>
</header>
<header class="bar1" style="background:linear-gradient(to bottom right, #e6a3ff, #b0c5fc);">
<center><img src="VentureTrophy.png" style="padding-top: 10px;" alt="VENTURE TROPHY" width="100" height="100"></center>
<h2 style="font-family: Montserrat;  color: #951dc1; text-shadow: 2px 2px #b0c5fc; padding-bottom: 10px;"><center>Leaderboards</center></h2>
</header>

<div style="font-family: Montserrat;  color: #951dc1; text-shadow: 2px 2px #b0c5fc;">
  <ul v-hide="vue.showEntries" class="table-view">
   <center> <li class="table-view-cell media">
       <img class="ldbdPics" src="VentureBoy.jpg" width="250" height="250">
             <div class="media-body">
          <h3>Brian T.</h3>
          <h4>First Place Venturer</h4>
        </div>
      </a>
    </li>
    <li class="table-view-cell media">
        <img class="ldbdPics" src="VentureBoy2.png" width="250" height="250">
        <div class="media-body">
          <h3>Devon H.</h3>
          <h4>Second Place Venturer</h4>
        </div>
      </a>
    </li>
    <li class="table-view-cell media">
        <img class="ldbdPics" src="VentureGirl2.png" width="250" height="250">
        <div class="media-body">
          <h3>Jasmine M.</h3>
          <h4>Third Place Venturer</h4>
        </div>
      </a>
    </li>
    <li class="table-view-cell media">
       <img class="ldbdPics" src="VentureBoy3.png" width="250" height="250">
             <div class="media-body">
          <h3>Jackie X.</h3>
          <h4>Fourth Place Venturer</h4>
        </div>
      </a>
    </li>
    <li class="table-view-cell media">
       <img class="ldbdPics" src="VentureGirl.png" width="250" height="250">
             <div class="media-body">
          <h3>Chelsy R.</h3>
          <h4>Fifth Place Venturer</h4>
          <br><br>
        </div>
      </a>
    </li> </center>
  </ul>
</div>
`

