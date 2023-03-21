function SalvarUsuario()
{
	var correo= document.getElementById("texemail");
	var clave = document.getElementById("texpassword");
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
