$(document).ready(function(){

function all_champ(){
		var text = '<ul class = "products">'
		$.ajax({
		type:'get',
		url:'/api/all/personaje',
		dataType:'json'})
	    .done(function(data) {
	    	console.log(data);
	    	$(".content").html('');
	    	$.each(data,function(i,v){
	    		text = text + '<li class="champ-image"><img src="images/campeones/champimageid'+ (parseInt(i)+1) '"></li>';
	    	});
	    	$(".content").append(text);
	    	console.log(text);
	});
}
	$(".champ-image").click(function(){
	    $("div").css("background-color", "yellow");
	    }, function(){
	    $("div").css("background-color", "pink");
	 });

$("#tabla_datos").on('click','.actualizar',function(){
	//console.log($(this).attr('data-id'));
	var objeto = new Object();
	objeto.usuario=$(this).attr('data-id');
	objeto.num = $(this).attr('numcontrol');
	objeto.usu = $("#usuario"+objeto.num).val();
	objeto.correo = $("#correo"+objeto.num).val();
	objeto.pass = $("#pass"+objeto.num).val();
	$.ajax(
		{
			type:"put",
			url:'/api/update/' + objeto.usuario,
			data: {usuario: objeto.usu, correo: objeto.correo,pass: objeto.pass},
			dataType: 'json',
			success: alert("Registro actulizado con exito")
		}).done(function(data){
			cargar_tabla();
		});
});

$("#tabla_datos").on('click','.borrar_elemento',function(){

var objeto =new Object();
objeto.usuario=$(this).attr('data-id');

	$.ajax(
	{
		type:"delete",
		url:'/api/delete/' + objeto.usuario,
		dataType:"json",
		success: alert("Registro borrado con exito")
	}).done(function(data){
		cargar_tabla();
	});
});

$("#registro").on('click','.guardar',function(){

	var objeto = new Object();
	objeto.nom = $("#nombre").val();
	objeto.usu = $("#usuario").val();
	objeto.correo = $("#correo").val();
	objeto.pass = $("#contraseña").val();
	objeto.sexo = $("#sexo option:selected").text();
	objeto.est = $("#estado option:selected").text();
	objeto.fecha = $("#fecha").val();
	$.ajax(
	{
		type:"post",
		url:'/api/new',
		dataType:"json",
		data: {
		nombre: objeto.nom,
        usuario: objeto.usu,
        sexo: objeto.sexo,
        correo: objeto.correo,
        estado: objeto.est,
        fecha: objeto.fecha,
        pass: objeto.pass},
		success: alert("Nuevo registro guardado con exito")
	}).done(function(data){
		cargar_tabla();
	});
});

$("#tabla_datos").on('click','.ver',function(){

var objeto =new Object();
objeto.usuario=$(this).attr('data-id');

	$.ajax(
	{
		type:"get",
		url:'/api/show/' + objeto.usuario,
		dataType:"json",
	}).done(function(data){
		
	});
});

});