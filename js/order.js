// ciclo de vida do pedido: criação, pagamento simulado e progressão de status

const ETAPAS = ["recebido", "preparo", "pronto", "retirado"];

function criarPedido(formaPagamento) {
  const carrinho = getCarrinho();
  const unidade = getUnidadeSelecionada();
  const { total, pontos } = calcularTotais();

  const pedido = {
    id: String(Math.floor(Math.random() * 9000) + 1000),
    itens: carrinho,
    unidade: unidade ? unidade.nome : "Unidade não selecionada",
    formaPagamento,
    total,
    pontosGanhos: pontos,
    status: "recebido",
    etapaAtual: 0,
    criadoEm: new Date().toISOString(),
  };

  localStorage.setItem("pedidoAtual", JSON.stringify(pedido));
  return pedido;
}

function simularPagamento() {
  // 90% de chance de aprovar — só pra ter o cenário de falha no plano de testes
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() > 0.1 ? "aprovado" : "recusado");
    }, 2000);
  });
}

function getPedidoAtual() {
  return JSON.parse(localStorage.getItem("pedidoAtual"));
}

function avancarStatus() {
  const pedido = getPedidoAtual();
  if (!pedido) return null;

  if (pedido.etapaAtual < ETAPAS.length - 1) {
    pedido.etapaAtual += 1;
    pedido.status = ETAPAS[pedido.etapaAtual];
    localStorage.setItem("pedidoAtual", JSON.stringify(pedido));
  }

  return pedido;
}

function simularProgressoStatus(onAtualizar) {
  // avança automaticamente pelas etapas pra demonstração
  // recebido já está setado na criação, então começa do preparo
  const intervalos = [4000, 8000, 14000]; // ms pra cada transição

  intervalos.forEach((delay, i) => {
    setTimeout(() => {
      const pedido = avancarStatus();
      if (pedido && onAtualizar) onAtualizar(pedido);
    }, delay);
  });
}

function renderizarProgresso(pedido) {
  const etapasConfig = [
    { id: "recebido", label: "Recebido",  icone: "📋" },
    { id: "preparo",  label: "Em preparo", icone: "👨‍🍳" },
    { id: "pronto",   label: "Pronto",    icone: "✅" },
    { id: "retirado", label: "Retirado",  icone: "🛍️" },
  ];

  const container = document.getElementById("progresso-pedido");
  if (!container) return;

  container.innerHTML = etapasConfig
    .map((etapa, i) => {
      let classe = "";
      if (i < pedido.etapaAtual) classe = "concluida";
      else if (i === pedido.etapaAtual) classe = "ativa";

      return `
      <div class="etapa-pedido">
        <div class="etapa-circulo ${classe}">${etapa.icone}</div>
        <div class="etapa-label ${classe}">${etapa.label}</div>
      </div>
    `;
    })
    .join("");

  // mostra pontos creditados quando chega em "pronto"
  const elPontos = document.getElementById("pontos-creditados");
  if (elPontos) {
    elPontos.style.display = pedido.etapaAtual >= 2 ? "block" : "none";
  }
}
