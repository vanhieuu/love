// ============================================
// FLOATING HEARTS BACKGROUND
// ============================================
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🌹'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(heart);
    }
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    // CUSTOMIZE THIS: Set your relationship start date
    const startDate = new Date('2020-08-11T00:00:00'); 
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// ============================================
// PHOTO GALLERY
// ============================================
let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo-slide');
const dots = document.querySelectorAll('.dot');

function showPhoto(index) {
    photos.forEach(photo => photo.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    photos[index].classList.add('active');
    dots[index].classList.add('active');
    currentPhotoIndex = index;
}

function nextPhoto() {
    let next = (currentPhotoIndex + 1) % photos.length;
    showPhoto(next);
}

function previousPhoto() {
    let prev = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(prev);
}

function goToPhoto(index) {
    showPhoto(index);
}

// Auto-advance photos every 5 seconds
setInterval(nextPhoto, 5000);

// ============================================
// MUSIC PLAYER
// ============================================
const songs = [
    { src: "assets/audio/bentrai.mp3", title: "Bên trái", memory: "Anh là bên trái, because u always right" },
    { src: "assets/audio/vuong.mp3", title: "Vương", memory: "Hehe" },
    { src: "assets/audio/vuong.mp3", title: "Tình đắng như ly cà phê", memory: "Nghe giống kỷ niệm của chúng ta" },
    { src: "assets/audio/yeqdtn.mp3", title: "Yêu em qua dòng tin nhắn", memory: "Nghĩ về nhau mỗi khi nghe bài này" },
    { src: "assets/audio/mmfml.mp3", title: "Make me feel my love", memory: "My heart beats differently with this ❤️" }

];


let currentSongIndex = 0;
let isPlaying = false;
let audioPlayer;
function updateSongDisplay() {
    document.getElementById('currentSong').textContent = '🎵 ' + songs[currentSongIndex].title;
    document.querySelector('.now-playing').textContent = songs[currentSongIndex].memory;

    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.load();

    document.querySelectorAll('.playlist-item').forEach((item, index) => {
        item.classList.toggle('active', index === currentSongIndex);
    });
}

function togglePlay() {
    if (!audioPlayer.src) {
        audioPlayer.src = songs[currentSongIndex].src;
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('playBtn').textContent = '⏸️';
    } else {
        audioPlayer.pause();
        document.getElementById('playBtn').textContent = '▶️';
    }
}
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongDisplay();
    audioPlayer.play();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongDisplay();
    audioPlayer.play();
}

function selectSong(index) {
    currentSongIndex = index;
    updateSongDisplay();
    isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️';
}

// ============================================
// TREASURE HUNT
// ============================================
const treasureMessages = [
    { emoji: "🎁", message: "Em là món quà tuyệt vời nhất, bản thân em là 1 điều tuyệt vời" },
    { emoji: "💎", message: "Em là kho báu đẹp nhất, duy nhất và quý hiếm nhất đối với anh" },
    { emoji: "🌟", message: "Em là mặt trời bé nhỏ của anh, sưởi ấm thế giới của anh" },
    { emoji: "🔮", message: "Đừng tự ti và nghi ngờ bản thân mình, em cực kì, cực kì TUYỆT VỜI !!" },
    { emoji: "🏆", message: "Anh luôn tự hào về em, về mọi điều về em" },
    { emoji: "👑", message: "I don’t promise a perfect world, but I promise you’ll never have to face it alone — because I’ll always be with you." }
];

const unlockedTreasures = new Set();

function unlockTreasure(index) {
    const treasureBox = document.querySelectorAll('.treasure-box')[index];
    
    if (!unlockedTreasures.has(index)) {
        treasureBox.classList.add('unlocked');
        unlockedTreasures.add(index);
    }

    document.getElementById('modalEmoji').textContent = treasureMessages[index].emoji;
    document.getElementById('modalMessage').textContent = treasureMessages[index].message;
    document.getElementById('treasureModal').classList.add('show');
}

function closeModal() {
    document.getElementById('treasureModal').classList.remove('show');
}

