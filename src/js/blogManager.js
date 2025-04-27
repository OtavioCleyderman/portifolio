export class BlogManager {
    constructor() {
        this.posts = [
            {
                title: 'Clean Code na Prática: Como Escrever Código que Fala por Si',
                category: 'Clean Code',
                excerpt: 'Neste artigo, vamos explorar o conceito de Clean Code, apresentando dicas práticas e exemplos reais para deixar seu código mais legível, sustentável e fácil de manter. Ideal para quem quer evoluir da programação básica para padrões profissionais de qualidade.',
                image: 'src/images/blog.png',
                date: '2024-03-15',
                readTime: '5 min',
                link: '#'
            },
            {
                title: 'Design de Sistemas Resilientes: Lições de Engenharia de Software em Grande Escala',
                category: 'Design de Sistemas',
                excerpt: 'Aprenda princípios fundamentais para projetar sistemas capazes de resistir a falhas e crescer de forma confiável. Vamos abordar padrões como Circuit Breaker, Retry Pattern e arquitetura orientada a eventos, com foco em aplicações modernas na nuvem.',
                image: 'src/images/blog.png',
                date: '2024-03-10',
                readTime: '4 min',
                link: '#'
            }
        ];

        this.categories = [...new Set(this.posts.map(post => post.category))];
        this.activeCategory = 'all';
        this.init();
    }

    init() {
        this.renderFilters();
        this.renderPosts();
        this.setupEventListeners();
    }

    renderFilters() {
        const container = document.getElementById('blogFilters');
        if (!container) return;

        const filters = ['all', ...this.categories]
            .map(category => this.createFilterButton(category))
            .join('');
        
        container.innerHTML = filters;
    }

    createFilterButton(category) {
        const isActive = category === this.activeCategory;
        return `
            <button 
                class="filter-button ${isActive ? 'active' : ''}"
                data-category="${category}"
            >
                ${category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
        `;
    }

    renderPosts() {
        const container = document.getElementById('blogGrid');
        if (!container) return;

        const filteredPosts = this.activeCategory === 'all'
            ? this.posts
            : this.posts.filter(post => post.category === this.activeCategory);

        container.innerHTML = filteredPosts
            .map(post => this.createPostCard(post))
            .join('');
    }

    createPostCard(post) {
        return `
            <article class="blog-card">
                <img 
                    src="${post.image}" 
                    alt="${post.title}"
                    class="blog-image"
                    loading="lazy"
                >
                <div class="blog-content">
                    <div class="blog-category">${post.category}</div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-meta">
                        <span>${post.date}</span>
                        <span>${post.readTime} read</span>
                    </div>
                </div>
            </article>
        `;
    }

    setupEventListeners() {
        document.getElementById('blogFilters')?.addEventListener('click', (e) => {
            const button = e.target.closest('.filter-button');
            if (!button) return;

            this.activeCategory = button.dataset.category;
            this.updateActiveFilter();
            this.renderPosts();
        });
    }

    updateActiveFilter() {
        document.querySelectorAll('.filter-button').forEach(button => {
            button.classList.toggle('active', 
                button.dataset.category === this.activeCategory);
        });
    }
}