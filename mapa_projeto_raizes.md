# 🗺️ MAPA COMPLETO DO PROJETO
## Trilha Front-end — Rede Raízes do Nordeste

---

## 1. VISÃO GERAL E ESCOLHAS ESTRATÉGICAS

### Trilha escolhida
**Front-end — Opção B (Codificação)**

### Por que Opção B e não Figma (Opção A)?
- Demonstra habilidade técnica real — mais impactante para portfólio
- GitHub Pages publica gratuitamente e gera link público permanente
- O avaliador pode interagir com o produto real, não apenas visualizar
- Não exige conta paga nem permissões especiais (diferente do Figma)

### Stack tecnológica
| Camada | Tecnologia | Justificativa |
|---|---|---|
| Estrutura | HTML5 semântico | Padrão web, sem build tools necessários |
| Estilo | CSS3 + Bootstrap 5 (CDN) | Responsividade e componentes prontos sem npm |
| Interação | JavaScript vanilla (ES6+) | Zero dependências, sem compilação |
| Dados | Mock data em JS (localStorage) | Simula backend sem servidor real |
| Hospedagem | GitHub Pages | Gratuito, link público permanente |
| Diagramas | Draw.io (app.diagrams.net) | Gratuito, exporta PNG/SVG, sem instalação |
| Documento | Google Docs → Export PDF | Sumário automático, ABNT facilitado |

### Paleta de cores (identidade nordestina)
```
--cor-principal:   #C84B11  /* laranja queimado / cangaço */
--cor-secundaria:  #ECAD35  /* amarelo tapioca / sol do nordeste */
--cor-escura:      #1F1D1A  /* quase preto / café */
--cor-clara:       #FDF6EC  /* off-white / manteiga de garrafa */
--cor-verde:       #2D6A4F  /* verde mata / folha de bananeira */
--cor-texto:       #2C2C2C  /* cinza escuro para leitura */
```

### Nome do arquivo de entrega
```
[RU]_Projeto_Front_End.pdf
```

### Entregáveis finais
1. `[RU]_Projeto_Front_End.pdf` — documento completo
2. `sobre_uso_de_ia.txt` — declaração de uso de IA
3. Link GitHub repo (público)
4. Link GitHub Pages (aplicação online)

---

## 2. ESTRUTURA DO DOCUMENTO PDF

### SEÇÃO 1 — CAPA
**O que contém:**
- Nome da instituição: Univirtus
- Nome do curso: [nome do curso]
- Disciplina: Projeto Multidisciplinar
- Título do trabalho: *"Sistema de Pedidos e Fidelização da Rede Raízes do Nordeste — Proposta de Interface Front-end"*
- Nome do aluno: [NOME COMPLETO]
- RU: [RU]
- Polo de apoio: [POLO]
- Semestre: [X]/2026
- Professor: Prof. Esp. Giuliano Lanes de Almeida
- Cidade e ano: São Paulo, 2026

**Formatação:** centralizado, sem logo da universidade (se não tiver), fundo branco limpo, fonte Times New Roman 12pt

---

### SEÇÃO 2 — SUMÁRIO
**O que contém:**
- Gerado automaticamente pelo Google Docs com "Inserir > Sumário"
- Lista todas as seções numeradas com número de página
- Será gerado após o documento estar completo

---

### SEÇÃO 3 — INTRODUÇÃO
**O que contém (aprox. 1 página):**

**3.1 Contexto do Estudo de Caso**
Apresentação da Rede Raízes do Nordeste: origem familiar em Recife, crescimento nacional, múltiplas unidades com operações distintas. O crescimento acelerado gerou a necessidade de reestruturação tecnológica completa.

**3.2 Objetivo do Projeto**
Projetar e implementar a camada de interface front-end do sistema de pedidos, fidelização e pagamento da rede, suportando múltiplos canais de atendimento (app, totem, web), com foco em usabilidade, responsividade e conformidade com a LGPD.

**3.3 Principais Usuários do Sistema**
- Cliente final (app / web / totem)
- Atendente de balcão
- Equipe de cozinha
- Gerente da unidade / Administrador da franquia

**3.4 Relevância do Sistema**
Destacar: alta disponibilidade no horário de pico, múltiplos canais simultâneos, controle de cardápio por unidade, conformidade legal (LGPD), integração com pagamento externo.

**3.5 Recorte da Trilha**
Esclarecer que a entrega cobre a camada de interface (cliente-facing + visão básica de admin), mencionando os pontos de integração com back-end e QA que seriam necessários em um projeto completo.

---

### SEÇÃO 4 — ANÁLISE E REQUISITOS

**4.1 Requisitos Funcionais (tabela)**

