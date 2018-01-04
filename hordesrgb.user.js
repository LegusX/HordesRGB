// ==UserScript==
// @name         HordesRGB
// @namespace    https://raw.githubusercontent.com/LegusX/HordesRGB
// @version      0.5
// @description  A modded version of the Hordes.io client to provide colorful items
// @author       LegusX & LockChains
// @match        https://hordes.io/
// ==/UserScript==

(function(){
    setInterval(function(){
        var children = document.getElementsByClassName("itemPic");
        for (var i=0;i<children.length;i++) {
            children[i].src = "https://image.ibb.co/mUUgQw/quiver3.png";
            var child = children[i];
            if (!child.classList.contains("item-empty")) {
                var first = child.children[0];
                if (typeof first !== "undefined") first.src = "https://image.ibb.co/mUUgQw/quiver3.png";
            }
        }
    }, 1000);
})();
