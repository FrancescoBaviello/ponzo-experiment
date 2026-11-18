/* Ponzo experiment: settings. This is the only file you need to edit.
   After editing it on GitHub, the change is live within about a minute. */
window.PONZO_CONFIG = {

  // 1. The web-app address from Apps Script (Deploy > Manage deployments). It ends in /exec.
  //    While this still says PASTE..., the page runs in test mode and sends nothing.
  endpoint: "PASTE_YOUR_WEB_APP_URL_HERE",

  // 2. The same word you wrote as STUDY_TOKEN in Code.gs.
  token: "CHANGE-ME-ponzo-2026",

  // 3. What participants see on the first page.
  title: "Comparing line lengths",                 // neutral on purpose: don't name the illusion before the task
  researchers: "Write your group members' names",
  contactEmail: "your.email@example.com",          // for questions and data-deletion requests
  durationText: "about 25 minutes",

  // 4. Set to false to close the study (new visitors see "This study has closed").
  collectionOpen: true,

  // Don't change these once data collection has started.
  studyId: "ponzo-cues-2026",
  barDeg: 4.0,              // size of the upper bar, in degrees of visual angle
  assumedDistanceCm: 57,    // used only when the distance test fails or is skipped
  flushEvery: 8             // send data every 8 trials
};
