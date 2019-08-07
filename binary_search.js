// const arr = [1,2,3,4,5,6]
// var secretNum = 5
// //find the lowest number
// var low = arr[0]
// //find the highest number
// var high = arr[arr.length-1]
// //find the mid number by adding the low and high, dividing it by 2, and then rounding it to the closest low integer using Math.floor(# to round down)
// var mid = Math.floor((low+high) / 2 )

// //first guess
// var guess1 = arr[mid]
// //if this guess, which is currently 3, is too low (it is), update var low accordingly:

// if (guess1 < secretNum) {
//   var low = mid+1
// }

// console.log(low)


const binary_search = (list, item) => {
  var low = 0
  var high = list.length-1

  while (low <= high) {
    var mid = Math.floor((low + high) /2)
    // console.log(mid)

    var guess = list[mid]
    // console.log(guess)
    if (guess === item) {
      return mid
    }
    else if (guess > item) {
      var high = mid -1

      //the new high is now the mid-1, because we know that if the guess is too high, everything above it is also too high
    }
    else if (guess < item) {
      // console.log('huh')
      var low = mid + 1
      // console.log(low)
      //the new low is now the mid+1, because we know that if the guess is too low, everything below it is also too low
    }
    else {
      return null
    }
  }
}

const my_list = [1, 3, 5, 7, 9]

//the following should return 1, which is the position index of the number 3
binary_search(my_list, 3)
