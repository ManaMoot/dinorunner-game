const dino = document.getElementById('dino');

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');

    setTimeout(() => {
      dino.classList.remove('jump');
    }, 300);
  }
}

document.addEventListener('keydown', jump);

function gameLoop() {
  const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));

  if (dinoBottom > 0) {
    dino.style.bottom = (dinoBottom - 5) + 'px';
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
