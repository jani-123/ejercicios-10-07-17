function recorrido(arr,caracter)
{
	var c=0;
	var conto = arr.join().split("");
	for(var i=0 ; i<conto.length ; i++)
	{
		if(conto[i] == caracter)
		{
			c += 1;
		}
	}
	console.log(c);

}
recorrido(["murcielago","pato","caballo","zebra"],"a")