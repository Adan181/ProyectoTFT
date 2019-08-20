var express = require('express');
var router = express.Router();

function router_init(db) {

	db.createCollection("personaje", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (Personaje)");
		});

	db.createCollection("minileyenda", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (MiniLeyenda)");
		});

	db.createCollection("costo", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (Costo)");
		});

	db.createCollection("clase", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (Clase)");
		});

	db.createCollection("origen", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (Origen)");
		});

	db.createCollection("objeto", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (Objeto)");
		});

	db.createCollection("objetofinal", function(err, res) {
			if (err) throw err;
			console.log("Colección creada! (ObjetoFinal)");
		});

	return router;
}

module.exports = router_init;