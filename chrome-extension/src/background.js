chrome.action.onClicked.addListener((tab) => {
  const loginUrl = "https://rblink.sgp.tsmx.com.br/accounts/login?next=/admin/";

  // Abre a página de login do SGP
  chrome.tabs.create({ url: loginUrl }, (newTab) => {
    // Injetar o script de login na página aberta
    chrome.scripting.executeScript({
      target: { tabId: newTab.id },
      files: ["src/contentScript.js"],
    });
  });
});
