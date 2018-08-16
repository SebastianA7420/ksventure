vue.camera=`
<video autoplay id="camerajs"></video>

<svg id="camerabtn" onclick="record()">
  <circle r="50" cx="50" cy="50" fill="red"/>
</svg>


`;
var record = function() {
  //fnct
  alert('hi');
};
window.vueControllers.camera = function() {
    const constraints = {
       video: true
     };

     const video = document.querySelector('video');

     navigator.mediaDevices.getUserMedia(constraints).
       then((stream) => {video.srcObject = stream});
};
