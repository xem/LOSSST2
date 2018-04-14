button_continue.onclick = function(){
  init();
  try{
    music.play()
  }
  catch(e){};
  menu.remove();
  start();
  render();
  lock = 1;
  setTimeout('lock = 0', 1500);
}

button_newgame.onclick = function(){
  localStorage.clear();
  currentroom = localStorage["currentroom"] = 0;
  localStorage.snakelength = 3;
  localStorage.totalpuzzles = 0;
  init();
  menu.remove();
  start();
  render();
  lock = 1;
  setTimeout('lock = 0', 1500);
}

start_room = function(currentroom, snakelength, totalpuzzles){
  localStorage.clear();
  setTimeout(function(){
    localStorage.currentroom = currentroom;
    localStorage.snakelength = snakelength;
    localStorage.totalpuzzles = totalpuzzles;
    init();
    menu.remove();
    start();
    render();
    lock = 1;
  },200);
}


button_choose.onclick = function(){
  menu.innerHTML = `
<button onclick="start_room(0,3,0)">1-1</button>
<button onclick="start_room(1, 5, 3)">1-2</button>
<button onclick="start_room(2, 6, 6)">1-3</button>
<button onclick="start_room(3, 7, 10)">1-4</button>
<button onclick="start_room(4, 8, 17)">1-5</button>
<button onclick="start_room(5, 9, 21)">1-6</button>
<button onclick="start_room(6, 10 25)">1-7</button>
<button onclick="start_room(7, 11,32)">1-8</button>
<button onclick="start_room(8, 13,37)">1-9</button>
<button onclick="start_room(9, 15,43)">1-10</button>
<button onclick="start_room(10,16,49)">1-11</button>
<button onclick="start_room(11,17,55)">1-12</button>
<button onclick="start_room(12,20,60)">BOSS</button>
<!--button onclick="localStorage.clear(); setTimeout('localStorage.currentroom = 0; localStorage.snakelength = 3; localStorage.totalpuzzles = 0; location = 0',200)">world 2</button-->
  `;
}