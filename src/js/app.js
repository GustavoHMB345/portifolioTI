if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. LÓGICA DO PAINEL DE STATUS (DROPDOWN)
  // ==========================================
  const btn = document.getElementById('statusDropdownBtn');
  const dropdown = document.getElementById('statusDropdown');
  
  // PROTEÇÃO: O código do status só corre se o botão existir no HTML
  if (btn && dropdown) {
      const toggles = document.querySelectorAll('.toggle-service');
      const globalStatus = document.getElementById('globalStatus');
      const globalPing = document.getElementById('globalPing');
      const systemMessage = document.getElementById('systemMessage');

      btn.addEventListener('click', (e) => {
        dropdown.classList.toggle('hidden');
        e.stopPropagation();
      });

      document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });

      toggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
          const indicator = e.target.closest('.flex.justify-between').querySelector('.service-indicator');
          if (e.target.checked) {
            indicator.classList.remove('bg-red-500');
            indicator.classList.add('bg-green-500');
          } else {
            indicator.classList.remove('bg-green-500');
            indicator.classList.add('bg-red-500');
          }
          updateGlobalStatus();
        });
      });

      function updateGlobalStatus() {
        const activeCount = document.querySelectorAll('.toggle-service:checked').length;
        const totalCount = toggles.length;

        globalPing.classList.remove('bg-green-400', 'bg-yellow-400', 'bg-red-400');
        globalStatus.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-red-500');

        if (activeCount === totalCount) {
          globalPing.classList.add('bg-green-400');
          globalStatus.classList.add('bg-green-500');
          globalPing.style.display = 'block';
          systemMessage.textContent = 'Todos os sistemas operacionais.';
          systemMessage.className = 'text-[10px] text-green-400';
        } else if (activeCount === 0) {
          globalPing.classList.add('bg-red-400');
          globalStatus.classList.add('bg-red-500');
          globalPing.style.display = 'none';
          systemMessage.textContent = 'Interrupção total dos serviços.';
          systemMessage.className = 'text-[10px] text-red-400';
        } else {
          globalPing.classList.add('bg-yellow-400');
          globalStatus.classList.add('bg-yellow-500');
          globalPing.style.display = 'block';
          systemMessage.textContent = 'Instabilidade detetada em alguns serviços.';
          systemMessage.className = 'text-[10px] text-yellow-400';
        }
      }
  }

  // ==========================================
  // 2. LÓGICA DOS FILTROS DE CATEGORIA
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          
          filterBtns.forEach(b => {
            b.classList.remove('bg-bright-yellow', 'text-bright-dark');
            b.classList.add('bg-bright-card', 'text-gray-300', 'border-white/10', 'hover:bg-white/10');
          });

          btn.classList.remove('bg-bright-card', 'text-gray-300', 'border-white/10', 'hover:bg-white/10');
          btn.classList.add('bg-bright-yellow', 'text-bright-dark');

          const filterValue = btn.getAttribute('data-filter');

          projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'todos' || (category && category.includes(filterValue))) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
          
        });
      });
  }

  // ==========================================
  // 3. LÓGICA DO MODAL FLUTUANTE
  // ==========================================
  const projectDatabase = {
    "chamados": {
        title: "DashBoard de Chamados",
        category: "Suporte",
        catClass: "text-bright-cyan border-bright-cyan/30",
        coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
        description: "O Dashboard de Chamados é uma solução de helpdesk para a instituição. Ele centraliza as solicitações de suporte, permitindo que colaboradores abram chamados para a equipe de T.I. ou manutenção predial de forma intuitiva.\n\nPrincipais features:\n• Acompanhamento de SLA em tempo real.\n• Sistema de prioridades automáticas.\n• Dashboard analítico para gestão de gargalos operacionais.",
        techStack: ["Dart", "HTML/CSS", "Firebase"],
        gallery: [
            "assets/images/chamados_tela1.png",
            "assets/images/chamados_tela2.png",
        ]
    },
    "inventory": {
        title: "Bright Inventory",
        category: "Patrimônio",
        catClass: "text-bright-orange border-bright-orange/30",
        coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        description: "Plataforma avançada para gestão do ciclo de vida de hardware e patrimônio escolar. Controla a alocação de dispositivos, depreciação e manutenção preventiva.\n\nO sistema integra leitores de código de barras e gera relatórios precisos para auditorias financeiras.",
        techStack: ["JAVA", "MySQL"],
        gallery: [
            "assets/images/login_inventory.png",
            "assets/images/inventory_tela1.png",
            "assets/images/inventory_tela2.png",
            "assets/images/inventory_tela3.png"
            
        ]
    },
    "portal-pp": {
        title: "Portal PP",
        category: "Pedagógico",
        catClass: "text-bright-purple border-bright-purple/30",
        coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
        description: "O Portal de Práticas Pedagógicas é o hub central dos educadores da Bright School. Permite a elaboração e submissão de planos de aula, compartilhamento de recursos didáticos e alinhamento com a BNCC.\n\nPossui fluxos de aprovação integrados diretamente com a coordenação.",
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
            "assets/images/pp_tela11.png",
        ]
    },
    "reservas": {
        title: "Reservas Chromebooks",
        category: "Infraestrutura",
        catClass: "text-bright-yellow border-bright-yellow/30",
        coverImage: "assets/images/reservas_capa.png",
        description: "Automação criada no Google Workspace para gerenciar conflitos de agendamento dos carrinhos móveis de Chromebooks. O professor agenda o recurso via formulário, e o script verifica disponibilidade, bloqueia a agenda e notifica os inspetores para a entrega na sala.",
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
            "assets/images/reservas_tela8.png",
        ]
    },
    "library": {
        title: "School Library",
        category: "Acadêmico",
        catClass: "text-bright-red border-bright-red/30",
        coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop", 
        description: "O School Library é o sistema de gestão bibliotecária da instituição. Permitindo a consulta em tempo real de exemplares disponíveis, renovação automática de empréstimos via portal e sistema de reservas antecipadas.\n\nDesenvolvido com foco em escalabilidade para atender múltiplos usuários de forma sincronizada.",
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
        catClass: "text-bright-yellow border-bright-yellow/30",
        coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
        description: "Plataforma SaaS sazonal para gerenciar inscrições de projetos, cronogramas e mapas de estandes durante as Feiras de Ciências e Eventos Culturais. Conta com votação em tempo real via QR Code escaneado pelos visitantes.",
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
            { name: "Infraestrutura", style: "text-bright-yellow border-bright-yellow/30" },
            { name: "Acadêmico", style: "text-bright-red border-bright-red/30" }
        ],
        coverImage: "assets/images/sisanet.png", 
        description: "O Sistema de Análise de Equipamentos Tecnológicos - BBS é uma solução de BI (Business Intelligence) e gestão de ativos focada na infraestrutura de hardware escolar. O projeto visa otimizar o ciclo de vida dos equipamentos, transformando dados brutos de inventário em insights estratégicos para a tomada de decisão da TI e do setor financeiro.\n\nPrincipais features:\n• Projeção Patrimonial: Visualização preditiva da depreciação do inventário, facilitando a gestão de investimentos futuros.\n• Categorização Técnica Automatizada: Classificação de hardware baseada em performance do processador para identificar gargalos em setores administrativos e pedagógicos.\n• Auditoria de Software: Painel consolidado para verificação imediata da conformidade de licenciamento de sistemas operacionais e pacotes de produtividade.",
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
        catClass: "text-bright-yellow border-bright-yellow/30",
        coverImage: "assets/images/tickets_capa.png",
        description: "Plataforma oficial para venda e emissão de ingressos digitais para os eventos da escola, como feiras de ciências, peças de teatro e festas de encerramento.\n\nO sistema elimina a necessidade de bilhetes de papel, gerando um QR Code único para cada participante, que é lido rapidamente na portaria através de qualquer smartphone pelos inspetores.",
        techStack: ["Dart", "Firebase", "HTML/CSS", "TailwindCSS"],
        gallery: [
            "assets/images/ingressos_tela1.png",
            "assets/images/ingressos_tela2.png"
        ]
    },
    "psicologia": {
        title: "Atendimento Psicologia",
        category: "Pedagógico",
        catClass: "text-bright-purple border-bright-purple/30",
        coverImage: "assets/images/psico_capa.png",
        description: "Módulo seguro e confidencial dedicado ao agendamento e registo de acompanhamentos psicológicos dos alunos da instituição.\n\nGarante sigilo absoluto dos prontuários (visíveis estritamente pelos profissionais de saúde da escola) e oferece um painel intuitivo para que a coordenação e os pais possam solicitar avaliações ou reuniões de aconselhamento.",
        techStack: ["Python", "Django", "MySQL", "Vue.js"],
        gallery: [
            "assets/images/psicologia_tela1.png",
            "assets/images/psicologia_tela2.png",
            "assets/images/psicologia_tela3.png",
            "assets/images/psicologia_tela4.png",
            "assets/images/psicologia_tela5.png"
        ]
    }
  };

  const modal = document.getElementById('projectModal');
  const modalBox = document.getElementById('modalContentBox');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const closeBtns = document.querySelectorAll('.modal-close');
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCloseBtns = document.querySelectorAll('.lightbox-close');

  if (modal && modalBox) {
      openBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
              e.preventDefault();
              const projectId = btn.getAttribute('data-id');
              const data = projectDatabase[projectId];

              // Proteção extra: Se clicar num botão sem data-id configurado
              if(!data) {
                  console.error(`ERRO: O projeto "${projectId}" não foi encontrado na base de dados!`);
                  return;
              }

              document.getElementById('modalTitle').textContent = data.title;
              
              const catContainer = document.getElementById('modalCategory');
              if (catContainer) {
                  catContainer.innerHTML = ''; 
                  catContainer.className = 'flex flex-wrap gap-2 mb-3'; 

                  if (data.categories) {
                      data.categories.forEach(cat => {
                          catContainer.innerHTML += `<span class="px-3 py-1.5 rounded-md text-xs font-semibold border shadow-sm bg-bright-bg/90 backdrop-blur-md ${cat.style}">${cat.name}</span>`;
                      });
                  } else if (data.category) {
                      catContainer.innerHTML = `<span class="px-3 py-1.5 rounded-md text-xs font-semibold border shadow-sm bg-bright-bg/90 backdrop-blur-md ${data.catClass}">${data.category}</span>`;
                  }
              }

              const coverEl = document.getElementById('modalCover');
              if(coverEl) coverEl.src = data.coverImage;
              
              const descEl = document.getElementById('modalDesc');
              if(descEl) descEl.textContent = data.description;

              const techContainer = document.getElementById('modalTech');
              if (techContainer && data.techStack) {
                  techContainer.innerHTML = '';
                  data.techStack.forEach(tech => {
                      techContainer.innerHTML += `<span class="text-xs font-mono bg-bright-card text-gray-300 border border-bright-dark px-2.5 py-1 rounded-md shadow-sm">${tech}</span>`;
                  });
              }

              const galleryContainer = document.getElementById('modalGallery');
              if (galleryContainer && data.gallery) {
                  galleryContainer.innerHTML = '';
                  data.gallery.forEach(img => {
                      galleryContainer.innerHTML += `
                        <div class="h-32 sm:h-40 rounded-xl overflow-hidden border border-bright-dark relative group cursor-pointer shadow-sm gallery-item" data-img="${img}">
                            <img src="${img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <i class="fas fa-search-plus text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 text-3xl"></i>
                            </div>
                        </div>`;
                  });
              }

              modal.classList.remove('opacity-0', 'pointer-events-none');
              modalBox.classList.remove('scale-95');
              modalBox.classList.add('scale-100');
              
              document.body.style.overflow = 'hidden';
          });
      });
  }

  const modalGallery = document.getElementById('modalGallery');
  if (modalGallery) {
      modalGallery.addEventListener('click', (e) => {
          const item = e.target.closest('.gallery-item');
          if(item) {
              const imgSrc = item.getAttribute('data-img');
              abrirLightbox(imgSrc);
          }
      });
  }

  function fecharModal() {
      if(modal && modalBox) {
          modal.classList.add('opacity-0', 'pointer-events-none');
          modalBox.classList.remove('scale-100');
          modalBox.classList.add('scale-95');
          document.body.style.overflow = 'auto';
      }
  }

  function abrirLightbox(src) {
      if(lightbox && lightboxImg) {
          lightboxImg.src = src;
          lightbox.classList.remove('opacity-0', 'pointer-events-none');
          lightboxImg.classList.remove('scale-95');
          lightboxImg.classList.add('scale-100');
      }
  }

  function fecharLightbox() {
      if(lightbox && lightboxImg) {
          lightbox.classList.add('opacity-0', 'pointer-events-none');
          lightboxImg.classList.remove('scale-100');
          lightboxImg.classList.add('scale-95');
          setTimeout(() => { lightboxImg.src = ''; }, 300); 
      }
  }

  if (closeBtns) closeBtns.forEach(btn => btn.addEventListener('click', fecharModal));
  if (lightboxCloseBtns) lightboxCloseBtns.forEach(btn => btn.addEventListener('click', fecharLightbox));

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          if (lightbox && !lightbox.classList.contains('pointer-events-none')) {
              fecharLightbox();
          } 
          else if (modal && !modal.classList.contains('pointer-events-none')) {
              fecharModal();
          }
      }
  });
});