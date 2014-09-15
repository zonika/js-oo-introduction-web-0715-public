// constructor
function Owner (name) {
  this.name = name;
  this.bikes = [];// figure this out
}

// methods
Owner.prototype = {
  constructor: Owner,
  buildBike: function(name, type, color){
    newBike = new Bike(name, type, color);
    this.bikes << newBike;
  },
  rideBike: function(bike){
    //this.bikes
  }
};