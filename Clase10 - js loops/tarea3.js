function tarea1()
{
	var name = document.getElementById("name");
	var email= document.getElementById('email');
	var message = document.getElementById('message');
	
	
	if (name.value =="")
	{ 
		alert('Debes escribir tu nombre');
	}
	else if (email.value =="")
	{
		alert('Debes escribir tu correo');
	}
	else
	{	
		alert('tarea 1 cumplida');
	}
}
