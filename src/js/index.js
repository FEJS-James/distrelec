//load style & jquery
import '@/style/sass/styles.sass'; 
window.$ = require("jquery"); 

// VUE
import Vue from 'vue';  
import App from "@/vue/app";

(function () {
    $(window).on('load', function () {  });
    $(window).on('scroll', function () { });
    $(document).ready(function () {
        app_init.ready();
    });
    const app_init = {
        ready: function ready() {
            app.init();
        }
    };

    const app = {
        init: function init() {
            this.app_component.init();
        },
        app_component: {
            init: function init() {
                new Vue({
                    el: '#app',
                    render: h => h(App)
                });
            }
        }
    }
})();
