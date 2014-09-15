// constructor
function Owner (name) {
  this.name = name;
  this.bikes = [];
}

// methods
Owner.prototype = {
  constructor: Owner,
  buildBike: function(name, type, color){
    newBike = new Bike(name, type, color);
    this.bikes.push(newBike);
  },
  rideBike: function(bike, miles){
    this.bikes.forEach(function(object) {
      if (object.name == bike){
        object.takeForARide(miles);
      }
    });
  }
};
