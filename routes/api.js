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

	var personaje_collection= db.collection('personaje');
	var minileyenda_collection= db.collection('minileyenda');
	var costo_collection= db.collection('costo');
	var clase_collection= db.collection('clase');
	var origen_collection= db.collection('origen');
	var objeto_collection= db.collection('objeto');
	var objetofinal_collection= db.collection('objetofinal');

	router.get('/all/personaje',function(req, res, next) {
		personaje_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.get('/all/minileyenda',function(req, res, next) {
		minileyenda_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.get('/all/costo',function(req, res, next) {
		costo_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.get('/all/clase',function(req, res, next) {
		clase_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.get('/all/origen',function(req, res, next) {
		origen_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.get('/all/objeto',function(req, res, next) {
		objeto_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.get('/all/objetofinal',function(req, res, next) {
		objetofinal_collection.find({}).toArray(function(err,docs) {
			if (err){
				return res.status(404).json({error:"Error"});
			} 
			else{
				return res.status(200).json(docs);
			}	
			
		});
	});

	router.post('/new/personaje', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { idPersonaje: vars.idPersonaje, nombre: vars.nombre, 
			descripcion: vars.descripcion, habilidad: vars.habilidad,
			idOrigen: vars.idOrigen, idClase: vars.idClase, 
			estadistica: {vida: vars.vida, mana_inicial: vars.mana_inicial,
			mana_max: vars.mana_max, armadura: vars.armadura,
			resistencia_magica: vars.resistencia_magica, dano: vars.dano,
			velocidad_ataque: vars.velocidad_ataque}, idCosto: vars.idCosto,
			idObjeto: vars.idObjeto};
		personaje_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (Personaje)");
			db.close();
		});
	});

	router.post('/new/minileyenda', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { idMini: vars.idMini, nombre: vars.nombre, tier: vars.tier};
		minileyenda_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (MiniLeyenda)");
			db.close();
		});
	});

	router.post('/new/costo', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { probabilidad: vars.probabilidad, color: vars.color};
		costo_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (Costo)");
			db.close();
		});
	});

	router.post('/new/clase', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { idClase: vars.idClase, nombre: vars.nombre, efecto: vars.efecto, 
			cantidad: vars.cantidad};
		clase_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (Clase)");
			db.close();
		});
	});

	router.post('/new/origen', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { idOrigen: vars.idOrigen, nombre: vars.nombre, efecto: vars.efecto,
			cantidad: vars.cantidad};
		origen_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (Origen)");
			db.close();
		});
	});

	router.post('/new/objeto', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { idObjeto: vars.idObjeto, stats: {vida: vars.vida, mana: vars.mana,
			armadura: vars.armadura, resistencia_magica: vars.resistencia_magica, daño: vars. daño,
			velocidad_ataque: vars.velocidad_ataque}, descripcion: vars.descripcion};
		objeto_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (Objeto)");
			db.close();
		});
	});

	router.post('/new/objetofinal', function(req, res) {
		if (err) throw err;
		var vars = req.body;
		var myobj = { idObjetoFinal: vars.idObjetoFinal,
			objetosCombinados: {objeto1: vars.objeto1, objeto2: vars.objeto2},stats: {vida: vars.vida, mana: vars.mana,
			armadura: vars.armadura, resistencia_magica: vars.resistencia_magica, daño: vars. daño,
			velocidad_ataque: vars.velocidad_ataque}, efecto: vars.efecto};
		objetofinal_collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 documento insertado (ObjetoFinal)");
			db.close();
		});
	});

	return router;
}

module.exports = router_init;