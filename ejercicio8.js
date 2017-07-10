function masGrande(arr)
{
   var palabra = arr.filter(function(ar){
              var x=ar.length;
              console.log(x);
   })
   console.log("*",palabra);

}
masGrande(["gato","perro","cocodrilo","raton"])