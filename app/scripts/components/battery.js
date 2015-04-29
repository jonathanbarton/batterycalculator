var Battery = Battery || {};

Battery.controller = function() {
	var Battery = require("../models/battery");
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
					m("select", {class: "form-control"}, [1,2,3,4,5].map(function(item){
						return m("option", item);
					})),
					m("span", {class: "label label-default"}, "Number of series connections: "),
					m("select", {class: "form-control"}, [1,2,3,4,5].map(function(item){
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
				m("canvas", {id: "circuit-canvas"})
			])
		]),
			m("a", {class:"btn btn-info"}, "Save Diagram As..."),
			m("a", {class:"btn btn-default"}, "Copy to Clipboard"),
				
		
	]);
};

module.exports = Battery;