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
// Wild Card surprise roles
const SURPRISE_ROLES = [
  "Animal Handler",
  "Seductress",
  "Demolitions Expert",
  "Social Engineer",
  "Impersonator",
  "Pyromaniac",
  "Drone Operator",
  "Escape Artist",
  "Cryptozoologist",
  "Conspiracy Theorist",
  "Forensic Botanist",
  "Pickpocket",
  "Urban Explorer",
  "Hypnotist",
  "Shadow Puppeteer",
  "Mime",
  "Ventriloquist",
  "Acrobat",
  "Street Magician",
  "Dumpster Diver",
  "Lockpicker-in-Training",
  "Art Forger",
  "Puzzle Master",
  "Tattoo Decoder",
  "Night Vision Specialist",
  "Smokescreen Expert",
  "Crowd Distraction Coordinator",
  "Psychic Medium",
  "Burglar Alarm Whisperer",
  "Counterfeit Chef"
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
    "Gods/Goddesses", "Big things (real)", "Holiday Related Entities", "Stupid People", "Smart People"];

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
const playerNamesContainer = document.getElementById("player-names-container");

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

const wildcardContainer = document.createElement("div");
wildcardContainer.id = "wildcard-container";
wildcardContainer.className = "Hider"; // hidden initially
wildcardContainer.style = `
  position: fixed; top: 10%; left: 50%; transform: translateX(-50%);
  background: white; border: 3px solid #cc00cc; padding: 1.5rem; max-width: 320px;
  box-shadow: 0 0 10px #cc00cc;
  z-index: 1000;
`;
wildcardContainer.innerHTML = `
  <h2>🃏 Wild Card Round Reveal</h2>
  <p id="wildcard-message"></p>
  <button id="wildcard-close-btn" class="btn-primary">Continue</button>
`;
document.body.appendChild(wildcardContainer);

const wildcardMessageP = document.getElementById("wildcard-message");
const wildcardCloseBtn = document.getElementById("wildcard-close-btn");
const mindgamesSection = document.getElementById("mindgames-section");
const mindgamesEntryArea = document.getElementById("mindgames-entry-area");

// State variables
let mindgamesKills = new Set();
let mindgamesCurrentKillerIndex = 0;
let wildcardedRole = null; // keep globally so both finalizeDraft and alert can access

let playerCount = 3;
let players = [];
let categories = [];
let useCustomCategory = true;
let customCategoryName = "";

let scenario = "";
let scenarioRevealed = false;
let draftData = [];
let currentRound = 0;
let currentPickInRound = 0;

