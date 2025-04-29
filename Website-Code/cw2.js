document.addEventListener('DOMContentLoaded', () => {
    // Initialize all puzzles
    const puzzles = ['puzzle1', 'puzzle2', 'puzzle3', 'puzzle4', 'puzzle5', 'puzzle6'];
    
    puzzles.forEach(puzzleId => {
        const puzzleSection = document.getElementById(puzzleId);
        if (!puzzleSection) return;

        // Initialize cells for this puzzle
        initPuzzleCells(puzzleSection);
        
        // Add check button
        addCheckButton(puzzleSection, puzzleId);
    });

    // Initialize all cells for a puzzle
    function initPuzzleCells(puzzleSection) {
        const cells = puzzleSection.querySelectorAll('.cell:not(.empty)');
        
        cells.forEach(cell => {
            // Clear any existing classes
            cell.classList.remove('correct', 'incorrect');
            
            // Add input event listener
            cell.addEventListener('input', handleCellInput);
            
            // Add keyboard navigation
            cell.addEventListener('keydown', handleCellKeyDown);
            
            // Prevent paste
            cell.addEventListener('paste', (e) => e.preventDefault());
        });
    }

    // Handle cell input
    function handleCellInput(e) {
        const cell = e.target;
        const enteredLetter = cell.value.toUpperCase();
        const expectedLetter = cell.dataset.letter.toUpperCase();
        
        // Clear previous state
        cell.classList.remove('correct', 'incorrect');
        
        if (enteredLetter === '') {
            return;
        }
        
        // Validate input
        if (/^[A-Z]$/.test(enteredLetter)) {
            if (enteredLetter === expectedLetter) {
                cell.classList.add('correct');
                // Auto-move to next cell if correct
                setTimeout(() => moveToNextCell(cell), 10);
            } else {
                cell.classList.add('incorrect');
            }
        } else {
            // Invalid input - clear the cell
            cell.value = '';
        }
    }

    // Handle keyboard navigation
    function handleCellKeyDown(e) {
        const cell = e.target;
        const key = e.key;
        
        switch(key) {
            case 'ArrowRight':
                e.preventDefault();
                moveToNextCell(cell);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                moveToPrevCell(cell);
                break;
            case 'ArrowDown':
                e.preventDefault();
                moveToCellBelow(cell);
                break;
            case 'ArrowUp':
                e.preventDefault();
                moveToCellAbove(cell);
                break;
            case 'Backspace':
                if (cell.value === '') {
                    e.preventDefault();
                    moveToPrevCell(cell);
                }
                break;
            case 'Tab':
                e.preventDefault();
                if (e.shiftKey) {
                    moveToPrevCell(cell);
                } else {
                    moveToNextCell(cell);
                }
                break;
        }
    }

    // Navigation helper functions
    function moveToNextCell(currentCell) {
        const nextCell = getAdjacentCell(currentCell, 1);
        if (nextCell) nextCell.focus();
    }

    function moveToPrevCell(currentCell) {
        const prevCell = getAdjacentCell(currentCell, -1);
        if (prevCell) prevCell.focus();
    }

    function moveToCellBelow(currentCell) {
        const grid = currentCell.closest('.crossword-grid');
        const allCells = Array.from(grid.querySelectorAll('.cell:not(.empty)'));
        const currentIndex = allCells.indexOf(currentCell);
        const columns = getGridColumnCount(grid);
        
        let nextIndex = currentIndex + columns;
        while (nextIndex < allCells.length && allCells[nextIndex].classList.contains('empty')) {
            nextIndex += columns;
        }
        
        if (nextIndex < allCells.length) {
            allCells[nextIndex].focus();
        }
    }

    function moveToCellAbove(currentCell) {
        const grid = currentCell.closest('.crossword-grid');
        const allCells = Array.from(grid.querySelectorAll('.cell:not(.empty)'));
        const currentIndex = allCells.indexOf(currentCell);
        const columns = getGridColumnCount(grid);
        
        let prevIndex = currentIndex - columns;
        while (prevIndex >= 0 && allCells[prevIndex].classList.contains('empty')) {
            prevIndex -= columns;
        }
        
        if (prevIndex >= 0) {
            allCells[prevIndex].focus();
        }
    }

    // Utility functions
    function getAdjacentCell(cell, offset) {
        const allCells = Array.from(cell.parentElement.parentElement.querySelectorAll('.cell:not(.empty)'));
        const currentIndex = allCells.indexOf(cell);
        const adjacentIndex = currentIndex + offset;
        
        if (adjacentIndex >= 0 && adjacentIndex < allCells.length) {
            return allCells[adjacentIndex];
        }
        return null;
    }

    function getGridColumnCount(grid) {
        return parseInt(window.getComputedStyle(grid).gridTemplateColumns.split(' ').length);
    }

    // Add check button to puzzle
    function addCheckButton(puzzleSection, puzzleId) {
        const cluesDiv = puzzleSection.querySelector('.clues');
        if (!cluesDiv) return;
        
        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check Puzzle';
        checkButton.className = 'check-button';
        checkButton.addEventListener('click', () => checkPuzzle(puzzleId));
        cluesDiv.appendChild(checkButton);
    }

    // Check entire puzzle
    function checkPuzzle(puzzleId) {
        const puzzleSection = document.getElementById(puzzleId);
        const cells = puzzleSection.querySelectorAll('.cell:not(.empty)');
        let allCorrect = true;
        let emptyCells = 0;
        
        cells.forEach(cell => {
            const enteredLetter = cell.value.toUpperCase();
            const expectedLetter = cell.dataset.letter.toUpperCase();
            
            cell.classList.remove('correct', 'incorrect');
            
            if (enteredLetter === '') {
                emptyCells++;
                allCorrect = false;
            } else if (enteredLetter === expectedLetter) {
                cell.classList.add('correct');
            } else {
                cell.classList.add('incorrect');
                allCorrect = false;
            }
        });
        
        if (allCorrect) {
            showAlert('🎉 Congratulations! You solved the puzzle correctly!', 'success');
        } else if (emptyCells === cells.length) {
            showAlert('Please fill in some answers before checking.', 'info');
        } else {
            showAlert('Some answers are incorrect. Keep trying!', 'warning');
        }
    }

    // Show alert message
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        
        alertDiv.style.position = 'fixed';
        alertDiv.style.top = '20px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
        alertDiv.style.padding = '15px 25px';
        alertDiv.style.borderRadius = '5px';
        alertDiv.style.backgroundColor = type === 'success' ? '#27ae60' : 
                                        type === 'warning' ? '#f39c12' : '#3498db';
        alertDiv.style.color = 'white';
        alertDiv.style.zIndex = '1000';
        alertDiv.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        alertDiv.style.animation = 'fadeIn 0.3s';
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            alertDiv.style.animation = 'fadeOut 0.3s';
            setTimeout(() => alertDiv.remove(), 300);
        }, 3000);
    }

    // Add CSS for alerts
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateX(-50%) translateY(0); }
            to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
});

