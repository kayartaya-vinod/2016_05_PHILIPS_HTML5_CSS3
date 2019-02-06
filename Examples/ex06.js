// ex06.js

$(function(){
	if(!window.localStorage){
		$("body").html("<h1>localStorage is not supported in this browser</h1>");
	}
});

function createPerson(p){
	// class Person
	function Person(obj){
		obj = obj || {};
		this.name = obj.name || "";
		this.email = obj.email || "";
	}

	return new Person(p);
}

$(function(){
	// event handler for the button
	$("#btnAdd").click(function(){
		var contacts = localStorage.contacts || "[]"; 
		contacts = JSON.parse(contacts);
		
		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();

		contacts.push(createPerson(data));
		
		$("div.form input").val("");
		$("#name").focus();

		var li = $("<li>").append(data.name + " :::: "+ data.email);
		$("div.list>ul").append(li);

		// store the "concats" in localStorage
		localStorage.contacts = JSON.stringify(contacts);
	});
});

function populateContacts(){
	var contacts = localStorage.contacts || "[]"; 
	contacts = JSON.parse(contacts);

	contacts.forEach(function(c){
		var li = $("<li>").append(c.name + " :::: "+ c.email);
		$("div.list>ul").append(li);
	})
}

$(function(){
	 populateContacts();
});








