// Your settings. Edit this file once and leave it alone: updates to the page won't touch it.
window.TIMESHEET_CONFIG = {
  // On/off switch. true = page shows a "not in use" notice and can't be filled in or submitted.
  // Set to false to put the timesheet back in use.
  PAUSED: true,
  PAUSED_MESSAGE: "The timesheet isn't in use right now. Please don't fill it out. Your manager will let you know when it's back.",

  // Paste your Google Apps Script Web app URL between the quotes (it ends in /exec).
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxCFMbWC3cTaeccMUSHrFyod5QGR_MNX97G2giruPODZa24SCuJeDqTqWlcP6OBnHGJkA/exec",

  // Only if you use Web3Forms instead of the Google script:
  WEB3FORMS_KEY: "",
  ATTACH_CSV: false,      // true only on a Web3Forms Pro plan

  // Only used when neither of the above is set (opens a pre-filled email):
  MANAGER_EMAIL: ""

  // Optional. First day of the Blue crew's days off. Leave it out unless the rotation changes.
  // SCHEDULE_ANCHOR: "2026-11-19"
};
