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

// Wild Card surprise roles (50 realistic heist-viable roles)
const SURPRISE_ROLES = [
  "Social Engineer / Manipulator",
  "Impersonation Specialist",
  "Surveillance Expert",
  "Counter-Surveillance Specialist",
  "Drone Operator",
  "Demolitions Expert",
  "Locksmith",
  "Pickpocket",
  "Forger / Document Specialist",
  "Disguise Artist",
  "Inside Man / Mole",
  "Alarm Systems Specialist",
  "Signal Jammer Operator",
  "Communications Coordinator",
  "Route Planner / Navigator",
  "Urban Explorer / Infiltration Scout",
  "Climbing & Rappelling Specialist",
  "Acrobat / Mobility Expert",
  "Escape & Evasion Specialist",
  "Crowd Distraction Coordinator",
  "Decoy Operator",
  "Night Operations Specialist",
  "Thermal & Night Vision Operator",
  "Smokescreen & Diversion Expert",
  "Vehicle Specialist / Mechanic",
  "Surveillance Camera Looping Specialist",
  "Power Systems Technician",
  "Security Guard Impersonator",
  "Cleaning Crew Impersonator",
  "Fire Suppression Specialist",
  "Logistics & Timing Coordinator",
  "Evidence Removal Specialist",
  "Counter-Forensics Expert",
  "Dumpster Diver / Intel Scavenger",
  "Physical Security Analyst",
  "Door Breaching Specialist",
  "Access Control Specialist",
  "Radio Interception Specialist",
  "Crowbar & Manual Tools Expert",
  "Art Handler / Valuables Specialist",
  "Blackout Operations Expert",
  "Undercover Negotiator",
  "Bribery & Leverage Specialist",
  "Safe Transport Coordinator",
  "Noise Control Specialist",
  "Environmental Systems Specialist (HVAC)",
  "False Emergency Coordinator",
  "Asset Tracking Disabler",
  "Exit Strategy Specialist"
];



