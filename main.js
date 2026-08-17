document.addEventListener('DOMContentLoaded', () => {

  // 1. ALTERAR TAMANHO DA FONTE
  let fontPercent = 100;
  const btnIncrease = document.getElementById('btn-increase');
  const btnDecrease = document.getElementById('btn-decrease');

  btnIncrease.addEventListener('click', () => {
    if (fontPercent < 150) {
      fontPercent += 10;
      document.documentElement.style.setProperty('--font-size', `${fontPercent}%`);
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (fontPercent > 80) {
      fontPercent -= 10;
      document.documentElement.style.setProperty('--font-size', `${fontPercent}%`);
    }
  });

  // 2. MODO ALTO CONTRASTE
  const btnContrast = document.getElementById('btn-contrast');
  btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  // 3. OUVRIR O SITE (TEXT-TO-SPEECH)
  const btnSpeak = document.getElementById('btn-speak');
  let isSpeaking = false;

  btnSpeak.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        btnSpeak.textContent = '🔊 Ouvir Site';
      } else {
        const textToRead = document.querySelector('main').innerText;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'pt-BR';
        
        utterance.onend = () => {
          isSpeaking = false;
          btnSpeak.textContent = '🔊 Ouvir Site';
        };

        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
        btnSpeak.textContent = '⏹️ Parar Leitura';
      }
    } else {
      alert('A funcionalidade de síntese de voz não é suportada neste navegador.');
    }
  });

  // 4. MENU HAMBÚRGUER
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    const isExpanded = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });

  // 5. FLASHCARDS (CLIQUE E TECLADO)
  const flashcards = document.querySelectorAll('.flashcard');
  flashcards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  // 6. DISCO DE NEWTON
  const disk = document.getElementById('newton-disk');
  const btnSpin = document.getElementById('btn-spin');
  let isSpinning = false;

  btnSpin.addEventListener('click', () => {
    isSpinning = !isSpinning;
    if (isSpinning) {
      disk.classList.add('spinning');
      btnSpin.textContent = 'Parar Disco';
    } else {
      disk.classList.remove('spinning');
      btnSpin.textContent = 'Girar Disco';
    }
  });

});