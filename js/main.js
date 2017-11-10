var contSeccion = 0;

//Creando las variables
//var lista_formulario = document.getElementById('lista');
//var new_input = document.createElement('input');
// Esta función desactiva el span con titulo de la lista
// y ativa el primer formulario
var agregarList = document.getElementById('btnAgregar');

agregarList.addEventListener('click',function(){

	document.getElementById('contAgregar').className = 'agregar_off';

	document.getElementById('contList').className= 'listado_on';

    document.getElementById('lista').focus();
	// Falta agregar el div del lado derecho

})


var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
		//document.getElementById('contList').className = 'listado_off';
		//document.getElementById('contArea').className = 'listado_on';
		//document.getElementById('listArea').innerHTML=document.getElementById('lista').value;
	
	//Crear la Sección donde voy a añadir la nueva tarjeta 
	//Crear el a href
	//Crear el span para el titulo de la tarea
	//Crear el text area para las tareas
	//Crear para guardar las tareas
	//Insertar esa seccion antes de la primera sección
	//Crear un contador en la parte inicial del programa 
	//me indicara cuantas secciones nuevas se estan creando

	//Incrementando contador de secciones
	contSeccion = contSeccion+1;

	var nuevaSeccion = document.createElement('section');
	nuevaSeccion.setAttribute('id','secondSeccion'+contSeccion);
	nuevaSeccion.className='inline'

	var newtitulo = document.createElement('span');
	newtitulo.setAttribute('id','titulo'+contSeccion);
	var divTitulo = document.createElement('div');
	divTitulo.appendChild(newtitulo);

	var newlink = document.createElement('a');
	newlink.setAttribute('id','link'+contSeccion);
	newlink.innerHTML='Añadir una Tarjeta';


	

	var newTexto = document.createTextNode(document.getElementById('lista').value);
    newtitulo.appendChild(newTexto);
    


    var textArea = document.createElement('textarea');
    textArea.setAttribute('id','area'+contSeccion);

    var newboton = document.createElement('button');
    newboton.setAttribute('id','boton'+contSeccion);
    newboton.innerHTML='Guardar';
    newboton.className='boton';


    nuevaSeccion.appendChild(divTitulo);
    nuevaSeccion.appendChild(newlink);
    nuevaSeccion.appendChild(textArea);
    nuevaSeccion.appendChild(newboton);

    firstseccion = document.getElementById("firstseccion");

    contenedor.insertBefore(nuevaSeccion,firstseccion);


	})




//Crear una función para el link agregar tarjeta
//var agregarTarjeta = document.getElementById('link');
//var tarjeta = document.getElementById('card');
	//agregarTarjeta.addEventListener('click',function(){
		//document.getElementById('link').className = 'link_tarjeta_off';
		//document.getElementById('card').className = 'newTarjeta_on';
	//})


//Esta función deshabilita el formulario anterior que contiene
// solo el input y el boton para activar el formulario
// Que contiene el textarea y el boton
//var agregarTextArea = document.getElementById('btnArea');
//var lisTarjeta = document.getElementById('contTarjeta');

//agregarTextArea.addEventListener('click',function(){

	//var texto = document.createElement('p');
	//var nombre_card = document.getElementById('namecard').value;
	//var new_card = document.createTextNode(nombre_card);

	//texto.appendChild(new_card);

	//lisTarjeta.appendChild(texto);



	
//})



