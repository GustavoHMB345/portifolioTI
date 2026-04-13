// app.js
document.addEventListener('DOMContentLoaded', () => {
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
      systemMessage.textContent = 'Instabilidade detectada em alguns serviços.';
      systemMessage.className = 'text-[10px] text-yellow-400';
    }
  }
});