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

  // ==========================================
  // 2. LÓGICA DOS FILTROS DE CATEGORIA
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

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
        if (filterValue === 'todos' || filterValue === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      
    });
  });

  // ==========================================
  // 3. LÓGICA DO MODAL FLUTUANTE (MOCK DATABASE)
  // ==========================================
 const projectDatabase = {
    "chamados": {
        title: "DashBoard de Chamados",
        category: "Suporte",
        catClass: "text-bright-cyan border-bright-cyan/30",
        coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
        description: "O Dashboard de Chamados é uma solução de helpdesk para a instituição. Ele centraliza as solicitações de suporte, permitindo que colaboradores abram chamados para a equipe de T.I. ou manutenção predial de forma intuitiva.\n\nPrincipais features:\n• Acompanhamento de SLA em tempo real.\n• Sistema de prioridades automáticas.\n• Dashboard analítico para gestão de gargalos operacionais.",
        techStack: ["Node.js", "React", "Express", "MongoDB"],
        gallery: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
        ]
    },
    "inventory": {
        title: "Bright Inventory",
        category: "Patrimônio",
        catClass: "text-bright-orange border-bright-orange/30",
        coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        description: "Plataforma avançada para gestão do ciclo de vida de hardware e patrimônio escolar. Controla a alocação de dispositivos, depreciação e manutenção preventiva.\n\nO sistema integra leitores de código de barras e gera relatórios precisos para auditorias financeiras.",
        techStack: ["Python", "PostgreSQL", "Django", "Vue.js"],
        gallery: [
            "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
        ]
    },
    "portal-pp": {
        title: "Portal PP",
        category: "Pedagógico",
        catClass: "text-bright-purple border-bright-purple/30",
        coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
        description: "O Portal de Práticas Pedagógicas é o hub central dos educadores da Bright School. Permite a elaboração e submissão de planos de aula, compartilhamento de recursos didáticos e alinhamento com a BNCC.\n\nPossui fluxos de aprovação integrados diretamente com a coordenação.",
        techStack: ["Next.js", "Tailwind", "Prisma", "AWS"],
        gallery: [
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
        ]
    },
    "reservas": {
        title: "Reservas Chromebooks",
        category: "Infraestrutura",
        catClass: "text-bright-yellow border-bright-yellow/30",
        coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        description: "Automação criada no Google Workspace para gerenciar conflitos de agendamento dos carrinhos móveis de Chromebooks. O professor agenda o recurso via formulário, e o script verifica disponibilidade, bloqueia a agenda e notifica os inspetores para a entrega na sala.",
        techStack: ["Apps Script", "GCP", "Google Calendar API"],
        gallery: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
        ]
    },
    "library": {
        title: "School Library",
        category: "Acadêmico",
        catClass: "text-bright-red border-bright-red/30",
        coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop", 
        description: "O School Library é o sistema de gestão bibliotecária da instituição. Permitindo a consulta em tempo real de exemplares disponíveis, renovação automática de empréstimos via portal e sistema de reservas antecipadas.\n\nDesenvolvido com foco em escalabilidade para atender múltiplos usuários de forma sincronizada.",
        techStack: ["Java", "Spring Boot", "MySQL", "Angular", "Hibernate"],
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
        techStack: ["HTML/CSS", "Firebase", "JS Vanilla"],
        gallery: [
            "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop"
        ]
    }
  };

  // Variáveis do Modal de Projeto
  const modal = document.getElementById('projectModal');
  const modalBox = document.getElementById('modalContentBox');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const closeBtns = document.querySelectorAll('.modal-close');

  // Variáveis do Lightbox de Imagem
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCloseBtns = document.querySelectorAll('.lightbox-close');

  openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const projectId = btn.getAttribute('data-id');
          const data = projectDatabase[projectId];

          if(!data) return;

          document.getElementById('modalTitle').textContent = data.title;
          document.getElementById('modalCategory').textContent = data.category;
          document.getElementById('modalCategory').className = `px-3 py-1.5 rounded-md text-xs font-semibold border shadow-sm mb-3 inline-block bg-bright-bg/90 backdrop-blur-md ${data.catClass}`;
          document.getElementById('modalCover').src = data.coverImage;
          document.getElementById('modalDesc').textContent = data.description;

          const techContainer = document.getElementById('modalTech');
          techContainer.innerHTML = '';
          data.techStack.forEach(tech => {
              techContainer.innerHTML += `<span class="text-xs font-mono bg-bright-card text-gray-300 border border-bright-dark px-2.5 py-1 rounded-md shadow-sm">${tech}</span>`;
          });

          // Injeção da Galeria com efeito hover e data-src para abrir o Lightbox
          const galleryContainer = document.getElementById('modalGallery');
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

          modal.classList.remove('opacity-0', 'pointer-events-none');
          modalBox.classList.remove('scale-95');
          modalBox.classList.add('scale-100');
          
          document.body.style.overflow = 'hidden';
      });
  });

  // Evento para capturar clique nas fotos da galeria
  document.getElementById('modalGallery').addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if(item) {
          const imgSrc = item.getAttribute('data-img');
          abrirLightbox(imgSrc);
      }
  });

  // Funções de Fechar
  function fecharModal() {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalBox.classList.remove('scale-100');
      modalBox.classList.add('scale-95');
      document.body.style.overflow = 'auto';
  }

  function abrirLightbox(src) {
      lightboxImg.src = src;
      lightbox.classList.remove('opacity-0', 'pointer-events-none');
      lightboxImg.classList.remove('scale-95');
      lightboxImg.classList.add('scale-100');
  }

  function fecharLightbox() {
      lightbox.classList.add('opacity-0', 'pointer-events-none');
      lightboxImg.classList.remove('scale-100');
      lightboxImg.classList.add('scale-95');
      setTimeout(() => { lightboxImg.src = ''; }, 300); // Limpa a imagem após a transição
  }

  closeBtns.forEach(btn => btn.addEventListener('click', fecharModal));
  lightboxCloseBtns.forEach(btn => btn.addEventListener('click', fecharLightbox));

  // Lógica Inteligente para a tecla ESC
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          // Se o Lightbox estiver aberto, fecha SÓ o Lightbox
          if (!lightbox.classList.contains('pointer-events-none')) {
              fecharLightbox();
          } 
          // Se não, mas o Modal do projeto estiver aberto, fecha o Modal do projeto
          else if (!modal.classList.contains('pointer-events-none')) {
              fecharModal();
          }
      }
  });
});