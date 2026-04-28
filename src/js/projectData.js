const PROJECT_DATABASE = {
  "chamados": {
    title: "DashBoard de Chamados",
    category: "Suporte",
    developer: { name: "Flávio Dias", role: "Desenvolvedor full-stack" },
    catClass: "text-bright-cyan border-bright-cyan/30",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    description: "O Dashboard de Chamados e uma solucao de helpdesk para a instituicao. Ele centraliza as solicitacoes de suporte, permitindo que colaboradores abram chamados para a equipe de T.I. ou manutencao predial de forma intuitiva.\n\nPrincipais features:\n- Acompanhamento de SLA em tempo real.\n- Sistema de prioridades automaticas.\n- Dashboard analitico para gestao de gargalos operacionais.",
    techStack: ["Dart", "HTML/CSS", "Firebase"],
    gallery: [
      "assets/images/login_chamados.png",
      "assets/images/chamados_tela1.png",
      "assets/images/chamados_tela2.png"
    ]
  },
  "inventory": {
    title: "Bright Inventory",
    category: "Patrimonio",
    developer: { name: "Flávio Dias", role: "Desenvolvedor full-stack" },
    catClass: "text-bright-orange border-bright-orange/30",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    description: "Plataforma avancada para gestao do ciclo de vida de hardware e patrimonio escolar. Controla a alocacao de dispositivos, depreciacao e manutencao preventiva.\n\nO sistema integra leitores de codigo de barras e gera relatorios precisos para auditorias financeiras.",
    techStack: ["JAVA", "MySQL"],
    gallery: [
      "assets/images/login_inventory.jpeg",
      "assets/images/inventory_tela1.jpeg",
      "assets/images/inventory_tela2.jpeg",
      "assets/images/inventory_tela3.jpeg"
    ]
  },
  "portal-pp": {
    title: "Portal PP",
    category: "Pedagogico",
    developer: { name: "Gustavo Barros", role: "Desenvolvedor backend" },
    catClass: "tag-pedagogico border",
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    description: `O Portal PP (Portal P.A.I e P.E.I) e um sistema web moderno e responsivo, desenvolvido sob medida para centralizar, automatizar e otimizar a gestao da educacao inclusiva no ambiente escolar. Com foco em usabilidade e seguranca, a plataforma oferece aos profissionais de educacao e psicologia todas as ferramentas necessarias para acompanhar o desenvolvimento de alunos atipicos ou com necessidades educacionais especificas.

O sistema elimina a fragmentacao de informacoes (planilhas soltas e documentos fisicos) e unifica o historico do aluno em um dashboard inteligente, totalmente integrado ao ecossistema Google Workspace e preparado para sincronizacao com o sistema academico TOTVS.

Principais Modulos e Funcionalidades:
- Perfil Completo do Aluno: Um prontuario digital com foto, dados de matricula, informacoes do responsavel e o diagnostico/classificacao principal (TDAH, TEA, Dislexia, etc.), permitindo buscas rapidas e avancadas.
- Gerador de Documentos Inteligente: Formularios dinamicos para a criacao automatizada do P.E.I (Plano Educacional Individualizado) e do P.A.I (Plano de Atendimento Individualizado). O sistema preenche, formata e salva os documentos diretamente nas pastas corretas do Google Drive da instituicao.
- Desempenho Academico (Integracao TOTVS): Um boletim panoramico e inteligente. Alem de espelhar o design do documento oficial impresso da escola, o portal analisa as notas e gera alertas visuais imediatos (verde para ascensao, vermelho para risco de recuperacao), facilitando a intervencao rapida.
- Metas e Intervencoes: Acompanhamento continuo de objetivos pedagogicos e comportamentais. O sistema traduz o progresso do aluno em indicadores visuais claros (aneis de progresso) divididos em Academico, Socializacao e Autonomia.
- Explorador de Arquivos: Um repositorio integrado em nuvem para upload e organizacao de laudos medicos, avaliacoes neuropsicologicas, fotos e videos diretamente na pasta do aluno.
- Controle de Acessos e Seguranca: Autenticacao segura via Google Login, garantindo que apenas profissionais autorizados acessem os dados sensiveis, com diferentes niveis de permissao (Administrador, Psicologo, Diretoria).`,
    techStack: ["HTML/CSS", "Tailwind", "Javascript", "Google Apps Script"],
    gallery: [
      "assets/images/login_pp.png",
      "assets/images/pp_tela2.png",
      "assets/images/pp_tela3.png",
      "assets/images/pp_tela4.png",
      "assets/images/pp_tela5.png",
      "assets/images/pp_tela6.png",
      "assets/images/pp_tela7.png",
      "assets/images/pp_tela8.png",
      "assets/images/pp_tela9.png",
      "assets/images/pp_tela10.png",
      "assets/images/pp_tela11.png"
    ]
  },
  "reservas": {
    title: "Reservas Chromebooks",
    category: "Infraestrutura",
    developer: { name: "Gustavo Barros", role: "Desenvolvedor backend" },
    catClass: "text-blue-400 border border-blue-400/30",
    coverImage: "assets/images/reservas_capa.png",
    description: "Automacao criada no Google Workspace para gerenciar conflitos de agendamento dos carrinhos moveis de Chromebooks. O professor agenda o recurso via formulario, e o script verifica disponibilidade, bloqueia a agenda e notifica os inspetores para a entrega na sala.",
    techStack: ["Javascript", "HTML/CSS", "Google Apps Script"],
    gallery: [
      "assets/images/login_reservas.png",
      "assets/images/reservas_tela1.png",
      "assets/images/reservas_tela2.png",
      "assets/images/reservas_tela3.png",
      "assets/images/reservas_tela4.png",
      "assets/images/reservas_tela5.png",
      "assets/images/reservas_tela6.png",
      "assets/images/reservas_tela7.png",
      "assets/images/reservas_tela8.png"
    ]
  },
  "library": {
    title: "School Library",
    category: "Academico",
    developer: { name: "Flávio Dias", role: "Desenvolvedor full-stack" },
    catClass: "text-bright-red border-bright-red/30",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    description: "O School Library e o sistema de gestao bibliotecaria da instituicao. Permitindo a consulta em tempo real de exemplares disponiveis, renovacao automatica de emprestimos via portal e sistema de reservas antecipadas.\n\nDesenvolvido com foco em escalabilidade para atender multiplos usuarios de forma sincronizada.",
    techStack: ["JAVA", "MySQL"],
    gallery: [
      "assets/images/library_tela1.png",
      "assets/images/library_tela2.png",
      "assets/images/library_tela3.png"
    ]
  },
  "fair": {
    title: "Bright Fair",
    category: "Eventos",
    developer: { name: "Gustavo Barros", role: "Desenvolvedor backend" },
    catClass: "text-bright-yellow border-bright-yellow/30",
    coverImage: "https://www.infomoney.com.br/wp-content/uploads/2019/06/educacao-livro.jpg?quality=70",
    description: `O formulario web Bright Fair e um sistema leve, responsivo e em tempo real, desenvolvido para gerir a inscricao de alunos nas oficinas da feira de profissoes da Bright Bee School.
O projeto utiliza uma arquitetura "Serverless" baseada em Google Apps Script (Backend) e HTML/Tailwind CSS (Frontend), armazenando os dados diretamente numa folha de calculo (Google Sheets).

Principais Funcionalidades

1. Atualizacao em Tempo Real (Polling)
O frontend consulta o backend a cada 5 segundos para obter o numero exato de vagas ocupadas em cada oficina.
A interface (cards e menus suspensos) atualiza as vagas restantes automaticamente, sem necessidade de recarregar a pagina.
Quando uma oficina atinge o limite de vagas, o card correspondente fica visualmente bloqueado (cinzento com a etiqueta "Esgotado") e a opcao e desativada no menu de selecao.

2. Controle e Regras de Negocio (Backend)
Para garantir a integridade dos dados e evitar fraudes ou sobreposicoes, o backend possui varias camadas de seguranca:

Bloqueio de Duplicidade: Um aluno so pode efetuar uma unica inscricao, utilizando o seu e-mail institucional. O script verifica toda a base de dados antes de permitir uma nova entrada.
Regras por Ano de Escolaridade: Algumas oficinas sao restritas a grupos especificos. Por exemplo, a oficina de Biologia so aceita alunos do G8 e G9. Se um aluno do G6 tentar inscrever-se, a inscricao e rejeitada no servidor.
Validacao de Dominio: O sistema apenas aceita e-mails terminados em @brightbee.com.br.
Fila de Processamento (LockService): Para lidar com um elevado volume de acessos simultaneos (dezenas de alunos a submeter o formulario ao mesmo tempo), o sistema utiliza um mecanismo de "trinco" (LockService). Isto cria uma fila ordenada por tempo de chegada (duracao ate 15 segundos), impedindo que duas pessoas fiquem com a ultima vaga.

3. Otimizacao de Performance (Cache)
O sistema utiliza o CacheService do Google. A leitura da folha de calculo e feita uma vez e armazenada durante 10 segundos. Todos os alunos que acederem nesse intervalo recebem a versao em cache, aliviando drasticamente a carga do servidor.
Sempre que uma nova inscricao e submetida com sucesso, o cache e invalidado e reconstruido imediatamente, garantindo a precisao dos dados.

4. Interface de Utilizador (UI/UX)
Design moderno construido com Tailwind CSS.
Design Responsivo: O formulario de inscricao e fixo no lado direito (sticky) em ecras de computador e adapta-se de forma fluida no telemovel, colocando os cards de forma centralizada e organizada.
Feedback Imediato (Toast): As respostas do servidor (sucesso ou erros como "vagas esgotadas" ou "e-mail duplicado") sao apresentadas atraves de notificacoes nao intrusivas no topo do ecra.
Estado de Sucesso: Apos uma inscricao bem-sucedida, o formulario desaparece, dando lugar a uma mensagem clara de confirmacao.
Interruptor de Seguranca: Existe uma variavel global (ENABLE_REGISTRATIONS) no frontend que permite a coordenacao "ligar" ou "desligar" o periodo de inscricoes com um unico ajuste de codigo.

Estrutura Tecnica
Frontend: Ficheiro unico index.html alojado no GitHub Pages. Contem a estrutura HTML, a estilizacao com classes do Tailwind e a logica JavaScript para consumo da API e manipulacao do DOM.
Backend: Ficheiro unico Code.gs alojado no Google Apps Script. Recebe os pedidos via GET (leitura de vagas) e POST (submissao de formulario), aplicando a logica de negocio e interagindo com o Google Sheets.
Base de Dados: Uma folha de calculo do Google Sheets, onde os dados (Timestamp, Nome, E-mail, Oficina, Turma) sao guardados de forma estruturada.

Distribuicao das Oficinas e Vagas
Ciencias (G6 e G7) - 20 vagas
Matematica (G6 ao G9) - 20 vagas
Moral e Etica (G6 ao G9) - 20 vagas
Geografia (G6 ao G9) - 20 vagas
Historia (G6 ao G9) - 20 vagas
Biologia (G8 e G9) - 15 vagas
Fisica (G8 e G9) - 15 vagas
Quimica (G8 e G9) - 15 vagas
Ingles (G6-G7) - 20 vagas
Ingles (G8-G9) - 20 vagas

Adaptabilidade e Reutilizacao do Modelo
Embora este sistema tenha sido idealizado especificamente para o evento Bright Career Fair, a sua arquitetura logica e tecnologica foi construida de forma modular para ser facilmente reestruturada para outros servicos da instituicao.
O modelo de "Folha de Calculo + Interface Web em Tempo Real" possui um enorme potencial de escala e pode ser adaptado para atender a diversas outras demandas, tais como:

Inscricoes para Clubes Extracurriculares ou atividades no contraturno.
Agendamento de reunioes entre pais e professores.
Gestao e reserva de equipamentos, salas de estudo ou laboratorios.
Emissao de bilhetes ou reservas para outros eventos escolares internos.

As regras de negocio (limites de vagas, turmas autorizadas e restricoes) estao centralizadas em dicionarios simples de configuracao no codigo (WORKSHOPS). Isto permite que o departamento de tecnologia crie novas versoes deste sistema para qualquer outra finalidade em tempo recorde, alterando apenas os textos e os parametros de limite.`,
    techStack: ["HTML/CSS", "Javascript"],
    gallery: [
      "assets/images/fair_tela1.png",
      "assets/images/fair_tela2.png",
      "assets/images/fair_tela3.png"
    ]
  },
  "sisanet": {
    title: "SISANET - BBS",
    categories: [
      { name: "Infraestrutura", style: "text-blue-400 border border-blue-400/30" },
      { name: "Academico", style: "text-bright-red border-bright-red/30" }
    ],
    developer: { name: "Brendo Soares", role: "Analista de dados" },
    coverImage: "assets/images/sisanet.png",
    description: "O Sistema de Analise de Equipamentos Tecnologicos - BBS e uma solucao de BI (Business Intelligence) e gestao de ativos focada na infraestrutura de hardware escolar. O projeto visa otimizar o ciclo de vida dos equipamentos, transformando dados brutos de inventario em insights estrategicos para a tomada de decisao da TI e do setor financeiro.\n\nPrincipais features:\n- Projecao Patrimonial: Visualizacao preditiva da depreciacao do inventario, facilitando a gestao de investimentos futuros.\n- Categorizacao Tecnica Automatizada: Classificacao de hardware baseada em performance do processador para identificar gargalos em setores administrativos e pedagogicos.\n- Auditoria de Software: Painel consolidado para verificacao imediata da conformidade de licenciamento de sistemas operacionais e pacotes de produtividade.",
    techStack: ["Python", "MySQL"],
    gallery: [
      "assets/images/sisanet_tela1.png",
      "assets/images/sisanet_tela2.png",
      "assets/images/sisanet_tela3.png"
    ]
  },
  "tickets-ingressos": {
    title: "Bright Tickets",
    category: "Eventos",
    developer: { name: "Flávio Dias", role: "Desenvolvedor full-stack" },
    catClass: "text-bright-yellow border-bright-yellow/30",
    coverImage: "https://static.kiaga.com.br/public/kiaga/imagens/produtos/0b2a54d4b7a196e3d2e76d6f9dec4585.jpg",
    description: "Plataforma oficial para venda e emissao de ingressos digitais para os eventos da escola, como feiras de ciencias, pecas de teatro e festas de encerramento.\n\nO sistema elimina a necessidade de bilhetes de papel, gerando um QR Code unico para cada participante, que e lido rapidamente na portaria atraves de qualquer smartphone pelos inspetores.",
    techStack: ["Dart", "Firebase", "HTML/CSS", "TailwindCSS"],
    gallery: [
      "assets/images/logo_tickets.jpeg",
      "assets/images/tickets_tela1.jpeg",
      "assets/images/tickets_tela2.jpeg",
      "assets/images/tickets_tela3.jpeg",
      "assets/images/tickets_tela4.jpeg",
      "assets/images/tickets_tela5.jpeg",
      "assets/images/tickets_tela6.jpeg"
    ]
  },
  "psicologia": {
    title: "Atendimento Psicologia",
    category: "Pedagogico",
    developer: { name: "Gustavo Barros", role: "Desenvolvedor backend" },
    catClass: "tag-pedagogico border",
    coverImage: "assets/images/psico_capa.png",
    description: "O app de Gestao Escolar e uma aplicacao web desenvolvida para centralizar e organizar os registros de atendimentos pedagogicos, psicologicos e administrativos da instituicao. O sistema substitui formularios manuais por uma plataforma inteligente e responsiva, projetada sob os mais altos padroes de seguranca do ecossistema Google.\n\nPublico-Alvo\nDirecao, Coordenacao Pedagogica, Orientacao Educacional, Psicologia Escolar e Recursos Humanos.\n\nDiferencial de Seguranca: Autenticacao Nativa do Google (SSO)\nO pilar central deste sistema e a sua seguranca estrutural. O aplicativo nao possui um banco de senhas proprio; toda a camada de autenticacao foi terceirizada para os servidores do Google.\n\n- Verificacao Previa: Antes mesmo de o sistema ser carregado no navegador, o Google intercepta o acesso e exige as credenciais (e-mail e senha) do usuario.\n- Controle de Acesso (Whitelist): O login bem-sucedido no Google nao garante acesso a plataforma. O sistema possui uma camada secundaria de verificacao que cruza o e-mail autenticado com uma lista restrita de usuarios permitidos. Tentativas de acesso por contas nao autorizadas sao bloqueadas imediatamente em uma tela de seguranca.\n- Auditoria Integrada: Como o usuario precisa estar logado na sua conta corporativa ou pessoal do Google, todas as acoes no banco de dados ficam atreladas aquela identidade, garantindo rastreabilidade.\n\nPrincipais Funcionalidades\n\n- Formularios Dinamicos e Inteligentes: Os campos de preenchimento se adaptam automaticamente ao publico selecionado. A selecao de 'Aluno' exige a indicacao da Turma (categorizada do Grade 6 ao Grade 12), enquanto a selecao de 'Equipe' solicita o Setor correspondente.\n- Experiencia em Tempo Real (Optimistic UI): A interface foi programada para responder instantaneamente. Acoes de salvar ou excluir registros refletem na tela de imediato, enquanto a sincronizacao com o banco de dados ocorre silenciosamente em segundo plano, garantindo fluidez e ausencia de travamentos.\n- Dashboard de Indicadores: O aplicativo conta com um painel superior que exibe metricas atualizadas em tempo real, fornecendo uma visao rapida sobre o volume de atendimentos totais, registros do mes vigente e o publico mais demandado.\n- Design Mobile-First: A interface de usuario (UI) foi desenhada com foco em dispositivos moveis. Utiliza menus suspensos para o gerenciamento do perfil logado e um botao de acao flutuante (FAB) para novos registros, mantendo a tela limpa e a navegacao intuitiva em qualquer tamanho de tela.\n- Banco de Dados Gerenciavel: Todos os registros sao estruturados e armazenados automaticamente em uma planilha do Google Sheets. Essa integracao nativa permite que a gestao exporte dados, crie tabelas dinamicas e gere relatorios de forma independente.",
    techStack: ["HTML/CSS", "Javascript", "Tailwind"],
    gallery: [
      "assets/images/psicologia_tela1.png",
      "assets/images/psicologia_tela2.png",
      "assets/images/psicologia_tela3.png",
      "assets/images/psicologia_tela4.png",
      "assets/images/psicologia_tela5.png"
    ]
  }
};

window.PROJECT_DATABASE = PROJECT_DATABASE;
