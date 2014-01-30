$(document).ready(function(){
	$(".dataTables").dataTable({
		"aaSorting": [[ 1, "desc" ]]
	});
});

var map = L.map('map').setView(["10.1892764", "-0.66410362"], 13);

L.tileLayer('http://{s}.tile.cloudmade.com/feb03603437a48219f38d75513071be1/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

