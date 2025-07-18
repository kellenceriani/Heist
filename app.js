// app.js

// Fixed roles in order
const ROLES = [
  "Mastermind / Leader",
  "Hacker / Tech Expert",
  "Driver / Getaway",
  "Muscle / Enforcer",
  "Safecracker",
  "Lookout"
];

// Predefined random categories per round
const RANDOM_CATEGORIES = [
    "Superheroes", "Mario Characters", "TV Characters", "Dog Breeds", "Famous Scientists",
    "Movie Villains", "Mythical Creatures", "Star Wars Characters", "Pokemon", "NBA players (past/present)",
    "Pixar Characters", "Disney Characters", "Avengers", "DC Characters", "Inanimate Objects",
    "Anime Characters", "Harry Potter Characters", "Marvel Villains", "Cartoon Characters", "Video Game Characters",
    "Famous Artists", "Famous Athletes", "Comedians", "SNL Cast Members", "Rappers",
    "Politicians", "Rock Bands", "Nonfictional Women", "Robots", "Sitcom Characters",
    "Fast Food Chains", "Snacks", "Cereals", "Candies", "Fruits",
    "Vegetables", "Soft Drinks", "Pizza Toppings", "Ice Cream Flavors", "Sandwich Types",
    "Reptiles", "(mostly) White things", "(mostly) orange things", "Mobile Games", "Numbers",
    "Beautiful Things", "Fantasy Book Characters", "RPG Characters", "Baseball Players (Past/Present)", "Girly things",
    "Countries", "Cities", "Landmarks", "Fictional Stupid Characters", "Historical Figures",
    "Inventors (fiction/nonfiction)", "School related things", "Cartoon Network Characters", "Nickelodeon Characters", "Royalty",
    "Nintendo Characters (no pokemon)", "Bird Species", "Insects", "Marine Animals", "Jungle Animals",
    "Animals", "Farm Animals", "Mammals", "Fictional Animals", "Sci-Fi Characters",
    "YouTubers", "Phone Apps", "Influencers", "Sports Movie/Show Characters", "Detriments to Society",
    "Jobs/Occupations", "Fictional Inanimate Objects", "Fictional Women", "Soccer players (past/present)", "NFL players (past/present)",
    "Cars", "Historic Events", "Inventions", "Essential Items/Objects", "Famous Couples",
    "Travel Destinations", "Magic Related things", "Superpowers", "Fictional Locations", "Gross things",
    "Comedians", "Toys", "Cartoon Network Shows", "Nickelodeon Shows", "Fictional Kid Characters",
    "Princesses (fiction & nonfiction)", "Sidekicks", "Monkeys (fiction & nonfiction)", "Movies", "Fantasy Novels",
    "Villains", "Household Items", "Common Names", "Olympic Sports", "Sports Mascots",
    "Gods/Goddesses", "Big things (real)", "Holiday Related Entities", "Stupid People", "Smart People"
  ];

