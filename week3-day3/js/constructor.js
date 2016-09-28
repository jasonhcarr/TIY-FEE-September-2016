/**
 * Define our constructor class with local properties
 * Each instance can target the properties and methods of its prototype, Ghost
 */
function Ghost(name, fruit, hobbies, color) {
  this.regions = {
    container: null,
    infoContainer: null,
    ghost: null
  };
  this.info = {
    name: name,
    fruit: fruit,
    hobbies: hobbies
  };
  this.trigger = 'hover';
  this.color = color;
  this.updateInfo = function() {
    this.regions.infoContainer.innerHTML = '';
    for (property in this.info) {
      this.addInfo(this.info[property]);
    }
  }
}
