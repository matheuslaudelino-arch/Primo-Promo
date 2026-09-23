const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message, tone = 'green') {
  toast.textContent = message;
  toast.style.borderLeftColor = tone === 'orange' ? '#f4774d' : '#55a77a';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

document.querySelector('#approve-button').addEventListener('click', (event) => {
  event.currentTarget.textContent = '✓ Publicada no WhatsApp';
  event.currentTarget.disabled = true;
  document.querySelector('.pending-pill').innerHTML = '<i></i> 2 pendentes';
  document.querySelector('.selected-offer').style.opacity = '.45';
  showToast('Oferta aprovada e enviada para o WhatsApp.');
});

document.querySelector('#reject-button').addEventListener('click', () => {
  document.querySelector('.selected-offer').style.opacity = '.45';
  showToast('Oferta movida para revisão. Adicione um motivo no próximo passo.', 'orange');
});

document.querySelector('#new-offer').addEventListener('click', () => {
  document.querySelector('#offers')?.scrollIntoView({ behavior: 'smooth' });
  showToast('Monitor buscando novas ofertas agora.');
});

document.querySelectorAll('.nav-item, .text-button, .see-stage, .activity-link').forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item.getAttribute('href') === '#offers' || !item.getAttribute('href')) {
      event.preventDefault();
      showToast('Esta visão será detalhada no painel de ofertas.');
    }
  });
});