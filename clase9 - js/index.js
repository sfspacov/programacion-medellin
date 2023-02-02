function pagarCompra()
{
	var email = document.getElementById('email');
	var order = document.getElementById('order');
	var creditCard = document.getElementById('creditCard');
	
	if (email.value != "" && 
		order.value != "" && 
		creditCard.value != "")
	{
		alert('Compra hecha con exito')
	}
	else
	{
		alert('Llene los campos')
	}	
}