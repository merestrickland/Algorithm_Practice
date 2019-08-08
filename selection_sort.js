//Selection Sort O(n^2)

//sort an array from smallest to largest
//First, find the index of the smallest number
const findSmallest = (arr) => {
  //stores the smallest value, start with the number at the first index 
  let smallest = arr[0]

  //stores the index of the smallest value 
  let smallest_index = 0

  for (var i = 0; i<arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallest_index = i
    }
  } 
  return smallest_index
}

const selectionSort = (arr) => {
  let newArr = []
  let oldArr = [...arr]
  for (let i = 0; i<oldArr.length; i++) {
    smallest = findSmallest(arr)
    console.log(smallest)
    //do not alter the length of the array
    newArr.push(arr.splice(smallest, 1))
  }
  //this array will need to be flattened at some point
  return newArr
}

array1 = [3, 2, 6, 5, 4]

// findSmallest(array1)
selectionSort(array1)