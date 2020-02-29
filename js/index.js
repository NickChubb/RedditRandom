$(window).unload(function() {

  $('body').scrollTop(0);

});

//populates input with current cookie
window.onload = function(){

  if(getImagesCookie()!=''){

    document.getElementById('input').value = getImagesCookie();

  }else{

    document.getElementById('input').value = '50';

  }

}

//Auto-scroll upon reaching end of page
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    morePictures();
  }
};


//creates randomly generated string for URLs
String.prototype.shuffleSlice = function () {

  var a = this.split(""),

    n = a.length;



  for(var i = n - 1; i > 0; i--) {

    var j = Math.floor(Math.random() * (i + 1));

    var tmp = a[i];

    a[i] = a[j];

    a[j] = tmp;

  }

  return a.join("").slice(0,5);

}


//Load more images
function morePictures(){

  var imageCount;

  if(getImagesCookie()==''){

    imageCount = 50;

  }else{

    imageCount = getImagesCookie();

  }

  for(var i=0;i<imageCount;i++){

    var picture = str.shuffleSlice();

    var picturelink = "http://i.imgur.com/" + picture + ".png";

    document.getElementById('container').innerHTML += '<img onclick="ShowFullPageImage(this);" onload="if(this.width==\'161\'&&this.height==\'81\'){ this.parentNode.removeChild(this)};" id="'+picture+'" src="http://i.imgur.com/' + picture + '.jpg" title="'+(timesRan+1)+'.'+(i+1)+' : '+picture+'" class="thumbnail-image">';

  };

  timesRan++;

};


//display full-size image
function ShowFullPageImage(picture){

  document.getElementById('big-image').style.display = '-webkit-box';

  document.getElementById('big-picture-container').innerHTML = '<img id="big-picture" onclick="HideFullPageImage();" src="'+picture.src+'"></img><a id="big-picture-link" target="_blank" href="'+picture.src+'"><i class="fa fa-link"></i></a>';

};


//hide full size image
function HideFullPageImage(){

  document.getElementById('big-image').style.display = 'none';

  document.getElementById('big-picture-container').innerHTML = '';

};


//Displays the about popup
function OpenAbout(){

  document.getElementById('about').style.display = '-webkit-box';

};


//Hides the about popup
function CloseAbout(){

  document.getElementById('about').style.display = 'none';

};


//Hides the warning popup
function hideWarning(){

  document.getElementById('warning-popup').style.display = 'none';


};


//gets cookie which says how many images to load
function getImagesCookie() {

  if(document.cookie!=""){

    var images = document.cookie.substring(7);

    return images;

  }

  return "";

}



//popup settings panel
$(function() {

  $(document).on('click', function(e) {

    if (e.target.id == 'settings-button' || e.target.id == 'input') {

    }else{

      document.getElementById('settings-popup').style.top = '-15px'

      document.getElementById('settings-button').style.background = '';

      document.getElementById('settings-button').style.boxShadow = '';

    }

  })

})



var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

var timesRan = 0;
