const botonMenu = document.querySelector('.menu-hamburguesa');
const contenidoMenu = document.querySelector('.menu-hamburguesa-contenido');

botonMenu.addEventListener('click', () => {
  contenidoMenu.classList.toggle('visible');
});