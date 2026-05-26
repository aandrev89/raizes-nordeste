// gerencia login, cadastro e sessão via localStorage
// não tem backend, então "autenticação" é tudo simulado mesmo

function login(email, senha) {
  // primeiro checa o usuário demo hardcoded
  if (email === usuarioDemo.email && senha === usuarioDemo.senha) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioDemo));
    return { ok: true };
  }

  // depois checa usuários que se cadastraram nessa sessão
  const cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const encontrado = cadastrados.find(
    (u) => u.email === email && u.senha === senha
  );

  if (encontrado) {
    localStorage.setItem("usuarioLogado", JSON.stringify(encontrado));
    return { ok: true };
  }

  return { ok: false, erro: "Email ou senha incorretos" };
}

function cadastrar(dados) {
  const cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  const jaExiste = cadastrados.some((u) => u.email === dados.email);
  if (jaExiste) {
    return { ok: false, erro: "Esse email já está cadastrado" };
  }

  const novoUsuario = {
    id: Date.now(),
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone,
    senha: dados.senha,
    pontos: 0,
    nivel: "Bronze",
    consentimentos: {
      lgpd: true,
      marketing: dados.aceitaMarketing || false,
      personalizacao: true,
    },
    historicoPedidos: [],
  };

  cadastrados.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(cadastrados));
  localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

  return { ok: true };
}

function atualizarUsuarioLogado(dadosNovos) {
  const atual = JSON.parse(localStorage.getItem("usuarioLogado"));
  const atualizado = { ...atual, ...dadosNovos };
  localStorage.setItem("usuarioLogado", JSON.stringify(atualizado));

  // usuário demo não fica na lista de cadastrados, só em memória
  if (atualizado.id === usuarioDemo.id) return;

  const cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const idx = cadastrados.findIndex((u) => u.id === atualizado.id);
  if (idx !== -1) {
    cadastrados[idx] = atualizado;
    localStorage.setItem("usuarios", JSON.stringify(cadastrados));
  }
}

function excluirConta() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) return;

  const cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const filtrados = cadastrados.filter((u) => u.id !== usuario.id);
  localStorage.setItem("usuarios", JSON.stringify(filtrados));

  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("carrinho");
  localStorage.removeItem("unidadeSelecionada");
  localStorage.removeItem("pedidoAtual");
}
