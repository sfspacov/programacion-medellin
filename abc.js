
	function tarea11()
{
	var correo= document.getElementById("Email");
	var clave =document.getElementById("Password");

	
	var formularioValido = FormValidate(correo,clave);
	
	if (formularioValido == true)
	{
		var usuario = 
		{
			correoDelUsuario: correo.value,
			claveDelUsuario: clave.value,

		}
			EnviarDatos(usuario);
			ClearData(email, clave);
	}