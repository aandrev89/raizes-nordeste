function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatarData(dataStr) {
  // sem isso aqui, data YYYY-MM-DD às vezes volta um dia por causa do fuso
  const data = new Date(`${dataStr}T00:00:00`);

  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function toast(mensagem, tipo = "info") {
  const anterior = document.getElementById("toast-raizes");
  if (anterior) anterior.remove();

  const cores = {
    sucesso: "#2D6A4F",
    erro: "#C84B11",
    info: "#ECAD35",
  };

  const icones = {
    sucesso: "✓",
    erro: "✗",
    info: "ℹ",
  };

  const el = document.createElement("div");
  el.id = "toast-raizes";
  el.innerHTML = `<span>${icones[tipo]}</span> ${mensagem}`;
  el.style.cssText = `
    position: fixed;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    background: ${cores[tipo]};
    color: #fff;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    z-index: 9999;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 90vw;
    text-align: center;
    animation: fadeInUp 0.3s ease;
  `;

  document.body.appendChild(el);

  setTimeout(() => {
    el.style.animation = "fadeOut 0.3s ease forwards";
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

function atualizarBadgeCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  document.querySelectorAll(".badge-carrinho").forEach((badge) => {
    badge.textContent = total;
    badge.style.display = total > 0 ? "flex" : "none";
  });
}

function guardRota() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    window.location.href = "login.html";
  }
}

function getUsuarioLogado() {
  return JSON.parse(localStorage.getItem("usuarioLogado"));
}

function getUnidadeSelecionada() {
  return JSON.parse(localStorage.getItem("unidadeSelecionada"));
}

function renderizarHeader() {
  const usuario = getUsuarioLogado();
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const primeiroNome = usuario ? usuario.nome.split(" ")[0] : "";
  const mostrarBadge = totalItens > 0 ? "flex" : "none";

  const header = document.getElementById("header-principal");
  if (!header) return;

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark px-3 py-2" style="background: var(--cor-escura);">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
        <span style="font-size: 1.4rem;">🌵</span>
        <span class="fw-bold" style="color: var(--cor-secundaria); font-family: var(--fonte-display);">
          Raízes do Nordeste
        </span>
      </a>

      <div class="ms-auto d-flex align-items-center gap-3">
        <a href="carrinho.html" class="text-white position-relative text-decoration-none" title="Carrinho">
          <span style="font-size: 1.4rem;">🛒</span>
          <span class="badge-carrinho position-absolute top-0 start-100 translate-middle badge rounded-pill"
            style="background: var(--cor-principal); font-size: 0.65rem; min-width: 18px;
                   display: ${mostrarBadge}; align-items: center; justify-content: center;">
            ${totalItens}
          </span>
        </a>

        ${
          usuario
            ? `
          <div class="dropdown">
            <button class="btn btn-sm btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              👤 ${primeiroNome}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="fidelidade.html">🌟 ${usuario.pontos} pontos</a></li>
              <li><a class="dropdown-item" href="perfil.html">👤 Meu Perfil</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger" href="#" onclick="fazerLogout()">Sair</a></li>
            </ul>
          </div>
        `
            : `
          <a href="login.html" class="btn btn-sm" style="background: var(--cor-principal); color: #fff;">
            Entrar
          </a>
        `
        }
      </div>
    </nav>
  `;
}

function fazerLogout() {
  localStorage.removeItem("usuarioLogado");
  localStorage.removeItem("carrinho");
  localStorage.removeItem("unidadeSelecionada");
  localStorage.removeItem("pedidoAtual");
  window.location.href = "index.html";
}

(function injetarAnimacoes() {
  // deixei aqui porque ainda não vale criar outro arquivo só por causa de 4 animações
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateX(-50%) translateY(20px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
    @keyframes pulsar {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
})();
