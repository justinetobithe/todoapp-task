require('./bootstrap');


import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './components/app'
import axios from 'axios';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

const app = new Vue({
    el: "#app",
    components: App
})