// Hardcoded hidden scenarios
const SCENARIOS = [
  "The heist is underwater",
  "The vault is booby-trapped with lasers",
  "The crew must work during a city-wide blackout",
  "The heist is happening on a moving train",
  "The target is guarded by a secret AI security system",
  "The team has only 10 minutes before the vault resets",
  "The heist location is a floating casino in international waters",
  "Security cameras have facial recognition on all known criminals",
  "The heist must occur during a masquerade ball",
  "The vault is inside an active volcano facility",
  "The guards are trained telepaths",
  "The heist must happen during a live concert",
  "The entire building is invisible except for one hour at midnight",
  "The target is in a skyscraper above the clouds",
  "The vault is inside a prison disguised as a nightclub",
  "The location is patrolled by robotic dogs",
  "The crew must cross an icy mountain pass before reaching the vault",
  "The target is in the middle of a high-speed armored convoy",
  "The getaway route is through underground catacombs",
  "The vault requires biometric data from a celebrity",
  "The crew must infiltrate a secret underwater research base",
  "The building resets its floor layout every 60 seconds",
  "The guards are equipped with jetpacks and EMP rifles",
  "The entire operation must be completed in zero gravity",
  "The vault is accessible only during a solar eclipse",
  "The crew must blend in with a film crew shooting a movie",
  "The location is rigged to explode if sound exceeds 30 decibels",
  "The vault is protected by mythological creatures",
  "The target is suspended in midair inside a glass cube",
  "The getaway vehicles are only accessible via horseback",
  "The crew must survive a sandstorm to reach the vault",
  "The heist takes place during a zombie outbreak",
  "The target is stored on a satellite in Earth's orbit",
  "The vault is inside a theme park controlled by rogue animatronics",
  "The building is submerged in quicksand every hour",
  "The getaway path includes a minefield",
  "The vault is deep inside an enchanted forest that rearranges itself",
  "The heist must happen in the middle of a political summit",
  "The target is surrounded by hallucinogenic gas traps",
  "The crew must compete with a rival heist team mid-mission",
  "All digital tech is disabled — only analog tools work",
  "The vault is buried beneath a massive graveyard",
  "The heist must occur while skydiving onto a blimp",
  "The target is stored inside a cursed sarcophagus",
  "The vault is in the middle of an active battlefield",
  "The entire area is crawling with vampire security",
  "The crew must cross a magical bridge that tests inner fears",
  "The target is stored in a mirror dimension",
  "The guards are clones of the crew members",
  "The vault can only be opened by playing a deadly puzzle game",
  "The heist must happen during a sandstorm on Mars",
  "The building is surrounded by an endless labyrinth",
  "The vault is inside a haunted museum",
  "The escape route is through a sewer system filled with crocodiles",
  "The guards have thermal vision and motion sensors",
  "The target is being auctioned at a high-security black market",
  "The vault is protected by anti-magic wards",
  "The crew must sing a perfect harmony to bypass the door",
  "The target is inside a moving circus caravan",
  "The heist must occur while bungee-jumping into a canyon",
  "The building shifts its position every 5 minutes",
  "The vault is hidden in a giant library with sentient books",
  "The crew must fake a royal wedding to gain access",
  "The location is surrounded by lava and molten rock",
  "The target is locked inside an ancient alien spacecraft",
  "The vault is inside a time-looping hotel",
  "The guards are bulletproof giants",
  "The heist is broadcasted live to a secret audience",
  "The crew must enter and escape with no footprints left behind",
  "The vault is under a palace guarded by mind-controlled civilians",
  "The target is floating in a bubble in the stratosphere",
  "The escape must occur via submarine only",
  "The building has AI that predicts future crew movements",
  "The vault can only be cracked using musical instruments",
  "The location is cursed to trap anyone without a soul",
  "The getaway must happen through virtual reality",
  "The heist must be done while impersonating rival gang leaders",
  "The vault is beneath a frozen lake",
  "The crew has only one shot at accessing the vault due to planetary alignment",
  "The guards are all ghosts from past failed heists",
  "The heist must be done in absolute silence",
  "The vault is inside a drone swarm that never lands",
  "The building is upside-down due to gravity malfunction",
  "The target is inside a dragon's hoard of gold",
  "The entire crew must perform in a talent show to gain access",
  "The location only appears for one hour every 100 years",
  "The vault is being transported by a convoy of war elephants",
  "The target is protected by a cult that worships it",
  "The crew must navigate an underground world filled with mutants",
  "The vault is at the center of an ever-changing maze",
  "The guards are elite telekinetic monks",
  "The getaway must happen through sky tunnels accessible only via wingsuit",
  "The crew must swap the real vault with a perfect replica unnoticed",
  "The heist must happen during a battle between superheroes",
  "The vault is underwater in a shark-infested lagoon",
  "The target is on the moon and must be retrieved with minimal fuel",
  "The building is invisible to non-magical beings",
  "The vault is made of living metal that reacts to emotion",
  "The target is cursed — anyone who touches it is hunted by spirits",
  "The heist must happen while inside a dream",
  "The location is locked in a permanent thunderstorm",
  "The vault is at the heart of a cursed carnival",
  "The guards are possessed dolls with knives",
  "The vault only opens when someone lies convincingly",
  "The heist must be completed while blindfolded",
  "The crew must replace the target with an identical fake within 60 seconds"
];


