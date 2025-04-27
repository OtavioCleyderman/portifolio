export class SkillsManager {
    constructor() {
        this.hardSkills = [
            { name: 'JavaScript', level: 90, icon: 'fab fa-js' },
            { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
            { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
            { name: 'React', level: 70, icon: 'fab fa-react' },
            { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
            { name: 'Python', level: 85, icon: 'fab fa-python' }
        ];

        this.softSkills = [
            { name: 'Comunicação', level: 90, icon: 'fas fa-comments' },
            { name: 'Trabalho em Equipe', level: 95, icon: 'fas fa-users' },
            { name: 'Liderança', level: 85, icon: 'fas fa-crown' },
            { name: 'Resolução de Problemas', level: 90, icon: 'fas fa-puzzle-piece' }
        ];

        this.init();
    }

    init() {
        this.renderSkills('hardSkills', this.hardSkills);
        this.renderSkills('softSkills', this.softSkills);
        this.observeSkillCards();
    }

    renderSkills(containerId, skills) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const skillsHTML = skills.map(skill => this.createSkillCard(skill)).join('');
        container.innerHTML = skillsHTML;
    }

    createSkillCard(skill) {
        return `
            <div class="skill-card">
                <i class="${skill.icon} skill-icon"></i>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">
                    <div class="skill-level-fill" style="width: 0%" data-level="${skill.level}"></div>
                </div>
            </div>
        `;
    }

    observeSkillCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fillBar = entry.target.querySelector('.skill-level-fill');
                    if (fillBar) {
                        const level = fillBar.dataset.level;
                        fillBar.style.width = `${level}%`;
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));
    }
}