//Toggle Visibility
function toggleCardVisibility() {
  const settingsCard = document.getElementById("settingsCard");
  settingsCard.style.display =
    settingsCard.style.display === "none" ? "block" : "none";
}

//Show Card + Delay after Closed
function showCardWithDelay() {
  toggleCardVisibility();
  setTimeout(toggleCardVisibility, 2000);
}

//Cancel Button
function handleCancelClick() {
  alert("Your settings will not be saved.");
}

//Save Button
function handleSaveClick() {
  alert("Your settings have been saved.");
}

//Save and Close Event listeners
const buttonClose = document.getElementById("buttonClose");
const cancelButton = document.getElementById("cancelButton");
const saveButton = document.getElementById("saveButton");

buttonClose.addEventListener("click", showCardWithDelay);
cancelButton.addEventListener("click", handleCancelClick);
saveButton.addEventListener("click", handleSaveClick);

//Language Translations
const languageOptions = {
  English: {
    closeButtonText: "Close",
    settings: "Settings",
    languageTitle: "Language",
    languageText:
      "Let us know which language you're most comfortable using. You can change it back at any time.",
    autoplayTitle: "Autoplay Videos",
    autoplayText: "Choose if you want to autoplay on your browser",
    photosTitle: "Show Profile Photos",
    photosText:
      "Choose whether to show or hide profile photos of other members.",
    saveButtonText: "Save",
    cancelButtonText: "Cancel",
    selectOptions: {
      English: "🇬🇧 English",
      Spanish: "🇪🇸 Español",
      Hindi: "🇮🇳 Hindi",
      French: "🇫🇷 Français"
    }
  },
  Spanish: {
    closeButtonText: "Cerrar",
    settings: "Configuración",
    languageTitle: "Idioma",
    languageText:
      "Indícanos en qué idioma te sientes más cómodo. Puedes cambiarlo en cualquier momento.",
    autoplayTitle: "Reproducción automática de vídeos",
    autoplayText:
      "Elige si deseas activar la reproducción automática en tu navegador.",
    photosTitle: "Mostrar Fotos de Perfil",
    photosText:
      "Elige si deseas mostrar u ocultar las fotos de perfil de otros miembros.",
    saveButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    selectOptions: {
      English: "Inglés",
      Spanish: "Español",
      Hindi: "Hindi",
      French: "Francés"
    }
  },
  Hindi: {
    closeButtonText: "बंद करें",
    settings: "सेटिंग्स",
    languageTitle: "भाषा",
    languageText:
      "हमें बताएं कि आप कौनसी भाषा का उपयोग सबसे आसानी से करते हैं। आप किसी भी समय इसे बदल सकते हैं।",
    autoplayTitle: "वीडियो ऑटोप्ले",
    autoplayText:
      "अपने ब्राउज़र पर वीडियो को ऑटोप्ले करना चाहते हैं क्या चुनें",
    photosTitle: "प्रोफाइल फोटो दिखाएं",
    photosText:
      "दूसरे सदस्यों की प्रोफाइल तस्वीरों को दिखाने या छिपाने के लिए चुनें.",
    saveButtonText: "सहेजें",
    cancelButtonText: "रद्द करें",
    selectOptions: {
      English: "अंग्रेज़ी",
      Spanish: "स्पेनिश",
      Hindi: "हिंदी",
      French: "फ्रेंच"
    }
  },
  French: {
    closeButtonText: "Fermer",
    settings: "Paramètres",
    languageTitle: "Langues",
    languageText:
      "Indique-nous la langue avec laquelle tu es le plus à l'aise. Tu pourras la changer à tout moment.",
    autoplayTitle: "Lecture automatique des vidéos",
    autoplayText:
      "Choisis si tu veux activer la lecture automatique dans ton navigateur",
    photosTitle: "Montrer les photos de profil",
    photosText:
      "Choisis si tu veux montrer ou cacher tes photos de profil aux autres membres",
    saveButtonText: "Sauvegarder",
    cancelButtonText: "Annuler",
    selectOptions: {
      English: "Anglais",
      Spanish: "Espagnol",
      Hindi: "Hindi",
      French: "Français"
    }
  }
};

// Update the language dropdown options
function updateLanguageDropdown(language) {
  const langSelect = document.getElementById("lang");
  langSelect.innerHTML = "";
  const options = languageOptions[language].selectOptions;

  for (const option in options) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = options[option];
    langSelect.appendChild(optionElement);
  }

  langSelect.value = language; // Set the selected value to the chosen language
}

// Function to update the language
function updateLanguage(language) {
  // Update text content of elements based on the selected language
  const elementsToUpdate = Object.keys(languageOptions[language]);
  elementsToUpdate.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (languageOptions[language][elementId]) {
      element.textContent = languageOptions[language][elementId];
    }
  });
}

// Language Dropdown Menu Event listener
const langSelect = document.getElementById("lang");
langSelect.addEventListener("change", function () {
  const selectedLanguage = langSelect.value;
  updateLanguage(selectedLanguage);
  updateLanguageDropdown(selectedLanguage);
});
