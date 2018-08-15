vue.watchAdventures = `
<nav class="bar bar-standard">
  <div class="segmented-control">
    <a class="control-item active" onclick="vue.page = 'watchAdventures'">Entries</a>
    <a class="control-item" onclick="vue.page = 'leaderboards'">Leaderboards</a>
  </div>
</nav>

<div style="font-family: Montserrat; padding-top: 75px;">
 <ul v-show="vue.showEntries" class="table-view">
   <li class="table-view-cell media">
     <a class="navigate-right">
      <img class="media-object pull-left" src="http://placehold.it/100x100">
            <div class="media-body">
         Cleo's Needle in Central Park
         <h4>by someone</h4>
       </div>
     </a>
   </li>
   <li class="table-view-cell media">
     <a class="navigate-right">
       <img class="media-object pull-left" src="http://placehold.it/100x100">
       <div class="media-body">
         Dream Machine in Williamsburg
         <h4>by someone</h4>
       </div>
     </a>
   </li>
   <li class="table-view-cell media">
     <a class="navigate-right">
       <img class="media-object pull-left" src="http://placehold.it/100x100">
       <div class="media-body">
         Jurassic Park @ the Natural History Museum
         <h4>by someone</h4>
       </div>
     </a>
   </li>
 </ul>
  </div>
`
