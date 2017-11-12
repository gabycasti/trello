

//Creando las variables
//var lista_formulario = document.getElementById('lista');
//var new_input = document.createElement('input');
// Esta función desactiva el span con titulo de la lista
// y ativa el primer formulario
var agregarList = document.getElementById('btnAgregar');

agregarList.addEventListener('click',function(){

	document.getElementById('contAgregar').className = 'agregar_off';

	document.getElementById('contList').className= 'listado_on';

    document.getElementById('listado').focus();
	// Falta agregar el div del lado derecho

})


var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
		
	
	//Crear la Sección donde voy a añadir la nueva tarjeta 
	//Crear el a href
	//Crear el span para el titulo de la tarea
	//Crear el text area para las tareas
	//Crear para guardar las tareas
	//Insertar esa seccion antes de la primera sección
	//Crear un contador en la parte inicial del programa 
	//me indicara cuantas secciones nuevas se estan creando


	var nuevaSeccion = document.createElement('section');
	nuevaSeccion.className='inline listado_on'

	var newtitulo = document.createElement('span');
	var divTitulo = document.createElement('div');
	divTitulo.appendChild(newtitulo);
	divTitulo.className='titulo';

	var newlink = document.createElement('a');
	newlink.setAttribute('href','#');

	newlink.innerHTML='Añadir una Tarjeta';

	//crear espacio contenedor de tarjetas
	var divTarjetas = document.createElement('div');
	divTarjetas.className='contenedor';
	
   

   //Creando el link para agregar una nueva lista 
	var divLink = document.createElement('div');
	divLink.appendChild(newlink);
	divLink.className='link';



	
   // Creando el texto de la nueva lista
	var newTexto = document.createTextNode(document.getElementById('listado').value);
	document.getElementById('listado').value="";

    newtitulo.appendChild(newTexto);

    

    var textArea = document.createElement('textarea');
    textArea.className='txtArea_off';

    var divArea = document.createElement('div');
	divArea.appendChild(textArea);
	


  //Creando el boton guardar
    var newboton = document.createElement('button');
    newboton.innerHTML='Guardar';
    newboton.className='boton_off';


    var divBoton = document.createElement('div');
	divBoton.appendChild(newboton);


   //CREAR TODOS LOS EVENTOS

    //Crear una función para el link agregar tarjeta
   // var agregarTarjeta = document.getElementById('link');
    //var tarjeta = document.getElementById('card');
	  newlink.addEventListener('click',function(){
		newlink.className = 'link_tarjeta_off';
		textArea.className = 'txtArea';
		newboton.className = 'boton';
		textArea.focus();
	})


	newboton.addEventListener('click',function(){

	var texto = document.createElement('p');
	var nombre_card = textArea.value;
	var new_card = document.createTextNode(nombre_card);

	texto.appendChild(new_card);

	divTarjetas.appendChild(texto);
	textArea.value="";
    textArea.focus();
	
     })


   //Creando el div contenedor de textarea y boton para poder 
   // asignarle un estilo

    var contextboton = document.createElement('div');
    contextboton.appendChild(divArea);
    contextboton.appendChild(divBoton);
    contextboton.className='contenedor';


 // asignandole los hijos a nueva sección
    nuevaSeccion.appendChild(divTitulo);
    nuevaSeccion.appendChild(divLink);
    nuevaSeccion.appendChild(divTarjetas);
    nuevaSeccion.appendChild(contextboton);
    

    firstseccion = document.getElementById("firstseccion");

    contenedor.insertBefore(nuevaSeccion,firstseccion);


	})






