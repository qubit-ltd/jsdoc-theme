/**
 * Internationalization helper for JSDoc templates
 */

const fs = require("fs");
const path = require("path");

let currentLanguage = "en";
let translations = {};

/**
 * Load translation files
 * @param {string} language - Language code (en, zh)
 */
function loadTranslations(language) {
  const translationPath = path.join(
    __dirname,
    "..",
    "i18n",
    `${language}.json`,
  );

  try {
    if (fs.existsSync(translationPath)) {
      const content = fs.readFileSync(translationPath, "utf8");
      translations[language] = JSON.parse(content);
      return true;
    }
  } catch (error) {
    console.warn(
      `Failed to load translations for language: ${language}`,
      error.message,
    );
  }
  return false;
}

/**
 * Set current language
 * @param {string} language - Language code
 */
function setLanguage(language) {
  currentLanguage = language;

  // Load translations if not already loaded
  if (!translations[language]) {
    loadTranslations(language);
  }
}

/**
 * Get translated text
 * @param {string} key - Translation key
 * @param {string} [fallback] - Fallback text if translation not found
 * @returns {string} Translated text
 */
function t(key, fallback) {
  const langTranslations = translations[currentLanguage];

  if (langTranslations && langTranslations[key]) {
    return langTranslations[key];
  }

  // Try English as fallback
  if (currentLanguage !== "en" && translations.en && translations.en[key]) {
    return translations.en[key];
  }

  // Return fallback or key itself
  return fallback || key;
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Initialize i18n system
 * @param {Object} options - Configuration options
 * @param {string} [options.language='en'] - Default language
 */
function init(options = {}) {
  const language = options.language || "en";

  // Load English translations (always available as fallback)
  loadTranslations("en");

  // Load requested language if different
  if (language !== "en") {
    loadTranslations(language);
  }

  setLanguage(language);
}

module.exports = {
  init,
  setLanguage,
  getCurrentLanguage,
  t,
};
