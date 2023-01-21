import "./styles.css";
var color = ["red", "black", "green", "orange", "maroon", "cyan"];
var shape = [
  "square",
  "rectangle",
  "circle",
  "oval",
  "triangle-up",
  "triangle-down",
  "triangle-topleft",
  "triangle-bottomleft",
  "triangle-bottomright",
  "triangle-right"
];
var currShape = "square";
document.getElementById("shape").onclick = function () {
  var value = shape[Math.floor(Math.random() * shape.length)];
  document.getElementById(currShape).setAttribute("id", value);
  currShape = value;
};

document.getElementById("color").onclick = function () {
  var value = color[Math.floor(Math.random() * color.length)];
  document.getElementById("block").style.backgroundColor = value;
};
