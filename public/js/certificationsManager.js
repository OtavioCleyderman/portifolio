export class CertificationsManager {
    constructor() {
        this.certifications = [
            {
                title: 'Iniciante em programação - T7 ONE',
                issuer: 'Oracle + Alura',
                date: '2024',
                image: '/src/images/iniciante.png',
                link: 'https://cursos.alura.com.br/user/otavio-cleyderman/degree-logica-de-programacao-turma7-one-753048/certificate'
            },
            {
                title: 'Desenvolvimento pessoal - T7 ONE',
                issuer: 'Oracle + Alura',
                date: '2024',
                image: '/src/images/desenvolvimento_pessoal.png',
                link: 'https://cursos.alura.com.br/user/otavio-cleyderman/degree-desenvolvimento-pessoal-turma7-one-753037/certificate'
            }
        ];

        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.renderCertifications();
        this.setupControls();
    }

    renderCertifications() {
        const container = document.getElementById('certificationsContainer');
        if (!container) return;

        const track = document.createElement('div');
        track.className = 'carousel-track';
        
        track.innerHTML = this.certifications
            .map(cert => this.createCertificationCard(cert))
            .join('');
        
        container.appendChild(track);
        this.track = track;
    }

    createCertificationCard(certification) {
        return `
            <article class="certification-card">
                <img 
                    src="${certification.image}" 
                    alt="${certification.title}"
                    class="certification-image"
                    loading="lazy"
                >
                <h3 class="certification-title">${certification.title}</h3>
                <p class="certification-issuer">${certification.issuer}</p>
                <p class="certification-date">${certification.date}</p>
                <a href="${certification.link}" class="certification-link" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> Ver certificado
                </a>
            </article>
        `;
    }

    setupControls() {
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');

        prevButton?.addEventListener('click', () => this.navigate('prev'));
        nextButton?.addEventListener('click', () => this.navigate('next'));

        this.setupTouchControls();
    }

    setupTouchControls() {
        let startX = 0;
        let currentX = 0;

        this.track?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.track?.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        });

        this.track?.addEventListener('touchend', () => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                this.navigate(diff > 0 ? 'next' : 'prev');
            }
        });
    }

    navigate(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.certifications.length;
        } else {
            this.currentIndex = this.currentIndex === 0 
                ? this.certifications.length - 1 
                : this.currentIndex - 1;
        }

        if (this.track) {
            this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        }
    }
}