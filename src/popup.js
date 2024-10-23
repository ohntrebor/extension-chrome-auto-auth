document.getElementById("authButton").addEventListener("click", () => {
  // Quando o botão de autenticar for clicado, abre a página de login e injeta o script
  chrome.runtime.sendMessage({ action: "startAuth" });
});
