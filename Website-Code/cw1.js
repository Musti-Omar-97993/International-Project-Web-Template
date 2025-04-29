const puzzles = [
    ["hydroponics", "nutrients", "growlight", "phmeter", "aeration", "drip", "ebbflow", "reservoir", "waterpump", "rockwool", "cococoir", "netpot", "chlorosis", "photosynthesis", "transpiration", "conductivity", "germination", "aquaponics", "roots", "solenoid", "humidity", "fertilizer"],
    ["solution", "bucket", "support", "light", "pvcpipe", "oxygen", "moisture", "monitor", "automation", "controller", "cycle", "fan", "sump", "phup", "phdown", "ecmeter", "greenhouse", "biofilter", "tilapia", "lettuce", "basil", "spinach"],
    ["sensor", "leaf", "stem", "tray", "sprayer", "growbed", "overflow", "substrate", "chlorine", "waterlevel", "drain", "rootsystem", "transplant", "timer", "ledpanel", "growthrate", "cabbage", "parsley", "systemic", "disease", "algae", "bacteria"],
    ["inflow", "outflow", "timerrelay", "floatvalve", "nutrientmix", "solarpanel", "powersupply", "current", "voltage", "electrode", "microcontroller", "arduino", "raspberry", "bluetooth", "wifi", "cloud", "logdata", "visualization", "history", "analytics", "mqtt", "iot"],
    ["bioavailability", "macronutrient", "micronutrient", "deficiency", "toxicity", "uptake", "assimilation", "buffering", "solutiontemp", "calibration", "drainage", "porosity", "capillarity", "evaporation", "precipitate", "mixratio", "circulation", "chloride", "carbonate", "acid", "alkaline", "neutral"]
  ];
  
  // Precompute all words for fast lookup
  const wordSet = new Set(puzzles.flat().map(w => w.toLowerCase()));
  
  // Load sound effect
  const wordFoundSound = new Audio('https://www.soundjay.com/human/sounds/applause-8.mp3');
  
  const gridSize = 22;
  const cellSize = 30;
  
  function createPuzzle(words, index) {
    const container = document.createElement("div");
container.classList.add("puzzle");

// Add heading
const heading = document.createElement("h3");
heading.style.marginTop = "0";
heading.style.marginBottom = "10px";
heading.style.color = "#2c3e50";
heading.style.fontWeight = "600";

switch(index) {
  case 0:
    heading.innerText = "Puzzle Level 1: Hydroponics Basics";
    break;
  case 1:
    heading.innerText = "Puzzle Level 2: Systems & Components";
    break;
  case 2:
    heading.innerText = "Puzzle Level 3: Sensors & Environment";
    break;
  case 3:
    heading.innerText = "Puzzle Level 4: Electronics & IoT";
    break;
  case 4:
    heading.innerText = "Puzzle Level 5: Nutrients & Chemistry";
    break;
  default:
    heading.innerText = `Puzzle Level ${index + 1}`;
}

container.appendChild(heading);

const canvas = document.createElement("canvas");
    canvas.width = gridSize * cellSize;
    canvas.height = gridSize * cellSize;
    canvas.classList.add("crossword");
    container.appendChild(canvas);
  
    // Timer UI
    const timerEl = document.createElement("div");
    timerEl.style.marginTop = "10px";
    timerEl.style.fontSize = "18px";
    timerEl.style.color = "#555";
    timerEl.innerText = "Time: 0s";
    container.appendChild(timerEl);
  
    let startTime = null;
    let timerInterval = null;
  
    const wordlist = document.createElement("div");
    wordlist.classList.add("wordlist");
  
    const col1 = document.createElement("ul");
    const col2 = document.createElement("ul");
    col1.classList.add("column");
    col2.classList.add("column");
  
    const listItems = {};
    words.forEach((word, i) => {
      const li = document.createElement("li");
      li.textContent = word;
      li.classList.add("word-item");
      (i < 11 ? col1 : col2).appendChild(li);
      listItems[word] = li;
    });
  
    wordlist.appendChild(col1);
    wordlist.appendChild(col2);
    container.appendChild(wordlist);
  
    // START BUTTON
    const startBtn = document.createElement("button");
    startBtn.innerText = "Start Puzzle";
    startBtn.style.marginTop = "15px";
    startBtn.style.padding = "8px 16px";
    startBtn.style.backgroundColor = "#2196f3";
    startBtn.style.color = "white";
    startBtn.style.border = "none";
    startBtn.style.borderRadius = "6px";
    startBtn.style.cursor = "pointer";
    container.appendChild(startBtn);
  
    // TRY AGAIN BUTTON
    const tryAgainBtn = document.createElement("button");
    tryAgainBtn.innerText = "Try Again";
    tryAgainBtn.style.marginTop = "10px";
    tryAgainBtn.style.padding = "8px 16px";
    tryAgainBtn.style.backgroundColor = "#f44336";
    tryAgainBtn.style.color = "white";
    tryAgainBtn.style.border = "none";
    tryAgainBtn.style.borderRadius = "6px";
    tryAgainBtn.style.cursor = "pointer";
    tryAgainBtn.style.display = "none";
    container.appendChild(tryAgainBtn);
  
    // DOWNLOAD PDF BUTTON
    const pdfBtn = document.createElement("button");
    pdfBtn.innerText = "Download PDF";
    pdfBtn.style.marginTop = "10px";
    pdfBtn.style.padding = "8px 16px";
    pdfBtn.style.backgroundColor = "#4CAF50";
    pdfBtn.style.color = "white";
    pdfBtn.style.border = "none";
    pdfBtn.style.borderRadius = "6px";
    pdfBtn.style.cursor = "pointer";
    container.appendChild(pdfBtn);
  
    document.getElementById("puzzleWrapper").appendChild(container);
  
    const ctx = canvas.getContext("2d");
    const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
    const highlightedCells = [];
    const foundWords = [];
  
    function canPlace(word, row, col, dir) {
      if (dir === "H" && col + word.length > gridSize) return false;
      if (dir === "V" && row + word.length > gridSize) return false;
      for (let i = 0; i < word.length; i++) {
        const char = dir === "H" ? grid[row][col + i] : grid[row + i][col];
        if (char !== "" && char !== word[i].toUpperCase()) return false;
      }
      return true;
    }
  
    function placeWord(word) {
      let placed = false;
      while (!placed) {
        const dir = Math.random() > 0.5 ? "H" : "V";
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        if (canPlace(word, row, col, dir)) {
          for (let i = 0; i < word.length; i++) {
            if (dir === "H") grid[row][col + i] = word[i].toUpperCase();
            else grid[row + i][col] = word[i].toUpperCase();
          }
          placed = true;
        }
      }
    }
  
    words.forEach(placeWord);
  
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (grid[i][j] === "") grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  
    // Store original grid for reset
    const originalGrid = JSON.parse(JSON.stringify(grid));
    const originalListItems = { ...listItems };
  
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 16px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
  
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const match = highlightedCells.find(c => c.row === i && c.col === j);
          ctx.fillStyle = match ? match.color : "#f9f9f9";
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
          ctx.strokeStyle = "#ccc";
          ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
          ctx.fillStyle = "#333";
          ctx.fillText(grid[i][j], j * cellSize + cellSize / 2, i * cellSize + cellSize / 2);
        }
      }
    }
  
    let interactionEnabled = false;
  
    function getPointerCoords(e) {
      const rect = canvas.getBoundingClientRect();
      let x, y;
      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      return {
        col: Math.floor(x / cellSize),
        row: Math.floor(y / cellSize)
      };
    }
  
    let isSelecting = false;
    let startCell = null;
  
    function handleStart(e) {
      if (!interactionEnabled) return;
      e.preventDefault();
      const coords = getPointerCoords(e);
      isSelecting = true;
      startCell = coords;
      canvas.addEventListener("mousemove", handleMove);
      canvas.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
    }
  
    function handleMove(e) {
      if (!isSelecting || !startCell) return;
      e.preventDefault();
      const coords = getPointerCoords(e);
      drawPreviewSelection(startCell, coords);
    }
  
    function handleEnd(e) {
      if (!isSelecting || !startCell) return;
      const coords = getPointerCoords(e);
      const cellsList = getSelectedWord([startCell, coords]);
      const wordStr = cellsList.map(c => grid[c.row][c.col]).join('').toLowerCase();
      const reversedStr = wordStr.split('').reverse().join('');
  
      if ((wordSet.has(wordStr) || wordSet.has(reversedStr)) &&
          !foundWords.includes(wordStr) && !foundWords.includes(reversedStr)) {
        const validWord = wordSet.has(wordStr) ? wordStr : reversedStr;
        foundWords.push(validWord);
        highlightedCells.push(...cellsList.map(c => ({ ...c, color: "lightgreen" })));
        const item = listItems[validWord];
        if (item) item.classList.add("found");
  
        wordFoundSound.currentTime = 0;
        wordFoundSound.play();
  
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
  
        showCelebration(canvas, validWord);
      }
  
      drawGrid();
  
      if (foundWords.length === words.length) {
        clearInterval(timerInterval);
        confetti({
          particleCount: 200,
          spread: 90,
          origin: { y: 0 },
          colors: ['#ff4040', '#4caf50', '#2196f3', '#ffeb3b']
        });
      
        // Trigger badge reward
        updateBadges(index); // Pass current puzzle index
        showCelebration(canvas, "🎉 All Words Found!");
      }
  
      isSelecting = false;
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    }
  
    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("touchstart", handleStart);
  
    function drawPreviewSelection(start, end) {
      drawGrid();
  
      const cellsToHighlight = getSelectedWord([start, end]);
      cellsToHighlight.forEach(c => {
        ctx.fillStyle = "#ddffdd";
        ctx.fillRect(c.col * cellSize, c.row * cellSize, cellSize, cellSize);
        ctx.strokeStyle = "#88cc88";
        ctx.strokeRect(c.col * cellSize, c.row * cellSize, cellSize, cellSize);
        ctx.fillStyle = "#333";
        ctx.fillText(grid[c.row][c.col], c.col * cellSize + cellSize / 2, c.row * cellSize + cellSize / 2);
      });
    }
  
    function getSelectedWord(cells) {
      const [start, end] = cells;
      const cellsList = [];
      if (start.row === end.row) {
        const minCol = Math.min(start.col, end.col);
        const maxCol = Math.max(start.col, end.col);
        for (let c = minCol; c <= maxCol; c++) {
          cellsList.push({ row: start.row, col: c });
        }
      } else if (start.col === end.col) {
        const minRow = Math.min(start.row, end.row);
        const maxRow = Math.max(start.row, end.row);
        for (let r = minRow; r <= maxRow; r++) {
          cellsList.push({ row: r, col: start.col });
        }
      }
      return cellsList;
    }
  
    function showCelebration(canvas, message) {
      const wrapper = canvas.parentNode;
      const msgEl = document.createElement("div");
      msgEl.style.position = "absolute";
      msgEl.style.top = "10px";
      msgEl.style.fontSize = "24px";
      msgEl.style.color = "green";
      msgEl.style.fontWeight = "bold";
      msgEl.style.backgroundColor = "rgba(255,255,255,0.8)";
      msgEl.style.padding = "10px 15px";
      msgEl.style.borderRadius = "8px";
      msgEl.style.zIndex = "10";
      msgEl.style.animation = "fadeSlide 1s ease-out forwards";
      msgEl.innerText = message;
  
      wrapper.style.position = "relative";
      wrapper.appendChild(msgEl);
  
      setTimeout(() => msgEl.remove(), 3000);
    }
  
    function downloadPuzzleAsPDF(container, canvas, wordlist) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'pt', 'a4');
      const scale = 2;
      const width = canvas.width * scale;
      const height = canvas.height * scale;
  
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tCtx = tempCanvas.getContext("2d");
      drawGrid(); 
      tCtx.putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
  
      const img = tempCanvas.toDataURL("image/png");
      doc.setFontSize(18);
      doc.text(`Hydroponics Puzzle #${index + 1}`, 20, 30);
      doc.addImage(img, "PNG", 20, 50, width, height);
  
      let yPos = height + 80;
      const title = "Word List:";
      doc.setFontSize(14);
      doc.text(title, 20, yPos);
      yPos += 20;
  
      const leftList = wordlist.children[0].children;
      const rightList = wordlist.children[1].children;
  
      for (let i = 0; i < Math.max(leftList.length, rightList.length); i++) {
        const l = leftList[i]?.innerText.trim() || "";
        const r = rightList[i]?.innerText.trim() || "";
        doc.text(`${l.padEnd(20)} ${r}`, 20, yPos);
        yPos += 18;
      }
  
      doc.save(`hydroponics-puzzle-${index + 1}.pdf`);
    }
  
    function resetPuzzle() {
      clearInterval(timerInterval);
      timerEl.innerText = "Time: 0s";
      interactionEnabled = false;
  
      foundWords.length = 0;
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          grid[i][j] = originalGrid[i][j];
        }
      }
  
      highlightedCells.length = 0;
  
      Object.values(listItems).forEach(item => {
        if (item.classList.contains("found")) {
          item.classList.remove("found");
        }
      });
  
      drawGrid();
  
      startBtn.style.display = "inline-block";
      tryAgainBtn.style.display = "none";
    }
  
    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none";
      tryAgainBtn.style.display = "inline-block";
  
      resetPuzzle();
  
      startTime = Date.now();
      timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        timerEl.innerText = `Time: ${elapsed}s`;
      }, 1000);
  
      interactionEnabled = true;
    });
  
    tryAgainBtn.addEventListener("click", () => {
      resetPuzzle();
    });
  
    pdfBtn.addEventListener("click", () => downloadPuzzleAsPDF(container, canvas, wordlist));
  
    drawGrid();
  }
  
