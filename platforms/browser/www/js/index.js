var vue = new Vue ({
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


