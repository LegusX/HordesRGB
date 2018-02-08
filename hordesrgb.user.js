// ==UserScript==
// @name         HordesRGB
// @namespace    https://raw.githubusercontent.com/LegusX/HordesRGB
// @version      0.6
// @description  A modded version of the Hordes.io client to provide colorful items
// @author       LegusX & Fade
// @match        https://hordes.io/
// ==/UserScript==

(function(){
    var filemap = {
        "quiver3.png": "quiver3.png",
        "hammer14.png": "haammer14.png",
        "hammer16.png": "hamer16.png",
        "sword13.png": "Heartater.png",
        "quiver4.png": "quiiver4.png",
        "shield4.png": "sihield4.png",
        "sword16.png": "sord16.png",
        "bow14.png": "St0ormsong.png",
        "staff11.png": "staaff11",
        "staff12.png": "staaff12.png",
        "staff10.png": "stafaf10.png",
        "staff13.png": "stff13.png",
        "sword15.png": "sw0ord15.png",
        "sword14.png": "sword14(1).png",
        "bow13.png": "Wido0wmaker.png",
        "armor8.png": "arm0or8.png",
        "armor9.png": "arm0r9.png",
        "armlet8.png": "armet8.png",
        "armlet9.png": "armet9.png",
        "boot8.png": "b0oot8.png",
        "hammer13.png": "Benevolene.png",
        "bow11.png": "bo0w11.png",
        "bow12.png": "bo0w12.png",
        "boot0.png": "boot00.png",
        "boot9.png": "bot9.png",
        "bow15.png": "carebow.png",
        "bow16.png": "Fur.png",
        "glove9.png": "gl0ve9.png",
        "glove8.png": "gove8.png"
    };
    setInterval(function(){
        var children = document.getElementsByClassName("itemimg");
        for (var i=0;i<children.length;i++) {
            var child = children[i];
            if (Object.getOwnPropertyNames(filemap).includes(child.src.replace("https://hordes.io/data/items/", ""))) {
                child.src = "https://cdn.rawgit.com/LegusX/HordesRGB/ed1aaba1/RGB/"+filemap[child.src.replace("https://hordes.io/data/items/", "")];
            }
        }
    }, 1000);
})();