// ====== DARK MODE TOGGLE ======
const darkModeToggle = document.getElementById("darkMode-icon");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load user preference on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();
});
// ===============================


// ====== BADGE SYSTEM ======
const badgeContainer = document.getElementById("badges");

const badgeData = [
  { id: "puzzle-1", label: "Basics Master" },
  { id: "puzzle-2", label: "System Pro" },
  { id: "puzzle-3", label: "Sensor Expert" },
  { id: "puzzle-4", label: "IoT Builder" },
  { id: "puzzle-5", label: "Chemistry Guru" },
  { id: "all-puzzles", label: "Master Gardener 💚" }
];

// Create and append badges initially
function initBadges() {
  badgeContainer.innerHTML = "";
  badgeData.forEach(badge => {
    const div = document.createElement("div");
    div.className = "badge";
    div.id = badge.id;
    div.textContent = badge.label;
    badgeContainer.appendChild(div);
  });
}

// Check local storage or initialize
let earnedBadges = JSON.parse(localStorage.getItem("earnedBadges")) || [];

function updateBadges(puzzleIndex) {
  const badgeId = `puzzle-${parseInt(puzzleIndex) + 1}`;
  const badgeEl = document.getElementById(badgeId);

  if (!earnedBadges.includes(badgeId)) {
    earnedBadges.push(badgeId);
    badgeEl.classList.add("completed");
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  }

  // Check all puzzles done
  const totalPuzzles = puzzles.length;
  const uniqueEarned = [...new Set(earnedBadges.filter(id => id.startsWith("puzzle-")))];

  if (uniqueEarned.length === totalPuzzles && !earnedBadges.includes("all-puzzles")) {
    earnedBadges.push("all-puzzle");
    const allBadge = document.getElementById("all-puzzles");
    if (allBadge) allBadge.classList.add("completed", "all-completed");
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#ffeb3b', '#4caf50', '#2196f3']
    });
  }

  localStorage.setItem("earnedBadges", JSON.stringify(earnedBadges));
}

// Call initBadges once
initBadges();

// Apply previously earned badges from localStorage
earnedBadges.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("completed");
    if (id === "all-puzzles") el.classList.add("all-completed");
  }
});
// ===============================

  // Initialize puzzles
  puzzles.forEach((words, index) => createPuzzle(words, index));