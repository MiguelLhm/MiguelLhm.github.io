document.getElementById("buttonColor").addEventListener("mousemove", function() {
  myFunction(event);
});


var cursor = document.getElementById("cursor");
function myFunction(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = (mouseX - 55) + "px";
  cursor.style.top = (mouseY - 55) + "px";
}