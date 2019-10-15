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
		var idPersonaje = req.body.idPersonaje;
		var nombre = req.body.nombre;
		var descripcion = req.body.descripcion;
		var habilidad = req.body.habilidad;
		var idOrigen1 = req.body.idOrigen1;
		var idOrigen2 = req.body.idOrigen2;
		var idClase1 = req.body.idClase1;
		var idClase2 = req.body.idClase2;
		var vida = req.body.vida;
		var manaInicial = req.body.manaInicial;
		var manaMax = req.body.manaMax;
		var armadura = req.body.armadura;
		var resistenciaMagica = req.body.resistenciaMagica;
		var dano = req.body.dano;
		var velocidadAtaque = req.body.velocidadAtaque;
		var rango = req.body.rango;
		var idCosto = req.body.idCosto;

		res.status(200).json(insertarPersonaje(idPersonaje,nombre,descripcion,habilidad,
			idOrigen1,idOrigen2,idClase1,idClase2,vida,manaInicial,manaMax,armadura,
			resistenciaMagica,dano,velocidadAtaque,rango,idCosto));
	});

	router.post('/update/personaje', function(req, res, next) {
		var idPersonaje = req.body.idPersonaje;
		var nombre = req.body.nombre;
		var descripcion = req.body.descripcion;
		var habilidad = req.body.habilidad;
		var idOrigen1 = req.body.idOrigen1;
		var idOrigen2 = req.body.idOrigen2;
		var idClase1 = req.body.idClase1;
		var idClase2 = req.body.idClase2;
		var vida = req.body.vida;
		var manaInicial = req.body.manaInicial;
		var manaMax = req.body.manaMax;
		var armadura = req.body.armadura;
		var resistenciaMagica = req.body.resistenciaMagica;
		var dano = req.body.dano;
		var velocidadAtaque = req.body.velocidadAtaque;
		var rango = req.body.rango;
		var idCosto = req.body.idCosto;

		res.status(200).json(actualizarPersonaje(idPersonaje,nombre,descripcion,habilidad,
			idOrigen1,idOrigen2,idClase1,idClase2,vida,manaInicial,manaMax,armadura,
			resistenciaMagica,dano,velocidadAtaque,rango,idCosto));
	});

	router.post('/delete/personaje', function(req, res, next) {
		var idPersonaje = req.body.idPersonaje;

		res.status(200).json(eliminarPersonaje(idPersonaje));
	});

	function insertarPersonaje(idP,nomb,desc,habi,idOri1,idOri2,idCla1,idCla2,vid,manaI,manaM,arma,resi,dan,velo,rang,idCos) {
		var myobj = { idPersonaje: idP, nombre: nomb, descripcion: desc, habilidad: habi, idOrigen1: idOri1,
			idOrigen2: idOri2, idClase1: idCla1, idClase2: idCla2, vida: vid, manaInicial: manaI, manaMax: manaM, 
			armadura: arma, resistenciaMagica: resi, dano: dan, velocidadAtaque: velo, rango: rang, idCosto: idCos};
		db.collection('personaje').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Personaje)");
		});
		return myobj;
	}

	function actualizarPersonaje(idP,nomb,desc,habi,idOri1,idOri2,idCla1,idCla2,vid,manaI,manaM,arma,resi,dan,velo,rang,idCos) {
		var myquery = { idPersonaje: idP };
		var newvalues = { $set: {nombre: nomb, descripcion: desc, habilidad: habi, idOrigen1: idOri1,
			idOrigen2: idOri2, idClase1: idCla1, idClase2: idCla2, vida: vid, manaInicial: manaI, manaMax: manaM, 
			armadura: arma, resistenciaMagica: resi, dano: dan, velocidadAtaque: velo, rango: rang, idCosto: idCos} };
		db.collection('personaje').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
			console.log("1 document updated (Personaje)");
		});
		return newvalues;
	}

	function eliminarPersonaje(idP) {
		var myquery = { idPersonaje: idP };
		db.collection('personaje').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (Personaje)");
		});
		return myquery;
	}

	router.post('/new/minileyenda', function(req, res) {
		var idMinileyenda = req.body.idMinileyenda;
		var nombre = req.body.nombre;
		var curiosidad = req.body.curiosidad;
		var historia = req.body.historia;

		res.status(200).json(insertarMinileyenda(idMinileyenda,nombre,curiosidad,
			historia));
	});

	router.post('/update/minileyenda', function(req, res) {
		var idMinileyenda = req.body.idMinileyenda;
		var nombre = req.body.nombre;
		var curiosidad = req.body.curiosidad;
		var historia = req.body.historia;

		res.status(200).json(actualizarMinileyenda(idMinileyenda,nombre,curiosidad,
			historia));
	});

	router.post('/delete/minileyenda', function(req, res) {
		var idMinileyenda = req.body.idMinileyenda;

		res.status(200).json(eliminarMinileyenda(idMinileyenda));
	});

	function insertarMinileyenda(idM,nomb,curio,histo,cost) {
		var myobj = { idMinileyenda: idM, nombre: nomb, curiosidad: curio, historia: histo};
		db.collection('minileyenda').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (MiniLeyenda)");
		});
		return myobj;
	}

	function actualizarMinileyenda(idM,nomb,curio,histo,cost) {
		var myquery = { idMinileyenda: idM };
		var newvalues = { $set: {nombre: nomb, curiosidad: curio, historia: histo} };
		db.collection('minileyenda').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
    		console.log("1 document updated (MiniLeyenda)");
  		});
  		return newvalues;
	}

	function eliminarMinileyenda(idM) {
		var myquery = { idMinileyenda: idM };
		db.collection('minileyenda').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (MiniLeyenda)");
		});
		return myquery;
	}

	router.post('/new/costo', function(req, res) {
		var idCosto = req.body.idCosto;
		var probabilidad = req.body.probabilidad;
		var idColor = req.body.idColor;

		res.status(200).json(insertarCosto(idCosto,probabilidad,idColor));
	});

	router.post('/update/costo', function(req, res) {
		var idCosto = req.body.idCosto;
		var probabilidad = req.body.probabilidad;
		var idColor = req.body.idColor;

		res.status(200).json(actualizarCosto(idCosto,probabilidad,idColor));
	});

	router.post('/delete/costo', function(req, res) {
		var idCosto = req.body.idCosto;
		
		res.status(200).json(eliminarCosto(idCosto));
	});

	function insertarCosto(idCos,prob,idC) {
		var myobj = { idCosto: idCos, probabilidad: prob, idColor: idC};
		db.collection('costo').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Costo)");
		});
		return myobj;
	}

	function actualizarCosto(idCos,prob,idC) {
		var myquery = { idCosto: idCos };
		var newvalues = { $set: {probabilidad: prob, idColor: idC} };
		db.collection('costo').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
    		console.log("1 document updated (Costo)");
  		});
  		return newvalues;
	}

	function eliminarCosto(idCos) {
		var myquery = { idCosto: idCos };
		db.collection('costo').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (Costo)");
		});
		return myquery;
	}

	router.post('/new/clase', function(req, res) {		
		var idClase = req.body.idClase;
		var nombre = req.body.nombre;
		var efecto = req.body.efecto;
		var cantidad1 = req.body.cantidad1;
		var cantidad2 = req.body.cantidad2;
		var cantidad3 = req.body.cantidad3;

		res.status(200).json(insertarClase(idClase,nombre,efecto,cantidad1,cantidad2,cantidad3));
	});

	router.post('/update/clase', function(req, res) {		
		var idClase = req.body.idClase;
		var nombre = req.body.nombre;
		var efecto = req.body.efecto;
		var cantidad1 = req.body.cantidad1;
		var cantidad2 = req.body.cantidad2;
		var cantidad3 = req.body.cantidad3;

		res.status(200).json(actualizarClase(idClase,nombre,efecto,cantidad1,cantidad2,cantidad3));
	});

	router.post('/delete/clase', function(req, res) {		
		var idClase = req.body.idClase;

		res.status(200).json(eliminarClase(idClase));
	});

	function insertarClase(idC,nomb,efect,canti1,canti2,canti3) {
		var myobj = { idClase: idC, nombre: nomb, efecto: efect, 
			cantidad1: canti1, cantidad2: canti2, cantidad3: canti3};
		db.collection('clase').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Clase)");
		});
		return myobj;
	}

	function actualizarClase(idC,nomb,efect,canti1,canti2,canti3) {
		var myquery = { idClase: idC };
		var newvalues = { $set: {nombre: nomb, efecto: efect, 
			cantidad1: canti1, cantidad2: canti2, cantidad3: canti3} };
		db.collection('clase').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
    		console.log("1 document updated (Clase)");
  		});
  		return newvalues;
	}

	function eliminarClase(idC) {
		var myquery = { idClase: idC };
		db.collection('clase').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (Clase)");
		});
		return myquery;
	}

	router.post('/new/origen', function(req, res) {		
		var idOrigen = req.body.idOrigen;
		var nombre = req.body.nombre;
		var efecto = req.body.efecto;
		var cantidad1 = req.body.cantidad1;
		var cantidad2 = req.body.cantidad2;
		var cantidad3 = req.body.cantidad3;

		res.status(200).json(insertarOrigen(idOrigen,nombre,efecto,cantidad1,cantidad2,cantidad3));
	});

	router.post('/update/origen', function(req, res) {		
		var idOrigen = req.body.idOrigen;
		var nombre = req.body.nombre;
		var efecto = req.body.efecto;
		var cantidad1 = req.body.cantidad1;
		var cantidad2 = req.body.cantidad2;
		var cantidad3 = req.body.cantidad3;

		res.status(200).json(actualizarOrigen(idOrigen,nombre,efecto,cantidad1,cantidad2,cantidad3));
	});

	router.post('/delete/origen', function(req, res) {		
		var idOrigen = req.body.idOrigen;

		res.status(200).json(eliminarOrigen(idOrigen));
	});

	function insertarOrigen(idO,nomb,efect,canti1,canti2,canti3) {
		var myobj = { idOrigen: idO, nombre: nomb, efecto: efect, 
			cantidad1: canti1, cantidad2: canti2, cantidad3: canti3};
		db.collection('origen').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Origen)");
		});
		return myobj;
	}

	function actualizarOrigen(idO,nomb,efect,canti1,canti2,canti3) {
		var myquery = { idOrigen: idO };
		var newvalues = { $set: {nombre: nomb, efecto: efect, 
			cantidad1: canti1, cantidad2: canti2, cantidad3: canti3} };
		db.collection('origen').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
    		console.log("1 document updated (Origen)");
  		});
  		return newvalues;
	}

	function eliminarOrigen(idO) {
		var myquery = { idOrigen: idO };
		db.collection('origen').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (Origen)");
		});
		return myquery;
	}	

	router.post('/new/objeto', function(req, res) {		
		var idObjeto = req.body.idObjeto;
		var nombre = req.body.nombre;
		var idStat1 = req.body.idStat1;
		var idStat2 = req.body.idStat2;
		var stat1 = req.body.stat1;
		var stat2 = req.body.stat2;
		var descripcion = req.body.descripcion;

		res.status(200).json(insertarObjeto(idObjeto,nombre,idStat1,idStat2,stat1,stat2,descripcion));
	});

	router.post('/update/objeto', function(req, res) {		
		var idObjeto = req.body.idObjeto;
		var nombre = req.body.nombre;
		var idStat1 = req.body.idStat1;
		var idStat2 = req.body.idStat2;
		var stat1 = req.body.stat1;
		var stat2 = req.body.stat2;
		var descripcion = req.body.descripcion;

		res.status(200).json(actualizarObjeto(idObjeto,nombre,idStat1,idStat2,stat1,stat2,descripcion));
	});

	router.post('/delete/objeto', function(req, res) {		
		var idObjeto = req.body.idObjeto;

		res.status(200).json(eliminarObjeto(idObjeto));
	});

	function insertarObjeto(idO,nomb,idS1,idS2,sta1,sta2,desc) {
		var myobj = { idObjeto: idO, nombre: nomb,
			idStat1: idS1, idStat2: idS2, stat1: sta1, stat2: sta2, descripcion: desc};
		db.collection('objeto').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (Objeto)");
		});
		return myobj;
	}

	function actualizarObjeto(idO,nomb,idS1,idS2,sta1,sta2,desc) {
		var myquery = { idObjeto: idO };
		var newvalues = { $set: {nombre: nomb,
			idStat1: idS1, idStat2: idS2, stat1: sta1, stat2: sta2, descripcion: desc} };
		db.collection('objeto').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
    		console.log("1 document updated (Objeto)");
  		});
  		return newvalues;
	}

	function eliminarObjeto(idO) {
		var myquery = { idObjeto: idO };
		db.collection('objeto').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (Objeto)");
		});
		return myquery;
	}	

	router.post('/new/objetofinal', function(req, res) {
		var idObjetoFinal = req.body.idObjetoFinal;
		var nombre = req.body.nombre;
		var idObjeto1 = req.body.idObjeto1;
		var idObjeto2 = req.body.idObjeto2;
		var idStat1 = req.body.idStat1;
		var idStat2 = req.body.idStat2;
		var stat1 = req.body.stat1;
		var stat2 = req.body.stat2;
		var efecto = req.body.efecto;
		var unico = req.body.unico;

		res.status(200).json(insertarObjetoFinal(idObjetoFinal,nombre,idObjeto1,
			idObjeto2,idStat1,idStat2,stat1,stat2,efecto,unico));
	});

	router.post('/update/objetofinal', function(req, res) {
		var idObjetoFinal = req.body.idObjetoFinal;
		var nombre = req.body.nombre;
		var idObjeto1 = req.body.idObjeto1;
		var idObjeto2 = req.body.idObjeto2;
		var idStat1 = req.body.idStat1;
		var idStat2 = req.body.idStat2;
		var stat1 = req.body.stat1;
		var stat2 = req.body.stat2;
		var efecto = req.body.efecto;
		var unico = req.body.unico;

		res.status(200).json(actualizarObjetoFinal(idObjetoFinal,nombre,idObjeto1,
			idObjeto2,idStat1,idStat2,stat1,stat2,efecto,unico));
	});

	router.post('/delete/objetofinal', function(req, res) {
		var idObjetoFinal = req.body.idObjetoFinal;
		var nombre = req.body.nombre;
		var idObjeto1 = req.body.idObjeto1;
		var idObjeto2 = req.body.idObjeto2;
		var idStat1 = req.body.idStat1;
		var idStat2 = req.body.idStat2;
		var stat1 = req.body.stat1;
		var stat2 = req.body.stat2;
		var efecto = req.body.efecto;
		var unico = req.body.unico;
		
		res.status(200).json(eliminarObjetoFinal(idObjetoFinal));
	});

	function insertarObjetoFinal(idO,nomb,idO1,idO2,idS1,idS2,sta1,sta2,efect,unic) {
		var myobj = { idObjetoFinal: idO, nombre: nomb,
			objetosCombinados: {objeto1: idO1, objeto2: idO2}, 
			idStat1: idS1, idStat2: idS2, stat1: sta1,
			stat2: sta2, efecto: efect, unico: unic};
		db.collection('objetofinal').insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted (ObjetoFinal)");
		});
		return myobj;
	}

	function actualizarObjetoFinal(idO,nomb,idO1,idO2,idS1,idS2,sta1,sta2,efect,unic) {
		var myquery = { idObjetoFinal: idO };
		var newvalues = { $set: {nombre: nomb,
			objetosCombinados: {objeto1: idO1, objeto2: idO2}, 
			idStat1: idS1, idStat2: idS2, stat1: sta1,
			stat2: sta2, efecto: efect, unico: unic} };
		db.collection('objetofinal').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
    		console.log("1 document updated (ObjetoFinal)");
  		});
  		return newvalues;
	}

	function eliminarObjetoFinal(idO) {
		var myquery = { idObjetoFinal: idO };
		db.collection('objetofinal').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log("1 document deleted (ObjetoFinal)");
		});
		return myquery;
	}	

	return router;
}

module.exports = router_init;