// ---------------------
// Dark Mode Toggle
// ---------------------
const darkModeToggle = document.getElementById("darkMode-icon");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Check for user preference on load
window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }
});

// ---------------------
// Badge Management
// ---------------------
const totalPuzzles = 6;
const badgeContainer = document.getElementById("badges-container");

function checkPuzzleCompletion(puzzleId) {
  const inputs = document.querySelectorAll(`#${puzzleId} input[data-letter]`);
  let allCorrect = true;

  inputs.forEach(input => {
    const expectedLetter = input.getAttribute("data-letter").toUpperCase();
    const userLetter = input.value.toUpperCase();
    if (userLetter !== expectedLetter) {
      allCorrect = false;
      return;
    }
  });

  if (allCorrect) {
    saveBadge(puzzleId);
  }

  // Also check if all puzzles are complete
  checkAllBadgesCollected();
}

function saveBadge(puzzleId) {
  const badgeIndex = parseInt(puzzleId.replace("puzzle", ""));
  const badgeKey = `puzzle_${badgeIndex}_completed`;

  if (!localStorage.getItem(badgeKey)) {
    localStorage.setItem(badgeKey, "true");
  }
}

function loadBadges() {
  badgeContainer.innerHTML = "";

  for (let i = 1; i <= totalPuzzles; i++) {
    const badgeKey = `puzzle_${i}_completed`;
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = `Puzzle ${i}`;
    badge.title = `Badge for completing Puzzle ${i}`;

    if (localStorage.getItem(badgeKey)) {
      badge.classList.add("completed");
    } else {
      badge.classList.add("incomplete");
    }

    badgeContainer.appendChild(badge);
  }
}

function checkAllBadgesCollected() {
  let allCompleted = true;
  for (let i = 1; i <= totalPuzzles; i++) {
    if (!localStorage.getItem(`puzzle_${i}_completed`)) {
      allCompleted = false;
      break;
    }
  }

  updateAllPuzzlesBadge(allCompleted);
}

function updateAllPuzzlesBadge(isCompleted) {
  const existingAllBadge = document.querySelector(".badge.all-completed");
  if (isCompleted && !existingAllBadge) {
    const allBadge = document.createElement("div");
    allBadge.className = "badge all-completed";
    allBadge.textContent = "🎉 All Puzzles Completed!";
    allBadge.title = "You completed all puzzles!";
    badgeContainer.appendChild(allBadge);
  } else if (!isCompleted && existingAllBadge) {
    existingAllBadge.remove();
  }
}

// Attach check function to each puzzle button or event you use to validate
document.addEventListener("DOMContentLoaded", () => {
  loadBadges();

  document.querySelectorAll(".check-button").forEach(button => {
    button.addEventListener("click", () => {
      const puzzleSection = button.closest("section[id]");
      if (puzzleSection) {
        checkPuzzleCompletion(puzzleSection.id);
        loadBadges(); // Refresh badge display
      }
    });
  });
});