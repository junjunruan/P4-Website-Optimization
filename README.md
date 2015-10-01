# Project 4 - Website Optimization
This is the fourth project of Udacity Front-End Web Developer Nanodegree. Two goals of this project is:

- Optimize index.html to achieve a pagespeed score of 90;
- Smooth browser animations and efficient code execution in main.js for the Pizzas page under /view/pizza.html;

Here is the [link](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535) to the rubric for the class.

# Improve PageSpeed Score
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
  Copy the forwarding url in the command window and paste it to PageSpeed Insigths, then get the test score. The original score of loading index page before optimization is: mobile 28, desktop 82.
  
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
    npm install grunt-contrib-copy grunt-inline grunt-contrib-htmlmin grunt-contrib-imagemin --save-dev
    ``` 
      
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
    
5. Improve PageSpeed Score of index.html above 90

  - Optimize Google Fonts using Web Font Loader, asynchronously load google web font to prevent it from being render blocking;
  - Inline and minify CSS in development code by using grunt-inline plugin;
  - Async analytics.js as it doesn't modify the DOM or the CSSOM;
  - Inline and minify javaScript, and put all the scripts in the bottom of page by using grunt-inline plugin;
  - Minify html by using grunt-contrib-htmlmin plugin;
  - Minify images by using grunt-contrib-imagemin plugin;
  
#  Smooth Browser Animations
1. Ensure a consistent frame rate at 60fps on browser scroll




