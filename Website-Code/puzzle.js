class PuzzleGame {
    constructor(container) {
        this.container = container;
        this.id = container.dataset.puzzleId;
        this.pieceCount = parseInt(container.dataset.pieceCount);
        this.piecesBin = container.querySelector('.piece-bin');
        this.board = container.querySelector('.puzzle-board');
        this.timerElement = container.querySelector('.timer');
        this.movesCounter = container.querySelector('.moves-counter');
        this.successMessage = container.querySelector('.success-message');
        this.resetBtn = container.querySelector('.reset-btn');
        this.startBtn = container.querySelector('.start-btn');
        this.referenceImage = container.querySelector('.reference-image');
        
        this.state = {
            placedCount: 0,
            startTime: null,
            timerInterval: null,
            isCompleted: false,
            moves: 0,
            isActive: false,
            placedPieces: new Set()
        };
        
        this.init();
    }

    init() {
        this.createBoard();
        this.generatePieces();
        this.setupEventListeners();
        this.disablePuzzle();
    }

    calculateRows() {
        // Special grid layouts
        if (this.pieceCount === 35) return 5; // Puzzle 3: 7×5
        if (this.pieceCount === 45) return 5; // Puzzles 4-10: 9×5
        // Default 5-column layout for others
        return Math.ceil(this.pieceCount / 5);
    }

    createBoard() {
        this.board.innerHTML = '';
        
        for (let i = 0; i < this.pieceCount; i++) {
            const slot = document.createElement('div');
            slot.className = 'slot';
            slot.dataset.index = i;
            slot.addEventListener('dragover', this.allowDrop.bind(this));
            slot.addEventListener('drop', this.handleDrop.bind(this));
            this.board.appendChild(slot);
        }
    }

    generatePieces() {
        this.piecesBin.innerHTML = '';
        let indexes = Array.from({length: this.pieceCount}, (_, i) => i);
        indexes = this.shuffleArray(indexes);

        indexes.forEach(i => {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url('images/puzzle${this.id}/piece${i+1}.png')`;
            piece.draggable = false;
            piece.dataset.index = i;
            piece.addEventListener('dragstart', this.drag.bind(this));
            
            piece.addEventListener('error', () => {
                piece.style.background = '#ddd';
                piece.style.display = 'flex';
                piece.style.justifyContent = 'center';
                piece.style.alignItems = 'center';
                piece.innerHTML = `<span style="font-size:0.8rem">${i+1}</span>`;
            });
            
            this.piecesBin.appendChild(piece);
        });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    drag(e) {
        if (!this.state.isActive || this.state.placedPieces.has(e.target.dataset.index)) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    }

    allowDrop(e) {
        if (!this.state.isActive) return;
        e.preventDefault();
    }

    handleDrop(e) {
        if (!this.state.isActive || this.state.isCompleted) return;
        e.preventDefault();

        const pieceIndex = e.dataTransfer.getData('text/plain');
        const slotIndex = e.target.dataset.index;
        const piece = this.piecesBin.querySelector(`.puzzle-piece[data-index="${pieceIndex}"]`);

        if (this.state.placedPieces.has(pieceIndex)) {
            this.playSound('incorrect');
            this.showErrorFeedback();
            return;
        }

        this.state.moves++;
        this.updateMovesCounter();

        if (pieceIndex === slotIndex && !e.target.hasChildNodes()) {
            if (piece) {
                piece.remove();
            }

            const clonedPiece = piece.cloneNode(true);
            clonedPiece.classList.add('placed');
            clonedPiece.draggable = false;
            clonedPiece.style.animation = 'pop 0.3s';
            e.target.appendChild(clonedPiece);
            
            this.state.placedCount++;
            this.state.placedPieces.add(pieceIndex);
            this.playSound('correct');
            
            if (this.state.placedCount === this.pieceCount) {
                this.completePuzzle();
            }
        } else {
            this.playSound('incorrect');
            this.showErrorFeedback();
        }
    }

    completePuzzle() {
        this.state.isCompleted = true;
        clearInterval(this.state.timerInterval);
        this.successMessage.classList.remove('hidden');
        this.playSound('win');
        this.launchConfetti();
        
        this.addBadge(this.id);
        this.checkAllPuzzlesCompleted();
    }

    addBadge(puzzleId) {
        if (document.querySelector(`.badge[data-puzzle-id="${puzzleId}"]`)) return;
        
        const badgeContainer = document.querySelector('.badges-container');
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.dataset.puzzleId = puzzleId;
        
        // Set explicit display order (1-10 then 11 for victory)
        badge.style.order = puzzleId === '11' ? '11' : puzzleId;

        badge.innerHTML = puzzleId === '11' ? 
            `<img src="images/puzzle11/badge.png" alt="Victory Badge"><span>Master Gardener</span>` :
            `<img src="images/puzzle${puzzleId}/badge.png" alt="Puzzle ${puzzleId} Badge"><span>Level ${puzzleId}</span>`;
        
        badgeContainer.appendChild(badge);
        localStorage.setItem(`puzzle-${puzzleId}-completed`, 'true');
    }

    checkAllPuzzlesCompleted() {
        let allCompleted = true;
        for (let i = 1; i <= 10; i++) {
            if (!localStorage.getItem(`puzzle-${i}-completed`)) {
                allCompleted = false;
                break;
            }
        }
        
        if (allCompleted && !document.querySelector('.badge[data-puzzle-id="11"]')) {
            this.addBadge('11');
            this.playSound('victory');
            this.launchConfetti();
            setTimeout(() => this.launchConfetti(), 1000);
            setTimeout(() => this.launchConfetti(), 1500);
        }
    }

    startTimer() {
        this.state.startTime = Date.now();
        this.updateTimer();
        this.state.timerInterval = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        const seconds = Math.floor((Date.now() - this.state.startTime) / 1000);
        this.timerElement.textContent = `⏱ Time: ${seconds}s`;
    }

    updateMovesCounter() {
        this.movesCounter.textContent = `Moves: ${this.state.moves}`;
    }

    playSound(type) {
        const sound = document.getElementById(`${type}Sound`);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("Audio error:", e));
        }
    }

    showErrorFeedback() {
        const error = document.createElement('div');
        error.className = 'error-feedback';
        error.textContent = '✖';
        document.body.appendChild(error);
        setTimeout(() => error.remove(), 1000);
    }

    showReferenceOverlay() {
        const overlay = document.getElementById('referenceOverlay');
        const overlayImg = overlay.querySelector('.overlay-image');
        overlayImg.src = this.referenceImage.src;
        overlay.classList.add('visible');
        overlayImg.style.transform = 'scale(1)';
    }

    launchConfetti() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
        });
    }

    disablePuzzle() {
        const pieces = this.piecesBin.querySelectorAll('.puzzle-piece');
        pieces.forEach(piece => piece.draggable = false);
    }

    enablePuzzle() {
        const pieces = this.piecesBin.querySelectorAll('.puzzle-piece');
        pieces.forEach(piece => {
            if (!this.state.placedPieces.has(piece.dataset.index)) {
                piece.draggable = true;
            }
        });
    }

    startGame() {
        this.state.isActive = true;
        this.state.startTime = Date.now();
        this.startTimer();
        this.startBtn.disabled = true;
        this.enablePuzzle();
    }

    resetGame() {
        this.state.placedCount = 0;
        this.state.moves = 0;
        this.state.isCompleted = false;
        this.state.isActive = false;
        this.state.startTime = null;
        this.state.placedPieces.clear();
        clearInterval(this.state.timerInterval);
        this.successMessage.classList.add('hidden');
        this.startBtn.disabled = false;
        this.timerElement.textContent = '⏱ Time: 0s';
        this.movesCounter.textContent = 'Moves: 0';
        this.createBoard();
        this.generatePieces();
        this.disablePuzzle();
    }

    setupEventListeners() {
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.startBtn.addEventListener('click', () => this.startGame());
        this.referenceImage.addEventListener('click', () => this.showReferenceOverlay());
    }

    static initializeAll() {
        // Create badges container if missing
        if (!document.querySelector('.badges-container')) {
            const badgesContainer = document.createElement('div');
            badgesContainer.className = 'badges-container';
            badgesContainer.innerHTML = '<h3>Your Achievements</h3>';
            document.querySelector('main').appendChild(badgesContainer);
        }
    
        // Initialize all puzzle games
        document.querySelectorAll('.puzzle-game').forEach(container => {
            new PuzzleGame(container);
        });
        
        // Set up reference image zoom
        const overlay = document.getElementById('referenceOverlay');
        const overlayImg = overlay.querySelector('.overlay-image');
        let scale = 1;
        
        overlayImg.addEventListener('wheel', (e) => {
            e.preventDefault();
            scale = Math.min(Math.max(0.5, scale + e.deltaY * -0.01), 3);
            overlayImg.style.transform = `scale(${scale})`;
        });
    
        // Overlay close handlers
        document.querySelector('.close-btn').addEventListener('click', () => {
            overlay.classList.remove('visible');
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') overlay.classList.remove('visible');
        });
    
        // Load and order completed badges
        const badgeContainer = document.querySelector('.badges-container');
        
        // Load puzzles 1-10 in order
        for (let i = 1; i <= 10; i++) {
            if (localStorage.getItem(`puzzle-${i}-completed`)) {
                if (!document.querySelector(`.badge[data-puzzle-id="${i}"]`)) {
                    const badge = document.createElement('div');
                    badge.className = 'badge';
                    badge.dataset.puzzleId = i;
                    badge.style.order = i; // Critical ordering line
                    badge.innerHTML = `
                        <img src="images/puzzle${i}/badge.png" alt="Puzzle ${i} Badge">
                        <span>Level ${i}</span>
                    `;
                    badgeContainer.appendChild(badge);
                }
            }
        }
    
        // Check and add victory badge (order: 11)
        const allCompleted = Array.from({length: 10}, (_, i) => i + 1)
            .every(i => localStorage.getItem(`puzzle-${i}-completed`));
            
        if (allCompleted && !document.querySelector('.badge[data-puzzle-id="11"]')) {
            const victoryBadge = document.createElement('div');
            victoryBadge.className = 'badge';
            victoryBadge.dataset.puzzleId = '11';
            victoryBadge.style.order = '11'; // Ensures it appears last
            victoryBadge.innerHTML = `
                <img src="images/puzzle11/badge.png" alt="Victory Badge">
                <span>Master Gardener</span>
            `;
            badgeContainer.appendChild(victoryBadge);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    PuzzleGame.initializeAll();
});
