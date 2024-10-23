chrome.action.onClicked.addListener((tab) => {
  const loginUrl = "https://seu-erp-sgp.com/accounts/login";

  // Abre a página de login do SGP
  chrome.tabs.create({ url: loginUrl }, (newTab) => {
    // Injetar o script de login na página aberta
    chrome.scripting.executeScript({
      target: { tabId: newTab.id },
      files: ["contentScript.js"],
    });
  });
});
