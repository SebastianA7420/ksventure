window.vueControllers = {};

var vue = new Vue ({
                el: '#app',
                data: {
                	        isSignedIn: false,
                            page: 'Start',
                            startPage: '',
        					email: '',
        					userpass: '',
        					homepage: '',
        					signin: '',
        					viewAdventures: '',
        					camera: '',
                            feed: '',
                            leaderboards: ''
                },
                methods: {
                	signInFn: function (event) {
                		console.log('hi!');
                		this.page = "feed";
                		this.isSignedIn = true;

                	}
                    
                    //logInFn: function (event) {
                        //console.log('hi!');
                        //this.page ="startPage";
                        //this.isSignedIn = false;
                    //}
                },
                updated: function() {
                  if (window.vueControllers[vue.page]) {
                    window.vueControllers[vue.page]();
                  }
                }
            });

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
