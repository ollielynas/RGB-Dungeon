/*
b = blank
grw = grey wall
rw = red wall
bw = blue wall
gw = green wall
*/
var btnMap = {};

tool = "gw";

var playerPosion = [4, 9];

var redMovesTotal = 0;
var greenMovesTotal = 0;
var blueMovesTotal = 0;
var redButtons = {};
var greenButtons = {};
var blueButtons = {};

for (let step1 = 0; step1 < 30; step1++) {
  list = [];
  for (let step2 = 0; step2 < 20; step2++) {
    let btn = document.createElement("button");
    btn.innerHTML = "";
    btn.type = "submit";
    btn.name = "square-" + step1 + "-" + step2;
    btn.id = "square-" + step1 + "-" + step2;
    btn.style.position = "absolute";
    btn.style.left = step1 * 4 + "vh";
    btn.style.top = step2 * 4 + "vh";
    btn.style.height = "4vh";
    btn.style.width = "4vh";
    btn.style.backgroundColor = "white";
    btn.style.border = "1px solid grey";
    if (step1 == 27 && step2 == 9) {
      console.log("flag");
      btn.innerHTML = "&#127937;";
      btn.style.backgroundColor = "Lightgreen";
      btn.style.border = "3px solid Darkgreen";
    }
    document.getElementById("map").appendChild(btn);

    if (step1 == 4 && step2 == 9) {
      let btnp = document.createElement("button");
      btnp.type = "submit";
      btnp.name = "playerBtn";
      btnp.id = "playerBtn";
      btnp.style.position = "absolute";
      btnp.style.left = step1 * 4 + "vh";
      btnp.style.top = step2 * 4 + "vh";
      btnp.style.height = "4vh";
      btnp.style.width = "4vh";
      btnp.style.backgroundColor = "white";
      btnp.style.border = "1px solid grey";
      btnp.innerHTML = ":)";
      btnp.style.backgroundColor = "orange";
      btnp.style.border = "3px solid rgb(139, 64, 0)";
      btnp.style.fontWeight = "bold";
      btnp.style.zIndex = "10";
      document.getElementById("map").appendChild(btnp);
    }

    list.push("b");
  }
  btnMap[step1] = list;
}

async function fileToJSON(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => resolve(JSON.parse(event.target.result));
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  });
}

function loadMap() {
  greenMovesTotal = 0;
  redMovesTotal = 0;
  blueMovesTotal = 0;
  //var fileInput = document.getElementById('myfile').readAsText;
  //btnMap = JSON.parse(fileInput);
  playerPosion = [4, 9];
  document.getElementById("playerBtn").style.left = playerPosion[0] * 4 + "vh";
  document.getElementById("playerBtn").style.top = playerPosion[1] * 4 + "vh";
  if (document.getElementById("myfile").value != "") {
    document.getElementById("pasteMap").value = JSON.stringify(btnMap);
    document.getElementById("myfile").value = "";
  }
    btnMap = JSON.parse(document.getElementById("pasteMap").value);
    setCookie("mapCookie",JSON.stringify(btnMap),30);
    console.log(getCookie("mapCookie"));

  for (let step1 = 0; step1 < 30; step1++) {
    for (let step2 = 0; step2 < 20; step2++) {
      if (step1 == 27 && step2 == 9) {
      } else {
        document.getElementById("square-" + step1 + "-" + step2).innerHTML = "";
        if (btnMap[step1][step2] == "grw") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "Lightgrey";
          btnId.style.border = "3px solid rgb(120,120,120)";
          btnId.style.borderRadius = "10px";
        } else if (btnMap[step1][step2] == "b") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "white";
          btnId.style.border = "1px solid grey";
          btnId.style.borderRadius = "0px";
          btnId.style.transform = "scale(1)";
        } else if (btnMap[step1][step2] == "grg") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "Lightgrey";
          btnId.style.border = "3px solid rgb(120,120,120)";
          btnId.style.borderRadius = "10px";
          btnId.style.transform = "scale(0.5)";
        } else if (btnMap[step1][step2].split("-")[0] == "rb") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "rgb(214, 65, 65)";
          btnId.style.border = "3px solid darkred";
          btnId.style.borderRadius = "50%";
          btnId.style.transform = "scale(1)";
          btnId.innerHTML = btnMap[step1][step2].split("-")[1];
          redButtons[step1 + "-" + step2] = [
            0,
            parseInt(btnMap[step1][step2].split("-")[1]),
          ];
        } else if (btnMap[step1][step2].split("-")[0] == "rg") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "rgb(214, 65, 65)";
          btnId.style.border = "3px solid darkred";
          btnId.style.borderRadius = "10px";
          btnId.style.transform = "scale(1)";
        } else if (btnMap[step1][step2].split("-")[0] == "gb") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "lightgreen";
          btnId.style.border = "3px solid darkgreen";
          btnId.style.borderRadius = "50%";
          btnId.style.transform = "scale(1)";
          btnId.innerHTML = btnMap[step1][step2].split("-")[1];
          greenButtons[step1 + "-" + step2] = [
            0,
            parseInt(btnMap[step1][step2].split("-")[1]),
          ];
        } else if (btnMap[step1][step2].split("-")[0] == "gg") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "lightgreen";
          btnId.style.border = "3px solid darkgreen";
          btnId.style.borderRadius = "10px";
          btnId.style.transform = "scale(1)";
        } else if (btnMap[step1][step2].split("-")[0] == "bb") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "lightblue";
          btnId.style.border = "3px solid darkblue";
          btnId.style.borderRadius = "50%";
          btnId.style.transform = "scale(1)";
          btnId.innerHTML = btnMap[step1][step2].split("-")[1];
          blueButtons[step1 + "-" + step2] = [
            0,
            parseInt(btnMap[step1][step2].split("-")[1]),
          ];
        } else if (btnMap[step1][step2].split("-")[0] == "bg") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "lightblue";
          btnId.style.border = "3px solid darkblue";
          btnId.style.borderRadius = "10px";
          btnId.style.transform = "scale(1)"; // when adding stuf dont forget to add the same stuff to the create.json file aswell
        }
      }
    }
  }
}

