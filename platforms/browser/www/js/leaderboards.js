vue.leaderboards = `
<nav class="bar bar-standard">
  <div class="segmented-control">
    <a class="control-item" onclick="vue.page = 'watchAdventures'">Entries</a>
    <a class="control-item active" onclick="vue.page = 'leaderboard'">Leaderboards</a>
  </div>
</nav>

<div style="font-family: Montserrat; padding-top: 75px;">
  <ul v-hide="vue.showEntries" class="table-view">
    <li class="table-view-cell media">
      <a class="navigate-right">
       <img class="media-object pull-left" src="http://placehold.it/100x100">
             <div class="media-body">
          #1
          <h4>blah blah</h4>
        </div>
      </a>
    </li>
    <li class="table-view-cell media">
      <a class="navigate-right">
        <img class="media-object pull-left" src="http://placehold.it/100x100">
        <div class="media-body">
          #2
          <h4>blah blah</h4>
        </div>
      </a>
    </li>
    <li class="table-view-cell media">
      <a class="navigate-right">
        <img class="media-object pull-left" src="http://placehold.it/100x100">
        <div class="media-body">
          #3
          <h4>blah blah</h4>
        </div>
      </a>
    </li>
  </ul>
</div>
`