// DOM references
const setupSection = document.getElementById("setup-section");
const draftSection = document.getElementById("draft-section");
const finalizeSection = document.getElementById("finalize-section");

const setupForm = document.getElementById("setup-form");
const playerCountInput = document.getElementById("player-count");
const customCategoryInput = document.getElementById("custom-category");
const categoryChoiceRadios = document.getElementsByName("category-choice");

const draftTable = document.getElementById("draft-table");
const draftTableHead = draftTable.querySelector("thead tr");
const draftTableBody = draftTable.querySelector("tbody");

const currentPlayerSpan = document.getElementById("current-player");
const currentRoleSpan = document.getElementById("current-role");
const currentCategorySpan = document.getElementById("current-category");

const pickForm = document.getElementById("pick-form");
const characterInput = document.getElementById("character-input");
const inputRoleSpan = document.getElementById("input-role");

const scenarioContainer = document.getElementById("scenario-container");
const scenarioDiv = document.getElementById("scenario");

const finalCrewsDiv = document.getElementById("final-crews");
const finalScenarioDiv = document.getElementById("final-scenario");
const chatgptPromptPre = document.getElementById("chatgpt-prompt");
const copyPromptBtn = document.getElementById("copy-prompt-btn");

// State variables
let playerCount = 3;
let players = []; // ["Player 1", "Player 2", ...]
let categories = []; // array of length 6, each round's category name
let useCustomCategory = true;
let customCategoryName = "";

let scenario = "";
let scenarioRevealed = false;

let draftData = []; 
// Structure: draftData[roundIndex][playerIndex] = { role, category, character (string) }

let currentRound = 0;
let currentPickInRound = 0; // 0-based player index picking in current round

// Snake draft order helper
// returns array of player indices in pick order for given round
function getPickOrder(round) {
  if (round % 2 === 0) {
    // even rounds: left-to-right 0..playerCount-1
    return [...Array(playerCount).keys()];
  } else {
    // odd rounds: right-to-left playerCount-1..0
    return [...Array(playerCount).keys()].reverse();
  }
}

// Initialize players array (e.g. "Player 1")
function initPlayers(count) {
  players = [];
  for (let i = 1; i <= count; i++) {
    players.push(`Player ${i}`);
  }
}

// Initialize draft data with empty picks
function initDraftData() {
  draftData = [];
  for (let r = 0; r < 6; r++) {
    const roundRole = ROLES[r];
    const roundCategory = categories[r];
    draftData[r] = [];
    for (let p = 0; p < playerCount; p++) {
      draftData[r][p] = { role: roundRole, category: roundCategory, character: "" };
    }
  }
}

// Update category input enable/disable based on radio buttons
function updateCategoryInputState() {
  const choice = getCategoryChoice();
  if (choice === "custom") {
    customCategoryInput.disabled = false;
    customCategoryInput.required = true;
  } else {
    customCategoryInput.disabled = true;
    customCategoryInput.required = false;
  }
}

// Get current category choice radio value
function getCategoryChoice() {
  for (const r of categoryChoiceRadios) {
    if (r.checked) return r.value;
  }
  return "custom";
}

// Show only one main screen section at a time
function showScreen(screen) {
  [setupSection, draftSection, finalizeSection].forEach(s => {
    if (s === screen) s.classList.add("active");
    else s.classList.remove("active");
  });
}

// Build the draft table headers and rows with initial empty cells
function buildDraftTable() {
  // Clear previous headers except first
  while (draftTableHead.children.length > 1) {
    draftTableHead.removeChild(draftTableHead.lastChild);
  }
  // Clear body
  draftTableBody.innerHTML = "";

  // Add player headers
  for (let p = 0; p < playerCount; p++) {
    const th = document.createElement("th");
    th.textContent = players[p];
    th.classList.add("player-header");
    draftTableHead.appendChild(th);
  }

  // Add rows for rounds and roles
  for (let r = 0; r < 6; r++) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.textContent = `Round ${r + 1} / ${ROLES[r]}`;
    th.classList.add("role-name");
    tr.appendChild(th);

    for (let p = 0; p < playerCount; p++) {
      const td = document.createElement("td");
      td.dataset.round = r;
      td.dataset.player = p;
      td.textContent = ""; // empty initially
      tr.appendChild(td);
    }
    draftTableBody.appendChild(tr);
  }
}