| ID | Requisito | Canal | Prioridade |
|---|---|---|---|
| RF01 | Cadastro de usuário com consentimento LGPD | Web/App | Alta |
| RF02 | Autenticação (login/logout) | Web/App/Totem | Alta |
| RF03 | Visualização de cardápio dinâmico por unidade | Web/App/Totem | Alta |
| RF04 | Seleção de produtos e montagem de carrinho | Web/App/Totem | Alta |
| RF05 | Realização de pedido completo (ponta a ponta) | Web/App/Totem | Alta |
| RF06 | Acompanhamento de status do pedido | Web/App | Alta |
| RF07 | Fluxo visual de pagamento via serviço externo | Web/App/Totem | Alta |
| RF08 | Programa de fidelização — acúmulo de pontos | Web/App | Média |
| RF09 | Programa de fidelização — resgate de recompensas | Web/App | Média |
| RF10 | Promoções e cupons de desconto | Web/App | Média |
| RF11 | Seleção de unidade da rede | Web/App | Alta |
| RF12 | Gerenciamento de dados pessoais (LGPD) | Web/App | Alta |
| RF13 | Exibição de produtos sazonais por período/unidade | Web/App/Totem | Média |

**4.2 Requisitos Não Funcionais (tabela)**

| ID | Requisito | Critério de Aceite |
|---|---|---|
| RNF01 | Mobile-first e responsividade | Funciona de 320px a 1440px sem quebra de layout |
| RNF02 | Performance | Carregamento inicial < 3 segundos |
| RNF03 | Acessibilidade | Contraste mínimo WCAG AA, fontes legíveis |
| RNF04 | Compatibilidade | Chrome, Firefox, Safari e Edge modernos |
| RNF05 | Conformidade LGPD | Consentimento explícito antes de coleta de dados |
| RNF06 | Escalabilidade de interface | Novas unidades adicionadas sem alteração de código |
| RNF07 | Disponibilidade | Interface estável mesmo com carga alta no horário de pico |
| RNF08 | Segurança visual | Dados sensíveis nunca exibidos em texto claro na tela |

**4.3 Considerações de Multicanalidade**
Parágrafo explicando como App, Totem e Web têm diferenças de contexto de uso e como a interface adaptou os fluxos para cada canal (ex.: totem sem teclado físico prioriza botões grandes).

---

### SEÇÃO 5 — DIAGRAMAS

**5.1 Diagrama de Casos de Uso**

*O diagrama (imagem exportada do Draw.io) mostrará:*

**Atores:**
- Cliente
- Atendente
- Cozinha
- Gerente / Administrador
- Sistema de Pagamento Externo

**Casos de Uso conectados:**

| UC | Nome | Ator principal |
|---|---|---|
| UC01 | Cadastrar-se | Cliente |
| UC02 | Realizar login | Cliente / Atendente / Gerente |
| UC03 | Visualizar cardápio | Cliente |
| UC04 | Realizar pedido | Cliente |
| UC05 | Acompanhar status do pedido | Cliente |
| UC06 | Processar pagamento | Sistema Pagamento Externo *(<<include>> de UC04)* |
| UC07 | Acumular pontos de fidelidade | Cliente *(<<extend>> de UC04)* |
| UC08 | Resgatar recompensa | Cliente |
| UC09 | Gerenciar dados pessoais (LGPD) | Cliente |
| UC10 | Atualizar status do pedido | Atendente / Cozinha |
| UC11 | Visualizar relatórios de vendas | Gerente / Admin |
| UC12 | Gerenciar cardápio por unidade | Gerente / Admin |

*Após o diagrama, 3 UCs serão descritos em detalhe no formato padrão (fluxo base, pré/pós-condições, regras de negócio):*
- UC04 — Realizar Pedido (o mais completo, central ao negócio)
- UC06 — Processar Pagamento (demonstra integração externa)
- UC09 — Gerenciar Dados Pessoais (demonstra LGPD)

---

**5.2 Diagrama da Jornada do Usuário**

*O diagrama (imagem exportada do Draw.io) mostrará o percurso completo:*

```
[ACESSO]
  ↓
Escolhe canal: App / Web / Totem
  ↓
[IDENTIFICAÇÃO]
  ↓
Novo usuário? → Cadastro + aceite LGPD → Login
Usuário existente? → Login direto
  ↓
[SELEÇÃO DE UNIDADE]
  ↓
Escolhe loja próxima ou favorita
  ↓
[CARDÁPIO]
  ↓
Navega por categorias → Visualiza produtos disponíveis na unidade
  ↓
Adiciona itens ao carrinho
  ↓
[CARRINHO]
  ↓
Revisa itens → Aplica cupom (se tiver) → Vê pontos a ganhar
  ↓
[CHECKOUT / PAGAMENTO]
  ↓
Escolhe forma de pagamento → Interface envia ao serviço externo
  ↓
Pagamento aprovado? → SIM → Pedido confirmado
              → NÃO → Mensagem de erro + opção de retry
  ↓
[STATUS DO PEDIDO]
  ↓
Recebido → Em preparo → Pronto para retirada
  ↓
[RETIRADA + FIDELIDADE]
  ↓
Retira pedido → Pontos creditados → Notificação de saldo
```

