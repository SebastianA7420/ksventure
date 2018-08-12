vue.userpass = `

<br>

 <center><img id="venture" src="img/logooo.png"></center>

    <h1 class="name">Venture</h1>

    <br><br>

    <h4 class="catchphrase">Do you have what it takes?</h4>

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




<br><br><br> `;