// Update the draft table UI with current picks and highlights
function updateDraftTable() {
  // Update category header (single row at bottom might be nicer but spec says show all rounds)
  // We'll highlight the current pick cell

  // Clear all current pick highlights first
  draftTableBody.querySelectorAll("td.current-pick").forEach(cell => {
    cell.classList.remove("current-pick");
  });

  // Update all cells text content with current draftData characters
  for (let r = 0; r < 6; r++) {
    for (let p = 0; p < playerCount; p++) {
      const td = draftTableBody.querySelector(`td[data-round="${r}"][data-player="${p}"]`);
      td.textContent = draftData[r][p].character || "";
    }
  }

  // Highlight current pick cell
  const pickOrder = getPickOrder(currentRound);
  const currentPlayerIndex = pickOrder[currentPickInRound];
  const currentTd = draftTableBody.querySelector(`td[data-round="${currentRound}"][data-player="${currentPlayerIndex}"]`);
  if (currentTd) {
    currentTd.classList.add("current-pick");
  }

  // Show snake draft order visually on player headers for current round
  draftTableHead.querySelectorAll("th.player-header").forEach((th, p) => {
    th.classList.remove("player-left", "player-right");
  });
  if (currentRound % 2 === 0) {
    // left-to-right
    for (let p = 0; p < playerCount; p++) {
      draftTableHead.children[p + 1].classList.add("player-left");
    }
  } else {
    // right-to-left
    for (let p = 0; p < playerCount; p++) {
      draftTableHead.children[p + 1].classList.add("player-right");
    }
  }
}

// Update current draft info: player picking, role, category
function updateDraftInfo() {
  const pickOrder = getPickOrder(currentRound);
  const currentPlayerIndex = pickOrder[currentPickInRound];
  currentPlayerSpan.textContent = players[currentPlayerIndex];
  currentRoleSpan.textContent = ROLES[currentRound];
  currentCategorySpan.textContent = categories[currentRound];
  inputRoleSpan.textContent = ROLES[currentRound];
}

// Reveal scenario with dramatic UI effect
function revealScenario() {
  scenarioRevealed = true;
  scenarioDiv.textContent = scenario;
  scenarioDiv.classList.remove("hidden");
  scenarioDiv.classList.add("visible");
  scenarioContainer.classList.remove("hidden");
}

// Check if all picks are completed (all 6 rounds * players)
function allPicksDone() {
  return currentRound === 6;
}

// On finalize, build final crews display and ChatGPT prompt
function finalizeDraft() {
  showScreen(finalizeSection);

  // Display crews by player in role order
  finalCrewsDiv.innerHTML = "";

  for (let p = 0; p < playerCount; p++) {
    const crewDiv = document.createElement("div");
    crewDiv.className = "crew-block";
    crewDiv.innerHTML = `<h3>${players[p]}'s Heist Crew</h3>`;

    for (let r = 0; r < 6; r++) {
      const role = ROLES[r];
      const character = draftData[r][p].character || "[No pick]";
      const roleLine = document.createElement("p");
      roleLine.innerHTML = `<span class="crew-role">${role}:</span> <span class="crew-character">${character}</span>`;
      crewDiv.appendChild(roleLine);
    }
    finalCrewsDiv.appendChild(crewDiv);
  }

  // Display scenario
  finalScenarioDiv.textContent = scenario;

  // Build ChatGPT prompt text
  let prompt = `Evaluate these Heist Crews and assign each drafted member a 'Heist Value' from 0–100 based on realism (40%), usefulness to the role (40%), and creativity/fun factor (20%). Then announce the most capable crew on paper, list 5 characters that were criminally underrated ('Heist Snubs'), and simulate a high-stakes vault heist with dynamic storytelling and a winning crew.\n\nHere are the crews:\n\n`;

  for (let p = 0; p < playerCount; p++) {
    prompt += `${players[p]}:\n`;
    for (let r = 0; r < 6; r++) {
      const role = ROLES[r];
      const character = draftData[r][p].character || "[No pick]";
      prompt += `- ${role}: ${character}\n`;
    }
    prompt += "\n";
  }

  prompt += `The heist scenario: ${scenario}`;

  chatgptPromptPre.textContent = prompt;
}

