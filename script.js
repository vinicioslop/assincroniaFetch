const exibeUsuario = (usuario) => {
  console.log(
    `O usuário ${usuario.login} possui ${usuario.public_repos} seguidores!`
  );
};

const iniciar = async (user) => {
  console.log("Buscando dados do usuário...");

  try {
    const response = await fetch(`https://api.github.com/users/${user}`);

    if (response.ok) {
      const result = await response.json();
      exibeUsuario(result);
    } else {
      throw new Error(`Erro ao acessar o URL: ${response.status}`);
    }
  } catch (error) {
    console.log(`Algo deu errado... O que rolou: ${error.message}`);
  }
  console.log("Operação Finalizada!");
};

document.addEventListener("DOMContentLoaded", iniciar("kueizyde1kg"));

const Cliente = {
  nome: "José",
  sobrenome: "Carlos",
};

/*
{
  "nome": "José",
  "sobrenome": "Carlos"
}

[
  {
    "nome": "José",
    "sobrenome": "Carlos"
  },
  {
    "nome": "Andrey",
    "sobrenome": "n sei"
  }
]
*/
