
  function addZero(i) {
  if (i<10) { i = "0" + i
  }
  return i;
  }
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" +s;
  document.getElementById("demo").innerHTML = time;
 setTimeout ( Timedisplay(),1000);