---

### SEÇÃO 6 — WIREFRAMES (baixa fidelidade)

*Cada wireframe é criado no Draw.io em formato mobile-first e exportado como PNG.*
*Cada tela terá versão mobile E versão desktop lado a lado.*
*Anotações numeradas explicam cada elemento.*

**WF-01: Home / Splash**
```
┌──────────────────┐
│  [LOGO CENTRALIZADO] │
│                  │
│  [IMAGEM HERO    │
│   com overlay    │
│   escuro]        │
│                  │
│  "Sabor nordesti-│
│   no onde você   │
│   estiver"       │
│                  │
│  [FAZER PEDIDO]  │  ← botão laranja, full-width
│  [ENTRAR NA      │  ← botão outline, full-width
│   MINHA CONTA]   │
└──────────────────┘
```
Anotações: (1) Logo sem fundo, (2) Hero com foto de cuscuz, (3) CTAs com hierarquia clara

---

**WF-02: Login**
```
┌──────────────────┐
│ ← [LOGO]         │
│                  │
│  Bem-vindo de    │
│  volta!          │
│                  │
│  [email________] │
│  [senha_______🔒]│
│                  │
│  [ENTRAR]        │
│                  │
│  ──── ou ────    │
│                  │
│  Não tem conta?  │
│  [Criar conta]   │
│                  │
│  Esqueceu a senha│
│  [Recuperar]     │
│                  │
│ ⓘ Ao entrar,     │
│   você concorda  │
│   com nossa PP   │
└──────────────────┘
```
Anotações: (1) Botão voltar, (2) Toggle show/hide senha, (3) Link para PP da LGPD

---

**WF-03: Cadastro**
```
┌──────────────────┐
│ ← Criar conta    │
│                  │
│  [nome completo] │
│  [email________] │
│  [telefone_____] │
│  [senha_______🔒]│
│  [confirmar sen] │
│                  │
│  ☐ Li e concordo │  ← obrigatório (checkbox)
│  com Termos e PP │
│  [ver política]  │
│                  │
│  ☐ Aceito receberˑ│  ← opcional (checkbox)
│  promoções       │
│                  │
│  [CRIAR CONTA]   │
└──────────────────┘
```
Anotações: (1) Campo obrigatório marcado com *, (2) LGPD obrigatório bloqueia botão se desmarcado, (3) Marketing é opt-in opcional

---

**WF-04: Seleção de Unidade**
```
┌──────────────────┐
│ [LOGO] [👤] [🛒0] │
│                  │
│ Escolha sua      │
│ unidade          │
│                  │
│ [🔍 buscar...   ]│
│                  │
│ ┌──────────────┐ │
│ │ Recife Centro│ │
│ │ Rua X, 123   │ │
│ │ 07:00–22:00 ✓│ │
│ │ [SELECIONAR] │ │
│ └──────────────┘ │
│                  │
│ ┌──────────────┐ │
│ │ Fortaleza Sul│ │
│ │ Av Y, 456    │ │
│ │ FECHADA ✗    │ │
│ │ [SELECIONAR] │ │  ← desabilitado
│ └──────────────┘ │
└──────────────────┘
```
Anotações: (1) Badge verde=aberta / vermelho=fechada, (2) Card clicável inteiro, (3) Campo de busca por nome/bairro

---

**WF-05: Cardápio**
```
┌──────────────────┐
│ ← Raízes Centro  │
│              [🛒2]│
│                  │
│ [Todos][Café][Cus│
│ cuz][Tapioca][Su-│
│ cos][Doces]      │  ← tabs rolável horizontalmente
│                  │
│ ┌────┐ ┌────┐   │
│ │img │ │img │   │
│ │    │ │    │   │
│ │Cus-│ │Tapi│   │
│ │cuz │ │oca │   │
│ │R$12│ │R$9 │   │
│ │ [+]│ │ [+]│   │  ← grid 2 colunas mobile
│ └────┘ └────┘   │
│                  │
│ ┌────────────┐   │  ← produto sazonal
│ │ 🌽 JUNHO   │   │
│ │ Canjica Fes│   │
│ │ tiva R$14  │   │
│ │         [+]│   │
│ └────────────┘   │
│                  │
│ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ │
│ 🛒 2 itens R$21 →│  ← barra fixa no rodapé
└──────────────────┘
```
Anotações: (1) Badge "SAZONAL" diferencia produtos juninos, (2) Barra sticky soma e navega para carrinho, (3) Tabs filtram por categoria

