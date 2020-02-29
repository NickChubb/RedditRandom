# RedditRandom
[LIKELY NSFW] This app gets random images posted on reddit through scraping the frequently used image hosting site http://imgur.com.  This app is UNCENSORED and contains any and all types of images that could be found on reddit, so BROWSE AT YOUR OWN RISK.

This project uses a string function to randomize a string of all possible values and returns the hits in a gallery.  Clicking on an imgage brings up a full-size view of this specific image, clicking again will close this.  

The settings dropdown at the top right takes how many pictures the user wants to attempt to load and will store it as a cookie.  The program doesn't load exactly however many images are attempted; about 2/3 of the images return errors, which the program detects and doesn't display.  This is done through checking if the loaded image has the exact same dimensions as the error image thrown by imgur.

The more button on the top and bottom right will load a more images.  The reload button refreshes the page and loads more imgaes, so the current images will disappear.