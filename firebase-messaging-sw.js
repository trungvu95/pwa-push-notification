// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyCIK-XP2wKZAg4sZDbqXij-FLmV_FfqgFQ",
  authDomain: "fit-overview-256304.firebaseapp.com",
  databaseURL: "https://fit-overview-256304.firebaseio.com",
  projectId: "fit-overview-256304",
  storageBucket: "fit-overview-256304.appspot.com",
  messagingSenderId: "172213284111",
  appId: "1:172213284111:web:cdeebb980042560622e27a",
  measurementId: "G-FWE8N0632X"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();