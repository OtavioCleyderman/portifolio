export class ProjectsManager {
    constructor() {
        this.projects = [
            {
                title: 'PopFollow - Séries, filmes, animes...',
                description: 'Um site web onde podemos marcar séries, filmes ou animes como favoritos, vistos e até qual ep vimos.',
                image: './src/images/Popfollow.png',
                tags: ['React', 'Node.js', 'MongoDB'],
                demoLink: 'https://popfollow.bohr.io/signin',
                repoLink: 'https://github.com/OtavioCleyderman/popfollow-client'
            },
            {
                title: 'GallleryStrap',
                description: 'Projeto generico enquanto não tenho outros aqui. Esse projeto é uma simples galeria usando HTML, CSS e Bootstrap, no qual usei para ter o contato com o bootstrap.',
                image: './src/images/gallerystrap.png',
                tags: ['HTML', 'CSS', 'Bootstrap'],
                demoLink: 'https://otaviocleyderman.github.io/gallleryStrap/',
                repoLink: 'https://github.com/OtavioCleyderman/gallleryStrap'
            }
        ];

        this.init();
    }

    init() {
        this.renderProjects();
    }

    renderProjects() {
        const container = document.getElementById('projectsContainer');
        if (!container) return;

        container.innerHTML = this.projects
            .map(project => this.createProjectCard(project))
            .join('');
    }

    createProjectCard(project) {
        return `
            <article class="project-card">
                <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    class="project-image"
                    loading="lazy"
                >
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="project-tag">${tag}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoLink}" class="project-link" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        <a href="${project.repoLink}" class="project-link" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i> Código
                        </a>
                    </div>
                </div>
            </article>
        `;
    }
}