document.getElementById("butao").addEventListener("click", (evt) => {
  evt.preventDefault();

  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const divEmail = document.getElementById("espacoEmail");
  const divSenha = document.getElementById("espacoSenha");

  divEmail.textContent = email.value;
  divSenha.textContent = senha.value;

  document.getElementById("formulario").classList.add("esconder");
  document.getElementById("titulo").classList.add("esconder");
  document.getElementById("telinha").classList.remove("esconder");
  document.getElementById("telinha").classList.add("exibir");
});

document.getElementById("email").addEventListener("change", () => {
    document.getElementById("senha").disabled = false;
});

const senha = document.getElementById("senha").addEventListener("change", () => {
    document.getElementById("butao").disabled = false;
});
