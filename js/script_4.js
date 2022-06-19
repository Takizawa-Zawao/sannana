function mouseFuction() {
    document.querySelectorAll(div.draggable_element).forEach(
        element => {
            element.ondragstart = function (event) {
                event.dataTransfer.setData("text/plain", event.target.id);
            };
            element.ondragover = function () {
                event.preventDefault();
                this.style.borderTop = "3px solid";
            };
            element.ondrop = function () {
                event.preventDefault();
                var id = event.sataTransfer.getData("text");
                var element_dropped = document.getElementById(id);
                this.parentNode.insertBefore(element_dropped, this);
                this.style.borderTop = "";
            };

        }
    );
}
function touchFunction() {
    document.querySelectorAll(div.draggable_element).forEach(
        element => {
            element.addEventListener("touchstart", startFunction); 
            element.addEventListener("touchmove", mediumFunction);
            element.addEventListener("touchend", endFunction);
        }
    );
}

function startFunction(){
    event.dataTransfer.setData("text/plain", event.target.id);
    alert("start: " + event.target.id);
}

function mediumFunction(){
    
}

function endFunction(){
    event.preventDefault();
    var id = event.sataTransfer.getData("text");
    var element_dropped = document.getElementById(id);
    this.parentNode.insertBefore(element_dropped, this);
    this.style.borderTop = "";
    alert("end: " + id);
}

if("ontouchend" in document){
    alert("touch mode");
    touchFunction();
}else{
    alert("mouse mode");
    mouseFuction();
}