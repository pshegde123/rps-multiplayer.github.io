
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByxPAKsND9It2JLVx1LWWe-iMW-ajj3pQ",
    authDomain: "rps-multiplayer-40070.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-40070.firebaseio.com",
    projectId: "rps-multiplayer-40070",
    storageBucket: "",
    messagingSenderId: "963475548445",
    appId: "1:963475548445:web:9929f50cbf0f26e30f99f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  dataRef = firebase.database();

  var playersRef = dataRef.ref("/players");
  console.log(playersRef);

  $(document).ready(function(){
    $(".pre-connection").hide();

    $('#submit').on("click",function(event){
        event.preventDefault();
      });
  });