// Copy ChatGPT prompt to clipboard
function copyPromptToClipboard() {
  navigator.clipboard.writeText(chatgptPromptPre.textContent)
    .then(() => {
      copyPromptBtn.textContent = "Copied!";
      setTimeout(() => copyPromptBtn.textContent = "Copy to ChatGPT", 1500);
    })
    .catch(() => {
      alert("Failed to copy prompt. Please copy manually.");
    });
}

// Handle setup form submission
setupForm.addEventListener("submit", e => {
  e.preventDefault();

  // Read player count, validate
  const count = parseInt(playerCountInput.value, 10);
  if (isNaN(count) || count < 2 || count > 6) {
    alert("Please enter a player count between 2 and 6.");
    return;
  }
  playerCount = count;

  // Determine category choice
  useCustomCategory = getCategoryChoice() === "custom";
  if (useCustomCategory) {
    const cat = customCategoryInput.value.trim();
    if (!cat) {
      alert("Please enter a custom category.");
      return;
    }
    customCategoryName = cat;
    categories = Array(6).fill(customCategoryName);
  } else {
    // Use random predefined categories for each round (shuffle once for variety)
    categories = [...RANDOM_CATEGORIES].slice(0, 6);
  }

  // Initialize players and draft data
  initPlayers(playerCount);
  initDraftData();

  // Pick random scenario hidden for now
  scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  scenarioRevealed = false;
  scenarioDiv.classList.add("hidden");
  scenarioDiv.classList.remove("visible");
  scenarioContainer.classList.add("hidden");

  // Build and update draft table
  buildDraftTable();
  updateDraftTable();

  // Reset draft pointers
  currentRound = 0;
  currentPickInRound = 0;

  // Update draft info
  updateDraftInfo();

  // Clear input field and focus
  characterInput.value = "";
  characterInput.focus();

  // Show draft screen
  showScreen(draftSection);
});

// Enable/disable custom category input dynamically
categoryChoiceRadios.forEach(radio => {
  radio.addEventListener("change", updateCategoryInputState);
});
updateCategoryInputState();

// Handle pick form submission
pickForm.addEventListener("submit", e => {
  e.preventDefault();

  const charName = characterInput.value.trim();
  if (!charName) {
    alert("Please enter a character name.");
    return;
  }

  // Get current player index in snake order
  const pickOrder = getPickOrder(currentRound);
  const playerIndex = pickOrder[currentPickInRound];

  // Save character pick
  draftData[currentRound][playerIndex].character = charName;

  // Move to next pick
  currentPickInRound++;
  if (currentPickInRound >= playerCount) {
    currentPickInRound = 0;
    currentRound++;
  }
  // Update draft table UI
  updateDraftTable();
  // Check scenario reveal condition: after round 2 picks completed (i.e. before round 3)
  if (!scenarioRevealed && currentRound >= 2) {
    revealScenario();
  }

  // If draft complete, show finalize button and hide pick form
  if (currentRound >= 6) {
    // Hide pick form
    pickForm.style.display = "none";

    // Show finalize button (create if needed)
    if (!document.getElementById("finalize-btn")) {
      const finalizeBtn = document.createElement("button");
      finalizeBtn.id = "finalize-btn";
      finalizeBtn.className = "btn-primary";
      finalizeBtn.textContent = "Finalize";
      finalizeBtn.style.marginTop = "1rem";
      draftSection.appendChild(finalizeBtn);

      finalizeBtn.addEventListener("click", () => {
        finalizeDraft();
      });
    }
  } else {
    // Update draft info for next pick
    updateDraftInfo();

    // Clear input and focus for next pick
    characterInput.value = "";
    characterInput.focus();
  }
});

// Copy prompt button event
copyPromptBtn.addEventListener("click", copyPromptToClipboard);