---

**WF-06: Carrinho**
```
┌──────────────────┐
│ ← Meu Carrinho   │
│                  │
│ Raízes Centro    │
│                  │
│ Cuscuz Recheado  │
│ [-] 2 [+]  R$24  │  [×]
│                  │
│ Tapioca Queijo   │
│ [-] 1 [+]  R$9   │  [×]
│                  │
│ ──────────────── │
│                  │
│ [🏷️ CUPOM_____][✓]│
│                  │
│ Subtotal:  R$33  │
│ Desconto:  -R$0  │
│ Total:     R$33  │
│                  │
│ 🌟 Você ganhará  │
│    33 pontos     │
│                  │
│ [FINALIZAR R$33] │
└──────────────────┘
```
Anotações: (1) Controle de quantidade inline, (2) Campo de cupom com feedback visual, (3) Preview de pontos a ganhar

---

**WF-07: Pagamento**
```
┌──────────────────┐
│ ← Pagamento      │
│                  │
│ ▼ Resumo (R$33)  │  ← colapsável
│                  │
│ Forma de pgto:   │
│                  │
│ ● Pix            │
│   [QR Code aqui] │
│   Copie a chave: │
│   [abc123...]    │
│                  │
│ ○ Cartão Créd.   │
│ ○ Vale Refeição  │
│                  │
│ 🔒 Pagamento     │
│ processado com   │
│ segurança por    │
│ serviço externo  │
│                  │
│ [CONFIRMAR R$33] │
│                  │
│ ⟳ Aguardando     │  ← estado loading (spinner)
│ confirmação...   │
└──────────────────┘
```
Anotações: (1) Cada método expande seus próprios campos, (2) Aviso de segurança explícito, (3) Loading state animado após clique

---

**WF-08: Status do Pedido**
```
┌──────────────────┐
│ Pedido #2847     │
│                  │
│ ●────●────○────○ │
│ Rec  Prep  Pron  Ret│
│  ✓    →          │  ← "Em Preparo" ativo
│                  │
│ ⏱ Tempo estimado:│
│    ~15 minutos   │
│                  │
│ ──────────────── │
│ Seus itens:      │
│ • Cuscuz (x2)    │
│ • Tapioca (x1)   │
│                  │
│ ──────────────── │
│ 🌟 +33 pontos    │
│ creditados!      │
│                  │
│ [VER FIDELIDADE] │
│ [NOVO PEDIDO]    │
└──────────────────┘
```
Anotações: (1) Barra de progresso com 4 etapas, (2) Etapa ativa com animação pulsante, (3) Pontos ganhos aparecem após confirmação

---

**WF-09: Programa de Fidelidade**
```
┌──────────────────┐
│ ← Minha Fidelid. │
│                  │
│ ┌──────────────┐ │
│ │ 🌟 247 pts   │ │  ← saldo em destaque
│ │ Membro Ouro  │ │
│ └──────────────┘ │
│                  │
│ Próxima recomp.: │
│ [████████░░] 80% │
│ Faltam 53 pts    │
│                  │
│ Recompensas:     │
│ ┌────┐ ┌────┐   │
│ │☕  │ │🍽️  │   │
│ │Café│ │Combo│  │
│ │Grát│ │50%  │  │
│ │100p│ │200p │  │
│ │[OK]│ │[🔒] │  │  ← desbloqueada / travada
│ └────┘ └────┘   │
│                  │
│ Histórico:       │
│ +33pts Pedido #5 │
│ +20pts Pedido #4 │
└──────────────────┘
```
Anotações: (1) Nível do cliente (Bronze/Prata/Ouro), (2) Barra de progresso para próxima recompensa, (3) Cards travados em cinza

---

**WF-10: Perfil / LGPD**
```
┌──────────────────┐
│ ← Meu Perfil     │
│                  │
│ 👤 João Silva    │
│ joao@email.com   │
│ (81) 9999-9999   │
│ [Editar dados]   │
│                  │
│ ──────────────── │
│ Privacidade e    │
│ Dados (LGPD)     │
│                  │
│ Comunicações:    │
│ Promoções [ON ●] │
│                  │
│ Personalização:  │
│ Usar histórico   │
│ de consumo [ON●] │
│                  │
│ [Ver Política    │
│  de Privacidade] │
│                  │
│ [Baixar meus     │
│  dados]          │
│                  │
│ [Excluir minha   │  ← botão vermelho outline
│  conta e dados]  │
└──────────────────┘
```
Anotações: (1) Toggles para cada tipo de consentimento, (2) Portabilidade de dados (direito LGPD), (3) Exclusão de conta com confirmação em modal

---

