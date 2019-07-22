# learn_promise

This project is a serie of tiny exercices to learn how promises work. You have many way to learn with this exercices, you can juste read the master branch and launch command for run each exercice or you can go on "exos" branch and try to find how promises work by search  yourself.

All exercises are write in full **ES6** and **NodeJs** style. The difference is on import/export modules. With the **ES6** syntax you can run the code anywhere else.

## Prerequisites

You need to install NodeJS v12 or latest to run the project.
- Clone the repository on your machine.
- Choose the branch with that you want learn (master for read the solution, exos for try by yourself)
- Install the packages:
	>npm install
	
	or
	>yarn
- Launch the command to start the file that you want.

You can use NPM or YARN to execute the commands.

## run NodeJs files
If you want use the NodeJs files, you have to launch this command:

- with Node
> node "path of js file"

- with Yarn
> yarn node "path of js file"

I'm OK with you, Yarn is not the best for this case :-)

**Example with file on repo**
> node node\01_promise.js

or
> yarn node node\01_promise.js

## run ES6 files
If you want use the ES6 files, you have to launch this command:

- with Npm
> npm run es6 "path of .mjs file"

- with Yarn
> yarn es6 "path of .mjs file"

Here, the es6 command run the file with @std/esm module. This module is made for run es6 code in NodeJS, example with import/export not supported in NodeJs with the ES6 syntax.

**Example with file on repo**
> npm run es6 es6\01_promise.mjs

or
> yarn es6 es6\01_promise.mjs


# Enjoy !