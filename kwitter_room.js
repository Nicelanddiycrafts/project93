const firebaseConfig = {
      apiKey: "AIzaSyBIhHGy3LDJDNnpxGW7edALVSGLrrdziGA",
      authDomain: "kwitter-9dab3.firebaseapp.com",
      databaseURL: "https://kwitter-9dab3-default-rtdb.firebaseio.com",
      projectId: "kwitter-9dab3",
      storageBucket: "kwitter-9dab3.appspot.com",
      messagingSenderId: "204234288624",
      appId: "1:204234288624:web:24d8e5ad88f7484d890135",
      measurementId: "G-MRYWPWP56L"
    };
    
    
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
