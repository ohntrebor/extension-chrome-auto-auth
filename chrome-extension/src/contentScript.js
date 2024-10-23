(function () {
  // Mock de credenciais para teste
  const erpUsername = "7az";
  const erpPassword = "Rblink123*";
  const erpType = "SGP";
  // Aguardar a página de login carregar completamente
  setTimeout(() => {
    // Verificar se estamos na página de login correta
    if (window.location.href.includes("/accounts/login")) {
      const usernameField = document.getElementById("id_username");
      const passwordField = document.getElementById("inlineFormInputGroup");
      const loginButton = document.getElementById("entrar");

      if (usernameField && passwordField && loginButton) {
        // Preenche os campos de login após 1 segundo
        setTimeout(() => {
          usernameField.value = erpUsername;
          passwordField.value = erpPassword;

          // Submete o formulário de login clicando no botão de login
          loginButton.click();

          // Verificar se o login foi bem-sucedido ou falhou
          setTimeout(() => {
            if (document.getElementById("entrar")) {
              console.error("Erro: Dados de autenticação inválidos.");
            } else {
              console.log("Autenticação realizada com sucesso!");
            }
          }, 5000); // Aguarda 5 segundos para a resposta do servidor
        }, 1000); // Aguardar 1 segundo para preencher os campos
      } else {
        console.error("Campos de login não encontrados.");
      }
    }
  }, 2000); // Aguarda 3 segundos para garantir que a página de login está completamente carregada
})();
