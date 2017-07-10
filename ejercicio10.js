function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

function linea(n)
{
	var sp="";
	for (var i=4 ; i < 1 ; i++)
	{
		
		sp += "*" ;
    }
    var  d=espacios(n-1);
	console.log(sp + d + sp);
}
linea(12)