describe("Owner", function() {
  var mitch;
  beforeEach(function() {
    mitch = new Owner("Mitch");
    fabrizio = new Bike("Fabrizio", "roadbike", "black");
    george = new Bike("George", "mountain bike", "blue");
    mitch.bikes = [fabrizio, george];
  });

  it("should have a name", function() {
    expect(mitch.name).toBe("Mitch");
  });

  it("should own several bikes", function() {
    expect(mitch.bikes).toBe([fabrizio, george]);
  });

  it("should be able to build a new bike", function() {
    mitch.buildBike("Reginald", "roadbike", "orange");
    expect(mitch.bikes).toContain(reginald);
  });

  it("should be able to go on a bike ride", function() {
    // figure out how to test for a bike ride.
    // take in two arguments, 1 = bike, 2 = ride length in miles
    // the result should wear out the bike and require a tune up
  });

});

describe("Bike", function() {
  // not sure if i need to define these here or in the spec above???
  var fabrizio, george;
  beforeEach(function() {
    fabrizio = new Bike("Fabrizio", "roadbike", "red");
    // name, type, color
  });

  it("should have a frame and a color", function () {
    expect(fabrizio.frameColor).toBe("red");
  });

  it("should have two wheels", function () {
    expect(fabrizio.wheels).toBe(2);
  })

  it("should know what type of bike it is", function() {
    expect(fabrizio.bikeType).toBe("roadbike");
  });

  it("should know about it's condition", function() {
    expect(fabrizio.contition).toBe("ready to go!");
    fabrizio.takeForARide(100);
    expect(fabrizio.contition).toBe("needs a tune up");
  });

  it("should be able to be tuned up", function() {
    fabrizio.takeForARide(100);
    fabrizio.tuneUp();
    expect(fabrizio.contition).toBe("ready to go!")
  });

});