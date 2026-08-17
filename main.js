// --- 1. ACESSIBILIDADE: TAMANHO DE FONTE ---
let fontPercentage = 100;

const btnIncrease = document.getElementById('btn-increase-font');
const btnDecrease = document.getElementById('btn-decrease-font');

btnIncrease?.addEventListener('click', () => {
  if (fontPercentage < 150) {
    fontPercentage += 10;
    document.documentElement.style.fontSize = `${fontPercentage}%`;
  }
});

btnDecrease?.addEventListener('click', () => {
  if (fontPercentage > 80) {
    fontPercentage -= 10;
    document.documentElement.style.fontSize = `${fontPercentage}%`;
  }
});

// --- 2. ACESSIBILIDADE: ALTO CONTRASTE ---
const btnContrast = document.getElementById('btn-contrast');

btnContrast?.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
  const isHighContrast = document.body.classList.contains('high-contrast');
  btnContrast.setAttribute('aria-pressed', isHighContrast ? 'true' : 'false');
});

// --- 3. MENU HAMBÚRGUER (ACESSÍVEL) ---
const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuBtn?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// --- 4. FLASHCARDS (VIRAR CARD) ---
const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  // Acessibilidade via teclado (Enter / Espaço)
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

// --- 5. DISCO DE NEWTON (GIRAR E MÁGICA ÓPTICA) ---
const disk = document.getElementById('newton-disk');
const spinBtn = document.getElementById('btn-spin-disk');
let isSpinning = false;

spinBtn?.addEventListener('click', () => {
  isSpinning = !isSpinning;

  if (isSpinning) {
    disk?.classList.add('spinning');
    spinBtn.textContent = 'Parar Disco';
    spinBtn.setAttribute('aria-label', 'Parar o Disco de Newton');
  } else {
    disk?.classList.remove('spinning');
    spinBtn.textContent = 'Girar Disco';
    spinBtn.setAttribute('aria-label', 'Girar o Disco de Newton');
  }
});