**Versão Desktop dos wireframes:**
- Sidebar de navegação esquerda (substituindo bottom nav)
- Cardápio em grid de 4 colunas
- Carrinho em painel lateral direito (drawer)
- Layout em 2 colunas no checkout (dados + resumo)
- Jornada de Status com linha do tempo horizontal

---

### SEÇÃO 7 — LGPD E PRIVACIDADE NA INTERFACE

**7.1 Elementos implementados**

| Elemento LGPD | Onde aparece | Como funciona |
|---|---|---|
| Banner de cookies | Primeiro acesso (home) | Modal com aceite/recusa antes de qualquer interação |
| Consentimento de cadastro | Tela de cadastro | Checkbox obrigatório — bloqueia o botão se não marcado |
| Consentimento de marketing | Tela de cadastro | Checkbox opcional (opt-in explícito) |
| Aviso de uso de dados | Tela de fidelidade | Informa que histórico de consumo é usado para personalização |
| Gestão de consentimentos | Tela de perfil | Toggles para ligar/desligar cada tipo de uso |
| Portabilidade | Tela de perfil | Botão "Baixar meus dados" |
| Exclusão de conta | Tela de perfil | Botão com modal de confirmação em duas etapas |
| Link para Política | Login, cadastro, perfil | Sempre acessível, abre em modal ou nova aba |

**7.2 Justificativa técnica**
Parágrafo explicando que a LGPD (Lei 13.709/2018) exige base legal para tratamento de dados pessoais, e que a interface implementa o princípio do "consentimento" (Art. 7º, inciso I), "finalidade" e "necessidade", garantindo que o usuário saiba exatamente para que seus dados são usados.

---

### SEÇÃO 8 — ENTREGA TÉCNICA

**8.1 Opção escolhida:** B — Codificação

**8.2 Links:**
- Repositório: `https://github.com/[usuario]/raizes-nordeste`
- Aplicação: `https://[usuario].github.io/raizes-nordeste`

**8.3 Tecnologias e justificativas:**

| Tecnologia | Versão | Justificativa |
|---|---|---|
| HTML5 | — | Estrutura semântica (nav, main, section, article) para acessibilidade e SEO |
| CSS3 | — | Variáveis CSS para identidade visual consistente |
| Bootstrap 5 | 5.3 (CDN) | Grid responsivo, componentes mobile-first sem build tools |
| JavaScript ES6+ | — | Módulos, arrow functions, localStorage para simular persistência |
| GitHub Pages | — | Hospedagem gratuita, HTTPS automático, deploy via push |

**8.4 Estrutura de arquivos:**
```
raizes-nordeste/
│
├── index.html          → Splash / Home
├── login.html          → Autenticação
├── cadastro.html       → Registro com LGPD
├── unidades.html       → Seleção de unidade da rede
├── cardapio.html       → Cardápio dinâmico por unidade
├── carrinho.html       → Carrinho + cupom + resumo
├── pagamento.html      → Fluxo de pagamento externo
├── status.html         → Acompanhamento de pedido
├── fidelidade.html     → Programa de pontos e recompensas
├── perfil.html         → Dados pessoais + configurações LGPD
│
├── css/
│   └── custom.css      → Variáveis de marca, estilos customizados
│
├── js/
│   ├── mockData.js     → Dados simulados (cardápio, unidades, pedidos)
│   ├── auth.js         → Login, cadastro, sessão (localStorage)
│   ├── cart.js         → Lógica do carrinho (adicionar, remover, cupom)
│   ├── order.js        → Criação de pedido e simulação de status
│   ├── loyalty.js      → Cálculo e resgate de pontos
│   └── utils.js        → Utilitários gerais (notificações, formatação, guards)
│
└── assets/
    └── img/
        ├── logo.png
        ├── hero.jpg
        └── produtos/   → fotos dos itens do cardápio
```

---

### SEÇÃO 9 — PLANO DE TESTES

**Estratégia geral:** Testes manuais de usabilidade, responsividade e conformidade LGPD, com cenários positivos e negativos.

**Ferramentas:** Navegador (DevTools), Chrome Device Simulator para responsividade, testes manuais de fluxo.

**Tabela de cenários (14 cenários):**

