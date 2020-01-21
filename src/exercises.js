function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  else{

    const firstValA = a[0];
    const firstValB = b[0];

    const lastValA = a[a.length - 1];
    const lastValB = b[b.length - 1];

    if(firstValA === firstValB || lastValA === lastValB){
      return true;
    } else {
      return false
    }
    }
  }



function endsMeet(values, n) {
  var theArray = [];

  if (!values || values.length === 0) {
    return theArray;
  }
  if(values.length < n){
    return theArray;
  }
  if(n % 1 !== 0 || n < 0){
    return theArray;
  }
  else {
      if (n === 0) {
        return values;
      } else {
        for (let i = 0; i < n; i++) {
          if (!(values[i] === undefined)) {
            theArray.push(values[i]);
          }
        }
        for (let i = n; i > 0; i--) {
          if (!(values[values.length - i] === undefined)) {
            theArray.push(values[values.length - i]);
          }
        }
        return theArray;
      }
   }
 }



function difference(numbers) {
    var min = Number(Math.min.apply(null, numbers));
  	var max = Number(Math.max.apply(null, numbers));

  	if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
  		return undefined;
  	} else {
  		let diff = max - min;
  		return diff;
  	}
  }



function max(number) {
  if (!number || number.length % 2 == 0 || number.length < 3) {
  return undefined;

  } else {
  for (var i = 0; i < number.length; i++) {

    if (isNaN(number[i])) {
      var undefined2 = true;
    }
  }

  if (undefined2 == true) {
    return undefined;

  } else {
    const first = number[0];
    const middle = number[(number.length - 1) / 2];
    const last = number[number.length - 1];

    var newArray = [first, middle, last];

    const largest = Math.max(...newArray);

    return largest;
    }
  }
}



function middle(values) {
  let theArray = []
  if (!values || values.length === 0) {
     return theArray;
   }
   if (values.length % 2 === 0 || values.length < 3 ){
     return theArray;
   }
   else{
     var middle = Math.floor(values.length/2);
     theArray.push(values[middle - 1], values[middle]);
     return theArray;
   }
 }



function increasing(numbers) {
  if (!numbers || numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 3) {
      return undefined;
    }
    else {
      for (let i = 1; i < numbers.length; i++) {
        if ((numbers[i - 1] + 1) === numbers[i] && numbers[i + 1] - 1 === numbers[i]) {
            return true;
            break;
        }
      }
    }
    return false;
 }



function everywhere(values, x) {
  var evaluation = true;

   if (!values || values.length < 1 || x == 0) {
     return false;
   } else {

     for (var i = 0; i < values.length; i++){
       if (values[i] !== x && values[i + 1] !== x && values[i - 1] !== x) {
         var evaluation = false;
       }
     }

     if (evaluation) {
       return true;
     } else {
       return false;
     }
   }

 }




function consecutive(numbers) {
  var stop = true;
  if (!numbers || numbers.length < 3) {
    return false;
  } else {
    for (var i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]) || numbers[i] != Math.round(numbers[i])) {
        var undefined2 = true;
      }
    }
    if (undefined2) {
      return false;
    } else {
      for (var i = 0; i < numbers.length -2; i++) {
        if ((numbers[i] / 2) - (Math.floor(numbers[i] / 2)) == (numbers[i + 1] / 2) - (Math.floor(numbers[i + 1] / 2)) && (numbers[i] / 2) - (Math.floor(numbers[i] / 2)) == (numbers[i + 2] / 2) - (Math.floor(numbers[i + 2] / 2)) && stop) {
          return true;
          var stop = false;
        }
      }
      if (stop != false) {
        return false
      }
    }
  }
  }



function balance(numbers) {
  if (!numbers || numbers.length === 0) {
   return false;
  }

  var length = numbers.length;

  if ( length < 2 ) {
     return false;
   }

  let leftSum = 0;

  for (i = 0; i < length; i++) {

     if (isNaN(numbers[i])) {
       return false;
     }

     leftSum += numbers[i];

   }
   let rightSum = 0;
   for(i = length - 1; i >= 0; i--) {
     rightSum += numbers[i];
     leftSum -= numbers[i];
     if(leftSum == rightSum) {
       return true;
     }
   }
   return false;

  console.log("test");
  }



function clumps(values) {
  if (!values) {
    return -1;
  } else {
    var count = 0;

    for (var i = 0; i < values.length; i++) {
      if (values[i] !== values[i - 1] && values[i] == values[i + 1]) {
        var count = count + 1;
      }
    }

  return count;
  }
}



/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
