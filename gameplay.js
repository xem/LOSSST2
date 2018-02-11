﻿// When the mouse/finger moves over an element
mousemove = (el) => {
  
  // Nothing happens is the element doesn't exist or the controls are locked
  if(!el || lock) return;
    
  // Save current head position and angle
  pos = [snakepos[0][0], snakepos[0][1], snakepos[0][2]];
  angle = snakeangles[0];
  
  // Turn right
  if(el.id == "control_r"){
    
    // Update head x
    pos[0]++;
    
    // Update angle
    
    // From top
    if(angle % 360 == 180 || angle % 360 == -180){
      angle += 90;
    }
    
    // From bottom
    else if(angle % 360 == 0){
      angle -= 90;
    }
    
    // Save the current move
    move_r = 1;
    move_b = move_f = move_l = 0;
  }
  
  // Turn left
  else if(el.id == "control_l"){
    
    // Update head x
    pos[0]--;
    
    // Update angle
    
    // From top
    if(angle % 360 == 180 || angle % 360 == -180){
      angle -= 90;
    }
    
    // From bottom
    else if(angle % 360 == 0){
      angle += 90;
    }
    
    // Save the current move
    move_l = 1;
    move_b = move_f = move_r = 0;
  }
  
  // Turn top
  else if(el.id == "control_f"){
    
    // Update head y
    pos[1]--;
    
    // Update angle
    
    // From left
    if(angle % 360 == 90 || angle % 360 == -270){
      angle += 90;
    }
    
    // From right
    else if(angle % 360 == -90 || angle % 360 == 270){
      angle -= 90;
    }
    
    // Save the current move
    move_f = 1;
    move_b = move_l = move_r = 0;
  }
  
  // Turn bottom
  else if(el.id == "control_b"){
    
    // Update head y
    pos[1]++;
    
    // Update angle
    
    // From right
    if(angle % 360 == -90 || angle % 360 == 270){
      angle += 90;
    }
    
    // From left
    else if(angle % 360 == 90 || angle % 360 == -270){
      angle -= 90;
    }
    
    // Save the current move
    move_b = 1;
    move_f = move_l = move_r = 0;
  }
  
  // If no control is pressed, cancel all moves
  else {
    move_b = move_f = move_l = move_r = 0;
    return;
  }
  
  // Reset collision
  collision = 0;
  
  // Check collisions with snake
  for(i = 0; i < snakelength - 1; i++){
    if(snakepos[i][0] == pos[0] && snakepos[i][1] == pos[1] && snakepos[i][2] == pos[2]){
      collision = i;
    }
  }
  
  // Check collisions with trees 
  for(i in levels[currentroom].trees){
    tree = levels[currentroom].trees[i];
    if(pos[0] == tree[0] && pos[1] == tree[1]){
        collision = "tree";
    };
  }
  
  // Check collisions with rock cubes 
  for(i in levels[currentroom].cubes){
    cube = levels[currentroom].cubes[i];
    if(pos[0] == cube[0] && pos[1] == cube[1]){
        collision = "cube";
    };
  }
  
  // Collisions with room bounds
  if(
       pos[0] < 0
    || pos[0] >= levels[currentroom].width
    || pos[1] < 0
    || pos[1] >= levels[currentroom].height
  ){
    collision = "bounds";
  }
  
  // Allow going on bridges
  for(i in levels[currentroom].bridges){
    bridge = levels[currentroom].bridges[i];
    if(bridge.open && bridge.angle == 0){
      if(pos[0] >= bridge.x+1 && pos[1] > bridge.y && pos[1] <= bridge.y + 3){
        collision = 0;
        inbounds[0] = 1;
        lock = 1;
        scene.style.transform = `translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 30}vmin) translateZ(20vmin) rotateX(10deg)`;
        angle = snakeangles[0];
        if(angle % 360 == 180 || angle % 360 == -180){
          angle += 90;
        }
        
        else if(angle % 360 == 0){
          angle -= 90;
        }
        
        // Autopilot
        autopilot = () => {
          snakeangles.unshift(angle);
          snakepos.unshift([snakepos[0][0] + 1, snakepos[0][1], snakepos[0][2]]);
          inbounds.unshift(1);
          movesnake(0);
          lock = 1;
          animation = 1;
        };
        autopilot();
        interval = setInterval(autopilot, 150);
        
        // Change room
        setTimeout(()=>{
          puzzling = 1;
          scene.innerHTML = "";
          scene.style.transition = "0s";
          currentroom = bridge.to;
          snakepos = [];
          snakeangle = [];
          inbounds = [];
          for(j = bridge.to_x - snakelength + 3; j < bridge.to_x + 3; j++){
            snakepos.unshift([j, bridge.to_y, bridge.to_z]);
            snakeangle.unshift(90);
            inbounds.unshift(1);
          }
          scene.style.transform = `translateX(${-bridge.to_x * 10}vmin) translateY(${-bridge.to_y * 10}vmin)`;
          inbounds[0] = 0;
          render();
          movesnake();
        }, snakelength * 150);
        
        // Stop autopilot
        setTimeout(() => {
          clearInterval(interval);
          lock = 0;
          animation = 0;
          scene.style.transition = "";
          inbounds = [0,0,1,1,1,1,1,1,1];
        }, snakelength * 150 + 3 * 150);
        return;
      }
    }
  }
  
  // Decrement the "going back" counter
  if(back > 0){
    back--;
  }
  
  goingback = 0;
  
  // If collision with cube 1, go back and increment counter 
  if(collision == 1){
    snakepos.shift();
    snakeangles.shift();
    inbounds.shift();
    back++;
    back++;
    goingback = 1;
  }
  
  // If no collision happens, move (add the new head position/angle at the beginning of snakepos/snakeangle)
  else if(!collision){
    snakepos.unshift(pos);
    snakeangles.unshift(angle);
  }
  
  // Do all the animations
  movesnake();
  
  // Lock the controls for 150ms (or 300 if we're in a puzzle)
  lock = 1;
  
  if(!animation){
    setTimeout(()=> {
      lock = 0
    }, 180);
  }
}

