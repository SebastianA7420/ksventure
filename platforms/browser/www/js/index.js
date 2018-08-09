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
                }
            });
