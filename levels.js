levels = [

  // Room 0
  {
  
    width: 40,
    height: 10,
    hole: [7, 5.1],
    
    trees: [
      [15,3],
      [29,2],
    ],
    
    apples: [
      {
        x: 14,
        y: 4,
        eaten: 0
      },
      {
        x: 29,
        y: 4,
        eaten: 0
      }
    ],
    
    /*stones: [
      [2,9],
      [11,3],
      [20,5],
      [34,9],
    ],*/
    
    cubes: [
      [28, 3],
      [28, 4],
      [28, 5],
      [28, 6],
      [30, 3],
      [30, 4],
      [30, 5],
      [30, 6],
    ],
    
    
    bridges: [
      {
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 4,
        snakelength: 5,
        to: 1,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
    
    
    
  
  },
  
  // Room 1
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"11111"
               +"00000"
               +"00000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01000"
               +"01110"
               +"00010"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"01110"
               +"00110"
               +"00000",
      },

    ],
    
    trees: [
    ],
    
    apples: [
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 3,
        to: 2,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 2
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000000"
               +"011110"
               +"001100"
               +"000000"
               +"000000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01100"
               +"01110"
               +"00010"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01110"
               +"01100"
               +"00100"
               +"00000",
      },

    ],
    
    trees: [
      [5,3],
    ],
    
    apples: [
      {
        x: 4,
        y: 4,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 6,
        to: 3,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 3
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00110"
               +"01110"
               +"00110"
               +"00000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00010"
               +"01110"
               +"01100"
               +"00100",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00011"
               +"00001"
               +"00011"
               +"00000",
      },

    ],
    
    trees: [
      [5,3],
    ],
    
    apples: [
      {
        x: 4,
        y: 4,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      {
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 9,
        to: 4,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 4
  {
  
    width: 40,
    height: 20,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"000010"
               +"000110"
               +"000110"
               +"001110"
               +"000000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"11110"
               +"01111"
               +"00000",
      },
      
      {
        x: 30,
        y: 4,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "101"
               +"011"
               +"010",
      },
      
      {
        x: 10,
        y: 13,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01110"
               +"01110"
               +"01100"
               +"00000",
      },
      
      {
        x: 20,
        y: 13,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"
               +"001100"
               +"001100"
               +"011000"
               +"011000"
               +"000000",
      },
      
      {
        x: 30,
        y: 13,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0001"
               +"0011"
               +"0001"
               +"0001",
      },

    ],
    
    trees: [
      [5,3],
    ],
    
    apples: [
      {
        x: 4,
        y: 4,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    bridges: [
      {
        x: 1,
        y: 5,
        angle: 180,
        open: 1,
        puzzles: 0,
        to: 0
      },
      
      
      /*{
        x: 39,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 9,
        to: 2,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }*/
    ],
  }
 

];

for(i = 0; i < 7; i++){
  levels[0].cubes.push([17,i]);
  levels[0].cubes.push([20,i+3]);
}