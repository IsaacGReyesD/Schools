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
      const db = firebase.firestore();

      function agregarUsuario() {
  // Obtiene los valores de los campos de entrada
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const rol = document.getElementById("rol").value;

  // Crea una cuenta de usuario en Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(correo, password)
    .then((userCredential) => {
      // Obtiene el ID del usuario recién creado
      const uid = userCredential.user.uid;

      // Agrega un documento con la información del usuario a Firestore
      db.collection("usuarios").doc(uid).set({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        rol: rol
      })
      .then(() => {
        console.log("Usuario agregado correctamente");
      })
      .catch((error) => {
        console.error("Error al agregar usuario: ", error);
      });
    })
    .catch((error) => {
      console.error("Error al crear cuenta de usuario: ", error);
    });
}
