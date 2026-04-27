if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    initStatusDropdown();
    initCategoryFilters();
    initProjectModal();
});

function initStatusDropdown() {
    const button = document.getElementById('statusDropdownBtn');
    const dropdown = document.getElementById('statusDropdown');

    if (!button || !dropdown) return;

    const toggles = document.querySelectorAll('.toggle-service');
    const globalStatus = document.getElementById('globalStatus');
    const globalPing = document.getElementById('globalPing');
    const systemMessage = document.getElementById('systemMessage');

    if (!globalStatus || !globalPing || !systemMessage) return;

    button.addEventListener('click', (event) => {
        dropdown.classList.toggle('hidden');
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });

    toggles.forEach((toggle) => {
        toggle.addEventListener('change', (event) => {
            const row = event.target.closest('.flex.justify-between');
            const indicator = row ? row.querySelector('.service-indicator') : null;
            if (!indicator) return;

            if (event.target.checked) {
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
            return;
        }

        if (activeCount === 0) {
            globalPing.classList.add('bg-red-400');
            globalStatus.classList.add('bg-red-500');
            globalPing.style.display = 'none';
            systemMessage.textContent = 'Interrupção total dos serviços.';
            systemMessage.className = 'text-[10px] text-red-400';
            return;
        }

        globalPing.classList.add('bg-yellow-400');
        globalStatus.classList.add('bg-yellow-500');
        globalPing.style.display = 'block';
        systemMessage.textContent = 'Instabilidade detetada em alguns serviços.';
        systemMessage.className = 'text-[10px] text-yellow-400';
    }
}

function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    const activeFilterClasses = ['bg-bright-yellow', 'text-bright-dark'];
    const inactiveFilterClasses = ['bg-bright-card', 'text-gray-300', 'border-white/10', 'hover:bg-white/10'];

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((filterButton) => {
                filterButton.classList.remove(...activeFilterClasses);
                filterButton.classList.add(...inactiveFilterClasses);
            });

            button.classList.remove(...inactiveFilterClasses);
            button.classList.add(...activeFilterClasses);

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach((card) => {
                const category = card.getAttribute('data-category');
                const showCard = filterValue === 'todos' || (category && category.includes(filterValue));
                card.style.display = showCard ? 'flex' : 'none';
            });
        });
    });
}

