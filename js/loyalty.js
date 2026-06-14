// sistema de pontos e recompensas

const NIVEIS = [
  { nome: "Bronze", min: 0,    max: 299  },
  { nome: "Prata",  min: 300,  max: 699  },
  { nome: "Ouro",   min: 700,  max: 1499 },
  { nome: "Diamante", min: 1500, max: Infinity },
];

function getNivelAtual(pontos) {
  return NIVEIS.find((n) => pontos >= n.min && pontos <= n.max) || NIVEIS[0];
}

function getProximoNivel(pontos) {
  const idx = NIVEIS.findIndex((n) => pontos >= n.min && pontos <= n.max);
  return NIVEIS[idx + 1] || null;
}

function creditarPontos(pontos) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) return;

  usuario.pontos = (usuario.pontos || 0) + pontos;
  usuario.nivel = getNivelAtual(usuario.pontos).nome;

  // adiciona o pedido atual ao histórico do usuário
  const pedido = JSON.parse(localStorage.getItem("pedidoAtual"));
  if (pedido) {
    usuario.historicoPedidos = usuario.historicoPedidos || [];
    usuario.historicoPedidos.unshift({
      id: pedido.id,
      data: new Date().toISOString().split("T")[0],
      unidade: pedido.unidade,
      total: pedido.total,
      pontos: pedido.pontosGanhos,
      itens: pedido.itens.map((i) => i.nome),
    });
  }

  atualizarUsuarioLogado(usuario);
}

function resgatar(recompensaId) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) return { ok: false, erro: "Não logado" };

  const recompensa = recompensas.find((r) => r.id === recompensaId);
  if (!recompensa) return { ok: false, erro: "Recompensa não encontrada" };

  if (usuario.pontos < recompensa.pontos) {
    return { ok: false, erro: "Pontos insuficientes" };
  }

  usuario.pontos -= recompensa.pontos;
  usuario.nivel = getNivelAtual(usuario.pontos).nome;
  atualizarUsuarioLogado(usuario);

  return { ok: true, recompensa };
}

function renderizarFidelidade() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuario) return;

  const pontos = usuario.pontos || 0;
  const nivelAtual = getNivelAtual(pontos);
  const proximoNivel = getProximoNivel(pontos);

  // card de saldo
  const elSaldo = document.getElementById("saldo-pontos");
  const elNivel = document.getElementById("nivel-usuario");
  if (elSaldo) elSaldo.textContent = pontos;
  if (elNivel) elNivel.textContent = `Membro ${nivelAtual.nome}`;

  // barra de progresso pro próximo nível
  const elBarra = document.getElementById("barra-nivel");
  const elMeta = document.getElementById("meta-pontos");
  if (elBarra && proximoNivel) {
    const progresso =
      ((pontos - nivelAtual.min) / (proximoNivel.min - nivelAtual.min)) * 100;
    elBarra.style.width = `${Math.min(progresso, 100)}%`;
  }
  if (elMeta && proximoNivel) {
    const faltam = proximoNivel.min - pontos;
    elMeta.textContent = `Faltam ${faltam} pts para ${proximoNivel.nome}`;
  } else if (elMeta) {
    elMeta.textContent = "Você está no nível máximo! 🎉";
  }

  // grid de recompensas
  const elRecompensas = document.getElementById("grid-recompensas");
  if (elRecompensas) {
    elRecompensas.innerHTML = recompensas
      .map((r) => {
        const podeResgatar = pontos >= r.pontos;
        const classe = podeResgatar ? "disponivel" : "bloqueada";
        const btnHtml = podeResgatar
          ? `<button class="btn-raizes mt-2" style="padding:6px 16px;font-size:0.8rem;width:auto;"
               onclick="confirmarResgate(${r.id})">Resgatar</button>`
          : `<div style="font-size:0.75rem;color:#aaa;margin-top:8px;">🔒 Bloqueado</div>`;

        return `
        <div class="card-recompensa ${classe}">
          <div class="emoji">${r.emoji}</div>
          <div class="nome">${r.nome}</div>
          <div class="custo">${r.pontos} pts</div>
          ${btnHtml}
        </div>
      `;
      })
      .join("");
  }

  // histórico de pedidos
  const elHistorico = document.getElementById("historico-pontos");
  if (elHistorico) {
    const historico = usuario.historicoPedidos || [];
    if (historico.length === 0) {
      elHistorico.innerHTML =
        '<p style="color:#aaa;font-size:0.85rem;">Nenhum pedido ainda.</p>';
      return;
    }

    elHistorico.innerHTML = historico
      .slice(0, 10)
      .map(
        (p) => `
      <div class="d-flex justify-content-between align-items-center py-2"
           style="border-bottom:1px solid var(--cor-borda);">
        <div>
          <div style="font-weight:600;font-size:0.85rem;">Pedido #${p.id}</div>
          <div style="font-size:0.75rem;color:#888;">${formatarData(p.data)} · ${p.unidade}</div>
        </div>
        <div style="color:var(--cor-verde);font-weight:700;font-size:0.9rem;">+${p.pontos} pts</div>
      </div>
    `
      )
      .join("");
  }
}
