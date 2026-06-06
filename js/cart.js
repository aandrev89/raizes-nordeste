// tudo que envolve o carrinho fica aqui
// estado salvo no localStorage pra sobreviver à navegação entre páginas

function getCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
}

function adicionarItem(produto) {
  const carrinho = getCarrinho();
  const existente = carrinho.find((item) => item.id === produto.id);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: 1,
    });
  }

  salvarCarrinho(carrinho);
}

function removerItem(produtoId) {
  const carrinho = getCarrinho().filter((item) => item.id !== produtoId);
  salvarCarrinho(carrinho);
}

function alterarQuantidade(produtoId, delta) {
  const carrinho = getCarrinho();
  const item = carrinho.find((i) => i.id === produtoId);
  if (!item) return;

  item.quantidade += delta;
  if (item.quantidade <= 0) {
    salvarCarrinho(carrinho.filter((i) => i.id !== produtoId));
  } else {
    salvarCarrinho(carrinho);
  }
}

function aplicarCupom(codigo) {
  const cupom = cupons.find(
    (c) => c.codigo === codigo.toUpperCase() && c.ativo
  );

  if (!cupom) {
    return { ok: false, erro: "Cupom inválido ou expirado" };
  }

  localStorage.setItem("cupomAtivo", JSON.stringify(cupom));
  return { ok: true, cupom };
}

function removerCupom() {
  localStorage.removeItem("cupomAtivo");
}

function getCupomAtivo() {
  return JSON.parse(localStorage.getItem("cupomAtivo")) || null;
}

function calcularTotais() {
  const carrinho = getCarrinho();
  const cupom = getCupomAtivo();

  const subtotal = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  let desconto = 0;
  if (cupom) {
    desconto =
      cupom.tipo === "percentual"
        ? subtotal * (cupom.valor / 100)
        : cupom.valor;
    // desconto não pode ser maior que o subtotal
    desconto = Math.min(desconto, subtotal);
  }

  return {
    subtotal,
    desconto,
    total: subtotal - desconto,
    pontos: Math.floor(subtotal - desconto),
  };
}

function limparCarrinho() {
  localStorage.removeItem("carrinho");
  localStorage.removeItem("cupomAtivo");
  atualizarBadgeCarrinho();
}

function renderizarCarrinho() {
  const carrinho = getCarrinho();
  const container = document.getElementById("lista-carrinho");
  const secaoVazio = document.getElementById("carrinho-vazio");
  const secaoItens = document.getElementById("carrinho-itens");

  if (!container) return;

  if (carrinho.length === 0) {
    if (secaoVazio) secaoVazio.style.display = "block";
    if (secaoItens) secaoItens.style.display = "none";
    return;
  }

  if (secaoVazio) secaoVazio.style.display = "none";
  if (secaoItens) secaoItens.style.display = "block";

  container.innerHTML = carrinho
    .map(
      (item) => `
    <div class="item-carrinho d-flex align-items-center gap-3 py-3" data-id="${item.id}">
      <img src="${item.imagem}" alt="${item.nome}"
        style="width:60px;height:60px;object-fit:cover;border-radius:8px;"
        onerror="this.src='assets/img/placeholder.jpg'">
      <div class="flex-grow-1">
        <div style="font-weight:700;font-size:0.9rem;">${item.nome}</div>
        <div style="color:var(--cor-principal);font-weight:700;">${formatarMoeda(item.preco)}</div>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="btn-qtd" onclick="alterarQuantidade(${item.id}, -1)">−</button>
        <span style="font-weight:700;min-width:20px;text-align:center;">${item.quantidade}</span>
        <button class="btn-qtd" onclick="alterarQuantidade(${item.id}, 1)">+</button>
      </div>
      <div style="font-weight:700;min-width:60px;text-align:right;">
        ${formatarMoeda(item.preco * item.quantidade)}
      </div>
      <button onclick="removerItem(${item.id});renderizarCarrinho();atualizarResumo();"
        style="background:none;border:none;color:#ccc;font-size:1.2rem;cursor:pointer;padding:4px;">✕</button>
    </div>
    <hr class="divisor" style="margin:0;">
  `
    )
    .join("");

  atualizarResumo();
}

function atualizarResumo() {
  const { subtotal, desconto, total, pontos } = calcularTotais();

  const elSubtotal = document.getElementById("resumo-subtotal");
  const elDesconto = document.getElementById("resumo-desconto");
  const elTotal = document.getElementById("resumo-total");
  const elPontos = document.getElementById("resumo-pontos");
  const elBtnFinalizar = document.getElementById("btn-finalizar");

  if (elSubtotal) elSubtotal.textContent = formatarMoeda(subtotal);
  if (elDesconto) elDesconto.textContent = `− ${formatarMoeda(desconto)}`;
  if (elTotal) elTotal.textContent = formatarMoeda(total);
  if (elPontos) elPontos.textContent = `+${pontos} pontos`;
  if (elBtnFinalizar) elBtnFinalizar.textContent = `Finalizar pedido · ${formatarMoeda(total)}`;
}
