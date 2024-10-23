(function () {
  // Mock de credenciais para teste
  const erpUsername = "usuarioMock";
  const erpPassword = "senhaMock";

  // Aguardar a página de login carregar completamente
  setTimeout(() => {
    // Verificar se estamos na página de login
    if (window.location.href.includes("/accounts/login")) {
      // Preenche os campos de login
      document.getElementById("id_username").value = erpUsername;
      document.getElementById("id_password").value = erpPassword;

      // Submete o formulário de login
      document.getElementById("entrar").click();

      // Verificar se o login foi bem-sucedido ou falhou
      setTimeout(() => {
        if (document.getElementById("entrar")) {
          console.error("Erro: Dados de autenticação inválidos.");
        } else {
          console.log("Autenticação realizada com sucesso!");
        }
      }, 5000); // Aguarda 5 segundos para a resposta do servidor
    }
  }, 3000); // Aguarda 3 segundos para a página carregar
})();
