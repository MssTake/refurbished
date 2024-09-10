// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

function drop1() {
  document.getElementById("d1").classList.toggle("show"); }

function drop2() { document.getElementById("d2").classList.toggle("show");
}

function drop3() {
  document.getElementById("d3").classList.toggle("show");
}

function drop4() {
  document.getElementById("d4").classList.toggle("show");
}

function drop5() {
  document.getElementById("d5").classList.toggle("show");
}

function drop6() {
  document.getElementById("d6").classList.toggle("show");

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// comment stuff
function post() {
  var comment = document.getElementById("user" + "commentField").value;
  if (user.value.length == 0) {
    var user = "Anonymous";
  }
  document.getElementById("commentBox").innerHTML = comment;
}
function handler(event) {
  event.preventDefault();
}