var validBlock = [
  "b",
  "rb",
  "gb",
  "bb",
  "grg",
  "rg_down",
  "gg_down",
  "bg_down",
  "rb_pressed",
  "bb_pressed",
  "gb_pressed",
];

document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.code;
    if (name == "d") {
      if (
        validBlock.indexOf(
          btnMap[playerPosion[0] + 1][playerPosion[1]].split("-")[0]
        ) > -1
      ) {
        playerPosion[0]++;
        document.getElementById("playerBtn").style.left =
          playerPosion[0] * 4 + "vh";
      }
    } else if (name == "a") {
      if (
        validBlock.indexOf(
          btnMap[playerPosion[0] - 1][playerPosion[1]].split("-")[0]
        ) > -1
      ) {
        playerPosion[0]--;
        document.getElementById("playerBtn").style.left =
          playerPosion[0] * 4 + "vh";
      }
    } else if (name == "s") {
      if (
        validBlock.indexOf(
          btnMap[playerPosion[0]][playerPosion[1] + 1].split("-")[0]
        ) > -1
      ) {
        playerPosion[1]++;
        document.getElementById("playerBtn").style.top =
          playerPosion[1] * 4 + "vh";
      }
    } else if (name == "w") {
      if (
        validBlock.indexOf(
          btnMap[playerPosion[0]][playerPosion[1] - 1].split("-")[0]
        ) > -1
      ) {
        playerPosion[1]--;
        document.getElementById("playerBtn").style.top =
          playerPosion[1] * 4 + "vh";
      }
    } else if (name == "r") {
      loadMap();
    }

    if (name == "w" || name == "a" || name == "s" || name == "d") {
        if (playerPosion[0] == 27 && playerPosion[1] == 9) {
            win();
        }
      if (btnMap[playerPosion[0]][playerPosion[1]] == "grg") {
        btnMap[playerPosion[0]][playerPosion[1]] = "grw";
        btnId = document.getElementById(
          "square-" + playerPosion[0] + "-" + playerPosion[1]
        );
        btnId.style.backgroundColor = "Lightgrey";
        btnId.style.border = "3px solid rgb(120,120,120)";
        btnId.style.borderRadius = "10px";
        btnId.style.transform = "scale(1)";
      }
      if (btnMap[playerPosion[0]][playerPosion[1]].split("-")[0] == "rb") {
        btnId = document.getElementById(
          "square-" + playerPosion[0] + "-" + playerPosion[1]
        );
        btnId.style.backgroundColor = "Lightgrey";
        btnId.style.borderRadius = "50%";
        btnId.style.transform = "scale(0.9)";

        var value = btnMap[playerPosion[0]][playerPosion[1]].split("-")[1];
        btnMap[playerPosion[0]][playerPosion[1]] = "rb_pressed-" + value;

        redButtons[playerPosion[0] + "-" + playerPosion[1]][0] = value;
        if (
          redButtons[playerPosion[0] + "-" + playerPosion[1]][0] > redMovesTotal
        ) {
          redMovesTotal =
            redButtons[playerPosion[0] + "-" + playerPosion[1]][0];
        }
      }
      if (btnMap[playerPosion[0]][playerPosion[1]].split("-")[0] == "gb") {
        btnId = document.getElementById(
          "square-" + playerPosion[0] + "-" + playerPosion[1]
        );
        btnId.style.backgroundColor = "Lightgrey";
        btnId.style.borderRadius = "50%";
        btnId.style.transform = "scale(0.9)";

        var value = btnMap[playerPosion[0]][playerPosion[1]].split("-")[1];
        btnMap[playerPosion[0]][playerPosion[1]] = "gb_pressed-" + value;

        greenButtons[playerPosion[0] + "-" + playerPosion[1]][0] = value;
        if (
          greenButtons[playerPosion[0] + "-" + playerPosion[1]][0] >
          greenMovesTotal
        ) {
          greenMovesTotal =
            greenButtons[playerPosion[0] + "-" + playerPosion[1]][0];
        }
      }
      if (btnMap[playerPosion[0]][playerPosion[1]].split("-")[0] == "bb") {
        btnId = document.getElementById(
          "square-" + playerPosion[0] + "-" + playerPosion[1]
        );
        btnId.style.backgroundColor = "Lightgrey";
        btnId.style.borderRadius = "50%";
        btnId.style.transform = "scale(0.9)";
        var bluevalue = btnMap[playerPosion[0]][playerPosion[1]].split("-")[1];
        btnMap[playerPosion[0]][playerPosion[1]] = "bb_pressed-" + bluevalue;

        blueButtons[playerPosion[0] + "-" + playerPosion[1]][0] =
          blueButtons[playerPosion[0] + "-" + playerPosion[1]][1];
        if (
          blueButtons[playerPosion[0] + "-" + playerPosion[1]][0] >
          blueMovesTotal
        ) {
          blueMovesTotal =
            blueButtons[playerPosion[0] + "-" + playerPosion[1]][0];
        }
      }
      update();
    }
  },
  false
);

