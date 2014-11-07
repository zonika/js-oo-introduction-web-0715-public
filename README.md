---
tags: OO, object interactions
languages: javascript
level: intermediate
resources: 1
---

# JavaScript OO Introduction

## Objective

Learn how object oriented programing works in JavaScript.

## Overview

After sitting in front of your computer for the last 48 hours writing some awesome code, you realize you should get some exercise too. Maybe a bike ride? But before you put on some spandex shorts and hop on a bike, let's write some more code!

You will be building two JavaScript objects: an `owner` and a `bike`. The owner has several bikes, can build a new bike, and can go on a ride using any of their bikes. Each bike has 2 wheels, a color, and knows what kind of condition it's in. After a long bike ride, the owner will need to give the bike a tune up.

Here's a quick reference for creating objects with JavaScript:

```javascript
// constructor (unique for each object)
function Pet (name, kind) {
  this.name = name;
  this.kind = kind;
}

// methods
Pet.prototype = {
  constructor: Pet,
  speak: function(){
    if (this.kind == 'dog'){
      return 'woof';
    }else if (this.kind == 'cat'){
      return 'meow';
    }else{
      return 'hello, I\'m a ' + this.kind;
    }
  }
};

// creating a new object
vivian = new Pet('Lady Vivian the Terrible', 'dog');
zargon = new Pet('Zargon', 'fish');
```

## Instructions

Run the Jasmine test and build out your objects. The test should help guide you.

```shell
# Install jasmine:
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install ironboard

# Run Jasmine test suite:
ironboard  # runs only in the terminal
ironboard -b # runs also in the browser
```

## Resources

[javascriptissexy.com — "JavaScript Objects in Detail"](http://javascriptissexy.com/javascript-objects-in-detail/)
