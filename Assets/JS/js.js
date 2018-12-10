alert("Hello, welcome to Lloyd Waller's biographical website.  Thank you for visiting! This site is still under construction, so feedback is appreciated.");

var messages= ["Welcome!", "Thanks for visiting!", "Enjoy the site!"];

var randomItem =
messages[Math.floor(Math.random()*messages.length)];

document.getElementById('random').innerHTML = randomItem;
