// World 2

// Room 2-1 (13)
// Sizes 3,4,5
// Puzzles 1-3 (61-63)
levels.push(
  {
  
    width: 50,
    height: 10,
    hole: false,


    puzzles: [

      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00002"
               +"12001"
               +"00001"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00200"
               +"01110"
               +"00020"
               +"00000",
      },
      
      {
        x: 40,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00010"
               +"21210"
               +"00000"
               +"00000",
      },
    ],

    trees: [
      [10,3],
    ],
    
    apples: [
      {
        x: 10,
        y: 5,
        eaten: 0
      },
      {
        x: 11,
        y: 6,
        eaten: 0
      }
    ],
    
    cubes: [
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
        x: 49,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 63,
        to: 14,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  
  }
);
  
  
// Room 2-2 (14)
// Size 6
// Puzzles 4-6 (64-66)
levels.push(
  {
  
    width: 10,
    height: 40,
    hole: false,
    
    puzzles: [

      {
        x: 3,
        y: 20,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00000"
               +"01210"
               +"01120"
               +"00000",
      },
      
      {
        x: 3,
        y: 30,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "2000"
               +"1120"
               +"0100"
               +"0100",
      },
      
      {
        x: 3,
        y: 10,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0200"
               +"0110"
               +"0112"
               +"0000",
      },

    ],
    
    trees: [
      [5,3],
    ],
    
    apples: [
      {
        x: 3,
        y: 3,
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
        x: 9,
        y: 35,
        angle: 0,
        open: 0,
        puzzles: 66,
        to: 15,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);

// Room 2-3 (15)
// Size 7
// Puzzles 7-10 (67-70)
levels.push(
  {
    width: 50,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 11,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01020"
               +"01110"
               +"02100"
               +"00000",
      },
      
      {
        x: 20,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"01120"
               +"02110"
               +"00100"
               +"00000",
      },
      
      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "00000"
               +"00002"
               +"00000"
               +"00121"
               +"00000",
      },
      
      {
        x: 40,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "01220"
               +"01010"
               +"00000"
               +"00000"
               +"00000",
      },

    ],
    
    trees: [
      [7,3],
    ],
    
    apples: [
      {
        x: 6,
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
        x: 49,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 70,
        to: 16,
        to_x: -4,
        to_y: 5,
        to_z: 0
      }
    ],
  }
),