| ID | Tipo | Cenário | Entrada | Passos | Saída esperada |
|---|---|---|---|---|---|
| CT01 | ✅ Positivo | Login válido | Email e senha corretos | 1. Acessar login 2. Preencher dados 3. Clicar Entrar | Redireciona para seleção de unidade |
| CT02 | ❌ Negativo | Login inválido | Senha errada | 1. Acessar login 2. Email correto + senha errada 3. Clicar Entrar | Mensagem de erro: "Email ou senha incorretos" |
| CT03 | ✅ Positivo | Cadastro completo | Todos os campos + LGPD aceita | 1. Preencher form 2. Marcar checkbox LGPD 3. Criar conta | Conta criada, redireciona para unidades |
| CT04 | ❌ Negativo | Cadastro sem LGPD | Campos preenchidos + LGPD não marcada | 1. Preencher form 2. NÃO marcar LGPD 3. Tentar criar conta | Botão desabilitado / aviso: "É necessário aceitar os termos" |
| CT05 | ✅ Positivo | Cardápio por unidade | Unidade "Recife Centro" selecionada | 1. Selecionar unidade 2. Ver cardápio | Exibe apenas produtos disponíveis nessa unidade |
| CT06 | ✅ Positivo | Adicionar ao carrinho | Produto disponível | 1. Clicar "+" no produto | Badge do carrinho incrementa, produto aparece no carrinho |
| CT07 | ❌ Negativo | Produto indisponível | Produto marcado como esgotado | 1. Tentar adicionar produto esgotado | Botão desabilitado + aviso: "Produto indisponível" |
| CT08 | ✅ Positivo | Cupom válido | Código "JUNHO10" com 10% de desconto | 1. No carrinho, digitar cupom 2. Clicar aplicar | Desconto exibido no resumo, total atualizado |
| CT09 | ❌ Negativo | Cupom inválido | Código inexistente ou vencido | 1. Digitar código errado 2. Aplicar | Mensagem: "Cupom inválido ou expirado" |
| CT10 | ✅ Positivo | Pagamento aprovado | Pix selecionado | 1. Selecionar Pix 2. Confirmar | Spinner de loading → tela de status do pedido |
| CT11 | ❌ Negativo | Pagamento recusado | Simulação de falha | 1. Simular retorno negativo do pagamento | Mensagem: "Pagamento não aprovado. Tente outra forma." |
| CT12 | ✅ Positivo | Progresso de status | Pedido criado | 1. Ver tela de status após pedido | Etapas progridem: Recebido → Em preparo → Pronto |
| CT13 | ✅ Positivo | Responsividade mobile | Viewport 375px (iPhone) | 1. Abrir app em mobile 2. Navegar por todas as telas | Layout adapta sem quebra, botões clicáveis, texto legível |
| CT14 | ✅ Positivo | Gerenciar LGPD | Usuário logado | 1. Acessar perfil 2. Desativar toggle "Promoções" | Preferência salva, confirmação visual, opt-out registrado |

---

### SEÇÃO 10 — CONCLUSÃO

**O que abordar (aprox. 1 página):**

- **Lições aprendidas:** Como traduzir regras de negócio complexas (multicanalidade, LGPD, fidelização) em decisões concretas de interface
- **Desafios:** Equilibrar simplicidade de uso com conformidade legal; projetar para três canais distintos com uma base de código única
- **Relação com Back-end:** Quais endpoints o front-end dependeria (API de cardápio, API de pedidos, webhook de pagamento, API de pontos)
- **Relação com QA:** Como os cenários de teste produzidos seriam executados por uma equipe de qualidade com ferramentas como Cypress
- **Pontos de evolução:** Notificações push, modo offline (PWA), acessibilidade WCAG AAA, integração real de pagamento

---

### SEÇÃO 11 — REFERÊNCIAS

- BRASIL. Lei nº 13.709, de 14 de agosto de 2018. Lei Geral de Proteção de Dados Pessoais (LGPD).
- PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: Uma Abordagem Profissional*. 8. ed.
- NIELSEN, Jakob. *Usability Engineering*. Academic Press, 1994.
- BOOTSTRAP. Documentação oficial Bootstrap 5. Disponível em: https://getbootstrap.com/docs/5.3
- MDN Web Docs. HTML, CSS e JavaScript Reference. Disponível em: https://developer.mozilla.org

---

## 3. ESTRUTURA DO CÓDIGO — DESCRIÇÃO DETALHADA DE CADA ARQUIVO

### `custom.css`
**O que faz:** Define as variáveis globais de marca (cores, tipografia, espaçamentos) e sobrescreve componentes do Bootstrap com a identidade visual da Raízes do Nordeste. Inclui animações leves (spinner de pagamento, pulsação no status ativo do pedido).

---

### `mockData.js`
**O que faz:** Exporta objetos JS com todos os dados simulados:
- `unidades[]` — 5 unidades com nome, endereço, horário, status (aberta/fechada)
- `cardapio[]` — 30+ produtos com id, nome, descrição, preço, categoria, disponibilidade, flag sazonal, unidades onde está disponível
- `recompensas[]` — 5 recompensas de fidelidade com custo em pontos e descrição
- `cupons[]` — 3 cupons com código, tipo (%), valor e validade
- `usuario_demo` — usuário padrão para demonstração (email + senha fixos)
- `historico_pedidos[]` — 3 pedidos anteriores para popular o histórico

---

