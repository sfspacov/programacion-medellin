function loopFor()
{	
	for (var count = 1; count <= 10 ; count = count + 1)
	{
		console.log("Loop for " + count)
	}	
}

function loopWhile()
{
	var contador = 0;
	
	while(contador < 10)
	{
		console.log("Loop While: " + contador);
		contador = contador + 5;
	}
}