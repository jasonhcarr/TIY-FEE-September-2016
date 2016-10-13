# NPM and Grunt Setup

##1. Install Node
[www.nodejs.com](http://www.nodejs.com)

Node is a JavaScript Runtime which allows JavaScript, which normally only has access to the browser window and whatever is contained, to now run on your machine, giving access to machine details now outside of the browser.

Node, most notably, gives access to the NPM ecosystem - an open source collection of JavaScript library packages.

##2. Install Grunt-CLI
[Grunt-CLI on Github](https://github.com/gruntjs/grunt-cli)

After installing Node, open the terminal. Here we will install Grunt-CLI, or Command Line Interface. Grunt is an automation task runner that can 'listen' to a project and run a series of tasks anytime a change is saved.

```text
sudo npm install -g grunt
```

In the snippet above, ```-g``` stands for ```global```. So this will install the Grunt-CLI globally on the machine to be used in any other project or directory.

##3. Install Grunt
[www.gruntjs.com](http://www.gruntjjs.com)

First, navigate, via the terminal, into the new project directory you are creating before installing Grunt. Once in the intended directory, Grunt can be installed with:

```text
sudo npm install --save-dev grunt
```

By using the ```--save-dev``` option, we're saving this library, Grunt, as a dependency for our project.

##4. Install Other Grunt Libraries
There are a few other Grunt libraries I have found useful as a base setup for projects. These libraries are:

- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - A Grunt-based JavaScript linter
- [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) - Compile Sass to CSS  
- [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - Concatenate numerous (typically .js) files together.
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)  - Optimize images for the web by reducing file size and meta data in each image
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)  - Uglify is another term of Minify - compress scripts to reduce whitespace, comments, and more to reduce overall file size.
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - The Watch task is what will listen to a project for any changes to then execute the tasks configured for automation.

Each of these libraries / tasks would be installed with:

```text
sudo npm install --save-dev grunt-contrib-[name]
```
...where [name] refers to the rest of the library name (sass, imagemin, concat, ect...)

##5. Build Package.json
With everything installed, NPM can be used to create the project's ```package.json``` file which will store all the dependency information for the project so that it can be reused or shared across project or even teams.

```text
npm init
```

This command will bring up a series of prompts to create a project name, version, and others details. Default values will be added if none are provided so feel free to click enter the whole way through.

A ```package.json``` file should be created that looks eerily similar to the following:

```json
{
  "name": "base-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "grunt": "^1.0.1",
    "grunt-contrib-concat": "^1.0.1",
    "grunt-contrib-imagemin": "^1.0.1",
    "grunt-contrib-sass": "^1.0.0",
    "grunt-contrib-jshint": "^1.0.0",
    "grunt-contrib-uglify": "^2.0.0",
    "grunt-contrib-watch": "^1.0.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Now, by copying this ```package.json``` file into any other project, the libraries can all be installed as a unit by running:

```text
sudo npm install
```

This command will look for the ```package.json``` file and install every package contained within.

##7. Create Gruntfile.js
Now, with the ```package.json``` file created which handles all the project library dependencies, we will need our ```Gruntfile.js``` which will handle all of our tasks that will be automated. Grunt is powerful in how it can automate many time-consuming tasks for us but before it can do that it needs a series of instructions on how it can do just that. Those instructions will be contained within ```Gruntfile.js```.

Inside of this file, we will load in our tasks, register them, and then assign their individual options. Due to the length of this file, I would recommend grabbing the ```Gruntfile.js``` from this Repo as it has been configured to work with the above package setup.

```js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            /**
            * Task specific options
            * Documentation can be found at each task's Github
            */
        }
        ...
    });

    // Load in Tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    ...

    // Register all Tasks
    grunt.registerTask('default', ['sass', 'watch', 'imagemin', 'concat', 'uglify']);
};
```

##8. All the Benefits
After the initial, ahem, grunt work of setting everything up, the two files, ```Gruntfile.js``` and ```package.json``` can work in unison to make spinning up a new project very quick and painless and ultimately **consitent**. Take these two files and copy them into any other directory and you can be up and running with in a new project in just two commands:

```text
sudo npm install
```

```text
grunt watch
```

The first command will install everything from the ```package.json``` file while the second runs the Grunt Watch task, which listens for any change in the project. When a change is detected, Grunt will execute its tasks per the instructions in ```Gruntfile.js```.

##9. .gitignore
Installing packages with NPM created a new directory in your project called ```node_modules```. For the love of all things, include this in your ```.gitignore``` file. This directory gets out of hand and large very quickly and has no purpose in being sent up to a repo and shared.

While we're at it, here's a default setup for a ```.gitignore``` file:

```text
*.map
.sass-cache/
.DS_Store
/node-modules
```

##10. Recommended Directory Structure
It is important to keep your working code separate from your production, live code. To ensure that is cleanly organized and that the above ```Gruntfile.js``` works with your project, follow this recommended directory structure.

```text
root-project
   - images/
   - lib/
     - js/
     - styles/
  - src/
    - js/
    - styles/
  - index.html
  - .gitignore
  - Gruntfile.js
  - package.json
```

In the above example, the ```src/``` directory will contain **working** files that are then compiled/concatenated/minified into the ```lib/``` directory as our **production** files. ```index.html``` should point to the ```lib/``` directory files.
