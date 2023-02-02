function salvarUsuario()
{
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var msg = document.getElementById('msg');
	
	if (name.value == '')
	{
		alert('Mijo necesita poner su nombre');
	}
	else if (email.value == '')
	{
		alert('Mijo necesita tb su correo!!');
	}
	else if (msg.value == '')
	{
		alert('Escribes una mesage');
	}
	else
	{
		alert('Salvo con suceso');
	}		
}