function initMap() {
	// add your code here
	L.mapquest.key = 'NAn0vdlAoA4oPg1GsDbS0gBmfZZyUh5G';

	var map = L.mapquest.map('map', {
		center: [32.8785203, -117.2380747],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8785203, -117.2380747]).addTo(map);
}

