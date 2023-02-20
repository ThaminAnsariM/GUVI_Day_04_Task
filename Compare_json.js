//Comparing the two Json properties without order.
const object1 = {
  name: 'thamin',
  age: 23
};
    
const object2 = {
  address: 'India',
  name: 28
};
    
if(JSON.stringify(object1.key) === JSON.stringify(object2.key)){
    console.log(true);
}else{
    console.log(false)
}



