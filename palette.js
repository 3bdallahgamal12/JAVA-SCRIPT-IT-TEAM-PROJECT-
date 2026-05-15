function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var hex = "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");
  return hex.toUpperCase();
}

function createColorBox(color) {
  var box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color;

  var code = document.createElement("span");
  code.className = "color-code";
  code.textContent = color;

  box.appendChild(code);

  box.onclick = function() {
    navigator.clipboard.writeText(color);
    alert("تم النسخ: " + color);
  };

  return box;
}

function generatePalette() {
  var palette = document.getElementById("palette");
  palette.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    var color = getRandomColor();
    var box = createColorBox(color);
    palette.appendChild(box);
  }
}

generatePalette();
