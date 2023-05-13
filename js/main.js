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
  ];
  
  let currentIndex = 0;
  
  function showMotivationalToast() {
    const randomMessage = messages[currentIndex];
    document.getElementById("motivational-message").innerHTML = randomMessage;
    const toastEl = document.getElementById('motivational-toast');
    const toast = new bootstrap.Toast(toastEl, {delay: 60000});
    toast.show();
  
    // Esperar 60 segundos antes de desvanecer el mensaje
    setTimeout(function() {
      toast.hide();
      currentIndex = (currentIndex + 1) % messages.length;
      setTimeout(showMotivationalToast, 60000);
    }, 60000);
  }
  
  window.addEventListener('load', function() {
    showMotivationalToast();
  });
  
  // Mostrar mensaje motivacional cada 5 minutos
  setInterval(showMotivationalToast, 5 * 60 * 1000);

  window.addEventListener('load', function() {
    var spinner = document.getElementById('spinner-overlay');
    spinner.style.display = 'none';
  });