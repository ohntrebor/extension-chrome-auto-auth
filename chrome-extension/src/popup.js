document.addEventListener("DOMContentLoaded", function () {
  const authButton = document.getElementById("authButton");

  if (authButton) {
    // Certifique-se de que o botão foi encontrado
    authButton.addEventListener("click", () => {
      const loginUrl =
        "https://rblink.sgp.tsmx.com.br/accounts/login?next=/admin/";

      // Abre a página de login em uma nova aba
      chrome.tabs.create({ url: loginUrl }, (newTab) => {
        // Injetar o script de login na página aberta
        chrome.scripting.executeScript({
          target: { tabId: newTab.id },
          files: ["src/contentScript.js"],
        });
      });
    });
  } else {
    console.error("Botão 'authButton' não encontrado no DOM.");
  }
});
