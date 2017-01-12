const quick = (array) => {
  
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

  return [...quick(less), middle, ...quick(more)] 

}

quick([ 4, 3, 7, 9, 0, 2, 5, 1, 6, 8 ])
