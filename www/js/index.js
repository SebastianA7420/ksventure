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
