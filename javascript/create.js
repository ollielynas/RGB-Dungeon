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
console.log(btnMap)


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

        }
    }
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
