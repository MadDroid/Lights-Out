class Cell {
  constructor(x, y, size) {
    this.x = x * size;
    this.y = y * size;
    this.size = size;
    this.On = false;
    
    this.Left = undefined;
    this.Top = undefined;
    this.Right = undefined;
    this.Bottom = undefined;
  }
  
  Show() {
    if(this.On) {
      fill(0, 0, 255, 100);
    } else {
      fill(255); 
    }
    
    rect(this.x, this.y, this.size, this.size);
  }
  
  Clicked(x, y) {
    if(((x >= this.x) && (x <= this.x + size)) && 
      ((y >= this.y) && (y <= this.y + size))) {
      return true;
    } else {
      return false;
    }
  }
  
  Toggle() {
     this.On = !this.On;
  }
}