// Predefined random categories per round
const RANDOM_CATEGORIES = [
  // Pop Culture & Fiction
  "Superheroes", "Mario Characters", "TV Characters", "Movie Villains", "Mythical Creatures",
  "Star Wars Characters", "Pokemon", "Pokemon Trainers", "Pixar Characters", "Disney Characters",
  "Avengers", "DC Characters", "Anime Characters", "Harry Potter Characters", "Marvel Villains",
  "Cartoon Characters", "Video Game Characters", "Fantasy Book Characters", "RPG Characters",
  "Fictional Stupid Characters", "Cartoon Network Characters", "Nickelodeon Characters",
  "Nintendo Characters (no pokemon)", "Sci-Fi Characters", "Sports Movie/Show Characters",
  "Fictional Inanimate Objects", "Fictional Women", "Fictional Animals", "Fictional Locations",
  "Fictional Kid Characters", "Princesses (fiction & nonfiction)", "Sidekicks", "Villains", "Movies",
  "Fantasy Novels", "Cartoon Network Shows", "Nickelodeon Shows", "Fictional Heroes", "Animated Villains",
  "Disney Villains", "Pixar Villains", "Anime Villains", "Comic Book Characters", "Fictional Families",
  "Fictional Kingdoms", "Fictional Schools", "Video Game Villains", "Indie Game Characters",
  "Movie Heroes", "Fictional Friends", "Sitcom Characters", "Romantic Movie Characters",
  "Horror Movie Characters", "Fictional Detectives", "Mystery Novel Characters", "Supernatural Characters",
  "Fictional Monsters", "Fictional Aliens", "Fictional Robots", "Fictional Vehicles", "Fictional Ships",
  "Fictional Planets", "Fictional Gods", "Fictional Witches", "Fictional Wizards", "Fictional Vampires",
  "Fictional Werewolves", "Fictional Zombies", "Fictional Pirates", "Fictional Soldiers", "Fictional Spies",
  "Fictional Teachers", "Fictional Doctors", "Fictional Lawyers", "Fictional Politicians", "Fictional Villages",
  "Fictional Cities", "Fictional Countries", "Fictional Cultures", "Fictional Languages", "Fictional Jobs",
  "Fictional Celebrities", "Fictional Band Members", "Fictional Singers", "Fictional Dancers", "Fictional Athletes",
  "Fictional Animals (Cartoons)", "Fictional Sidekicks", "Fictional Best Friends", "Fictional Pets",
  "Fictional Rivalries", "Fictional Couples", "Fictional Love Interests", "Fictional Teachers", "Fictional Villain Organizations",
  "Fictional Heroes Teams", "Fictional Schools Clubs", "Fictional Magical Items", "Fictional Weapons", "Fictional Vehicles (Sci-Fi)",
  "Fictional Gadgets", "Fictional Artifacts", "Fictional Magic Spells", "Fictional Quests", "Fictional Adventures",
  "Fictional Games", "Fictional Sports Teams", "Fictional Board Games", "Fictional Card Games", "Fictional Video Game Worlds",
  "Cartoon Animals", "Animated Sidekicks", "Fictional Detectives (Animated)", "Fantasy Villains", "Comic Book Heroes",
  "Classic Literature Characters", "Historical Fiction Characters", "Sci-Fi Novels Characters", "Fantasy Film Characters",
  "Animated Film Villains", "Teen TV Characters", "Supernatural TV Characters", "Animated TV Sidekicks",
  "Video Game Bosses", "Legendary Heroes", "Legendary Monsters", "Mythical Gods", "Anime Sidekicks",

  // Real People & Occupations
  "Famous Scientists", "NBA players (past/present)", "Famous Artists", "Famous Athletes", "Comedians",
  "SNL Cast Members", "Rappers", "Politicians", "Historical Figures", "Inventors (fiction/nonfiction)",
  "YouTubers", "Influencers", "Jobs/Occupations", "Soccer players (past/present)", "NFL players (past/present)",
  "Famous Couples", "Stupid People", "Smart People", "Famous Actors", "Famous Actresses",
  "Famous Musicians", "Famous Directors", "Famous Authors", "Famous Chefs", "Famous Singers",
  "Famous Dancers", "Famous TV Hosts", "Famous Reality Stars", "Famous Entrepreneurs", "Famous Models",
  "Famous Explorers", "Famous Inventors", "Famous Athletes (Olympics)", "Famous Politicians (Modern)", "Famous Politicians (Historical)",
  "Famous Composers", "Famous Painters", "Famous Architects", "Famous Engineers",
  "Famous Fashion Designers", "Famous CEOs", "Famous Environmentalists", "Famous Directors (Animated)", "Famous Stage Actors",
  "Famous Singers (Pop)", "Famous Singers (Rock)", "Famous Singers (Classical)", "Famous Comedians (Standup)", "Famous Comedians (TV)",
  "Influential Philosophers", "Famous Inventors (Modern)", "Historical Leaders", "Famous Athletes (Team Sports)", "Famous Athletes (Individual Sports)",

  // Animals & Nature
  "Dog Breeds","Bird Species","Insects","Marine Animals","Jungle Animals","Animals",
  "Farm Animals","Mammals","Reptiles","Monkeys (fiction & nonfiction)", "Endangered Animals", "Ocean Creatures", "Forest Animals",
  "Desert Animals", "Arctic Animals", "Pet Animals", "Wild Cats", "Big Dogs", "Small Dogs", "Exotic Birds",
  "Famous Horses", "Aquatic Mammals", "Amphibians", "Predators", "Herbivores", "Carnivores", "Flying Insects", "Butterflies",
  "Endangered Birds", "Exotic Reptiles", "Rare Fish", "Jungle Birds", "Pet Fish", "Domesticated Cats", "Big Cats",

  // Food & Drink
  "Fast Food Chains","Snacks","Cereals","Candies","Fruits","Vegetables","Soft Drinks",
  "Pizza Toppings","Ice Cream Flavors","Sandwich Types","Breakfast Foods","Desserts","Pastries","International Cuisine",
  "Spices & Herbs","Coffee & Tea","Alcoholic Beverages","Sushi Types","Chocolate Brands","Candy Bars","Street Food","Soups & Stews",
  "Pasta Types","Cheeses","Bread Types","Fried Foods","Healthy Snacks","Grains & Legumes","Sauces & Condiments","Seafood Types",
  "Fruits (Tropical)", "Vegetables (Leafy)", "Beverages (Non-Alcoholic)", "Beverages (Alcoholic)", "Smoothies",

  // Places & Travel
  "Countries","Cities","Landmarks","Travel Destinations","Historic Events","Famous Mountains","Famous Rivers","Famous Lakes",
  "Famous Islands","National Parks","Famous Streets","Capitals","Tourist Attractions","Ancient Ruins","UNESCO Sites",
  "Fictional Locations (Movies)","Fictional Locations (Books)","Fictional Locations (Games)","Space Locations","Underwater Locations",
  "Famous Buildings","Castles","Palaces","Temples","Bridges","Amusement Parks",

  // Miscellaneous Objects & Concepts
  "Inanimate Objects","Beautiful Things","Numbers","Detriments to Society","Essential Items/Objects",
  "Magic Related things","Superpowers","Gross things","Household Items","Common Names",
  "Big things (real)","Holiday Related Entities","School related things","Cars","Inventions",
  "Tools & Gadgets", "Technology Devices", "Ancient Artifacts", "Modern Weapons", "Musical Instruments", "Famous Paintings",
  "Famous Sculptures", "Board Games", "Card Games", "Video Games", "Internet Memes", "TikTok Trends", "YouTube Trends",
  "Fashion Items", "Luxury Brands", "Fictional Artifacts", "Science Concepts", "Mathematical Concepts",

  // Sports & Games
  "Olympic Sports", "Sports Mascots", "Baseball Players (Past/Present)", "Retired Soccer Players", "Basketball Players", "Football Teams", "NFL Players", "NBA Players", "Tennis Players", "Golfers", "Olympic Records", "Famous Coaches", "Soccer Teams", "Hockey Teams", "Olympic Cities", "Boxing Champions", "Martial Arts Styles", "Famous Referees", "Sports Stadiums", "Esports Games", "Video Game Characters (Sports)", "Gymnastics Moves", "Olympic Events (Winter)", "Cricket Players", "Olympic Events (Summer)", "Famous Swimmers", "Marathon Runners", "Extreme Sports", "Table Tennis Players", "Famous Coaches",
  "Chess Players","Esports Teams","Famous Gymnasts","Famous Skiers","Famous Snowboarders","Professional Wrestlers","MMA Fighters","Race Car Drivers","Cyclists","Surfing Legends","Skateboarders",

  // Colors & Fun
  "(mostly) White things", "(mostly) Orange things", "(mostly) Black things", "(mostly) Red things", "(mostly) Blue things", "(mostly) Green things", "(mostly) Yellow things", "(mostly) Purple things", "(mostly) Pink things", "(mostly) Brown things", "(mostly) Gray things", "(mostly) Gold things", "(mostly) Silver things", "(mostly) Transparent things", "(mostly) Rainbow-colored things",
  "Mobile Games","Girly things","Unusual Objects","Funny Objects","Tiny Things","Giant Things","Miniature Items","Rare Items","Luxury Items","Cheap Items","Collectibles","Toys","Board Games (Classic)","Card Games (Classic)","Retro Electronics","Retro Games","Oddly Specific Items","Viral Internet Trends",

  // Alphabet
  "Things that start with 'A'", "Things that start with 'B'", "Things that start with 'C'", "Things that start with 'D'", "Things that start with 'E'", "Things that start with 'F'", "Things that start with 'G'", "Things that start with 'H'", "Things that start with 'I'", "Things that start with 'J'", "Things that start with 'K'", "Things that start with 'L'", "Things that start with 'M'", "Things that start with 'N'", "Things that start with 'O'", "Things that start with 'P'", "Things that start with 'Q'", "Things that start with 'R'", "Things that start with 'S'", "Things that start with 'T'", "Things that start with 'U'", "Things that start with 'V'", "Things that start with 'W'", "Things that start with 'X'", "Things that start with 'Y'", "Things that start with 'Z'",

  // Numbers
  "Fictional characters with an iconic number", "Years", "Famous Ages", "Sports Jersey Numbers", "Historical Dates", "Numbers in Science", "Mathematical Constants"
];



