const bubble_sort = (array) => {

  let counter = 0

  while (counter < array.length){
    bubble(array)
    counter += 1
  }
  return array 
}

const bubble = (array) => {


  array.forEach((item, index)=>{
    if (item > array[index+1])
      {array[index] = array[index+1]
      array[index+1] = item}
  })

}

bubble_sort([ 4, 3, 7, 9, 0, 2, 5, 1, 6, 8 ])
