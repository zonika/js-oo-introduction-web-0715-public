// constructor
function Bike (name, type, color) {
  this.name = name;
  this.bikeType = type;
  this.frameColor = color;
  this.condition = 'ready to go!';
}

// methods
Bike.prototype = {
  constructor: Bike,
  wheels: 2,
  takeForARide: function(miles){
    if (miles > 20) {
      this.condition = 'needs a tune up';
    }
  },
  tuneUp: function(){
    if (this.condition == 'needs a tune up'){
      this.condition = 'ready to go!';
    }
  }
};