### `auth.js`
**O que faz:** Gerencia todo o fluxo de autenticação usando `localStorage`:
- `login(email, senha)` — verifica credenciais contra mockData, salva sessão
- `cadastrar(dados)` — valida campos, registra usuário, salva no localStorage
- `logout()` — limpa sessão, redireciona para home
- `getUsuarioLogado()` — retorna dados do usuário da sessão atual
- `guardRotaProtegida()` — redireciona para login se não há sessão ativa (chamada no `<head>` de todas as páginas protegidas)

---

### `cart.js`
**O que faz:** Gerencia o estado do carrinho em `localStorage`:
- `adicionarItem(produto)` — adiciona ou incrementa item no carrinho
- `removerItem(produtoId)` — remove item completamente
- `alterarQuantidade(produtoId, delta)` — incrementa ou decrementa quantidade
- `aplicarCupom(codigo)` — valida cupom no mockData e aplica desconto
- `calcularTotal()` — retorna subtotal, desconto e total
- `calcularPontos()` — retorna quantos pontos o pedido vai gerar
- `limparCarrinho()` — esvazia após pedido confirmado
- `renderizarCarrinho()` — atualiza o HTML da página carrinho

---

### `order.js`
**O que faz:** Gerencia o ciclo de vida do pedido:
- `criarPedido(itens, formaPagamento)` — gera número de pedido, salva no localStorage
- `simularPagamento(forma)` — retorna `aprovado` ou `recusado` aleatoriamente (90% aprovação) com delay de 2s para simular chamada externa
- `atualizarStatus(pedidoId, novoStatus)` — progride o status do pedido
- `simularProgressoStatus()` — avança automaticamente pelas etapas (Recebido → Em Preparo → Pronto) com setTimeout para demonstração
- `renderizarStatus()` — atualiza a barra de progresso visual na tela de status

---

### `loyalty.js`
**O que faz:** Controla o sistema de pontos:
- `calcularPontosGanhos(valorPedido)` — retorna `Math.floor(valor)` pontos (1 ponto por R$1)
- `creditarPontos(userId, pontos)` — adiciona pontos ao saldo no localStorage
- `getSaldo(userId)` — retorna saldo atual
- `resgatar(userId, recompensaId)` — desconta pontos e registra resgate
- `renderizarFidelidade()` — monta a tela de fidelidade com saldo, barra de progresso e cards de recompensas

---

### `utils.js`
**O que faz:** Funções utilitárias compartilhadas entre todas as páginas:
- `toast(mensagem, tipo)` — exibe notificação flutuante (sucesso/erro/info) por 3 segundos
- `formatarMoeda(valor)` — formata número como `R$ 12,50`
- `formatarData(date)` — formata datas em pt-BR
- `atualizarBadgeCarrinho()` — atualiza o número no ícone do carrinho no header
- `inicializarNavbar()` — monta a navegação padrão com usuário logado e botão de logout

---

### `index.html` (Home)
**O que faz:** Página de entrada pública. Exibe o hero visual com as CTAs "Fazer Pedido" e "Entrar na Minha Conta". Detecta sessão ativa e redireciona direto para unidades se já logado. Exibe banner de cookies LGPD no primeiro acesso.

---

### `login.html`
**O que faz:** Formulário de login com validação em tempo real. Chama `auth.login()` e redireciona para `unidades.html` em caso de sucesso. Exibe toast de erro em caso de falha.

---

### `cadastro.html`
**O que faz:** Formulário de cadastro com validação de todos os campos. Checkbox LGPD obrigatório desabilita o botão de submit quando desmarcado. Checkbox de marketing é opcional. Chama `auth.cadastrar()` e redireciona para `unidades.html`.

---

### `unidades.html`
**O que faz:** Lista todas as unidades do mockData em cards. Campo de busca filtra por nome/bairro em tempo real. Cards de unidades fechadas ficam em estado desabilitado. Clicar em "Selecionar" salva a unidade escolhida no localStorage e redireciona para `cardapio.html`.

---

### `cardapio.html`
**O que faz:** Carrega produtos do mockData filtrados pela unidade selecionada. Tabs de categoria filtram os produtos exibidos. Grid responsivo (2 colunas mobile / 4 desktop). Badge sazonal aparece em produtos com flag ativa. Botão "+" chama `cart.adicionarItem()`. Barra sticky no rodapé exibe total e navega para carrinho.

---

### `carrinho.html`
**O que faz:** Renderiza todos os itens do carrinho com controles de quantidade. Botão remover chama `cart.removerItem()`. Campo de cupom chama `cart.aplicarCupom()` e exibe feedback. Resumo calculado em tempo real. Exibe preview dos pontos a ganhar. Botão "Finalizar" redireciona para `pagamento.html`.

---