// Hardcoded hidden scenarios
const SCENARIOS = [
  "The environment nullifies characters who require air or surface breathing",
  "Security systems punish characters who rely on direct line-of-sight movement",
  "The area disables abilities dependent on electrical power or light",
  "The target never stops moving, disadvantaging anyone who needs setup time",
  "An unseen intelligence adapts specifically to predictable behavior patterns",
  "Only characters who can act instantly will succeed — hesitation causes failure",
  "The location exists outside any national law, negating authority or status-based access",
  "Identity recognition systems expose anyone with a known face or reputation",
  "Access requires concealing one’s true identity flawlessly at all times",
  "Extreme heat conditions overwhelm characters vulnerable to temperature shifts",
  "Mental privacy is impossible — thoughts can be sensed if unguarded",
  "Massive noise and crowds disrupt characters who rely on focus or stealth",
  "Visibility is unreliable, disadvantaging those who depend on sight",
  "Low-oxygen conditions weaken characters adapted to normal atmospheres",
  "Freedom of movement is restricted, punishing characters who rely on agility",
  "Automated predators track non-organic or heavily augmented beings",
  "Cold exposure cripples characters with poor endurance or circulation",
  "The target is shielded by constant motion and layered defenses",
  "Escape routes favor those comfortable underground or in confined spaces",
  "Access requires mimicking another being’s biology or identity",
  "Pressure conditions punish characters not built for deep environments",
  "The layout constantly changes, defeating memory-based navigation",
  "High-altitude combat favors aerial or lightweight characters",
  "Zero-gravity conditions disrupt balance-reliant or grounded fighters",
  "Timing is cosmic — only characters aligned with celestial cycles benefit",
  "Social blending is mandatory; outsiders are immediately detected",
  "Sound sensitivity punishes loud movement, speech, or combat styles",
  "Non-human entities guard the area, targeting those they instinctively distrust",
  "The target cannot be touched directly without triggering defenses",
  "Transportation requires bonding with or controlling living mounts",
  "Environmental hazards obscure vision, scent, and sound simultaneously",
  "Infection risks penalize characters without immunity or resistance",
  "The target exists beyond the planet, limiting physically bound characters",
  "Uncanny mascots react violently to anything they deem unnatural",
  "Unstable ground punishes heavy or stationary characters",
  "Escape paths demand precise awareness and spatial calculation",
  "The terrain actively resists unfamiliar or invasive presences",
  "Political neutrality is impossible; affiliations become liabilities",
  "Chemical exposure distorts perception and emotional control",
  "A rival team mirrors the crew’s skillset, neutralizing specialists",
  "Technology-dependent characters lose all advantages",
  "Sacred ground reacts negatively to the living, the dead, or the augmented",
  "Aerial insertion favors fearless or reckless characters",
  "Ancient curses target those with violent pasts or stolen power",
  "Active warfare overwhelms characters unused to chaos",
  "Predatory beings hunt based on blood, heat, or fear",
  "Internal fears manifest physically against the crew",
  "Reality reflections expose flaws in identity and self-perception",
  "Opponents share faces, voices, or abilities with the crew",
  "Progress requires logic, sacrifice, or moral compromise",
  "Harsh planetary conditions punish biological fragility",
  "Spatial logic loops punish linear thinkers",
  "Residual spirits target those with guilt or unfinished business",
  "Escape requires leaving no physical, digital, or metaphysical trace",
  "Authority figures are controlled, making leadership a liability",
  "Thin atmosphere weakens strength-based or heavy characters",
  "Extraction is impossible without aquatic adaptation",
  "Predictive systems exploit characters who rely on habits",
  "Success depends on creative expression, not force",
  "Soulless entities pass freely — others are detained",
  "Reality fractures into simulations, disorienting the grounded",
  "Deception is required; honesty becomes a weakness",
  "Environmental cold drains stamina and slows reaction time",
  "Fate allows only a single attempt — no retries, no rewinds",
  "Opponents cannot be harmed by conventional means",
  "Absolute silence is enforced — even breathing matters",
  "The target is never stationary, denying physical access",
  "Gravity reversals punish spatially rigid characters",
  "Greed-reactive defenses attack based on desire or intent",
  "Participation is mandatory performance, not infiltration",
  "The location exists briefly, punishing slow preparation",
  "Living transport reacts aggressively to fear or hostility",
  "The target’s defenders gain strength from belief",
  "Radiation and mutation threaten unadapted biology",
  "Paths rearrange based on emotional state",
  "Opponents wield force without physical contact",
  "Escape requires unassisted flight or controlled descent",
  "Detection triggers if the original object is not replaced",
  "Collateral damage draws overwhelming retaliation",
  "Aquatic predators target wounded or panicked characters",
  "Low-gravity physics punish inefficient movement",
  "Magic perception gates deny entry to the mundane",
  "The vault responds emotionally to hostility or fear",
  "The artifact marks anyone who claims ownership",
  "Success requires navigating layered subconscious realities",
  "Weather never relents, draining morale and stamina",
  "Carnival illusions target curiosity and temptation",
  "Small, fast attackers overwhelm brute-force fighters",
  "Truth is magically enforced unless deception is flawless",
  "Sightless navigation favors heightened non-visual senses",
  "Precision timing leaves no margin for error"
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
2. 🔥 Identify the top 5–10 best picks that were missed (“Heist Snubs”) with reasons. MAKE SURE THE SNUBS FOLLOW THE SAME RULES ---> For example you will have to consider what the category was for each pick, you can't say "Superman would have been great here for muscle" if the muscle/enforcer had to be 'Something starting with Z'.
3. 🎭 Simulate an 'heist off' between the two crews that lasts 10 short numbered lines where anything can happen (60% based on randomness and 40% based on OVR), the heist scenario greatly affecting this.
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