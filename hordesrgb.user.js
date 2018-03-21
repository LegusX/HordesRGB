// ==UserScript==
// @name         HordesRGB
// @namespace    https://raw.githubusercontent.com/LegusX/HordesRGB
// @version      0.7
// @description  A modded version of the Hordes.io client to provide colorful items
// @author       LegusX & Fade
// @match        https://hordes.io/
// @grant        GM_xmlhttpRequest
// ==/UserScript==
(function(){
	fetch("https://api.github.com/repos/LegusX/HordesRGB/git/refs/heads/master")
		.then((r)=>{r.json().then((final)=>{
			var commit = final.object.sha.substr(0,8);
			var URL = "https://cdn.rawgit.com/LegusX/HordesRGB/"+commit+"/filemap.json";
			fetch(URL).then((re)=>{re.json().then((filemap)=>{
				setInterval(function(){
					var children = document.getElementsByClassName("itemimg");
					for (var i=0;i<children.length;i++) {
						var child = children[i];
						if (Object.getOwnPropertyNames(filemap).includes(child.src.replace("https://hordes.io/data/items/", ""))) {
							child.src = "https://cdn.rawgit.com/LegusX/HordesRGB/"+commit+"/RGB/"+filemap[child.src.replace("https://hordes.io/data/items/", "")];
						}
					}
					document.getElementById("ui_player").style = "min-width: 250px;";
					document.getElementById("ui_target").style = "min-width: 250px;";
				}, 1000);
			});});
		});});
})();
