function vocales(arr)
{
    var vocales = ['a','e','i','o','u'];
    var palabra = arr.join().split("");
    var c=0;
    for(var i=0 ; i < palabra.length ; i++)
    {
    	for(var j=0 ; j < vocales.length ; j++)
    		if(palabra[i] == vocales[j])
    			c++;
    }
    console.log("se encontro " + c + " vocales");
}
vocales(["ojo","mouse","lapiz"])