### `pagamento.html`
**O que faz:** Exibe resumo do pedido (colapsável). Radio buttons para forma de pagamento — cada opção expande seus campos específicos (Pix: QR code simulado; Cartão: campos de número/CVV/validade). Botão "Confirmar" chama `order.simularPagamento()`, exibe spinner de 2s, então redireciona para `status.html` (aprovado) ou exibe toast de erro (recusado).

---

### `status.html`
**O que faz:** Exibe o número do pedido e a barra de progresso com 4 etapas. Chama `order.simularProgressoStatus()` que avança as etapas automaticamente a cada 5s para demonstração. Exibe itens do pedido. Ao chegar em "Pronto", exibe os pontos ganhos e botão para fidelidade.

---

### `fidelidade.html`
**O que faz:** Exibe saldo de pontos, nível do cliente (Bronze/Prata/Ouro), barra de progresso para próxima recompensa, grid de recompensas (desbloqueadas/travadas), e histórico de pontos. Botão "Resgatar" chama `loyalty.resgatar()` com modal de confirmação.

---

### `perfil.html`
**O que faz:** Exibe dados do usuário logado com botão "Editar" (inline editing). Seção LGPD com toggles para cada tipo de consentimento (salvo no localStorage). Botão "Baixar meus dados" gera e faz download de um JSON com os dados do usuário. Botão "Excluir conta" abre modal de confirmação em duas etapas, então chama `auth.logout()` após limpeza.

---

## 4. MOCK DATA — DETALHAMENTO

### Unidades (5 unidades)
```
1. Recife Centro        → Aberta, cardápio completo
2. Fortaleza Aldeota    → Aberta, sem canjica (não é período junino)
3. São Paulo Pinheiros  → Aberta, formato reduzido (sem cozinha completa)
4. Salvador Pelourinho  → Fechada (horário)
5. Maceió Centro        → Aberta, cardápio regional com variações locais
```

### Categorias do cardápio
```
Café da Manhã | Cuscuz | Tapioca | Sucos Regionais | Doces | Especial Junino (sazonal)
```

### Recompensas de fidelidade
```
100 pts → Café gratuito
200 pts → Combo com 50% desconto
350 pts → Tapioca grátis
500 pts → Cuscuz especial + suco grátis
1000pts → Almoço completo para 2 pessoas
```

---

## 5. ARQUIVO `sobre_uso_de_ia.txt`

```
DECLARAÇÃO DE USO DE INTELIGÊNCIA ARTIFICIAL
Projeto Multidisciplinar — Trilha Front-end
Aluno: [NOME] | RU: [RU]

FERRAMENTAS UTILIZADAS:
1. Claude (Anthropic) — claude.ai

ETAPAS E APLICAÇÕES:
- Organização e estruturação do documento PDF
- Revisão e correção de textos em português
- Geração de mock data (cardápio, unidades, recompensas)
- Apoio na escrita de código HTML, CSS e JavaScript
- Revisão de código e identificação de inconsistências
- Elaboração dos cenários de teste (plano de testes)
- Organização dos requisitos funcionais e não funcionais

ARTEFATOS GERADOS OU AUXILIADOS POR IA:
- Estrutura completa do documento PDF
- Texto das seções de Introdução, Análise de Requisitos e Conclusão
- Código dos arquivos JS (mockData.js, auth.js, cart.js, order.js, loyalty.js, utils.js)
- Código HTML de todas as 10 páginas
- CSS customizado (custom.css)
- Tabela de plano de testes com 14 cenários
- Textos de UX (labels, mensagens de erro, notificações)

REVISÃO HUMANA:
Todos os artefatos gerados por IA foram revisados, ajustados e validados
pelo aluno antes da entrega final.
```

---

## 6. CHECKLIST DE ENTREGA

- [ ] PDF único com todas as 11 seções
- [ ] Capa com nome, RU, polo, semestre, professor
- [ ] Sumário com páginas
- [ ] Requisitos funcionais e não funcionais em tabela
- [ ] Diagrama de casos de uso com 5 atores (imagem)
- [ ] Descrição detalhada de pelo menos 3 UCs
- [ ] Diagrama de jornada do usuário (imagem)
- [ ] Wireframes de 10 telas (mobile + desktop)
- [ ] Anotações nos wireframes
- [ ] Seção LGPD com elementos implementados
- [ ] Links do GitHub e GitHub Pages no documento
- [ ] Plano de testes com 14 cenários (positivos e negativos)
- [ ] Conclusão com relação a back-end e QA
- [ ] Referências bibliográficas
- [ ] Link do repositório público e testado
- [ ] Aplicação online acessível e funcional
- [ ] `sobre_uso_de_ia.txt` pronto para entrega
- [ ] Nome do arquivo: `[RU]_Projeto_Front_End.pdf`
- [ ] Teste de todos os links em janela anônima

---

*Mapa gerado em: Junho/2026*
*Versão: 1.0*