function generateNameInputs() {
  const count = parseInt(playerCountInput.value, 10);
  if (isNaN(count) || count < 2 || count > 6) return;

  playerNamesContainer.innerHTML = ""; // Clear existing inputs
  for (let i = 0; i < count; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Player ${i + 1} Name`;
    input.className = "player-name";
    input.dataset.index = i;
    input.required = true;
    input.style.margin = "0.25em";
    playerNamesContainer.appendChild(input);
  }
}

function prepareMindGamesKillPhase() {
  mindgamesKills.clear();
  mindgamesCurrentKillerIndex = 0;
  mindgamesEntryArea.innerHTML = "";
  showScreen(mindgamesSection);
  enterNextKill();
}

function enterNextKill() {
  mindgamesEntryArea.innerHTML = "";

  if (mindgamesCurrentKillerIndex >= playerCount) {
    showScreen(draftSection);
    return;
  }

  const prompt = document.createElement("p");
  prompt.textContent = `Player ${mindgamesCurrentKillerIndex + 1} (${players[mindgamesCurrentKillerIndex]}), enter your secret “kill” (don’t let others see):`;

  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Secret character name";
  input.id = "mindgames-kill-input";
  input.name = "mindgames-kill-input";
  input.autocomplete = "off";
  input.required = true;

  const button = document.createElement("button");
  button.className = "btn-primary";
  button.textContent = "Confirm (pass phone)";
  button.onclick = () => {
    const value = input.value.trim().toLowerCase();
    if (!value) return alert("Please enter a character to kill.");
    mindgamesKills.add(value);
    mindgamesCurrentKillerIndex++;
    enterNextKill();
  };

  mindgamesEntryArea.appendChild(prompt);
  mindgamesEntryArea.appendChild(input);
  mindgamesEntryArea.appendChild(button);
  input.focus();
}



function getPickOrder(round) {
  return round % 2 === 0
    ? [...Array(playerCount).keys()]
    : [...Array(playerCount).keys()].reverse();
}

function initPlayers(count) {
  const nameInputs = document.querySelectorAll(".player-name");
  players = Array.from({ length: count }, (_, i) => {
    const name = nameInputs[i]?.value.trim();
    return name || `Player ${i + 1}`;
  });
}


function initDraftData() {
  draftData = Array.from({ length: 6 }, (_, r) =>
    Array.from({ length: playerCount }, () => ({
      role: ROLES[r],
      category: categories[r],
      character: ""
    }))
  );
}

function updateCategoryInputState() {
  const choice = getCategoryChoice();
  customCategoryInput.disabled = choice !== "custom";
  customCategoryInput.required = choice === "custom";
}
generateNameInputs();

function getCategoryChoice() {
  return Array.from(categoryChoiceRadios).find(r => r.checked)?.value || "custom";
}

function showScreen(screen) {
  [setupSection, draftSection, finalizeSection, mindgamesSection].forEach(s =>
    s.classList.toggle("active", s === screen)
  );
}

function buildDraftTable() {
  while (draftTableHead.children.length > 1) {
    draftTableHead.removeChild(draftTableHead.lastChild);
  }
  draftTableBody.innerHTML = "";

  for (let p = 0; p < playerCount; p++) {
    const th = document.createElement("th");
    th.textContent = players[p];
    th.classList.add("player-header");
    draftTableHead.appendChild(th);
  }

  for (let r = 0; r < 6; r++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = `Round ${r + 1} : ${ROLES[r]}`;
    th.classList.add("role-name");
    tr.appendChild(th);

    for (let p = 0; p < playerCount; p++) {
      const td = document.createElement("td");
      td.dataset.round = r;
      td.dataset.player = p;
      tr.appendChild(td);
    }
    draftTableBody.appendChild(tr);
  }
}

function updateDraftTable() {
  draftTableBody.querySelectorAll("td.current-pick").forEach(cell =>
    cell.classList.remove("current-pick")
  );

  for (let r = 0; r < 6; r++) {
    for (let p = 0; p < playerCount; p++) {
      const td = draftTableBody.querySelector(`td[data-round="${r}"][data-player="${p}"]`);
      td.textContent = draftData[r][p].character || "";
    }
  }

  const pickOrder = getPickOrder(currentRound);
  const currentPlayerIndex = pickOrder[currentPickInRound];
  const currentTd = draftTableBody.querySelector(`td[data-round="${currentRound}"][data-player="${currentPlayerIndex}"]`);
  currentTd?.classList.add("current-pick");

  draftTableHead.querySelectorAll("th.player-header").forEach((th, p) => {
    th.classList.remove("player-left", "player-right");
  });

  const directionClass = currentRound % 2 === 0 ? "player-left" : "player-right";
  draftTableHead.querySelectorAll("th.player-header").forEach(th =>
    th.classList.add(directionClass)
  );
}

function updateDraftInfo() {
  const pickOrder = getPickOrder(currentRound);
  const currentPlayerIndex = pickOrder[currentPickInRound];
  currentPlayerSpan.textContent = players[currentPlayerIndex];
  currentRoleSpan.textContent = ROLES[currentRound];
  currentCategorySpan.textContent = categories[currentRound];
  inputRoleSpan.textContent = ROLES[currentRound];
}

function revealScenario() {
  scenarioRevealed = true;
  scenarioDiv.textContent = scenario;
  scenarioDiv.classList.replace("hidden", "visible");
  scenarioContainer.classList.remove("hidden");
}

function allPicksDone() {
  return currentRound === 6;
}

function finalizeDraft() {
  wildcardContainer.classList.add("Hider");  // hide at start, just in case

  // Apply Wild Card role swap after draft ends
  wildcardedRole = null;
  if (isModeActive("wildcard")) {
    const replaceIndex = Math.floor(Math.random() * ROLES.length);
    const newRole = SURPRISE_ROLES[Math.floor(Math.random() * SURPRISE_ROLES.length)];
    wildcardedRole = newRole;

    for (let p = 0; p < playerCount; p++) {
      draftData[replaceIndex][p].role = newRole;
    }

    ROLES[replaceIndex] = newRole;
  }

  // If Wild Card is active, show alert first
  if (wildcardedRole) {
    wildcardMessageP.textContent = `One traditional role was replaced with a surprise twist: "${wildcardedRole}". Get ready to see your final crews!`;
    wildcardContainer.classList.remove("Hider");
    draftSection.style.display = "none";  // hide draft screen during alert

    wildcardCloseBtn.onclick = () => {
      wildcardContainer.classList.add("Hider");
      showFinalizeScreen();
    };
  } else {
    showFinalizeScreen();
  }
}


function showFinalizeScreen() {
  showScreen(finalizeSection);
  draftSection.style.display = ""; // restore draft section display

  finalCrewsDiv.innerHTML = "";

  for (let p = 0; p < playerCount; p++) {
    const crewDiv = document.createElement("div");
    crewDiv.className = "crew-block";
    crewDiv.innerHTML = `<h3>${players[p]}'s Heist Crew</h3>`;
    for (let r = 0; r < 6; r++) {
      const { role, category, character } = draftData[r][p];
      const roleLine = document.createElement("p");
const isKilled = draftData[r][p].killed;
const killedTag = isKilled ? ` <span class="killed-tag">(💀 KILLED)</span>` : "";
roleLine.innerHTML = `<span class="crew-role">${role}:</span> <span class="crew-character">${character}</span>${killedTag}${useCustomCategory ? "" : ` — ${category}`}`;
      crewDiv.appendChild(roleLine);
    }
    finalCrewsDiv.appendChild(crewDiv);
  }

  finalScenarioDiv.textContent = scenario;

  // Build the ChatGPT prompt text (unchanged, omitted here for brevity)
  buildChatGPTPrompt();
}