// Room 2-4 (16)
// Size 8
// Puzzles 11-13 (71-73)
levels.push(
  {
  
    width: 40,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 4,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "111"+
                "112"+
                "120",
      },
      
      {
        x: 17,
        y: 2,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "000100"+
                "002100"+
                "001110"+
                "021000"+
                "000000",
      },
      
      {
        x: 27,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "21012"+
                "10000"+
                "00000"+
                "00000"+
                "00000",
      },

    ],
    
    trees: [
      [5,8],
    ],
    
    apples: [
      {
        x: 4,
        y: 9,
        eaten: 0
      }
    ],
    
    stones: [
    ],
    
    cubes: [
    
    ],
    
    bridges: [
      {
        x: 1,
        y: 4,
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
        puzzles: 73,
        to: 17,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);

// Room 2-5 (17)
// Size 9
// Puzzles 14-18 (74-78)
levels.push(
  {
  
    width: 12,
    height: 55,
    hole: false,
    
    puzzles: [
      
      {
        x: 4,
        y: 10,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0000"+
                "1110"+
                "0210"+
                "1112",
      },
      
      {
        x: 4,
        y: 20,
        size: 3,
        wrap: 0,
        wall: "",
        ground: "210"+
                "100"+
                "002",
      },
      
      {
        x: 3,
        y: 30,
        size: 5,
        wrap: 0,
        wall:   "00000"+
                "00000"+
                "00000"+
                "00010"+
                "12121",
                
        ground: "",
      },
      
      {
        x: 4,
        y: 40,
        wrap: 0,
        depth: 1,
        size: 3,
        wall:   "020"+
                "121"+
                "101",
                
        ground: "",
      },
      
      {
        x: 3,
        y: 48,
        wrap: 0,
        depth: 1,
        size: 4,
        wall:   "",
        ground: "3112"+
                "0001"+
                "1001"+
                "2003",
      }

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [

    ],
    
    apples: [
      {
        x: 8,
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
        x: 11,
        y: 49,
        angle: 0,
        open: 0,
        puzzles: 78,
        to: 18,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);
 
// Room 2-6 (18)
// Size 10
// Puzzles 19-23 (79-83)
levels.push(
{
    width: 60,
    height: 11,
    hole: false,
    
    puzzles: [

      {
        x: 20,
        y: 5,
        wrap: 0,
        depth: 1,
        size: 3,
        wall:   "111"+
                "202"+
                "101",
                
        ground: "",
      },
      
      {
        x: 30,
        y: 4,
        wrap: 0,
        size: 3,
        wall:   "111"+
                "120"+
                "111",
                
        ground: "111"+
                "021"+
                "111",
      },
      
      
      {
        x: 10,
        y: 4,
        wrap: 0,
        size: 4,
        wall: "",
                
        ground: "0312"+
                "0123"+
                "0110"+
                "0110",
      },
      
      
      {
        x: 40,
        y: 4,
        wrap: 0,
        depth: 1,
        size: 4,
        wall:   "3000"+
                "1320"+
                "1012"+
                "1110",
                
        ground: "",
      },
      
      {
        x: 50,
        y: 4,
        wrap: 0,
        size: 3,
        wall:   "130"+
                "212"+
                "111",
                
        ground: "111"+
                "110"+
                "300",
      },
     
    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [
      [43, 4, 0]
    ],
    
    apples: [
      {
        x: 8,
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
        x: 59,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 83,
        to: 19,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  }
);

// Room 2-7 (19)
// Size 11
// Puzzles 24-27 (84-87)
levels.push(
{
  width: 50,
  height: 11,
  hole: false,
  
  puzzles: [

    {
      x: 20,
      y: 5,
      size: 4,
      depth: 1,
      wrap: 0,
      wall: "2011"+
            "1032"+
            "3110"+
            "1100",
      ground: "",
    },

    
    {
      x: 10,
      y: 5,
      size: 4,
      depth: 1,
      wrap: 0,
      wall: "0000"+
            "0100"+
            "1120"+
            "2111",
      ground: "",
    },    
    
    {
      x: 30,
      y: 4,
      size: 3,
      wrap: 0,
      wall: "",
      ground: "021"+
              "313"+
              "121",
    },
    
    {
      x: 40,
      y: 5,
      size: 4,
      depth: 1,
      wrap: 0,
      wall: "3010"+
            "2211"+
            "0111"+
            "3100",
      ground: "",
    },

  ],
  
  trees: [
    [6,3],
  ],
  
  cubes: [
    //[21, 3, 0]
  ],
  
  apples: [
    {
      x: 8,
      y: 8,
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
      x: 49,
      y: 5,
      angle: 0,
      open: 0,
      puzzles: 87,
      to: 20,
      to_x: -3,
      to_y: 5,
      to_z: 0
    }
  ],
}
);

// Room 2-8 (20)
// Size 12
// Puzzles 28-32 (88-92)
levels.push(
{
  width: 30,
  height: 20,
  hole: false,
  
  puzzles: [

    {
      x: 13,
      y: 13,
      size: 4,
      depth: 1,
      wrap: 0,
      wall: "1111"+
            "2020"+
            "1111"+
            "0111",
      ground: "",
    },
    
    {
      x: 4,
      y: 13,
      size: 3,
      wrap: 0,
      wall: "111"+
            "213"+
            "111",
            
      ground: "131"+
              "111"+
              "121",
    },
    
    
    {
      x: 10,
      y: 4,
      size: 4,
      wrap: 0,
      wall: "",
      ground: "1111"+
              "0213"+
              "0012"+
              "3111",
    },

    /*
    {
      x: 22,
      y: 11,
      size: 6,
      wrap: 0,
      wall: "",
      ground: "000000"+
              "000131"+
              "000321"+
              "000201"+
              "000111"+
              "000000",
    }, */ 
    
    {
      x: 22,
      y: 5,
      size: 5,
      depth: 1,
      wrap: 0,
      ground: "",
      wall:   "00000"+
              "00210"+
              "13110"+
              "11112"+
              "00031",
    },

  ],
  
  trees: [
    [6,2],
  ],
  
  cubes: [
    [27, 5, 0],
    [27, 6, 0],
    [27, 7, 0],
    [26, 7, 0],
    [25, 7, 0],
    [24, 7, 0],
    [24, 6, 0],
    [24, 5, 0],
    [23, 5, 0],
    
    [28, 11, 0],
    [29, 11, 0],
    [28, 15, 0],
    [29, 15, 0],
    [29, 14, 0],
    [29, 13, 0],
    [29, 12, 0],
  ],
  
  apples: [
    {
      x: 8,
      y: 4,
      eaten: 0
    },

    {
      x: 6,
      y: 5,
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
      x: 29,
      y: 5,
      angle: 0,
      open: 0,
      puzzles: 92,
      to: 21,
      to_x: -3,
      to_y: 5,
      to_z: 0
    }
  ],
}
);

for(i = 0; i < 10; i++){
  levels[20].cubes.push([19,i]);
}

/*
  {
  
    width: 30,
    height: 20,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0011000"+
                "0011100"+
                "0011100"+
                "0011100"+
                "0011000"+
                "0000000",
      },
      
      {
        x: 4,
        y: 13,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "011000"+
                "011100"+
                "011110"+
                "011110"+
                "000000",
      },
      
      
      {
        x: 13,
        y: 13,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "001110"+
                "011110"+
                "011010"+
                "001110"+
                "000000",
      },

      {
        x: 21,
        y: 11,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0011100"+
                "0010100"+
                "0011100"+
                "0010100"+
                "0011100"+
                "0000000",
      },  
      
      {
        x: 22,
        y: 5,
        size: 4,
        wrap: 0,
        ground: "",
        wall:   "0110"+
                "1111"+
                "1111"+
                "1110",
      },    
      
      
      

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [

    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },

      {
        x: 6,
        y: 5,
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
        x: 29,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 37,
        to: 22,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 8
  // Size 15
  // Puzzles 38-43
  {
  
    width: 70,
    height: 10,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0000000"+
                "0011110"+
                "0110110"+
                "0111100"+
                "0111000"+
                "0000000",
      },
      
      
      {
        x: 20,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0000110"+
                "0111110"+
                "0101110"+
                "0111000"+
                "0010000"+
                "0000000",
      },

      {
        x: 30,
        y: 3,
        size: 5,
        wrap: 0,
        ground: "",
        wall:
                "11111"+
                "11101"+
                "01001"+
                "01111"+
                "00000",
      },

      {
        x: 40,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1101"+
                "1111"+
                "0110"+
                "1110",
      },


      {
        x: 50,
        y: 2,
        size: 7,
        wrap: 0,
        wall: "",
        ground: "0000000"+
                "0001110"+
                "0011110"+
                "0011100"+
                "0111000"+
                "0011000"+
                "0000000",
      },
      
      {
        x: 62,
        y: 3,
        size: 3,
        wrap: 0,
        wall: "",
        ground:  "010"+
                "111"+
                "010",
      },    
      
      
      

    ],
    
    trees: [
      [6,2],
    ],
    
    cubes: [
      [13, 5],
      [22, 5],
      [40, 5],
      [42, 3],
      [43, 5],
      [43, 6],

    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },

      {
        x: 6,
        y: 5,
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
        x: 69,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 43,
        to: 23,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },

  
  // Room 9
  // Size 16
  // Puzzles 44-49
  {
  
    width: 10,
    height: 70,
    hole: false,
    
    puzzles: [

      {
        x: 3,
        y: 10,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "01100"+
                "11111"+
                "11101"+
                "01101"+
                "11000",
      },
      {
        x: 3,
        y: 20,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "00010"+
              "11110"+
              "11111"+
              "01111"+
              "00110",
      },
      
      {
        x: 3,
        y: 30,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1000"+
                "1110"+
                "0110"+
                "1011",
      },
      
      {
        x: 3,
        y: 40,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "01100"+
              "01101"+
              "11111"+
              "10010"+
              "11110",
      },
      
      
      {
        x: 3,
        y: 50,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "0101"+
                "1101"+
                "0111"+
                "0101",
      },
      
      
      
      {
        x: 3,
        y: 60,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "01000"+
              "11110"+
              "10111"+
              "11101"+
              "00111",
      },
      
      

    ],
    
    trees: [
      [4,2],
    ],
    
    cubes: [

    ],
    
    apples: [
      {
        x: 8,
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
        x: 9,
        y: 65,
        angle: 0,
        open: 0,
        puzzles: 49,
        to: 24,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  // Room 10
  // Size 17
  // Puzzles 50-55
  {
  
    width: 70,
    height: 11,
    hole: false,
    
    puzzles: [

      
      {
        x: 10,
        y: 3,
        size: 5,
        wrap: 0,
        wall: "",
        ground: "01100"+
                "11110"+
                "11111"+
                "01101"+
                "00111",
      },
      
      
      {
        x: 20,
        y: 3,
        size: 6,
        wrap: 0,
        ground: "",
        wall: "111101"+
              "101101"+
              "111111"+
              "001100"+
              "000000"+
              "000000",
      },
      
      
      {
        x: 30,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1001"+
                "1111"+
                "1001"+
                "1011",
      },
     
      {
        x: 40,
        y: 3,
        size: 7,
        wrap: 0,
        ground: "",
        wall: "0000000"+
              "0000000"+
              "0000000"+
              "0000000"+
              "0000000"+
              "1111111"+
              "1010101",
      },
      
      {
        x: 50,
        y: 4,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1111"+
                "1101"+
                "1011"+
                "1111",
      },
      
      
      {
        x: 60,
        y: 3,
        size: 5,
        wrap: 0,
        ground: "",
        wall: "00000"+
              "00000"+
              "00010"+
              "01111"+
              "11001",
      },
     
    ],
    
    trees: [
      [4,2],
    ],
    
    cubes: [
      [13, 6],
    ],
    
    apples: [
      {
        x: 8,
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
        x: 69,
        y: 5,
        angle: 0,
        open: 0,
        puzzles: 55,
        to: 25,
        to_x: -3,
        to_y: 5,
        to_z: 0
      }
    ],
  },
  
  
  // Room 11
  // Size 20
  // Puzzles 56-
  {
  
    width: 55,
    height: 11,
    hole: false,
    
    puzzles: [

      {
        x: 10,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "000000"+
                "000111"+
                "111101"+
                "101111"+
                "111010"+
                "001110",
      },
      
      {
        x: 20,
        y: 3,
        size: 6,
        wrap: 0,
        wall: "",
        ground: "011000"+
                "111111"+
                "101011"+
                "101110"+
                "111100"+
                "000000",
      },
      
      {
        x: 30,
        y: 3,
        size: 4,
        wrap: 0,
        wall: "",
        ground: "1011"+
                "0110"+
                "1101"+
                "1011",
      },
      


      {
          x: 40,
          y: 3,
          size: 5,
          wrap: 0,
          wall:  "01111"+
                 "01211"+
                 "01111"+
                 "00000"+
                 "00000",

          ground: "01111"+
                  "00000"+
                  "01211"+
                  "01111"+
                  "00000",
      },
      
      
      
      

    ],
    
    trees: [
      [4,2],
    ],
    
    cubes: [
      [29, 4],
      [30, 4],
      [31, 2],
      [31, 6],
      [33, 4],
    ],
    
    apples: [
      {
        x: 8,
        y: 4,
        eaten: 0
      },
      
      {
        x: 9,
        y: 3,
        eaten: 0
      },
      
      {
        x: 5,
        y: 2,
        eaten: 0
      },
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
    ],
  },*/