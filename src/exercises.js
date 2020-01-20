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
    const middle = number[(number.length - 1)/ 2];
    const last = number[number.length -1];

    var newArray = [first, middle, last];

    const largest = Math.max(...newArray);

    return largest;
  }
}
}


function middle(values) {
  var newArray = [];

  if (!values || values.length % 2 == 0 || values.length < 3) {
    return newArray;

  } else {
    const middle = values[(values.length - 1)/ 2];
    const midMinus = values[((values.length - 1)/ 2)-1]
    const midPlus = values[((values.length - 1)/ 2)+1]

    newArray.push(midMinus);
    newArray.push(middle);
    newArray.push(midPlus);

    return newArray;
    }
  }
//DOESNT PASS ALL TEST CASES


function increasing(numbers) {

}
//DOESNT PASS ALL TEST CASES

function everywhere(values, x) {
  // write your code here
}



function consecutive(numbers) {
  // write your code here
}



function balance(numbers) {
  // write your code here
  console.log("test");
}



function clumps(values) {
  // write your code here
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
