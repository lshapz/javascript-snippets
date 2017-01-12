const merge_sort = (array) => {
  if (array.length <= 1 )
  {return array} 
  let middle = parseInt(array.length / 2)
  let front = array.slice(0, middle)
  let back = array.slice(middle, array.length)
  front = merge_sort(front)
  back = merge_sort(back)

  return merge(front, back)

}

const merge = (first, second) => {
  let sorted = []

  while (first.length > 0 && second.length > 0)
  {
    if (first[0] < second[0])
      {
        sorted.push(first.shift())
      }
    else if (first[0] > second[0]) 
      {
        sorted.push(second.shift())
      }
  }

  while (first.length > 0)
  {
    sorted.push(first.shift())
  }
  while (second.length > 0)
  {
    sorted.push(second.shift())
  }

  return sorted
}
bubble_sort([ 4, 3, 7, 9, 0, 2, 5, 1, 6, 8 ])
