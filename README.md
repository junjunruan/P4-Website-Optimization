# Project 4 - Website Optimization
This is the fourth project of Udacity Front-End Web Developer Nanodegree.

Github folders:

- frontend-nanodegree-mobile-portfolio: clone from udacity repository, which should be optimized. It can be visited [here](http://junjunruan.github.io/P4-Website-Optimization/dist/);
- src: update some code for optimization, changes and comments can be clearly seen;
- dist: final product after running grunt.

Two goals of this project is:

- Improve PageSpeed score;
- Smooth browser animations;

Here is the [link](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535) to the rubric for the class.

## Improve PageSpeed Score

Before optimization, the score of loading index page is: mobile 28, desktop 82.

After optimization, the score of loading index page is: mobile ![image](http://i.imgur.com/gOWkUWE.png?1), desktop ![image](http://i.imgur.com/HkYkcMs.png?1).


1. Run a local web server
  
  Downlaod [python](https://www.python.org/downloads/), open command window, type the following code:
 
  ```
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 80
  ```
  Then Open a browser and visit localhost:80


2. Expose a local web server to the internet

  Download [ngrok](https://ngrok.com/download), install into the project directory. And then run ngrok using this command:
  
  ```
  $> cd /path/to/your-project-folder
  $> ngrok http 80
  ```
  
  ![image](http://i.imgur.com/Pwiqiq7.png)
  
  
3.  Test the page speed of index.html through [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).
  Copy the forwarding url in the command window and paste it to PageSpeed Insigths, then scores will be shown.
  

4. Setup Grunt environment (follow the instructions on this [link](https://discussions.udacity.com/t/grunt-and-setting-up-a-grunt-workflow-intermediate/21984))

  Grunt can be used for optimizing files such as minifying JavaScript, CSS files and optimizing images etc.
  
  1) Install [NodeJS](https://nodejs.org/en/)

  2) Install the gruntCLI to get the grunt command line interface
  
    ```
    npm install -g grunt-cli 
    ```
      
  3) Create a package.json file, which is a special file that node uses to track dependencies on a project.
      
    ```
    npm  init
    ```
      
  4) Add grunt as one of our developer dependencies.
      
    ```
    npm install --save-dev grunt
    ```
      
  5) Install and configure all the required Grunt plugins
  
    ```
    npm install grunt-contrib-copy grunt-inline grunt-contrib-htmlmin grunt-contrib-imagemin@0.3.0 --save-dev
    ``` 
    ``` 
    npm install jsdoc
    ``` 
    
    Note:
    
    - There are bugs in the newest version of grunt-contrib-imagemin, so here the old version is installed.
    - JSDoc is API documentation generator for JavaScript.
    
    After all the Grunt plugins are installed successfully, all the modules will be in the node_modules folder.
      
    Then create a file named gruntfile.js, write our grunt wrapper function. Inside the function, write some code to load, configure and register our task.
      
      
    ```
    module.exports = function(grunt) {
    
    }
    ```
      
    To run Grunt, type this command:
    
    ```
    grunt
    ```
    
    The result is:
    
    ![image](http://i.imgur.com/v6tJFQB.png)
    
5. Improve PageSpeed Score of index.html above 90

  - Optimize Google Fonts using Web Font Loader, asynchronously load google web font to prevent it from being render blocking;
  - Inline and minify CSS in development code by using grunt-inline plugin;
  - Async analytics.js as it doesn't modify the DOM or the CSSOM;
  - Inline and minify javaScript, and put all the scripts in the bottom of page by using grunt-inline plugin;
  - Minify html by using grunt-contrib-htmlmin plugin;
  - Minify images by using grunt-contrib-imagemin plugin;
  - Produces pizzeria.jpg images at different sizes by using grunt-responsive-images plugin. In order to pick up the right image for a device, add srcset to the corresponding <img> tag in pizza.html.
  
##  Smooth Browser Animations

1. Ensure a consistent frame rate at 60fps on browser scroll
Before optimization, recode the timeline and get the original frame rate when scrolling pizza.html:

![image](http://i.imgur.com/LU8FisP.png)

After optimization, all the frame rates are below 60fps. The result is as follows:

![image](http://i.imgur.com/7tTJu0B.png)

What I did for optimization:

1) Optimize the javaScript bottle neck (the yellow bar)

   Open main.js file, update the code inside updatePositions function

  - Change document.querySelectorAll('.mover') to document.getElementsByClassName('mover')

    Because getElementsByClassName is faster than querySelectorAll.

  - Move document.body.scrollTop / 1250 outside of for loop

    As it is a constant, we don't need to calculate repeatly in each iterate of the for loop.

  - Calculate phase outside of loop.

    As i%5 only has 5 unique value, so we can calculate phase and store the value in an array outside of loop.
  
  - Calculate iterms.length outside of for loop
  
    declear a variable: var itemsLen = items.length;

2) Optimize paint bottle neck (the green bar)

   Open main.js file, update the code inside document.addEventListener('DOMContentLoaded', function() {}.

  - Create an array variable that has a reference to all of the pizzas with id "movingPizzas1", and change querySelector to getElementById
  - Change the number of  moving pizzas created in the background from 200 to 50, as 200 pizzas are too much for the page

  Inside CSS file (views -> css -> style.css)

  - Add code `backface-visibility: hidden` in the "mover" class to reduce paint time


2. Make time to resize pizzas less than 5ms in pizza.html

  Click the bar on the pizza.html page, check the time to resize the pizza in the console of chrome developer tools:

  - Before optimization, time to resize the pizza is `166.27499999999964ms`

  - After optimization, time to resize the pizza is improved to `1.1499999999068677ms`

  Here is what I did for optimization:

  Open main.js file, update the code inside changePizzaSizes function.

  - Create an array variable that has a reference to all of the pizzas with class name "randomPizzaContainer"
  - Change querySelectorAll to getElementsByClassName
  - Calculate dx and newwidth outside of for loop, as they are only related to size



