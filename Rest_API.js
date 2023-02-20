
var request=new XMLHttpRequest();

request.open("get","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for (i=0;i<result.length;i++){
console.log(`name of the countrie is ${result[i].name} and its region is  ${result[i].region} sub-region of the countrie is  ${result[i].subregion} population of the countrie is ${result[i].population}`)
    }
}