// Helper function to build prompt (extracted for cleanliness)
function buildChatGPTPrompt() {
  let prompt = `
Evaluate the following Heist Crews with precision. For each crew member, assign a 'Heist Score' (OVR rating) from 0–100 based on:

- Role Fit (40%) — How well they fulfill their specific role.
- Realism (30%) — How plausible or tactically sound their inclusion is.
- Creativity / Fun Factor (30%) — Uniqueness, charm, or surprise element.

Then, do the following:

1. 🏆 Rank all crews from strongest to weakest with total crew scores.
2. 🔥 Identify the top 5–10 best picks that were missed (“Heist Snubs”) with reasons.
3. 🎭 Simulate an 'heist off' between the two crews that lasts 10 short numbered lines where anything can happen, the heist scenario greatly affecting this.
4. 🧪 Bonus: Evaluate team chemistry, MVP of the heist, and give each team a codename.

Be stylish, punchy, and format results clearly—optimized for both desktop and mobile. Use bullet points, spacing, and emojis where helpful.\n\n`;

  if (useCustomCategory) {
    prompt += `Category: ${customCategoryName}\n\n`;
  }

  prompt += `Here are the crews:\n\n`;
  if (isModeActive("mindgames") && mindgamesKills.size > 0) {
  const killList = [...mindgamesKills].map(k => `"${k}"`).join(", ");
  prompt += `⚠️ Mind Games Mode is active. The following characters were secretly killed before the draft: ${killList}.\nIf any were drafted, reduce their score by 50 points.\n\n`;
}

  if (wildcardedRole) {
    prompt += `🃏 Note: The Wild Card Round replaced one traditional role with a surprise twist: "${wildcardedRole}".\n\n`;
  }

  for (let p = 0; p < playerCount; p++) {
    prompt += `${players[p]}:\n`;
    for (let r = 0; r < 6; r++) {
      const { role, category, character } = draftData[r][p];
      const catInfo = useCustomCategory ? "" : ` — ${category}`;
      prompt += `- ${role}: ${character}${catInfo}\n`;
    }
    prompt += "\n";
  }

  prompt += `The heist scenario: ${scenario}`;
  chatgptPromptPre.textContent = prompt;
}


