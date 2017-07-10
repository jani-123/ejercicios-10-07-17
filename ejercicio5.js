function masGrande(arr)
{

	var largo = [];
   for(var i=0 ; i < arr.length ; i++)
   {
   	  largo[i] = arr[i].length;
   }
   var final = largo.reduce(function(max,num){ return(max>num)?max:num });
   console.log(final);
}
masGrande(["gato","perro","cocodrilo","raton"])