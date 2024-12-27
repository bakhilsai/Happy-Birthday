


function YoutubeString(videoId, offset) {
	offset = offset ? offset : 0;
	
	return "<object width='425' height='344'><param name='movie' value='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='425' height='344'></embed></object>";
}

function Mp3String(mp3) {
	return "<object width='300' height='30'><param name='src' value='" + mp3 + "'/><param name='autoplay' value='true' /><embed type='audio/mpeg' src='" + mp3 + "' width='300' height='18' autostart='true' loop='false' /></object>";
}

var presents = [
{ 	
	title: "Pragnya Rocks!", 
	id: "katt",
	
},
{
	title: "<img class='blackBorder' src='hotpockets.jpg' width='90px' height='90px' />",
	
},
{
	title: "<img class='blackBorder' src='loris.jpg' width='90px' height='90px' />",
	// payload: YoutubeString("rLdQ3UhLoD4")
},
{
	title: "Another Year, Another Adventure!", 
	id: "map",
	
	callback: InitMap
},
{
	title: "Cake? No, Pragnya's sweeter! ",
	
},
{
	title: "Pragnya's day, world slays!",
	
},
{
	title: "Cuteness overload: Pragnya!",
	// payload: "<img src='' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "<img class='blackBorder' src='gorgeThumb.jpg' alt='gorge poster' width='90px' height='110px' />",
	// payload: "<img src='' alt='us at the gorge' width='280px' height='373px' />"
},
{
	title: "Beatuiful!!!!!",
	// payload: Mp3String("groovin.mp3")
},
{
	title: "Cheers, Pragnya!", 
	},
{
	title: "<img src='tf2Plate.png' alt='tf2 plate' />",
},
{
	title: "Pragnya, sparkling since forever!",
	
},
{
	title: "Subway Dancin'",
	
},
{
	title: "<img src='pumpkinThumb.png' alt='pumpkin' />",
	// payload: "<img src='pumpkins.jpg' alt='halloween pumpkins' width='400px' height='300px'/>"
},
{
	title: "You + Cake = Perfect Day!",
	// payload: "<img src='' alt='tulips' width='300px' height='400px' />"
}
	];
	

	function InitMap() {
		if (GBrowserIsCompatible()) {
			var map = new GMap2(document.getElementById("denver_map"));
			
			map.setCenter(new GLatLng(39.75, -105), 13);
			map.setUIToDefault();
		}
	}
	
