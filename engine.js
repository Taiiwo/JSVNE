var story = [
		[//act one
			{//scene one
				'background':'flooded-hall.jpg',
				'text':'This is super scary.',
				'music':'squid',
				'type':'story'
			},
			{//scene two
                                'background':'scary1.jpg',
                                'text':'Super duper scary..',
                                'music':'scary.mp3',
                                'type':'story'
                        }

		],
                [//act two
                        {//scene one
                                'background':'scary.jpg',
                                'text':'This is super scary.',
                                'music':'scary.mp3',
                                'type':'story'
                        },
                        {//scene two
                                'background':'scary1.jpg',
                                'text':'What will you do?.',
                                'music':'scary.mp3',
                                'type':'decision',
				'options':['do this','do that','do something else']
                        } 

                ]

	]
$( "#game" ).click(function() {
	next();
});
function setbg(bgname) {
	var path = "./images/backgrounds/" + bgname;
	document.getElementById('game').style.backgroundImage = "url(" + path + ")";
}
function settext(text){
	document.getElementById("speech").innerHTML = '<p>' + text + "</p>";
}
function setmusic(trackname){
	var path = "./sounds/music/" + trackname;
	document.getElementById('music').innerHTML = '\
<audio hidden autoplay loop>\
	<source src="' + path + '.ogg" type="audio/ogg" />\
	<source src="' + path + '.mp3" type="audio/mpeg" />\
	<source src="' + path + '.wav" type="audio/wav" />\
</audio>';
}
function decide(options){
	for (var b = 0; b < options.length; b++) {
		document.getElementById(
	}
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
		for (var b = 0; b < story[i][a]["options"].length; b++) {
			
		}
	a++;
}
