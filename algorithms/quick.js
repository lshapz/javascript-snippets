const quick_sort = (array) => {
  
  if (array.length <= 1)
    {return array}
 
  let middle = array[parseInt(array.length/2)]
  array.splice(parseInt(array.length/2), 1)

  let less = []
  let more = []

  array.forEach(item=>{
    if (item <= middle) 
    {
      less.push(item)
    }
    else 
    {
      more.push(item)
    }

  })

  return [...quick_sort(less), middle, ...quick_sort(more)] 

}

quick_sort([ 4, 3, 7, 9, 0, 2, 5, 1, 6, 8 ])
