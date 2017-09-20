var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var a = katzDeliLine.indexOf(name)
  return parseInt(a)+1
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0 ){
    return katzDeliLine[0]
    array.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0 ){
    var array = []
    for (let i=0; katzDeliLine.length > 0; i++){
      array.push( (i+1) + "." + katzDeliLine[i])
    }
    return "The line is currently: " + array
    array.shift()
  } else {
    return "The line is currently empty."
  }
}
