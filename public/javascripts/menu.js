$(document).ready(function(){
	$('.menu-lista li:has(ul)').click(function(e){
		e.preventDefault();
		if ($(this).hasClass('activado')){
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		} else {
			$('.menu-lista li ul').slideUp();
			$('.menu-lista li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}
	});
	function cargar_todos(){
		var text = '<ul>';
		$.ajax({
		type:'get',
		url:'/api/all/personaje',
		dataType:'json'})
	    .done(function(data) {
	    	console.log(data);
	    	$.each(data,function(i,v){
	    		text = text + "<li class = 'champ-image'><a href = '#'><img class = 'image' dataid ='"+ v.idPersonaje+"' src = '/images/campeones/champimageid"+ v.idPersonaje +".jpg'><div class='middle'><div class='text'>"+ v.nombre +"</div></div></a></li>";
	    	});
	    	text = text + '</ul>';
	    	$(".container p").html(text);
		});
	}
	$('.enlace-champ.all').click(function(e){
		e.preventDefault();
		$(".container p").html('');
		$('.content p').removeClass('info');
		cargar_todos();
	});

	$('.enlace-champ').click(function(e){
		e.preventDefault();
		$('.content p').html('');
		var tdata = parseInt($(this).attr('dataid'));
		$('.content p').removeClass('info');
		var text = '<ul>';
		$.ajax({
		type:'get',
		url:'/api/specific/personaje?id_clase=' + tdata,
		dataType:'json'})
	    .done(function(data) {
	    	$.each(data,function(i,v){
	    		text = text + "<li class = 'champ-image'><a href = '#'><img  class = 'image' dataid='"+ v.idPersonaje +"' src = '/images/campeones/champimageid"+ v.idPersonaje +".jpg'><div class='middle'><div class='text'>"+ v.nombre +"</div></div></a></li>";
	    	});
	    	text = text + '</ul>';
	    	$(".container p").html(text);
		});
	});

	$('.enlace-mini.ali').click(function(e){
		e.preventDefault();
		$('.content p').removeClass('info');
		$('.content p').html("<table>" +
			"<tr>" +
			"<td>Demaciano</td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/01.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/02.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/03.png'></td>"+
			"</tr>"+
			"<td>Del Alba</td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/11.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/12.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/13.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Rosa Pastel</td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/21.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/22.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/23.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Cerezo</td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/31.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/32.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/33.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Tropical</td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/41.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/42.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/43.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Misterioso</td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/51.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/52.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/aliplata/53.png'></td>"+
			"</tr>"+
			"</table>");
				});

$('.enlace-mini.emp').click(function(e){
		e.preventDefault();
		$('.content p').removeClass('info');
		$('.content p').html("<table>" +
		"<tr>" +
		"<td>Pengu</td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/01.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/02.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/03.png'></td>"+
		"</tr>"+
		"<td>Pío</td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/11.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/12.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/13.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Sakura</td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/21.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/22.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/23.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Súper picante</td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/31.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/32.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/33.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Hielo puro</td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/41.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/42.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/43.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>De los cuervos</td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/51.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/52.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/emplumadin/53.png'></td>"+
		"</tr>"+
		"</table>");
			});

$('.enlace-mini.fan').click(function(e){
		e.preventDefault();
		$('.content p').removeClass('info');
		$('.content p').html("<table>" +
			"<tr>" +
			"<td>Islas de la sombra</td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/01.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/02.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/03.png'></td>"+
			"</tr>"+
			"<td>Nacido del fuego</td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/11.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/12.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/13.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Tóxico</td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/21.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/22.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/23.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Materia oscura</td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/31.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/32.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/33.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Garra lunar</td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/41.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/42.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/43.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Máscara oscura</td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/51.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/52.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/fantasmin/53.png'></td>"+
			"</tr>"+
			"</table>");
				});

$('.enlace-mini.fur').click(function(e){
		e.preventDefault();
		$('.content p').removeClass('info');
		$('.content p').html("<table>" +
			"<tr>" +
			"<td>Magma</td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/01.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/02.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/03.png'></td>"+
			"</tr>"+
			"<td>León</td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/11.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/12.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/13.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>De la tundra</td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/21.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/22.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/23.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Del Vacío</td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/31.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/32.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/33.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>De sauce</td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/41.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/42.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/43.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Cono de azúcar</td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/51.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/52.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/furicuerno/53.png'></td>"+
			"</tr>"+
			"</table>");
				});

$('.enlace-mini.run').click(function(e){
		e.preventDefault();
		$('.content p').removeClass('info');
		$('.content p').html("<table>" +
			"<tr>" +
			"<td>Guardián</td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/01.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/02.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/03.png'></td>"+
			"</tr>"+
			"<td>León</td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/11.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/12.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/13.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Plántula</td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/21.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/22.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/23.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Niebla negra</td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/31.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/32.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/33.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Sakura</td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/41.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/42.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/43.png'></td>"+
			"</tr>"+
			"<tr>" +
			"<td>Espino</td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/51.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/52.png'></td>"+
			"<td><img class = 'champ-image' src='/images/mini/runente/53.png'></td>"+
			"</tr>"+
			"</table>");
				});

$('.enlace-mini.top').click(function(e){
		e.preventDefault();
		$('.content p').removeClass('info');
		$('.content p').html("<table>" +
		"<tr>" +
		"<td>Demoliciones</td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/01.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/02.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/03.png'></td>"+
		"</tr>"+
		"<td>Combatefuegos</td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/11.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/12.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/13.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Acuático</td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/21.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/22.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/23.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Torpe</td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/31.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/32.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/33.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Tóxico</td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/41.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/42.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/43.png'></td>"+
		"</tr>"+
		"<tr>" +
		"<td>Aéro</td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/51.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/52.png'></td>"+
		"<td><img class = 'champ-image' src='/images/mini/topobrero/53.png'></td>"+
		"</tr>"+
		"</table>");
			});

	$('.enlace-misc.item').click(function(e){
		e.preventDefault();
		var item = ['','Espadón','Arco curvo', 'Vara innecesariamente grande', 'Lágrima de la diosa', 'Chaleco de cadena', 'Capa de negatrón', 'Cinturón de gigante', 'Espátula', 'Guante de pelea'];
		var stats = ['','Daño de ataque','Velocidad de ataque','Poder de habilidad','Maná','Defensa','Resistencia mágica','Vida','Probabilidad de crítico','Probabilidad de evasión'];
		$('.content p').removeClass('info');
		$('.content p').html('');
		var text = '<table class = "tablaitem"><thead>'+
		'<th>Imagen</th>'+
		'<th>Nombre</th>'+
		'<th>Objeto 1</th>'+
		'<th>Objeto 2</th>'+
		'<th>Stat 1</th>'+
		'<th>Stat 2</th>'+
		'<th>Descripción</th></thead>'+
		'</tr>';
		$.ajax({
		type:'get',
		url:'/api/all/objeto',
		dataType:'json'})
	    .done(function(data) {
	    	console.log(data);
	    	$.each(data,function(i,v){
	    		text = text + "<tr>"+
	    		"<td><img src='/images/items/item_id"+v.idObjeto+".png'</td>"+
	    		"<td>"+v.nombre+"</td>"+
	    		"<td>"+item[v.idObjeto1]+"</td>"+
	    		"<td>"+item[v.idObjeto2]+"</td>"+
	    		"<td>"+stats[v.idStat1]+": "+ v.stat1 +"</td>"+
	    		"<td>"+stats[v.idStat2]+": "+ v.stat2 +"</td>"+
	    		"<td>"+v.descripcion+"</td>"+
	    		"</tr>";
	    	});
	    	text = text + '</table>';
	    	$(".container p").html(text);
	});
	});
	$('.enlace-misc.patch').click(function(e){
		e.preventDefault();
		$('.content p').html('');
		$('.content p').removeClass('info');
	    	var text = '<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">9.21</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Clasificatorias</span></p>' +
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Este es el último parche para continuar subiendo en la escala clasificada en la primera temporada de TeamFight Tactics. La clasificación estará desactivada en el parche 9.22 para el inicio de Rise of the Elements para asegurarse de que tengamos errores importantes o problemas de equilibrio, pero volverá en el parche 9.23</span></p>'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Daño del jugador</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">1 estrella por nivel 1/1/2/2/3 ⇒ 1/1/1/2/3</span></p>'+
'</li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2 estrellas por nivel: 2/2/3/4/5 ⇒ 2/2/2/3/4</span></p></li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3 estrellas por nivel: 3/4/5/6/8 ⇒ 3/3/3/5/5/8</span></p></li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Daño base 1/2/2/3/4/5 ⇒ 3/3/3/4/5/6</span></p>'+
'</li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Guardián</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Bonificación de armadura: 45 ⇒ 40</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hextech</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Duración de desactivación del objeto: 7 segundos ⇒ 5 segundos</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Caballero</span></p>'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Daño bloqueado: 15/35/60 ⇒ 15/30/60</span></p></li></ul><p><br></p>'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rangers</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Velocidad de ataque adicional: 25% / 70% ⇒ 40% / 70%</span></p></li></ul><p><br></p>'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hechicero</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Poder de habilidad: 40% / 100% / 175% ⇒ 40% / 120% / 200%</span></p>'+
'</li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Lissandra</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Maná inicial / total: 0/85 ⇒ 0/95</span></p>'+
'</li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Varus&nbsp;</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Daño de ataque: 50 ⇒ 60</span></p>'+
'</li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Brand&nbsp;</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Rango de rebote de piroclasma: 2 maleficios ⇒ 3 maleficios</span></p>'+
'</li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Velocidad del misil piroclasmático: más lento ⇒ Más rápido</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Cho’gath</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Daño de hechizo 175/350/525 ⇒ 200/400/600</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Draven</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Daño de ataque: 70 ⇒ 65</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Pantheon</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Armadura: 80 ⇒ 70</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Medallón de los Solari de Hierro</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Duración: 7 segundos ⇒ 8 segundos</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Redención</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Umbral de salud: 25% ⇒ 30%</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ballesta de repetición</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Velocidad de ataque y probabilidad de crítico por acumulación: 20% ⇒ 30%</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Lanza de Shojin</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Buffed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Restauración de maná: 15% ⇒ 18%</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Garra de trampa</span></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nerfed</span></p>'+
'<ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; &nbsp; Duración del aturdimiento: 5 segundos ⇒ 4 segundos</span></p></li></ul><p><br></p><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Bugfixin</span></p><ul style="margin-top:0;margin-bottom:0;"><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">La información sobre herramientas con hechizos de Kai’Sa ahora se escala correctamente con Poder de habilidad</span></p></li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Las monedas no se lanzan tan lejos</span></p></li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ajustes en algunas cosas de los Guantes de ladrón</span></p></li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;"><p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Draven ahora tiene la relación de velocidad de ataque prevista</span></p></li><li dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">'+
'<p dir="ltr" style="line-height:1.7999999999999998;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#fff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Los jugadores ya no recibirán ocasionalmente cantidades masivas inexplicables de daño durante los segundos extras.</span></p></li></ul>';
	    	$(".container p").html(text);
	});
	
		$('.enlace-misc.faq').click(function(e){
		e.preventDefault();
		$('.content p').html('');
		$('.content p').addClass('info');
		$('.content p').html('Nuestra empresa se especializa en la realización de páginas web, siendo una empresa mediana mente pequeña y con poca experiencia en el mundo laboral, contamos con los conocimientos y la vanguardia de contar con los mejores temas para el cliente y su comodidad. <br> Este proyecto en especial lo que buscamos es la creación del proyecto de una página web del juego Teamfight tactics, orientado especialmente a la comunidad hispana hablante. Buscamos una interacción constante con los usuarios, ya que nuestra empresa una de sus mayores oferta que le hacemos a los clientes es la retroalimentación que ellos nos podrían dar, con el fin de mejorar e innovar la página para el gusto de nuestros usuarios. <br> Hoy en día un de los mayores problemas que cuentas páginas web de diversos videojuegos es que casi nunca escuchan las opiniones de sus usuarios o simplemente no existe ninguna página deTeamfight tactics en español. <br> Nosotros damos solución a sus problemas en esta página, puesto que es un punto que hay mucho potencial y hay un crecimiento notorio.')
		});
	$(document).on('click', '.champ-image .image', function(e) {
      e.preventDefault();
      var objeto = new Object();
      objeto.id =$(this).attr('dataid');
      console.log(objeto.id);
      $('.content p').html('');

      $.ajax(
		{	type:"get",
			url:'/api/detail/personaje?idP=' + objeto.id,
			dataType: 'json'
		}).done(function(data){
				console.log(data);
	    		var text ='<div id ="champ-container">'+
	    		'<div id="champ-header">'+data[0].nombre+'</div>'+
	    		'<div id="champ-contenido">'+
	    		'<div id="champ-section">Seletion</div>'+
	    		'<div id="champ-aside"></div></div>';
	    		$('.content p').html(text);
		});
	    	

	});
});
