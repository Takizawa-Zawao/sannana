function initialize(){
    alert("initiaklize.");
    document.getElementById("add_button").onclick = addGuest();
    document.getElementById("remove_button").onclick = removeGuest();
}

initialize();