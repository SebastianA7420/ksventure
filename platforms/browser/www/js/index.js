window.vueControllers = {};

var vue = new Vue ({

    el: '#app',
    data: {
        message: 'click here', page: ''
    },
    updated: function() {
      if (window.vueControllers[vue.page]) {
        window.vueControllers[vue.page]();
      }
    }
});

// This is where controller code will live for each view
window.vueControllers = {};

                el: '#app',
                data: {
                	isSignedIn: false,
                    message: 'click here',
                    page: 'Start',
                    startPage: '',
          					email: '',
          					userpass: '',
          					homepage: '',
          					signin: '',
          					viewAdventures: '',
          					camera: '',
                },
                methods: {
                	signInFn: function (event) {
                		console.log('hi!');
                		this.page = "homepage";
                		this.isSignedIn = true;
                	}
                },
                updated: function() {
                  if (window.vueControllers[vue.page]) {
                    window.vueControllers[vue.page]();
                  }
                }
            });
<<<<<<< HEAD
=======

// phonegap code
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
>>>>>>> 20eace5231a3d479aa8b3342f34476141a560b84
