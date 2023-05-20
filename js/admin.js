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

      // Obtener una referencia a la colección "Usuarios" en Firestore
      var db = firebase.firestore().collection("Usuarios");

      // Función para agregar un usuario a Firestore y a Authentication
      function agregarUsuario() {
        // Obtener los valores del formulario
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var correo = document.getElementById("correo").value;
        var password = document.getElementById("password").value;
        var rol = document.getElementById("rol").value;

        // Crear el usuario en Authentication
        firebase.auth().createUserWithEmailAndPassword(correo, password)
        .then(function(userCredential) {
          // Obtener el ID del usuario recién creado
          var uid = userCredential.user.uid;

          // Agregar el usuario a Firestore
          return db.add({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            rol: rol,
            uid: uid
          });
        })
        .then(function(docRef) {
          console.log("Usuario agregado con ID: ", docRef.id);
          // Limpiar el formulario
          document.getElementById("nombre").value = "";
          document.getElementById("apellido").value = "";
          document.getElementById("correo").value = "";
          document.getElementById("password").value = "";
          document.getElementById("rol").value = "";
        })
        .catch(function(error) {
          console.error("Error al agregar usuario: ", error);
        });
      }