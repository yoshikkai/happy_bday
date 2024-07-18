window.onload = function() {
    launchConfetti();
    createBalloons();
};

const image = document.getElementById('spinningImage');
image.addEventListener('animationend', function() {
image.style.animation = 'none';
});

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function createBalloons() {
    const balloonCount = 30;
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(balloon);
        animateBalloon(balloon);
    }
}

function animateBalloon(balloon) {
    const duration = Math.random() * 2 + 3;
    balloon.style.animation = `floatUp ${duration}s ease-in-out infinite`;
    balloon.addEventListener('animationiteration', function() {
        balloon.style.left = `${Math.random() * 100}vw`;
    });
}


function getRandomColor() {
    const colors = ['#ff4d4d', '#ff944d', '#ffcc4d', '#ccff4d', '#4dff4d', '#4dffcc', '#4d94ff', '#4d4dff', '#cc4dff'];
    return colors[Math.floor(Math.random() * colors.length)];
}