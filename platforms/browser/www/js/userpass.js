vue.userpass = `

<br>

 <center><img id="venture" src="img/logooo.png"></center>

    <h1 class="name">Venture</h1>

    <br><br><br>
    
    <h4 class="catchphrase">Do you have what it takes?</h4>

    <br>
<!-- <form action="/action_page.php">
     <center>
	<label for="uname"></label>
    <input type="text" placeholder="Choose Username" name="uname" required>
    </center>

	<center><label for="psw"></label>
    <input type="password" placeholder="Choose Password" name="psw" required></center>

     
    <br><br>

    <center><button class="btn btn-block" onclick="vue.page = 'HomePage'" type="submit">Sign Up</button></center>

    </form> -->

<style>
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}



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


<form action="/action_page.php" method="post">

  <div class="container">
    <label for="uname"></label>
    <center><input type="text" placeholder="Choose Username" name="uname" required></center>

    <label for="psw"></label>
    <center><input type="password" placeholder="Choose Password" name="psw" required></center>
        
    <center><button type="submit" class="btn btn-block" onclick="vue.page = 'HomePage'">Sign Up</button></center>
    <!<label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

 
</form> 




<br><br><br> `;

