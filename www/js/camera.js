vue.camera=`
<video autoplay id="camerajs"></video>

<svg id="camerabtn" onclick="record()">
  <circle r="50" cx="50" cy="50" fill="red"/>
</svg>


`;

var mediaRecorder;
var record = function() {
  //fnct
  alert('hi');
};


window.vueControllers.camera = function() {
    const constraints = {
       video: true
     };

     const video = document.querySelector('video');

     try {
       navigator.mediaDevices.getUserMedia(constraints).
         then((stream) => {video.srcObject = stream});
     } catch(e) {
      console.log('try mobile version instead');
      navigator.mediaDevices.getUserMedia({
        'audio': true,
        'video': {
            facingMode: { exact: "environment" }
        }
      }).then(function(mediastream) {
          var options = { mimeType : 'video/quicktime'};
          mediaRecorder = new MediaRecorder(mediastream, options);
      });
    }
};
