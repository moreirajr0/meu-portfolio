AOS.init();

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.getElementById('menu-icon'); // Adiciona o controle para o ícone
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active'); // Alterna a classe active no ícone
}

// Novo trecho para fechar o menu ao clicar em qualquer link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menu-icon'); // Adiciona o controle para o ícone
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menuIcon.classList.remove('active'); // Remove a classe active no ícone
    }
  });
});

function mostrarMaisEmails() {
  const extras = document.querySelectorAll('.email-extra');
  let algumOculto = false;

  extras.forEach(div => {
    if (div.style.display === 'none') {
      div.style.display = 'flex'; // ou 'block', conforme seu layout
      algumOculto = true;
    }
  });

  if (algumOculto) {
    document.getElementById('btn-veja-mais').textContent = 'Mostrar menos modelos';
  } else {
    extras.forEach(div => div.style.display = 'none');
    document.getElementById('btn-veja-mais').textContent = 'Veja mais modelos';
  }
}

const landingSwiper = new Swiper('.landing-swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
