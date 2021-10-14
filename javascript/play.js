var btnMap = {}

tool = "gw"

playerPosion = [4 , 9]

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


async function fileToJSON(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = event => resolve(JSON.parse(event.target.result))
      fileReader.onerror = error => reject(error)
      fileReader.readAsText(file)
    })
}



function loadMap() {
    console.log(document.getElementById("myfile").value);
    if (document.getElementById("myfile").value != ""){
        console.log("loading from file");
    }else{
        console.log("load from paste");
        btnMap = JSON.parse(document.getElementById("pasteMap").value);
        console.log(btnMap)
    }
for (let step1 = 0; step1 < 30; step1++) {
    for (let step2 = 0; step2 < 20; step2++) {
        if (btnMap[step1][step2] == "grw"){
            if (step1 != 27 && step2 != 9) {
            btnId = document.getElementById("square-"+step1+"-"+step2);
            btnId.style.backgroundColor = "Lightgrey";
            btnId.style.border = "3px solid rgb(120,120,120)";
            btnId.style.borderRadius = "10px";
        }  else if (btnMap[step1][step2] == "b"){
            btnId = document.getElementById("square-"+step1+"-"+step2);
            btnId.style.backgroundColor = "white";
            btnId.style.border = "1px solid grey";
            btnId.style.borderRadius = "0px";
        }

    }

    }
}
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(name)
    if (name == "d"){
        console.log(btnMap[playerPosion[0]+1][playerPosion[1]]);
        if (btnMap[playerPosion[0]+1][playerPosion[1]] == "b" || btnMap[playerPosion[0]+1][playerPosion[1]] == "rb" || btnMap[playerPosion[0]+1][playerPosion[1]] == "gb" || btnMap[playerPosion[0]+1][playerPosion[1]] == "bb"){
                playerPosion[0]++;
                document.getElementById("playerBtn").style.left = playerPosion[0]*4 + "vh";
                console.log(playerPosion);

        }
    }else if (name == "a"){
        console.log(btnMap[playerPosion[0]-1][playerPosion[1]]);
        if (btnMap[playerPosion[0]-1][playerPosion[1]] == "b" || btnMap[playerPosion[0]-1][playerPosion[1]] == "rb" || btnMap[playerPosion[0]-1][playerPosion[1]] == "gb" || btnMap[playerPosion[0]-1][playerPosion[1]] == "bb"){
                playerPosion[0]--;
                document.getElementById("playerBtn").style.left = playerPosion[0]*4 + "vh";
                console.log(playerPosion);

        }
    }else if (name == "s"){
        console.log(btnMap[playerPosion[0]-1][playerPosion[1]]);
        if (btnMap[playerPosion[0]][playerPosion[1]+1] == "b" || btnMap[playerPosion[0]][playerPosion[1]+1] == "rb" || btnMap[playerPosion[0]][playerPosion[1]+1] == "gb" || btnMap[playerPosion[0]][playerPosion[1]+1] == "bb"){
                playerPosion[1]++;
                document.getElementById("playerBtn").style.top = playerPosion[1]*4 + "vh";
                console.log(playerPosion);

        }
    }else if (name == "w"){
        console.log(btnMap[playerPosion[0]-1][playerPosion[1]]);
        if (btnMap[playerPosion[0]][playerPosion[1]-1] == "b" || btnMap[playerPosion[0]][playerPosion[1]-1] == "rb" || btnMap[playerPosion[0]][playerPosion[1]-1] == "gb" || btnMap[playerPosion[0]][playerPosion[1]-1] == "bb"){
                playerPosion[1]--;
                document.getElementById("playerBtn").style.top = playerPosion[1]*4 + "vh";
                console.log(playerPosion);

        }
    }

  }, false);

  (function(){
    
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        btnMap = JSON.parse(event.target.result);
        
    }

    document.getElementById('myfile').addEventListener('change', onChange);

}());