function copyPromptToClipboard() {
  navigator.clipboard.writeText(chatgptPromptPre.textContent)
    .then(() => {
      copyPromptBtn.textContent = "Copied!";
      setTimeout(() => copyPromptBtn.textContent = "Copy", 1500);
    })
    .catch(() => alert("Failed to copy prompt. Please copy manually."));
}
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
setupForm.addEventListener("submit", e => {
  e.preventDefault();
  const count = parseInt(playerCountInput.value, 10);
  if (isNaN(count) || count < 2 || count > 6) return alert("Enter 2–6 players.");
  playerCount = count;

  useCustomCategory = getCategoryChoice() === "custom";
  if (useCustomCategory) {
    const cat = customCategoryInput.value.trim();
    if (!cat) return alert("Enter a custom category.");
    customCategoryName = cat;
    categories = Array(6).fill(customCategoryName);
  } else {
    categories = shuffleArray(RANDOM_CATEGORIES).slice(0, 6);
  }

  initPlayers(playerCount);
  initDraftData();

  scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  scenarioRevealed = false;
  scenarioDiv.classList.add("hidden");
  scenarioDiv.classList.remove("visible");
  scenarioContainer.classList.add("hidden");

  buildDraftTable();
  updateDraftTable();

  currentRound = 0;
  currentPickInRound = 0;

  updateDraftInfo();
  characterInput.value = "";
  characterInput.focus();
if (isModeActive("mindgames")) {
  prepareMindGamesKillPhase();
} else {
  showScreen(draftSection);
}
});
// Mode checkboxes
const modeCheckboxes = document.querySelectorAll('input[name="xtra-mode"]');

modeCheckboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    if (cb.value === "none" && cb.checked) {
      modeCheckboxes.forEach(other => {
        if (other.value !== "none") other.checked = false;
      });
    } else if (cb.checked) {
      modeCheckboxes.forEach(other => {
        if (other.value === "none") other.checked = false;
      });
    }
  });
});

function isModeActive(modeName) {
  return Array.from(modeCheckboxes).some(cb => cb.checked && cb.value === modeName);
}

categoryChoiceRadios.forEach(radio => radio.addEventListener("change", updateCategoryInputState));
updateCategoryInputState();

pickForm.addEventListener("submit", e => {
  e.preventDefault();
  const charName = characterInput.value.trim();
  if (!charName) return alert("Enter a character name.");

  const lowerName = charName.toLowerCase();
  for (let r = 0; r < 6; r++) {
    for (let p = 0; p < playerCount; p++) {
      if (draftData[r][p].character.toLowerCase() === lowerName) {
        return alert("That pick has already been taken.");
      }
    }
  }

  const pickOrder = getPickOrder(currentRound);
  const playerIndex = pickOrder[currentPickInRound];

  draftData[currentRound][playerIndex].character = charName;
  // Tag pick if it's killed
if (isModeActive("mindgames") && mindgamesKills.has(lowerName)) {
  draftData[currentRound][playerIndex].killed = true;
}

  currentPickInRound++;
  if (currentPickInRound >= playerCount) {
    currentPickInRound = 0;
    currentRound++;
  }

  updateDraftTable();
  if (!scenarioRevealed && currentRound >= 2) revealScenario();

  if (currentRound >= 6) {
    pickForm.style.display = "none";
    if (!document.getElementById("finalize-btn")) {
      const finalizeBtn = document.createElement("button");
      finalizeBtn.id = "finalize-btn";
      finalizeBtn.className = "btn-primary";
      finalizeBtn.textContent = "Finalize";
      finalizeBtn.style.marginTop = "1rem";
      draftSection.appendChild(finalizeBtn);
      finalizeBtn.addEventListener("click", finalizeDraft);
    }
  } else {
    updateDraftInfo();
    characterInput.value = "";
    characterInput.focus();
  }
});

copyPromptBtn.addEventListener("click", copyPromptToClipboard);
const editPromptBtn = document.getElementById("edit-prompt-btn");

editPromptBtn.addEventListener("click", () => {
  const isEditable = chatgptPromptPre.contentEditable === "true";
  chatgptPromptPre.contentEditable = isEditable ? "false" : "true";
  chatgptPromptPre.focus();
  editPromptBtn.textContent = isEditable ? "Edit" : "Lock";
});