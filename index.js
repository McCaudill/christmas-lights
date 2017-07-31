// a0:02:dc:9b:74:3d - MAC address

var dash = require("dash-button");
var macAddress = "a0:02:dc:9b:74:3d";
var button = new dash(macAddress);
var subscription = button.addListener(function(){
    console.log("puta");
});


console.log("silly cunt");
//console.log(dash);