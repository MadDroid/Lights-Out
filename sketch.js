let size;
let grid = [];
let gridSize = 5;

function setup() {
  createCanvas(400, 400);

  size = width / gridSize;

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let cell = new Cell(x, y, size);
      grid.push(cell);
    }
  }

  setNeighbors();
  
  for (let i = 0; i < gridSize; i++) {
    let cell = {};

    do {
      cell = random(grid);
    } while (cell.On !== false);

    cell.On = true;
  }
}

function draw() {
  background(220);

  for (let i = 0; i < grid.length; i++) {
    grid[i].Show();
  }
}

function mouseClicked() {
  for (let i = 0; i < grid.length; i++) {
    if(grid[i].Clicked(mouseX, mouseY)) {
      grid[i].Toggle();
      toggleNeighbors(grid[i]);
    }
  }
}

function toggleNeighbors(cell) {
  //console.log(cell);
  if(cell.Left)
  {
    cell.Left.Toggle();
  }
  if(cell.Top) {
    cell.Top.Toggle();
  }
  if(cell.Right) {
    cell.Right.Toggle();
  }
  if(cell.Bottom) {
    cell.Bottom.Toggle();
  }
}

function setNeighbors() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      
      if ((grid[j].x === grid[i].x - size) && (grid[j].y === grid[i].y)) {
        grid[i].Left = grid[j];
      }
      
      if ((grid[j].x === grid[i].x) && (grid[j].y === grid[i].y - size)) {
        grid[i].Top = grid[j];
      }
      
      if ((grid[j].x === grid[i].x + size) && (grid[j].y === grid[i].y)) {
        grid[i].Right = grid[j];
      }
      
      if ((grid[j].x === grid[i].x) && (grid[j].y === grid[i].y + size)) {
        grid[i].Bottom = grid[j];
      }
    }
  }
}