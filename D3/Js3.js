/* ------------Assignment 1-----------*/

function changeBackgroundColor()
  {
    getRandomColor()
  }

  function getRandomColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
 }
