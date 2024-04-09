const pixelRobot = document.getElementById('pixel-robot');

    pixelRobot.addEventListener('mouseover', () => {
      pixelRobot.style.transform = 'scaleX(-1.2)'; 
    });

    pixelRobot.addEventListener('mouseout', () => {
      pixelRobot.style.transform = 'scaleX(-1)'; 
    });
