// HU05 · Menú de navegación: abre/cierra el menú en móvil y lo cierra al elegir una sección
const boton = document.querySelector('.nav__boton');
const menu = document.querySelector('.nav__menu');

boton.addEventListener('click', () => {
  const abierto = menu.classList.toggle('nav__menu--abierto');
  boton.setAttribute('aria-expanded', abierto);
  boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('nav__menu--abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
  });
});
