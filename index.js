function count(arr){
  var a=0
  arr.map(function(x){
    a++
  })
  return a
}

console.log(count([]))
console.log(count([1,2,3]));


function isEmpty(arr){
  if(count(arr)===0){
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty([]))
console.log(isEmpty([1,2,3]));

function head(arr){
  return arr.shift()
}

console.log(head([1,2,3]));
console.log(head([4,5,7]));

function tail(arr){
  arr.shift()
  return arr
}

console.log(tail([1,2,3]));
console.log(tail([2,3]));