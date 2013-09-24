var story = $.getJSON("story.json", function(json) {
	console.log(json);
});
var click = false;
$( "#game" ).click(function() {
	click = true;;
});
function setbg(bgname) {
	var path = "./images/backgrounds/" + bgname;
	document.getElementById('game').style.backgroundImage = "url(" + path + ")";
}
function settext(text){
	document.getElementById("game").innerHTML = '<div id="speech" class="giveBorder"><p>' + text + "</p></div>";
}
function moveonclick(){
	for (var i = 0; i < story.length; void(0)) {
		setbg(story[i]["background"]);
		settext(story[i]["text"]);
		while (click == false) {
			void(0);
		}
		i++;
	}
}
