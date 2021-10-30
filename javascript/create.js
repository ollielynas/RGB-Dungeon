var btnMap = {}

tool = "grw"

/*
b = blank
grw = grey wall
rw = red wall
bw = blue wall
gw = green wall

*/
for (let step1 = 0; step1 < 30; step1++) {
    list = []
    for (let step2 = 0; step2 < 20; step2++) {
        let btn = document.createElement("button");
        btn.innerHTML = "";
        btn.type = "submit";
        btn.name = "square-"+step1+"-"+step2;
        btn.id = "square-"+step1+"-"+step2;
        btn.style.position = "absolute";
        btn.style.left = step1*4+"vh";
        btn.style.top = step2*4+"vh";
        btn.style.height = "4vh";
        btn.style.width = "4vh";
        btn.style.backgroundColor = "white";
        btn.style.border = "1px solid grey";
        if (step1 == 27 && step2 == 9){
            console.log("flag")
            btn.innerHTML = "&#127937;";
            btn.style.backgroundColor = "Lightgreen";
            btn.style.border = "3px solid Darkgreen";
        }
        document.getElementById("map").appendChild(btn);

        if (step1 == 4 && step2 == 9){
            let btnp = document.createElement("button");
            btnp.type = "submit";
            btnp.name = "playerBtn";
            btnp.id = "playerBtn";
            btnp.style.position = "absolute";
            btnp.style.left = step1*4+"vh";
            btnp.style.top = step2*4+"vh";
            btnp.style.height = "4vh";
            btnp.style.width = "4vh";
            btnp.style.backgroundColor = "white";
            btnp.style.border = "1px solid grey";
            console.log("player")
            btnp.innerHTML = ":)";
            btnp.style.backgroundColor = "orange";
            btnp.style.border = "3px solid rgb(139, 64, 0)";
            btnp.style.fontWeight = "bold";
            btnp.style.zIndex = "10";
            document.getElementById("map").appendChild(btnp);
        }
        
        list.push("b")
    }
    btnMap[step1] = list;
}


