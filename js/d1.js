var tex = (function (){
	console.log("これはＪＳのサンプルです");
	})();
	
	var cat = function (name){
	this.name = name;
	this.run = function(){
	console.log(this.name +"が走る");
	};
	};
	
	var bag = new cat("たま");
	bag.run()