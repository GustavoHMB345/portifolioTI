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

  // Abre/Fecha Dropdown
  btn.addEventListener('click', (e) => {
    dropdown.classList.toggle('hidden');
    e.stopPropagation();
  });

  // Fecha clicando fora
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });

  // Lógica dos toggles e atualização global
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

    // Reset classes
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
      
      // A. Remover o estilo ativo (Amarelo) de todos os botões e repor o estilo base
      filterBtns.forEach(b => {
        b.classList.remove('bg-bright-yellow', 'text-bright-dark');
        b.classList.add('bg-bright-card', 'text-gray-300', 'border-white/10', 'hover:bg-white/10');
      });

      // B. Adicionar o estilo ativo (Amarelo) APENAS ao botão que foi clicado
      btn.classList.remove('bg-bright-card', 'text-gray-300', 'border-white/10', 'hover:bg-white/10');
      btn.classList.add('bg-bright-yellow', 'text-bright-dark');

      // C. Obter o valor do filtro escolhido (ex: 'pedagogico', 'financeiro')
      const filterValue = btn.getAttribute('data-filter');

      // D. Percorrer todos os cartões e verificar se devem aparecer ou não
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        // Se escolheu 'todos' ou se a categoria do cartão corresponde ao botão
        if (filterValue === 'todos' || filterValue === category) {
          card.style.display = 'flex'; // Usamos flex porque o Tailwind usa 'flex-col' nestes cartões
        } else {
          card.style.display = 'none'; // Oculta os restantes
        }
      });
      
    });
  });

});