/** Create our instances of the Ghost class
 * passing in unique data to build unique and independent instances
 */
var pinky = new Ghost('Pinky', 'Cherry', 'Dark mazes', '#FDB1B1');
pinky.trigger = 'chase';
pinky.init();

var blinky = new Ghost('Blinky', 'Melon', 'Eating dots', '#FE2601');
blinky.init();

var inky = new Ghost('Inky', 'Orange', 'Spawning', '#00DEE1');
inky.trigger = 'lookout';
inky.init();

var clyde = new Ghost('Clyde', 'Strawberry', 'Chasing Pacman', '#FFA101');
delete clyde.info.fruit;
clyde.trigger = 'chase';
clyde.init();
clyde.info.beer = 'RBC';
clyde.updateInfo();

pinky.lookout();
inky.chase();
blinky.hover();
