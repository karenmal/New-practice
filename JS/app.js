var txt;
var r = confirm("Press a button!");
if (r == true) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

var person = prompt("Please enter your name", "Karen");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}