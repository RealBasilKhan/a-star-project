var cols = 5;
var rows = 5;
var grid = new Array(cols);

var openList = [];
var closedSet = [];
var start;
var end;
var w, h;

function Spot() {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = function () {
    fill(255);
    rect(this.x * w, this.y * h, w, h);
  };
}

function setup() {
  createCanvas(400, 400);
  console.log("A*");

  w = width / cols;
  h = height / rows;

  // Making a 2D array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  start = grid[0][0];
  end = grid[cols - 1][rows - 1];

  openSet.push(start);

  console.log(grid);
}

function draw() {
  if (openSet.length > 0) {
    // We can keep going
  } else {
    // No Solution
  }

  background(0);

  for (var i = 0; i < cols; i++) {
    for (var i = 0; i < cols; i++) {
      grid[i][j].show();
    }
  }
}