// If mouse is down, call mousemove every 50ms to continue current move if possible
setInterval(() => {
  //L("m"+mousedown);
  if(mousedown){
    mousemove(cell);
  }
}, 100);

// Move snake and animate all the elements that move at each snake move
movesnake = (movecamera = 1) => {
  
  var i, cell;
  
  // Clear current puzzle
  clearpuzzle();
  
  // Reset currentpuzzle, inbounds, puzzling flags
  if(!puzzling){
    currentpuzzle = null;
  }
  puzzling = 0;
    
  // For each cube, update inbounds status, currentpuzzle (determined by the snake head) and puzzling
  inbounds0 = 0;
  for(i in levels[currentroom].puzzles){
    puzzle = levels[currentroom].puzzles[i];
    if(
      snakepos[0][0] >= puzzle.x && snakepos[0][0] < puzzle.x + puzzle.size
      && snakepos[0][1] >= puzzle.y && snakepos[0][1] < puzzle.y + puzzle.size
    ){
      inbounds0 = 1;
      currentpuzzle = puzzle;
      if(!puzzle.solved){
        puzzling = 1;
      }
    }
  }
  
  if(!goingback){
    inbounds.unshift(inbounds0);
  }
  
  // Stay zoomed if one of the first 4 cubes after the head is in the puzzle
  if(
    (!currentpuzzle || !currentpuzzle.solved)
    && (inbounds[0] || inbounds.slice(1, 4).includes(1))
  ){
    puzzling = 1;
  }
  else {
    puzzling = 0;
  }
  
  // Check if each cube is in bounds, if yes, color the cell in blue or red
  for(i = 0; i < snakelength; i++){
    window["snakecubemove" + i].style.transform = "translateX(" + (snakepos[i][0] * 10 + 1) + "vmin) translateY(" + (snakepos[i][1] * 10 + 1) + "vmin) translateZ(" + (snakepos[i][2] * 10 + .5) + "vmin)";
    
    //if((!sd && !mobile) || ((sd || mobile) && i == 0)){
      window["snakecube" + i].style.transform = "rotateZ(" + (snakeangles[i]) + "deg)";
    //}
    
    if(!mobile){
      if(snakepos[i][2] == 0){
        window["snakegrass" + i].style.backgroundPosition = -(snakepos[i][0] * 10 + (snakepos[i][1] * 100)) + "vmin bottom";
        if(inbounds[i] || puzzling){
          window["snakegrass" + i].style.opacity = "0";
        }
        else {
          setTimeout('window["snakegrass'+i+'"].style.opacity = 1', 150)
        }
      }
    }
  }
  
  // Set the trail after the snake (except if it's going back)
  if(!mobile && !sd){
    if(!back){
      for(i = 0; i < 4; i++){
        if(snakepos[snakelength + i - 1] && snakepos[snakelength + i - 1][2] == 0){
          window["snaketrail" + i].style.transform = "translateX(" + (snakepos[snakelength + i - 1][0] * 10) + "vmin) translateY(" + (snakepos[snakelength + i - 1][1] * 10) + "vmin)";
        }
        else {
          window["snaketrail" + i].style.transform = "scale(.01)";
        }
      }
    }
    else if(back > 3){
      for(i = 0; i < 4; i++){
        if(snakepos[i-1] && snakepos[i-1][2] == 0){
          window["snaketrail" + i].style.transform = "translateX(" + (snakepos[i-1][0] * 10) + "vmin) translateY(" + (snakepos[i-1][1] * 10) + "vmin) scale(.01)";
        }
        else {
          window["snaketrail" + i].style.transform = "scale(.01)";
        }
      }
    }
  }
  
  if(movecamera){
    
    // If the snake moves on X axis, rotate the trees to face the camera
    if(!mobile && !sd){
      for(i in levels[currentroom].trees){
        tree = levels[currentroom].trees[i];
        if(!inbounds[0] && !puzzling){
          window["treecontent" + i].style.transform = `rotateY(${Math.sin((snakepos[i][0] - tree[0]) / 30)}rad)`;
        }
      }
    }
    
    // Zoom when inbounds (in a puzzle)
    if(puzzling && currentpuzzle) {
      b.classList.add("inbounds");
      scene.style.transition = "1s";
      scene.style.transform = "rotateX(10deg) translateX(" + (-(currentpuzzle.x + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateY(" + (-(currentpuzzle.y + currentpuzzle.size / 2) * 10 + 1) + "vmin) translateZ(" + ((currentpuzzle.size * .6) * 10) + "vmin)";
      if(!mobile && !sd){
        b.style.backgroundPositionT = "-200vmin";
      }
      checkpuzzle();
    }
    
    // Dezoom when out of a puzzle
    else if(!inbounds[0] || (currentpuzzle && currentpuzzle.solved)){
      b.classList.remove("inbounds");
      if(!mobile && !sd){
        b.style.backgroundPositionY = "center";
      }
      setTimeout('scene.style.transition = ""', 1000);
      scene.style.transform = "rotateX(30deg) translateX(" + (-snakepos[0][0] * 10 + 1) + "vmin) translateY(" + (-snakepos[0][1] * 10 + 1) + "vmin) translateZ(40vmin)";
    }
  }
  
  // Close bridge 0 when we finish entering a room
  if(!lock && !inbounds[snakelength] && bridge0 && bridge0.classList.contains("open") && bridge0.classList.contains("angle180")){
    bridge0.classList.remove("open");
    bridge0.open = 0;
  }
  
  // Eat an apple
  for(i in levels[currentroom].apples){
    apple = levels[currentroom].apples[i];
    if(!apple.eaten && snakepos[0][0] == apple.x && snakepos[0][1] == apple.y){
      apple.eaten = 1;
      window["apple" + i].classList.add("eaten");
      window["appleshadow" + i].classList.add("eaten");
      snake.insertAdjacentHTML("beforeEnd",
`<div id="snakecubemove${snakelength}" class="snakecubemove" style="transform:translateX(${snakepos[snakelength][0]*10+.5}vmin) translateY(${snakepos[snakelength][1]*10+.5}vmin) translateZ(${snakepos[snakelength][2]*10+.6}vmin)">
  <div class="snakeshadow"></div>
  <div id="snakegrass${snakelength}" class="snakegrass"></div>
  <div id="snakecube${snakelength}" class="cube snakecube bright">
    <div class="u"></div>
    <div class="f"></div>
    <div class="r"></div>
    <div class="l"></div>
    <div class="b"></div>
  </div>
</div>`);
      setTimeout('window["snakecube"+'+snakelength+'].classList.remove("bright")', 100);
      snakelength++;
      
      for(j in levels[currentroom].bridges){
        bridge = levels[currentroom].bridges[j];
        if(!bridge.open && (totalpuzzles >= bridge.puzzles || snakelength >= bridge.snakelength)){
          lock = 1;
          animation = 1;
          scene.style.transform = `translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 30}vmin) rotateX(10deg)`;
          window["bridge" + j].classList.add("open");
          bridge.open = 1;
          localStorage["bridge" + currentroom + "-" + j] = 1;
          setTimeout(()=>{
            lock = 0;
            animation = 0;
            movesnake();
          },2500);
          break;
        }
        break;
      }
    }
  }
  
  
  
  
}

// Clear a puzzle (remove blue and red tiles)
clearpuzzle = () => {
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      window[`cell${currentroom}-${currentpuzzle.index}-${j}`].classList.remove("red","blue");
    }
  }
}

