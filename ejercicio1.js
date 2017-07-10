function capicua(numeros)
{
	var _num = numeros.toString();
	var reverNum = numeros.toString().split("").reverse().join('');
	if(_num == reverNum)
	{
		console.log("es un numero capicua")
	}
	else
    {
    	console.log("no es un numero capicua")
    }

}
capicua(11822811)