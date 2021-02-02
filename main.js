var yes_button = document.getElementById("initiator-yes-button");
var no_button = document.getElementById("initiator-no-button");
var navigation = document.getElementById("navigator");
var initiator = document.getElementById("initiator");

initiator.classList.add("slidingon")

yes_button.onclick = function(){
    navigation.classList.add("slidingon")
    initiator.classList.add("slidingoff");
    console.log("Did it work?");
}