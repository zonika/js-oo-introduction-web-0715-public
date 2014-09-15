describe("Owner", function() {

  var mitch;
  beforeEach(function() {
    mitch = new Owner("Mitch");
    fabrizio = new Bike("Fabrizio", "roadbike", "black");
    george = new Bike("George", "mountain bike", "blue");
    mitch.bikes.push(fabrizio, george);
  });

  it("should have a name", function() {
    expect(mitch.name).toBe("Mitch");
  });

  it("should own several bikes", function() {
    expect(mitch.bikes.length).toBe(2);
  });

  it("should be able to build a new bike", function() {
    mitch.buildBike("Reginald", "roadbike", "orange");
    expect(mitch.bikes[mitch.bikes.length-1].name).toBe("Reginald")
  });

  it("should be able to go on a bike ride", function() {
    mitch.rideBike("Fabrizio", 100);
    expect(fabrizio.condition).toBe("needs a tune up");
  });

});

describe("Bike", function() {

  var fabrizio, george;
  beforeEach(function() {
    fabrizio = new Bike("Fabrizio", "roadbike", "red");
    george = new Bike("George", "mountain bike", "blue");
  });

  it("should have a frame and a color", function () {
    expect(fabrizio.frameColor).toBe("red");
    expect(george.frameColor).toBe("blue");
  });

  it("should have two wheels", function () {
    expect(fabrizio.wheels).toBe(2);
  })

  it("should know what type of bike it is", function() {
    expect(fabrizio.bikeType).toBe("roadbike");
    expect(george.bikeType).toBe("mountain bike");
  });

  it("should know about it's condition", function() {
    expect(fabrizio.condition).toBe("ready to go!");
    fabrizio.takeForARide(100);
    expect(fabrizio.condition).toBe("needs a tune up");
    expect(george.condition).toBe("ready to go!");
  });

  it("should be able to be tuned up", function() {
    fabrizio.tuneUp();
    expect(fabrizio.condition).toBe("ready to go!")
  });

});
