/** Define our Ghost prototype values
 * These values are shared across all instances of Ghost
 * The prototype can access properties of any instance
 */
Ghost.prototype = {
  buildMe: function() {
    var bodyContainer = document.getElementById('container'),
      container = document.createElement('div'),
      infoContainer = document.createElement('div'),
      theGhost = document.createElement('div');

    container.className = "ghost-container";

    theGhost.className = 'ghost ' + this.info.name.toLowerCase();
    theGhost.style.backgroundColor = this.color;

    container.appendChild(theGhost);
    container.appendChild(infoContainer);
    bodyContainer.appendChild(container);

    this.regions.container = container;
    this.regions.infoContainer = infoContainer;
    this.regions.ghost = theGhost;
  },
  addInfo: function(content) {
    var info = document.createElement('p');
    info.innerHTML = content;
    this.regions.infoContainer.appendChild(info);
  },
  hover: function() {
    this.regions.ghost.className += ' hover';
    this.regions.ghost.addEventListener('animationend', this.revertClassNames.bind(this));
  },
  chase: function() {
    this.regions.ghost.className += ' chase';
    this.regions.ghost.addEventListener('animationend', this.revertClassNames.bind(this));
  },
  lookout: function() {
    this.regions.ghost.className += ' lookout';
    this.regions.ghost.addEventListener('animationend', this.revertClassNames.bind(this));
  },
  revertClassNames: function() {
    this.regions.ghost.className = 'ghost';
  },
  init: function() {
    this.buildMe();
    this.updateInfo();
    this.regions.ghost.addEventListener('click', this[this.trigger].bind(this));
  }
};