window.onmousedown = e => {
    
    var btnId = (e.target.id);
    var btnList = btnId.split("-")
    if (btnList[1] == 27 && btnList[2] == 9) {
        return
    }
    if (btnList[1] == 4 && btnList[2] == 9) {
        return
    }
    if (btnList[0] == "square"){
        console.log(btnList);
        document.getElementById(btnId).style.transform = "scale(1)";
        document.getElementById(btnId).innerHTML = "";
        if (btnMap[btnList[1]][btnList[2]] != "b"){
            document.getElementById(btnId).style.backgroundColor = "white";
            document.getElementById(btnId).style.border = "1px solid grey";
            document.getElementById(btnId).style.borderRadius = "0px";
            btnMap[btnList[1]][btnList[2]] = "b"
        }else if (tool == "grw"){
            document.getElementById(btnId).style.backgroundColor = "Lightgrey";
            document.getElementById(btnId).style.border = "3px solid rgb(120,120,120)";
            document.getElementById(btnId).style.borderRadius = "10px";
            btnMap[btnList[1]][btnList[2]] = "grw";

        }else if (tool == "grg"){
            document.getElementById(btnId).style.backgroundColor = "Lightgrey";
            document.getElementById(btnId).style.border = "3px solid rgb(120,120,120)";
            document.getElementById(btnId).style.borderRadius = "10px";
            document.getElementById(btnId).style.transform = "scale(0.5)";
            btnMap[btnList[1]][btnList[2]] = "grg";
        }else if (tool == "rg"){
            document.getElementById(btnId).style.backgroundColor = "rgb(214, 65, 65)";
            document.getElementById(btnId).style.border = "3px solid Darkred";
            document.getElementById(btnId).style.borderRadius = "10px";
            document.getElementById(btnId).style.transform = "scale(1)";
            btnMap[btnList[1]][btnList[2]] = "rg";
        }else if (tool == "gg"){
            document.getElementById(btnId).style.backgroundColor = "lightgreen";
            document.getElementById(btnId).style.border = "3px solid darkgreen";
            document.getElementById(btnId).style.borderRadius = "10px";
            document.getElementById(btnId).style.transform = "scale(1)";
            btnMap[btnList[1]][btnList[2]] = "gg";
        }else if (tool == "bg"){
            document.getElementById(btnId).style.backgroundColor = "lightblue";
            document.getElementById(btnId).style.border = "3px solid darkblue";
            document.getElementById(btnId).style.borderRadius = "10px";
            document.getElementById(btnId).style.transform = "scale(1)";
            btnMap[btnList[1]][btnList[2]] = "bg";
        }else if (tool == "rb"){
            let btnValue = prompt("Button wait timer", "1");
            while (true) {
            if (btnValue == null){
                return
            }
            if (parseInt(btnValue) == "NaN"){
                btnValue = prompt("Invalid value", "1");
            }else{
                break
            }
        }
            document.getElementById(btnId).style.backgroundColor = "rgb(214, 65, 65)";
            document.getElementById(btnId).style.border = "3px solid Darkred";
            document.getElementById(btnId).style.borderRadius = "50%";
            document.getElementById(btnId).style.fontSize = "2vh";
            document.getElementById(btnId).style.color = "black";
            document.getElementById(btnId).style.transform = "scale(1)";
            document.getElementById(btnId).innerHTML = btnValue;
            btnMap[btnList[1]][btnList[2]] = "rb-"+btnValue;
        }else if (tool == "gb"){
            let btnValue = prompt("Button wait timer", "0");
            while (true) {
            if (btnValue == null){
                return
            }
            if (parseInt(btnValue) == "NaN"){
                btnValue = prompt("Invalid value", "0");
            }else{
                break
            }
        }
            document.getElementById(btnId).style.backgroundColor = "lightgreen";
            document.getElementById(btnId).style.border = "3px solid darkgreen";
            document.getElementById(btnId).style.borderRadius = "50%";
            document.getElementById(btnId).style.fontSize = "2vh";
            document.getElementById(btnId).style.color = "black";
            document.getElementById(btnId).style.transform = "scale(1)";
            document.getElementById(btnId).innerHTML = btnValue;
            btnMap[btnList[1]][btnList[2]] = "gb-"+btnValue;
        }else if (tool == "bb"){
            let btnValue = prompt("Button wait timer", "0");
            while (true) {
            if (btnValue == null){
                return
            }
            if (parseInt(btnValue) == "NaN"){
                btnValue = prompt("Invalid value", "0");
            }else{
                break
            }
        }
            document.getElementById(btnId).style.backgroundColor = "lightblue";
            document.getElementById(btnId).style.border = "3px solid darkblue";
            document.getElementById(btnId).style.borderRadius = "50%";
            document.getElementById(btnId).style.fontSize = "2vh";
            document.getElementById(btnId).style.color = "black";
            document.getElementById(btnId).style.transform = "scale(1)";
            document.getElementById(btnId).innerHTML = btnValue;
            btnMap[btnList[1]][btnList[2]] = "bb-"+btnValue;
        }
    }if (btnId == "grg"){
        tool = "grg";
    }if (btnId == "grw"){
        tool = "grw";
    }if (btnId == "rg"){
        tool = "rg";
    }if (btnId == "gg"){
        tool = "gg";
    }if (btnId == "bg"){
        tool = "bg";
    }if (btnId == "rb"){
        tool = "rb";
    }if (btnId == "gb"){
        tool = "gb";
    }if (btnId == "bb"){
        tool = "bb";
    }
    setCookie("mapCookie", JSON.stringify(btnMap), 30);
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(name)
    if (name == "c"){
    navigator.clipboard.writeText(JSON.stringify(btnMap));
    console.log("copied: "+JSON.stringify(btnMap))
    }
    
  }, false);

function copy() {
    navigator.clipboard.writeText(JSON.stringify(btnMap, null, 3));
    console.log("copied: "+JSON.stringify(btnMap, null, 3));
}




function downloadFile() {

    let fileName = prompt("File name", "untitled");
            if (fileName == null){
                return
            }
    download(JSON.stringify(btnMap, null, 3), fileName.replace(".json", "")+'.json','application/json');
}
function download(text, name, type) {
        var file = new Blob([text], {type: type});
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE)
        {
            window.navigator.msSaveOrOpenBlob(file, name);
        }
        else
        {
            var a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = name;
            a.click();
        }
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

console.log(JSON.parse(getCookie("mapCookie")));
if (JSON.stringify(btnMap).length < getCookie("mapCookie").length) {
    btnMap = JSON.parse(getCookie("mapCookie"));
    console.log(btnMap);
    loadMap();
}

function loadMap() {
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

        } else if (btnMap[step1][step2].split("-")[0] == "bg") {
          btnId = document.getElementById("square-" + step1 + "-" + step2);
          btnId.style.backgroundColor = "lightblue";
          btnId.style.border = "3px solid darkblue";
          btnId.style.borderRadius = "10px";
          btnId.style.transform = "scale(1)";
        }
      }
    }
  }
}