function Salvar()
{
	var correo= document.getElementById("email");
	var clave = document.getElementById("pass");
	var formularioValido = FormValidate(correo.value, clave.value);
	
	if (formularioValido == true)
	{
		var usuario = 
		{
			"correo": correo.value,
			"clave": clave.value,
		}
		
		EnviarDatos(usuario);
		ClearData(correo, clave);
	}
}

function ClearData(correo, clave)
{
	correo.value = "";
	clave.value = "";
}

function EnviarDatos(usuario)
{
	var url = 'http://localhost:5128/users';
	
	fetch(url, {
	  method: 'POST',
	  headers: {
		'Accept': 'application/json, text/plain, */*',
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(usuario)
	}).then(res => res.json())
	  .then(
	  function(res){		  
		alert(res.mensaje)  
	  });
}

function FormValidate(correo, clave)
{	
	if (correo == "")
	{
		alert('Escriba su correo');
		return false;
	}
	
	if (clave == "")
	{
		alert('Escriba su clave');
		return false;
	}
	
	return true;
}