
const messages = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "El fracaso es una oportunidad para empezar de nuevo con más experiencia.",
  "Cada día es una nueva oportunidad para mejorar.",
  "Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud.",
  "No te rindas, cada fracaso es una oportunidad para empezar de nuevo.",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
  "No esperes a que las oportunidades lleguen, búscalas y créalas tú mismo.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.",
  "Busquen primero el reino de Dios y su justicia, y todas estas cosas les serán añadidas.",
  "Porque tanto amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna.",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.",
  "No busques oportunidades, crea oportunidades.",
  "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de manera más inteligente.",
  "La vida no se trata de encontrarte a ti mismo, se trata de crearte a ti mismo.",
  "Si no estás dispuesto a arriesgar, no podrás crecer. Si no puedes crecer, no podrás ser tu mejor versión.",
  "La disciplina es el puente entre las metas y el éxito.",
  "La actitud es una pequeña cosa que hace una gran diferencia.",
  "La mayor gloria en la vida no es nunca caer, sino levantarse cada vez que caemos.",
  "La paciencia es la clave del éxito.",
  "El éxito es la suma de pequeñas acciones repetidas todos los días.",
  "El éxito no es para siempre, y el fracaso no es el final. Lo que cuenta es el coraje para seguir adelante.",
  "La verdadera medida del éxito no es cuánto dinero ganas, sino cómo lo utilizas para marcar una diferencia positiva en la vida de los demás.",
  "Los grandes sueños no se cumplen de la noche a la mañana, requieren tiempo, perseverancia y dedicación.",
  "No hay camino hacia el éxito, el éxito es el camino.",
  "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.",
  "No esperes que las cosas sucedan, haz que sucedan.",
];

function showMotivationalToast() {
  const randomMessageIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomMessageIndex];
  document.getElementById("motivational-message").innerHTML = randomMessage;
  const toastEl = document.getElementById('motivational-toast');
  const toast = new bootstrap.Toast(toastEl, {delay: 40000});
  toast.show();
  toastEl.querySelector('.toast-body').classList.add('motivational-toast');
}

window.addEventListener('load', function() {
  showMotivationalToast();

  const toastEl = document.getElementById('motivational-toast');
  toastEl.addEventListener('hidden.bs.toast', function () {
    toastEl.querySelector('.toast-body').classList.add('fade-out');
  });

  setInterval(showMotivationalToast, 1 * 60 * 1000);
});

window.addEventListener('load', function() {
  var spinner = document.getElementById('spinner-overlay');
  spinner.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
  var btnActivator = document.getElementById("btn-activator");
  var loginFormContainer = document.querySelector(".login-form-container");
  var btnClose = document.querySelector(".my-bt");

  btnActivator.addEventListener("click", function() {
    loginFormContainer.classList.toggle("show");
  });

  btnClose.addEventListener("click", function() {
    loginFormContainer.classList.remove('show');
  });
});

function hideLoginForm() {
  var loginForm = document.querySelector(".login-form-container");
  loginForm.classList.remove("show");
}

