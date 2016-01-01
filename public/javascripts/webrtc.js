navigator.getUserMedia  = navigator.getUserMedia || 
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

var errorCallback = function(e) {
  console.log('Reeeejected!', e);
};

var onSuccess = function(stream){
  console.log("Done");
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(stream);
  video.play();
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.getUserMedia({"video" : true}, onSuccess , errorCallback);
}else {
  alert("Please Use Chrome , morzilla firefox Or use skype feature");
}
