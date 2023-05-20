const firebaseConfig = {
    apiKey: "AIzaSyCQzUHjcvTMxszdQYliHc3NhlWvvh4C-qo",
    authDomain: "prueba2-ce09f.firebaseapp.com",
    projectId: "prueba2-ce09f",
    storageBucket: "prueba2-ce09f.appspot.com",
    messagingSenderId: "704020984392",
    appId: "1:704020984392:web:e5b03c63d4a23a442c1e7d",
    measurementId: "G-F0FP4LKSSS"
      };

      firebase.initializeApp(firebaseConfig);

function agregarUsuario() {
  var correo = document.getElementById("correo").value;
  var password = document.getElementById("password").value;
  var rol = document.getElementById("rol").value;

  firebase.auth().createUserWithEmailAndPassword(correo, password)
    .then(function(userCredential) {
      var user = userCredential.user;
      var db = firebase.firestore(); // Inicializa Cloud Firestore
      var usuariosRef = db.collection("Usuarios");

      // Agrega el nuevo usuario a la colección Usuarios con un identificador único generado por Firebase
      return usuariosRef.add({
        nombre: user.displayName ? user.displayName.split(" ")[0] : "",
        apellido: user.displayName ? user.displayName.split(" ")[1] : "",
        correo: user.email,
        rol: rol,
        uid: user.uid
      });
    })
    .then(function(docRef) {
      console.log("Nuevo usuario agregado con ID: ", docRef.id);
    })
    .catch(function(error) {
      alert("Hubo un error al agregar el usuario: " + error.message);
    });
}