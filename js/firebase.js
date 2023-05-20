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

 document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencias a los elementos HTML
  var emailField = document.getElementById('email');
  var passwordField = document.getElementById('password');
  var loginForm = document.querySelector('.login-form-container form');

  // Manejar el inicio de sesión con Firebase
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = emailField.value;
    var password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Inicio de sesión exitoso, hacer algo aquí
        console.log("Inicio de sesión exitoso!");

        // Obtener el usuario autenticado
        var user = userCredential.user;

        // Obtener la información del usuario desde Firestore
        var db = firebase.firestore();
        var usuariosRef = db.collection("Usuarios").doc(user.uid);

        usuariosRef.get().then(function(doc) {
          if (doc.exists) {
            var data = doc.data();
            var rol = data.rol;

            // Redireccionar a la página correspondiente según el rol del usuario
            if (rol === "estudiante") {
              window.location.href = "pagina-de-estudiantes.html";
            } else if (rol === "profesor") {
              window.location.href = "pagina-de-profesores.html";
            } else if (rol === "administrador") {
              window.location.href = "admin/admin.html";
            } else {
              console.log("Rol de usuario desconocido");
            }
          } else {
            console.log("No se encontró ningún usuario con el ID especificado");
          }
        }).catch(function(error) {
          console.error("Error al obtener la información del usuario:", error);
        });

      })
      .catch(function(error) {
        // Ocurrió un error al iniciar sesión, mostrar mensaje de error
        console.error("Ocurrió un error al iniciar sesión:", error);
      });
  });
});