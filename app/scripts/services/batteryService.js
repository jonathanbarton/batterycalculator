var BatteryService = (function() {
	var batteryService = {
		canvasId: "circuit-canvas",
		batteryImageUrl: 'battery.png',
		generate: function() {

		},
		render: function(seriesCount, parCount) {
			var canvas = document.getElementById(batteryService.canvasId);
			var context = canvas.getContext('2d');
			var img = loadImage();
			var rowOffset = 60;
			var colOffset = 25;
			var circuit = [seriesCount,parCount];
			drawCells();
			drawWiring();


			function loadImage() {
				var img = document.createElement('img');
				img.src = batteryService.batteryImageUrl;
				return img;
			}

			function drawCells() {
				for(var rowIndex = 0; rowIndex < circuit[0]; rowIndex++) {
					for(var colIndex = 0; colIndex < circuit[1]; colIndex++) {
						context.drawImage(img, (rowIndex * rowOffset)+10, (colIndex * colOffset), 40, 40);
					}
				}
			}

			function drawWiring() {
				for(var rowIndex = 1; rowIndex <= circuit[0]; rowIndex++){
					context.beginPath();
			    	context.strokeStyle='#000';
			    	context.moveTo(rowOffset*rowIndex-5, 19);
			    	context.lineTo(rowOffset*rowIndex-5, circuit[1]*colOffset+20);
			    	context.stroke();

			    	context.beginPath();
			    	context.strokeStyle='#cc0000';
			    	context.moveTo(rowOffset*rowIndex+rowOffset-115, 19);
			    	context.lineTo(rowOffset*rowIndex+rowOffset-115, circuit[1]*colOffset+20);
			    	context.stroke();	

			    	for (var colIndex = 1; colIndex <= circuit[1]; colIndex++) {
			    		context.beginPath();
			    		context.strokeStyle='#000';
			    		context.moveTo(rowOffset*rowIndex-5, colIndex*colOffset-5);
			    		context.lineTo(rowOffset*rowIndex-10, colIndex*colOffset-5);
			    		context.stroke();

			    		context.beginPath();
			    		context.strokeStyle='#cc0000';
			    		context.moveTo(rowOffset*rowIndex-55, colIndex*colOffset-5);
			    		context.lineTo(rowOffset*rowIndex-50, colIndex*colOffset-5);
			    		context.stroke();
			    	}
				}
				  

			}
		},
		export: function() {
			var canvas = document.getElementById(batteryService.canvasId);
			var dataUrl = canvas.toDataURL("image/png");
			location.href = dataUrl;
		}
	};
	return batteryService;
 });


module.exports = BatteryService();