function initProjectModal() {
    const projectDatabase = window.PROJECT_DATABASE || {};
    const modal = document.getElementById('projectModal');
    const modalBox = document.getElementById('modalContentBox');
    const closeButtons = document.querySelectorAll('.modal-close');

    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCloseButtons = document.querySelectorAll('.lightbox-close');
    const previousButton = document.getElementById('lightboxPrev');
    const nextButton = document.getElementById('lightboxNext');
    const projectCards = document.querySelectorAll('.project-card');
    const modalGallery = document.getElementById('modalGallery');

    let currentGallery = [];
    let currentImageIndex = 0;

    if (modal && modalBox) {
        projectCards.forEach((card) => {
            card.classList.add('cursor-pointer');

            card.addEventListener('click', (event) => {
                event.preventDefault();

                const button = card.querySelector('.open-modal-btn');
                if (!button) return;

                const projectId = button.getAttribute('data-id');
                const projectData = projectDatabase[projectId];

                if (!projectData) {
                    console.error(`ERRO: O projeto "${projectId}" não foi encontrado na base de dados.`);
                    return;
                }

                hydrateProjectModal(projectData);

                modal.classList.remove('opacity-0', 'pointer-events-none');
                modalBox.classList.remove('scale-95');
                modalBox.classList.add('scale-100');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    if (modalGallery) {
        modalGallery.addEventListener('click', (event) => {
            const galleryItem = event.target.closest('.gallery-item');
            if (!galleryItem) return;

            const index = Number.parseInt(galleryItem.getAttribute('data-index'), 10);
            if (Number.isNaN(index)) return;

            openLightbox(index);
        });
    }

    if (previousButton) {
        previousButton.addEventListener('click', (event) => {
            event.stopPropagation();
            navigateLightbox('prev');
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (event) => {
            event.stopPropagation();
            navigateLightbox('next');
        });
    }

    closeButtons.forEach((button) => button.addEventListener('click', closeModal));
    lightboxCloseButtons.forEach((button) => button.addEventListener('click', closeLightbox));

    document.addEventListener('keydown', (event) => {
        if (lightbox && !lightbox.classList.contains('pointer-events-none')) {
            if (event.key === 'Escape') {
                closeLightbox();
            } else if (event.key === 'ArrowRight') {
                navigateLightbox('next');
            } else if (event.key === 'ArrowLeft') {
                navigateLightbox('prev');
            }
            return;
        }

        if (modal && !modal.classList.contains('pointer-events-none') && event.key === 'Escape') {
            closeModal();
        }
    });

    function hydrateProjectModal(projectData) {
        const titleElement = document.getElementById('modalTitle');
        const categoryContainer = document.getElementById('modalCategory');
        const coverElement = document.getElementById('modalCover');
        const descriptionElement = document.getElementById('modalDesc');
        const techContainer = document.getElementById('modalTech');
        const galleryContainer = document.getElementById('modalGallery');

        if (titleElement) titleElement.textContent = projectData.title;

        if (categoryContainer) {
            categoryContainer.innerHTML = '';
            categoryContainer.className = 'flex flex-wrap gap-2 mb-3';

            if (projectData.categories) {
                projectData.categories.forEach((category) => {
                    categoryContainer.innerHTML += `<span class="px-3 py-1.5 rounded-md text-xs font-semibold border shadow-sm bg-bright-bg/90 backdrop-blur-md ${category.style}">${category.name}</span>`;
                });
            } else if (projectData.category) {
                categoryContainer.innerHTML = `<span class="px-3 py-1.5 rounded-md text-xs font-semibold border shadow-sm bg-bright-bg/90 backdrop-blur-md ${projectData.catClass}">${projectData.category}</span>`;
            }
        }

        if (coverElement) coverElement.src = projectData.coverImage;
        if (descriptionElement) descriptionElement.textContent = projectData.description;

        if (techContainer && projectData.techStack) {
            techContainer.innerHTML = '';
            projectData.techStack.forEach((tech) => {
                techContainer.innerHTML += `<span class="text-xs font-mono bg-bright-card text-gray-300 border border-bright-dark px-2.5 py-1 rounded-md shadow-sm">${tech}</span>`;
            });
        }

        if (galleryContainer && projectData.gallery) {
            galleryContainer.innerHTML = '';
            currentGallery = projectData.gallery;

            projectData.gallery.forEach((image, index) => {
                galleryContainer.innerHTML += `
                    <div class="h-32 sm:h-40 rounded-xl overflow-hidden border border-bright-dark relative group cursor-pointer shadow-sm gallery-item" data-index="${index}">
                        <img src="${image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <i class="fas fa-search-plus text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 text-3xl"></i>
                        </div>
                    </div>`;
            });
        }
    }

    function updateLightboxButtons() {
        if (!previousButton || !nextButton) return;

        previousButton.classList.toggle('hidden', currentImageIndex === 0);
        nextButton.classList.toggle('hidden', currentImageIndex === currentGallery.length - 1);
    }

    function openLightbox(index) {
        if (!lightbox || !lightboxImage) return;

        currentImageIndex = index;
        lightboxImage.src = currentGallery[currentImageIndex];

        updateLightboxButtons();

        lightbox.classList.remove('opacity-0', 'pointer-events-none');
        lightboxImage.classList.remove('scale-95');
        lightboxImage.classList.add('scale-100');
    }

    function navigateLightbox(direction) {
        if (!lightboxImage || currentGallery.length <= 1) return;
        if (direction === 'prev' && currentImageIndex === 0) return;
        if (direction === 'next' && currentImageIndex === currentGallery.length - 1) return;

        lightboxImage.classList.remove('scale-100');
        lightboxImage.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            currentImageIndex += direction === 'next' ? 1 : -1;
            lightboxImage.src = currentGallery[currentImageIndex];

            updateLightboxButtons();

            lightboxImage.classList.remove('scale-95', 'opacity-0');
            lightboxImage.classList.add('scale-100');
        }, 200);
    }

    function closeModal() {
        if (!modal || !modalBox) return;

        modal.classList.add('opacity-0', 'pointer-events-none');
        modalBox.classList.remove('scale-100');
        modalBox.classList.add('scale-95');
        document.body.style.overflow = 'auto';
    }

    function closeLightbox() {
        if (!lightbox || !lightboxImage) return;

        lightbox.classList.add('opacity-0', 'pointer-events-none');
        lightboxImage.classList.remove('scale-100');
        lightboxImage.classList.add('scale-95');
        setTimeout(() => {
            lightboxImage.src = '';
        }, 300);
    }
}