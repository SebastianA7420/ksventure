<<<<<<< HEAD
vue.userpass = `
<div style="background:linear-gradient(to bottom right, #e6a3ff, #b0c5fc);">

<br>

 <center><img id="venture" src="splash.png"></center>

    <h1 class="name">Venture</h1>
    <br><br>
    
    <h4 class="catchphrase">Do you have what it takes?</h4>

    <br>


<style>


button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}


.container {
    padding: 16px;
}

span.psw {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
}
</style>
</head>
<body>


    <br>

  <div class="container">
    <label for="uname"></label>
    <center><input type="text" placeholder="Choose Username" name="uname" required></center>

    <label for="psw"></label>
    <center><input type="password" placeholder="Choose Password" name="psw" required></center>

    <center><button type="submit" class="btn btn-outlined" onclick="vue.signInFn()">Sign Up</button></center>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>


<center><p>Do you already have an account?</p> <button class="btn btn-outlined" onclick="vue.page = 'SignIn'">Sign In</button></center>




<br><br><br> 
</div>
`;
=======
vue.feed = `
<ul class="table-view">
  <br><br><br><br>
  <h1 class="catchphrase">Feed</h2>
  <li class="table-view-cell media">
    <a class="navigate-right">
      <img class="media-object pull-left" src="outfit.jpg">
      <div class="media-body">
        Strangers Choose My Outfit at Primark!
        <p>By Samantha Somebody</p>
        <p>Check out my fun adventure!</p>
      </div>
    </a>
  </li>
  <li class="table-view-cell media">
    <a class="navigate-right">
      <img class="media-object pull-left" src="museum.jpg">
      <div class="media-body">
        Look What I Found at the Museum of Natural History!
        <p>By Joe Bob</p>
        <p>It took me so long to find this statue, but it was so worth the wait...</p>
      </div>
    </a>
  </li>
  <li class="table-view-cell media">
    <a class="navigate-right">
      <img class="media-object pull-left" src="bridge.jpg">
      <div class="media-body">
        Running Through the Brooklyn Bridge!
        <p>By RyanChris Blah</p>
        <p>I made a new friend while I was running the bridge! And I feel so active ;)</p>
      </div>
    </a>
  </li>
</ul>
`
>>>>>>> b2a07f98e67e39315f2fee53fc1ca8085e9d5dd8
