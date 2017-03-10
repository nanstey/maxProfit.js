function maxProfit(arr){
  if (arr.length < 2){
    return -1;
  }
  if (isNaN(arr[0]))
    return -1;
  var max_diff = arr[1] - arr[0];
  var min = arr[0];
  for (var i = 1; i < arr.length; i++){
    //console.log(arr[i]);
    if (isNaN(arr[i]) || arr[i] === '')
      return -1;
    if (arr[i] - min > max_diff)
      max_diff = arr[i] - min;
    if (arr[i] < min)
      min = arr[i];
  }
  if (max_diff < 1)
    return -1

  return max_diff;
}

// console.log( maxProfit(tesArr) );

module.exports = maxProfit;