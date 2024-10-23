document.getElementById("saveCredentials").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  chrome.storage.sync.set({ username, password }, () => {
    console.log("Credenciais salvas com sucesso!");
  });
});
