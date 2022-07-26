let sing = function () {
  let result = []
  for (let i = 99; i > -1; i--) {
    let y = i - 1
    if (i >= 2) {
      result.push(
        `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${y} bottles of beer on the wall.`
      )
    }
    if (i === 1) {
      result.push(
        `${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`
      )
    } else if (i === 0) {
      result.push(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
      )
    }
  }
  console.log(result)
}

sing()
