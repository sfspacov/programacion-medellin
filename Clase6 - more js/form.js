function salvarUsuario()
{
	var nombre = document.getElementById("nombre");
	var email = document.getElementById('correo');
	var telefono = document.getElementById('telefono');
	var website = document.getElementById('website');
	var asunto = document.getElementById('asunto');
	var mesaje = document.getElementById('mesaje');
	
	if (nombre.value == "")
	{ 
		alert('Debes escribir tu nombre');
	}
	else if (email.value == "")
	{
		alert('Debes escribir tu correo');
	}
	else
	{	
		alert('Datos salvos con exito');
	}
}