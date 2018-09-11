/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = [0];
  arr = arr.concat(preferences);
  var list = [];

  for(var i = 1; i < arr.length; i+=1){
 var ou1="", ou3 =[], ou4 = [];

  var ai = i;
  var a = arr[ai];

    var bi = a;
     var b = arr[bi];

     var ci = b;
     var c = arr[ci];

     ou3 = [ai, bi, ci].sort(comp);
     ou4 = [a,b,c].sort(comp);

    ou1 = ou1 + ou3[0] +ou3[1] +ou3[2];


   if(ou3[0]===ou4[0] && ou3[1]===ou4[1]&& ou3[2]===ou4[2]){


  var  flag = true;

    for (var j = 0; j < list.length; j++){
    if(ou1=== list[j]){
    flag = false;
    break;
    }
    }

     if(flag === true && ou3[0] !==ou3[2])
    list.push(ou1);

    }
  }
  

    return list.length;
};


function comp(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
}
