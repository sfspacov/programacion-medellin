function Save()
{
	var nombre = document.getElementById("firstName");
	var apellido = document.getElementById("lastName");
	var correo = document.getElementById("email");
	var tema = document.getElementById("subject");
	var mesaje = document.getElementById("message");
	
	var formularioValido = FormValidate(nombre, correo, mesaje);
	
	if (formularioValido == true)
	{
		var usuario = 
		{
			nombreDelUsuario:  nombre.value,
			apellidoDelUsuario: apellido.value,
			correoDelUsuario: correo.value,
			temaElegido: tema.value,
			mesajeDelUsuario: mesaje.value
		}
		
		EnviarDatos(usuario);
		ClearData(nombre, apellido, email, mesaje);	
	}
	
}

function EnviarDatos(usuario)
{
	var url = 'https://localhost:1987';
	
	fetch(url, {
	  method: 'POST',
	  headers: {
		'Accept': 'application/json, text/plain, */*',
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(usuario)
	}).then(res => res.json())
	  .then(res => console.log(res));
}

function FormValidate(nombre, correo, mesaje)
{
	if (nombre.value == "")
	{
		alert('Escriba su nombre');
		return false;
	}

	if (correo.value == "")
	{
		alert('Escriba su correo');
		return false;
	}
	
	if (mesaje.value == "")
	{
		alert('Escriba una mesaje');
		return false;
	}
	
	return true;
}

function ClearData(nombre, apellido, email, mesaje)
{
	nombre.value = "";
	apellido.value = "";
	email.value = "";
	mesaje.value = "";
}