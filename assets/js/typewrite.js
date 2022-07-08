
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('.home__title');

  setInterval(() => {
    typeWriter(titulo);
  }, 1000 * 60 );

  typeWriter(titulo);

