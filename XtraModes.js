// XtraModes.js

// Surprise roles that can replace one existing role after draft
const SURPRISE_ROLES = [
  "Animal Handler",
  "Seductress",
  "Disguise Expert",
  "Explosives Specialist",
  "Inside Man",
  "Acrobat",
  "Demolitionist",
  "Con Artist",
  "Master of Disguise"
];

/**
 * Applies the Wild Card Round mode by replacing one random role
 * with a surprise role, updating draftData accordingly.
 *
 * @param {Array} draftData - 2D array [round][player] of pick objects
 * @param {Array} roles - current array of role names
 * @returns {Object} { newDraftData, newRoles } updated copies
 */
export function applyWildCardRound(draftData, roles) {
  // Defensive copy of roles
  const newRoles = roles.slice();

  // Pick a random role index to replace
  const replaceIndex = Math.floor(Math.random() * newRoles.length);

  // Pick a surprise role that is NOT currently in roles
  let surpriseRole;
  const availableSurprises = SURPRISE_ROLES.filter(r => !newRoles.includes(r));
  if (availableSurprises.length === 0) {
    // fallback: just pick random from surprise roles anyway
    surpriseRole = SURPRISE_ROLES[Math.floor(Math.random() * SURPRISE_ROLES.length)];
  } else {
    surpriseRole = availableSurprises[Math.floor(Math.random() * availableSurprises.length)];
  }

  // Replace the role at the chosen index
  newRoles[replaceIndex] = surpriseRole;

  // Create a deep copy of draftData to avoid mutation
  const newDraftData = draftData.map(roundArray =>
    roundArray.map(pick => ({ ...pick }))
  );

  // Update the role field in draftData for that replaced role index
  for (let p = 0; p < newDraftData[replaceIndex].length; p++) {
    newDraftData[replaceIndex][p].role = surpriseRole;
  }

  return { newDraftData, newRoles };
}
