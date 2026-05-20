const contactForm = document.getElementById('contactForm');
const contactPhoneNumber = '74219934';

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const nombre = String(formData.get('nombre') || '').trim();
  const whatsapp = String(formData.get('whatsapp') || '').trim();
  const mensaje = String(formData.get('mensaje') || '').trim();

  const text = `Hola, soy ${nombre}. Mi WhatsApp es ${whatsapp}. Mensaje: ${mensaje}`;
  const waUrl = `https://wa.me/${contactPhoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(waUrl, '_blank', 'noopener,noreferrer');
  contactForm.reset();
});