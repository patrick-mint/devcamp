function strokeText(id, text){
  var c = document.getElementById(id)
  var ctx = c.getContext("2d")
  ctx.font = "30px Arial"
  ctx.strokeText(text,10,50)
}