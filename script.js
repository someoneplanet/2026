function updateCountdown() {
    const newYear = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros
    document.getElementById('days').innerText = days.toString().padStart(3, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // When countdown finishes
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').innerText = '000';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        document.querySelector('.message').innerText = 'Feliz Ano Novo 2026! 🎉';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown(); 
