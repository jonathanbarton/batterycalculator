var Battery = Battery || {};


Battery.controller = function() {
	var batteryService = require("../services/batteryService");
	this.onResetClick = function(e) {
		batteryService.render();
	};
	this.onExportClick = function(e) {
		batteryService.export();
	};

	this.onConfigChange = function(e) {
		var series = document.getElementById('series');
		var par = document.getElementById('parallel');
		var seriesCount = series.options[series.selectedIndex].text;
		var parCount = par.options[par.selectedIndex].text;

		batteryService.render(seriesCount, parCount);
	};
};

Battery.view = function(controller){
	return m("div", [
		m("div", {class:"panel panel-primary"},[
			m("div", {class:"panel-heading"}, [
				m("h3", "Circuit Configuration")
			]),
			m("div", {class:"panel-body"},[
				m("div", {class: "form-group"}, [
					m("span", {class: "label label-default"}, "Number of parallel connections: "),
					m("select", {class: "form-control", id: "parallel", onchange: controller.onConfigChange}, [1,2,3,4,5].map(function(item){
						return m("option", item);
					})),
					m("span", {class: "label label-default"}, "Number of series connections: "),
					m("select", {class: "form-control", id: "series", onchange:  controller.onConfigChange}, [1,2,3,4,5].map(function(item){
						return m("option", item);
					}))
				])
			])
		]),
		m("div", {class: "panel panel-primary"},[
			m("div", {class: "panel-heading"}, [
				m("h3", "Cell Configuration")
			]),
			m("div", {class: "panel-body"}, [
				m("span", {class: "label label-default"}, "Battery type"),
				m("select", {class: "form-control"}, ["LiPo","Li-ion"].map(function(batteryType){
					return m("option", batteryType);
				})),
				m("span", {class: "label label-default"}, "Cell Shape: "),
				m("select", {class: "form-control"}, ["Cylindrical","Button","Prismatic"].map(function(item){
					return m("option", item);
				})),
				m("span", {class: "label label-default"}, "Voltage (V)"),
				m("input", {type: "text", class: "form-control", placeholder: "3.7"}),
				m("span", {class: "label label-default"}, "Charge (mAh)"),
				m("input", {type: "text", class: "form-control", placeholder: "1000"})
			])
		]),
		m("div", {class: "panel panel-info"},[
			m("div", {class: "panel-heading"}, [
				m("h3", "Output")
			]),
			m("div", {class: "panel-body"}, [
				m("canvas", {id: "circuit-canvas", style: 'height: 4	00px; width: 100%'})
			])
		]),
			m("a", {class:"btn btn-info", style: "margin-right: 5px;", onclick: controller.onExportClick }, "Save Diagram As..."),
			m("a", {class:"btn btn-default", style: "margin-right: 5px;"}, "Copy to Clipboard"),
			m("a", {class:"btn btn-default", onclick: controller.onResetClick }, "Reset Values")
		
	]);
};

module.exports = Battery;