function showLoginForm() {
    document.getElementById("initialPage").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function showSignupForm() {
    document.getElementById("initialPage").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  }
  
  function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
  
    // Simulate file handling (you should replace this with server-side logic)
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(u => u.username === username && u.password === password);
  
    if (user) {


      window.location.href="menu.html";
     
    } else {
      alert("Invalid username or password");
    }
   
  }
  
  function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
  
    // Simulate file handling (you should replace this with server-side logic)
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var existingUser = users.find(u => u.username === username);
  
    if (existingUser) {
      alert("Username already exists. Choose a different one.");
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful. You can now login.");
     
    }
    showLoginForm();
  }
  