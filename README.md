# Project 4 - Website Optimization
This is the fourth project of Udacity Front-End Web Developer Nanodegree.

# Improve PageSpeed Score
1. Run a local web server
  
  Downlaod [python](https://www.python.org/downloads/), open command window, type the following code:
 
  ```
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 80
  ```
  Then Open a browser and visit localhost:80

2. Expose a local web server to the internet so that page speed of index.html can be tested through Google [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

  Download [ngrok](https://ngrok.com/download), install into the project directory. And then run ngrok using this command:

  ```
  $> cd /path/to/your-project-folder
  $> ngrok http 80
  ```
  
3. Improve PageSpeed Score above 90
  Grunt can be used for optimizing files such as minifying JavaScript, CSS files and optimizing images etc.



# Ensure A Consistent Frame Rate
