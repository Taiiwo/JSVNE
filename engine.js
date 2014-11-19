function setbg(path) {
	if (path != ""){
		document.getElementById('game').style.backgroundImage = "url(" + path + ")";
	}
}
function settext(text){
	document.getElementById("speech").innerHTML = '<p>' + text + "</p>";
}
function setmusic(trackname){
	if (trackname != ""){
		var path = trackname;
		var dryrun = '\
<audio hidden autoplay loop>\
        <source src="' + path + '.ogg" type="audio/ogg" />\
        <source src="' + path + '.mp3" type="audio/mpeg" />\
        <source src="' + path + '.wav" type="audio/wav" />\
</audio>';
		if (document.getElementById('music').innerHTML != '') {
			document.getElementById('music').innerHTML = dryrun;
		}
	}
}
function decide(options){
	var option = "";
	for (var b = 0; b < options.length; b++) {
		option += '<p id="option' + b + '" class="options">' + options[b][0] + '</p>';
	}
	document.getElementById('options').innerHTML = option;
}
var i = 0;
var a = 0;
function next(){
	if (a >= story[i].length) {
		a = 0;
		i++;
	}
	setbg(story[i][a]["background"]);
	settext(story[i][a]["text"]);
	setmusic(story[i][a]["music"]);
	if (story[i][a]["type"] == "decision") {
		decide(story[i][a]["options"]);
	}
	a++;
}
$('html').click(next);
