const pixelRobot = document.getElementById('pixel-robot');

    pixelRobot.addEventListener('mouseover', () => {
      pixelRobot.style.transform = 'scale(1.2)'; 
    });

    pixelRobot.addEventListener('mouseout', () => {
      pixelRobot.style.transform = 'scale(1)'; 
    });
    window.addEventListener('load', () => {
  const pixelRobot = document.getElementById('pixel-robot');
  const speechBalloon = document.getElementById('speech-balloon');

  pixelRobot.addEventListener('mouseover', () => {
    
    speechBalloon.style.display = 'block';
  });

  pixelRobot.addEventListener('mouseout', () => {
   
    speechBalloon.style.display = 'none';
  });
});