function sumaImpares(n,m)
{
	var c=0;
	for(var i=n ; i <= m ; i++)
		if( i % 2 != 0)
			c += i;
    console.log(" sumatoria de impares " + c)
}
sumaImpares(1,7);