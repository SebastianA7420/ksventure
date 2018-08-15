vue.camera=`
<video autoplay></video>
`;

window.vueControllers.camera = function() {
    const constraints = {
       video: true
     };

     const video = document.querySelector('video');

     navigator.mediaDevices.getUserMedia(constraints).
       then((stream) => {video.srcObject = stream});
};
