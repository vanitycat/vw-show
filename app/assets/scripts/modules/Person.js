function Person(fullName,favColor) {
  this.name = fullName;
  this.faveColor = favColor;
  this.greet = function() {
    console.log("hello there" + this.name + this.faveColor);
  }
}

module.exports = Person;
