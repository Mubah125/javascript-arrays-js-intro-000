var chocolateBars = new Array("snickers" , "hundred grand" , "kitkat" , "skittles");

 function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  // addElementToBeginningOfArray.unshift("string");
  // return addElementToBeginningOfArray;
<<<<<<< HEAD
}

function destructivelyAddElementToBeginningOfArray(array, element) {

 array.unshift(element);

return array ;
};

function addElementToEndOfArray(array , element){

return [...array , element]
=======
};

function destructivelyAddElementToBeginningOfArray(array , element) {

return array.unshift(element);

};
function addElementToEndOfArray(array , element){

return [array , ...element]
>>>>>>> 9777f1daf8a61885153babcc352c66add6056011

};

function destructivelyAddElementToEndOfArray(array , element){

<<<<<<< HEAD
 array.push(element);
return array;
};

function accessElementInArray(array , number){

return array[number];

};
function destructivelyRemoveElementFromBeginningOfArray(array){

 array.shift();

return array;
};

function removeElementFromBeginningOfArray(array){

return array.slice(1);

};

function destructivelyRemoveElementFromEndOfArray(array){

  array.pop();
  return array;
};

function removeElementFromEndOfArray(array){
return array.slice(0 , array.length -1);
=======
return array.push(element);
>>>>>>> 9777f1daf8a61885153babcc352c66add6056011

};
