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
const auth = firebase.auth();
const db = firebase.firestore();
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const uid = userCredential.user.uid;
            db.collection('usuarios').doc(uid).get()
                .then((doc) => {
                    const data = doc.data();
                    if (data.rol === 'estudiante') {
                        // Redirigir al usuario a la página de administrador
                        window.location.href = 'ruta/a/pagina/de/administrador';
                    } else if (data.rol === 'profesor') {
                        // Redirigir al usuario a la página de profesor
                        window.location.href = 'ruta/a/pagina/de/profesor';
                    } else if (data.rol === 'administrador') {
                        // Redirigir al usuario a la página de estudiante
                        window.location.href = 'ruta/a/pagina/de/estudiante';
                    }
                })
                .catch((error) => {
                    console.log('Error al obtener el rol del usuario:', error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Aquí puedes mostrar un mensaje de error al usuario
        });
});
