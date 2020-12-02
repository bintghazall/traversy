//password generator
  //var val = Math.floor(1000 + Math.random() * 9000);
  //document.getElementById("password").value = Math.floor((Math.random() * 9000) + 1000);
  function tokengen(){
    var tkn = Math.floor((Math.random() * 9000) + 1000);
    document.getElementById('token').value = tkn
    console.log(tkn);
  }
 
  //Time display 
  var timeDisplay = document.getElementById("timer");
  function refreshTime() {
    var dateString = new Date().toLocaleString();
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
    }
    setInterval(refreshTime, 1000);

  //hide and show token generated
  function hideShow() {
    var x = document.getElementById("token-generation");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }