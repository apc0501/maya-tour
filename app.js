document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button');
  button.textContent = 'Ver promoções';
  document.body.appendChild(button);

  button.addEventListener('click', function () {
    alert('Ainda não há promoções disponíveis, mas você será notificado em breve!');
  });
});