// Check if a puzzle is solved
checkpuzzle = () => {

  // Color cells in red/blue
  if(!currentpuzzle.solved){
    for(i = 0; i < snakelength; i++){
      if(snakepos[i][0] >= currentpuzzle.x && snakepos[i][0] < currentpuzzle.x + currentpuzzle.size){
        
        cell = window[`cell${currentroom}-${currentpuzzle.index}-${(snakepos[i][1] - currentpuzzle.y) * currentpuzzle.size + (snakepos[i][0] - currentpuzzle.x)}`];
        if(cell){
          if(cell.classList.contains("black")){
            cell.classList.add("blue");
          }
          else {
            cell.classList.add("red");
          }
        }
      }
    }
  }
  
  // Check solution
  solved = 1;
  if(currentpuzzle){
    for(j in currentpuzzle.ground){
      cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
      if(cell && (cell.classList.contains("red") || (cell.classList.contains("black") && !cell.classList.contains("blue")))){
        solved = 0;
        break;
      }
    }
  
    // Color in green, save
    if(solved){
      currentpuzzle.solved = 1;
      for(j in currentpuzzle.ground){
        cell = window[`cell${currentroom}-${currentpuzzle.index}-${j}`];
        if(cell.classList.contains("black")){
          cell.classList.add("green");
        }
      }
      localStorage[currentroom+"-"+currentpuzzle.index] = 1;
      localStorage["totalpuzzles"] = totalpuzzles = +localStorage["totalpuzzles"] + 1;
      
      for(i in levels[currentroom].bridges){
        bridge = levels[currentroom].bridges[i];
        if(!bridge.open && (totalpuzzles >= bridge.puzzles || snakelength >= bridge.snakelength)){
          lock = 1;
          animation = 1;
          scene.style.transform = `translateX(${-bridge.x * 10}vmin) translateY(${-bridge.y * 10 - 30}vmin) rotateX(30deg)`;
          window["bridge" + i].classList.add("open");
          bridge.open = 1;
          localStorage["bridge" + currentroom + "-" + i] = 1;
          setTimeout(()=>{
            lock = 0;
            animation = 0;
            movesnake();
          },2500);
        }
      }
    }
  }
}