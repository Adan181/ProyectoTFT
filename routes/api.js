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

	router.post('/new/personaje', function(req, res, next) {
		var nombre = req.body.nombre;
		var descripcion = req.body.descripcion;
		var habilidad = req.body.habilidad;
		var idOrigen1 = req.body.idOrigen1;
		var idOrigen2 = req.body.idOrigen2;
		var idClase = req.body.idClase;
		var vida = req.body.vida;
		var manaInicial = req.body.manaInicial;
		var manaMax = req.body.manaMax;
		var armadura = req.body.armadura;
		var resistenciaMagica = req.body.resistenciaMagica;
		var dano = req.body.dano;
		var velocidadAtaque = req.body.velocidadAtaque;
		var idCosto = req.body.idCosto;
		res.status(200).json(insertarPersonaje(nombre,descripcion,habilidad,
			idOrigen1,idOrigen2,idClase,vida,manaInicial,manaMax,armadura,
			resistenciaMagica,dano,velocidadAtaque,idCosto));
	});

	function insertarPersonaje(nomb,desc,habi,idOri1,idOri2,idCla,vid,manaI,manaM,arma,resi,dan,velo,idCos) {
		var myobj = { nombre: nomb, descripcion: desc, habilidad: habi, idOrigen1: idOri1,
			idOrigen2: idOri2, idClase: idCla, vida: vid, manaInicial: manaI, manaMax: manaM, 
			armadura: arma, resistenciaMagica: resi, dano: dan, velocidadAtaque: velo, idCosto: idCos};
		db.collection('personaje').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Personaje)");
		});
		return myobj;
	}

	router.post('/new/minileyenda', function(req, res) {
		var nombre = req.body.nombre;
		var idTier = req.body.idTier;
		res.status(200).json(insertarMinileyenda(nombre,idTier));
	});

	function insertarMinileyenda(nomb,idT) {
		var myobj = { nombre: nomb, idTier: idT};
		db.collection('minileyenda').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (MiniLeyenda)");
		});
		return myobj;
	}

	router.post('/new/costo', function(req, res) {
		var probabilidad = req.body.probabilidad;
		var idColor = req.body.idColor;
		res.status(200).json(insertarCosto(probabilidad,idColor));
	});

	function insertarCosto(prob,idC) {
		var myobj = { probabilidad: prob, idColor: idC};
		db.collection('costo').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Costo)");
		});
		return myobj;
	}

	router.post('/new/clase', function(req, res) {		
		var idClase = req.body.idClase;
		var nombre = req.body.nombre;
		var efecto = req.body.efecto;
		var cantidad = req.body.cantidad;
		res.status(200).json(insertarClase(idClase,nombre,efecto,cantidad));	
	});

	function insertarClase(idC,nomb,efect,canti) {
		var myobj = { idClase: idC, nombre: nomb, efecto: efect, 
			cantidad: canti};
		db.collection('clase').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Clase)");
		});
		return myobj;
	}


	router.post('/new/origen', function(req, res) {		
		var idOrigen = req.body.idOrigen;
		var nombre = req.body.nombre;
		var efecto = req.body.efecto;
		var cantidad = req.body.cantidad;
		res.status(200).json(insertarOrigen(idOrigen,nombre,efecto,cantidad));

	});

	function insertarOrigen(idO,nomb,efect,canti) {
		var myobj = { idOrigen: idO, nombre: nomb, efecto: efect, 
			cantidad: canti};
		db.collection('origen').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Origen)");
		});
		return myobj;
	}	

	router.post('/new/objeto', function(req, res) {		
		var idObjeto = req.body.idObjeto;
		var idStat = req.body.idStat;
		var stat = req.body.stat;
		var descripcion = req.body.descripcion;
		res.status(200).json(insertarObjeto(idObjeto,idStat,stat,descripcion));
	
	});

	function insertarObjeto(idO,idS,sta,desc) {
		var myobj = { idObjeto: idO, idStat: idS, stat: sta, 
			descripcion: desc};
		db.collection('objeto').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Objeto)");
		});
		return myobj;
	}	

	router.post('/new/objetofinal', function(req, res) {
		var idObjetoFinal = req.body.idObjetoFinal;
		var idObjeto1 = req.body.idObjeto1;
		var idObjeto2 = req.body.idObjeto2;
		var idStat1 = req.body.idStat1;
		var idStat2 = req.body.idStat2;
		var stat1 = req.body.stat1;
		var stat2 = req.body.stat2;
		var efecto = req.body.efecto;
		res.status(200).json(insertarObjetoFinal(idObjetoFinal,idObjeto1,
			idObjeto2,idStat1,idStat2,stat1,stat2,efecto));
	});

	function insertarObjetoFinal(idO,idO1,idO2,idS1,idS2,sta1,sta2,efect) {
		var myobj = { idObjetoFinal: idO,
			objetosCombinados: {objeto1: idO1, objeto2: idO2}, 
			idStat1: idS1, idStat2: idS2, stat1: sta1,
			stat2: sta2, efecto: efect};
		db.collection('objeto').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (ObjetoFinal)");
		});
		return myobj;
	}	
	

	return router;
}

module.exports = router_init;