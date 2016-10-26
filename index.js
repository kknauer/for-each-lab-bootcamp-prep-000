function iterativeLog(array){

  array.forEach((element,index) => {console.log(`${index}: ${element}`)})
}
function iterate (callback){
  var pizza= ["pepperoni", "mushroom", "veggie"];

  pizza.forEach(callback);
  return pizza
}

function doToArray(array, callback){
  array.forEach(callback)
}
