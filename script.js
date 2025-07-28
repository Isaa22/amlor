document.addEventListener('DOMContentLoaded', function() {
    // Configura a data alvo (28 de agosto de 2025)
    const targetDate = new Date('August 28, 2025 00:00:00').getTime();
    
    // Atualiza o contador a cada segundo
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Cálculos para dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Exibe o resultado
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        // Se o contador chegar a zero
        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown').innerHTML = '<h2>Feliz Mêsversário!</h2>';
        }
    }, 1000);
    
    // Cria efeito de confete
    createConfetti();
});

function createConfetti() {
    const colors = ['#a71d31', '#3f0d12', '#fff', '#ffd700'];
    const container = document.querySelector('.confetti-container');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(confetti);
    }
    
    // Adiciona estilo dinâmico para os confetes
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti {
            position: absolute;
            top: -10px;
            opacity: 0.8;
            animation: fall linear infinite;
            transform-origin: center;
        }
        
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}
