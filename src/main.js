// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase';

/* eslint-disable no-new */


require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDON0hTFmGSbSib8jRPiNeU7nN93lY1P7Y",
    authDomain: "vue-chat-app-d800e.firebaseapp.com",
    databaseURL: "https://vue-chat-app-d800e.firebaseio.com",
    projectId: "vue-chat-app-d800e",
    storageBucket: "vue-chat-app-d800e.appspot.com",
    messagingSenderId: "734957698582",
    appId: "1:734957698582:web:628b4b5dcc7cf70664ff37",
    measurementId: "G-QLVTPPPCP8"
};

firebase.initializeApp(firebaseConfig)

var db = firebase.firestore();
window.db =db;
Vue.config.productionTip = false

db.settings({
  timestampsInSnapshots:true
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