function update() {
  for (let step1 = 0; step1 < 30; step1++) {
    for (let step2 = 0; step2 < 20; step2++) {
      if (btnMap[step1][step2] == "b" || btnMap[step1][step2] == "grw") {
      } else {
        //console.log(greenButtons);
        try {
          if (redButtons[step1 + "-" + step2][0] != 0) {
            redButtons[step1 + "-" + step2][0] =
              redButtons[step1 + "-" + step2][0] - 1;
          }
        } catch (e) {}
        try {
          if (greenButtons[step1 + "-" + step2][0] != 0) {
            greenButtons[step1 + "-" + step2][0] =
              greenButtons[step1 + "-" + step2][0] - 1;
          }
        } catch (e) {}

        try {
          if (blueButtons[step1 + "-" + step2][0] != 0) {
            blueButtons[step1 + "-" + step2][0] =
              blueButtons[step1 + "-" + step2][0] - 1;
          }
        } catch (e) {}

        try {
          if (
            (btnMap[step1][step2].split("-")[0] == "rb_pressed") &
            (redButtons[step1 + "-" + step2][0] == 0)
          ) {
            btnId = document.getElementById("square-" + step1 + "-" + step2);
            redButtons[step1 + "-" + step2][0] ==
              redButtons[step1 + "-" + step2][1];
            btnId.style.transform = "scale(1)";
            btnMap[step1][step2] = "rb-" + redButtons[step1 + "-" + step2][1];
            btnId.style.backgroundColor = "rgb(214, 65, 65)";
            btnId.innerHTML = redButtons[step1 + "-" + step2][1];
            break
          }
        } catch (a) {}
        try {
          if (
            (btnMap[step1][step2].split("-")[0] == "gb_pressed") &
            (greenButtons[step1 + "-" + step2][0] == 0)
          ) {
            btnId = document.getElementById("square-" + step1 + "-" + step2);
            greenButtons[step1 + "-" + step2][0] ==
              greenButtons[step1 + "-" + step2][1];
            btnId.style.transform = "scale(1)";
            btnMap[step1][step2] = "gb-" + greenButtons[step1 + "-" + step2][1];
            btnId.style.backgroundColor = "lightgreen";
            btnId.innerHTML = greenButtons[step1 + "-" + step2][1];
          }
        } catch (a) {}
        try {
          if (
            (btnMap[step1][step2].split("-")[0] == "bb_pressed") &
            (blueButtons[step1 + "-" + step2][0] == 0)
          ) {
            btnId = document.getElementById("square-" + step1 + "-" + step2);
            blueButtons[step1 + "-" + step2][0] ==
              blueButtons[step1 + "-" + step2][1];
            btnId.style.transform = "scale(1)";
            btnMap[step1][step2] = "bb-" + blueButtons[step1 + "-" + step2][1];
            btnId.style.backgroundColor = "lightblue";
            btnId.innerHTML = blueButtons[step1 + "-" + step2][1];
          }
        } catch (a) {}
        if ((btnMap[step1][step2] == "rg") & (redMovesTotal > 0)) {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.transform = "scale(0.5)";
          btnMap[step1][step2] = "rg_down";
        }
        if ((btnMap[step1][step2] == "gg") & (greenMovesTotal > 0)) {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.transform = "scale(0.5)";
          btnMap[step1][step2] = "gg_down";
        }
        if ((btnMap[step1][step2] == "bg") & (blueMovesTotal > 0)) {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.transform = "scale(0.5)";
          btnMap[step1][step2] = "bg_down";
        }
        if (btnMap[step1][step2].split("-")[0] == "rb_pressed") {
          //seting the contense of the button

          var num = redButtons[step1 + "-" + step2][0];
          document.getElementById("square-" + step1 + "-" + step2).innerHTML =
            num;
        }
        if (btnMap[step1][step2].split("-")[0] == "gb_pressed") {
          //seting the contense of the button
          var numgreen = greenButtons[step1 + "-" + step2][0];
          document.getElementById("square-" + step1 + "-" + step2).innerHTML =
            numgreen;
        }
        if (btnMap[step1][step2].split("-")[0] == "bb_pressed") {
          //seting the contense of the button

          var numblue = blueButtons[step1 + "-" + step2][0];
          document.getElementById("square-" + step1 + "-" + step2).innerHTML =
            numblue;
        }
        if ((btnMap[step1][step2] == "rg_down") & (redMovesTotal == 0)) {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.transform = "scale(1)";
          btnMap[step1][step2] = "rg";
        }
        if ((btnMap[step1][step2] == "gg_down") & (greenMovesTotal == 0)) {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.transform = "scale(1)";
          btnMap[step1][step2] = "gg";
        }
        if ((btnMap[step1][step2] == "bg_down") & (blueMovesTotal == 0)) {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.transform = "scale(1)";
          btnMap[step1][step2] = "bg";
        }
      }
    }
  }
  if (redMovesTotal > 0) {
    redMovesTotal = redMovesTotal - 1;
  }
  if (greenMovesTotal > 0) {
    greenMovesTotal = greenMovesTotal - 1;
  }
  if (blueMovesTotal > 0) {
    blueMovesTotal = blueMovesTotal - 1;
  }
}

(function () {
  function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event) {
    btnMap = JSON.parse(event.target.result);
    ogMap = JSON.parse(event.target.result);
  }

  document.getElementById("myfile").addEventListener("change", onChange);
})();


function win() {
    var map = document.getElementById("pasteMap").value;

    var request = new XMLHttpRequest();
    request.open("GET","maps/winMap.json", false);
    request.send(null);
    console.log(request.responseText);
    var winMap = JSON.parse(request.responseText);
    document.getElementById("pasteMap").value = JSON.stringify(winMap);
    loadMap();
    document.getElementById("pasteMap").value = map;
}

Function.prototype.sleep = function(delay, ...args) {
    setTimeout(() => this(...args), delay)
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  console.log("no cookie :(");
  return null;
}


document.getElementById("pasteMap").value=getCookie("mapCookie");
loadMap();