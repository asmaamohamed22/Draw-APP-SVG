var checkrect;
var checkcircle;
var checkline;

var drawrect = document.getElementById("rect");
var drawcircle = document.getElementById("circle");
var drawline = document.getElementById("line");
var drawsvg = document.getElementById("svg");

drawrect.addEventListener("click", function () {
  checkrect = checkrect ? false : true;
  checkcircle = false;
  checkline = false;
});

drawcircle.addEventListener("click", function () {
  checkcircle = checkcircle ? false : true;
  checkrect = false;
  checkline = false;
});

drawline.addEventListener("click", function () {
  checkline = checkline ? false : true;
  checkrect = false;
  checkcircle = false;
});

drawsvg.addEventListener("click", function (pos) {
  if (checkrect) {
    var rectsvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rectsvg.setAttribute("width", 100);
    rectsvg.setAttribute("height", 150);
    rectsvg.setAttribute("fill", "blue");
    rectsvg.setAttribute("x", pos.offsetX);
    rectsvg.setAttribute("y", pos.offsetY);
    drawsvg.append(rectsvg);
  }
  if (checkcircle) {
    var circlesvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circlesvg.setAttribute("r", 70);
    circlesvg.setAttribute("fill", "green");
    circlesvg.setAttribute("cx", pos.offsetX);
    circlesvg.setAttribute("cy", pos.offsetY);
    drawsvg.appendChild(circlesvg);
  }
  if (checkline) {
    var linesvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    linesvg.setAttribute("x1", pos.offsetX);
    linesvg.setAttribute("y1", pos.offsetY);
    linesvg.setAttribute("x2", pos.offsetX + 150);
    linesvg.setAttribute("y2", pos.offsetY + 150);
    linesvg.setAttribute("stroke", "red");
    linesvg.style.strokeWidth = 7;
    drawsvg.append(linesvg);
  }
});
