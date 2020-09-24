var yes_button = document.getElementById("initiator-yes-button");
var no_button = document.getElementById("initiator-no-button");
var navigation = document.getElementById("navigator");
var initiator = document.getElementById("initiator");

yes_button.onclick = function(){
    initiator.style.display = "none";
    navigation.style.display = "flex";
    console.log("Did it work?");
}