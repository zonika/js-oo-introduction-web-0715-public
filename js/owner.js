function Owner(name){
  // attributes go here...
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name,type,color){
  // code goes here...
  b = new Bike(name,type,color);
  this.bikes.push(b);
};

Owner.prototype.rideBike = function(bikeName,miles){
  this.bikes.forEach(function(bike) {
    if (bike.name === bikeName) {
      bike.takeForARide(miles);
    }
  });
};
