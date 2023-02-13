function tarea4()
{
	var name = document.getElementById("name");
	var email = document.getElementById("email") ;
	var message = document.getElementById("message");
	
	if (name.value!= "" && 
	email.value!=""&&
	message != "")
	{	
	alert('todos los campo estan lleno');
	}

	
	else
	{
		alert('llenar todos los campos');
	}
}