// ============================================
// VIDEO PLAYER
// ============================================
function playVideo() {
    alert("💕 This is where your video message would play! Record a sweet message and embed it here, or just link to it. She'll love hearing your voice!");
}

// ============================================
// QUIZ FUNCTIONALITY
// ============================================
let selectedAnswers = {};

document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        const parent = this.closest('.quiz-options');
        parent.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        
        const questionIndex = Array.from(document.querySelectorAll('.quiz-question')).indexOf(this.closest('.quiz-question'));
        selectedAnswers[questionIndex] = parseInt(this.dataset.answer);
    });
});

function checkQuiz() {
    let score = 0;
    const questions = document.querySelectorAll('.quiz-question');
    
    questions.forEach((question, index) => {
        const correctAnswer = parseInt(question.querySelector('.quiz-options').dataset.correct);
        const selectedAnswer = selectedAnswers[index];
        const options = question.querySelectorAll('.quiz-option');
        
        if (selectedAnswer !== undefined) {
            options.forEach(option => {
                const answerValue = parseInt(option.dataset.answer);
                if (answerValue === correctAnswer) {
                    option.classList.add('correct');
                } else if (answerValue === selectedAnswer) {
                    option.classList.add('incorrect');
                }
            });
            
            if (selectedAnswer === correctAnswer) {
                score++;
            }
        }
    });

    const resultDiv = document.getElementById('quizResult');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const resultMessage = document.getElementById('resultMessage');
    
    scoreDisplay.textContent = `${score} / ${questions.length}`;
    
    if (score === questions.length) {
        resultMessage.innerHTML = "🎉 PERFECT SCORE! You know me so well! You're absolutely amazing! 💕";
    } else if (score >= questions.length * 0.7) {
        resultMessage.innerHTML = "❤️ Great job! You really pay attention! I love that about you! 😊";
    } else {
        resultMessage.innerHTML = "💖 We have so much more to learn about each other! That's exciting! 🥰";
    }
    
    resultDiv.classList.add('show');
}

// ============================================
// MEMORY GAME
// ============================================
const memoryEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '🌹', '💐'];
let memoryCards = [...memoryEmojis, ...memoryEmojis];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initMemoryGame() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    memoryCards = shuffleArray([...memoryEmojis, ...memoryEmojis]);
    matchedPairs = 0;
    moves = 0;
    flippedCards = [];
    document.getElementById('moves').textContent = moves;
    document.getElementById('matches').textContent = `0/${memoryEmojis.length}`;
    
    memoryCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <div class="memory-card-front">❓</div>
            <div class="memory-card-back">${emoji}</div>
        `;
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped') || this.classList.contains('matched')) {
        return;
    }

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        
        setTimeout(() => {
            checkMatch();
        }, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        document.getElementById('matches').textContent = `${matchedPairs}/${memoryEmojis.length}`;
        
        if (matchedPairs === memoryEmojis.length) {
            setTimeout(() => {
                alert(`🎉 Amazing! You matched all pairs in ${moves} moves! Just like how we're a perfect match! 💕`);
            }, 500);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    
    flippedCards = [];
}

function resetMemoryGame() {
    initMemoryGame();
}

// ============================================
// SCRATCH COUPONS
// ============================================
function scratchCoupon(coupon) {
    const overlay = coupon.querySelector('.coupon-overlay');
    overlay.classList.add('scratched');
}

// ============================================
// INITIALIZE EVERYTHING ON PAGE LOAD
// ============================================
window.addEventListener('load', () => {

    // LẤY AUDIO SAU KHI HTML TẠO XONG
    audioPlayer = document.getElementById("audioPlayer");

    // Khi hết bài → tự qua bài tiếp
    audioPlayer.addEventListener('ended', nextSong);

    createFloatingHearts();
    updateCountdown();
    initMemoryGame();
    updateSongDisplay();
});
// ============================================
// MODAL CLOSE ON OUTSIDE CLICK
// ============================================
document.getElementById('treasureModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});