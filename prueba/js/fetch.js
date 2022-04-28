let url = " https://pokeapi.co/api/v2/ability/7/";
//endpoint
let productos = fetch(url);

productos
.then(elementos=>{
    console.log(elementos);
    //console.log(elementos.json())
    return elementos.json()
})
.then(datos=>{
  console.log(datos)
})
.catch(error=>{
    console.log(error);
})


