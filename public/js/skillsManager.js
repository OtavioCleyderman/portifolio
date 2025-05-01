export class SkillsManager {
    constructor() {
        this.hardSkills = [
            { name: 'JavaScript', level: 70, icon: 'fab fa-js' },
            { name: 'HTML5', level: 70, icon: 'fab fa-html5' },
            { name: 'CSS3', level: 70, icon: 'fab fa-css3-alt' },
            { name: 'React', level: 65, icon: 'fab fa-react' },
            { name: 'Node.js', level: 60, icon: 'fab fa-node-js' },
            { name: 'Python', level: 70, icon: 'fab fa-python' }
        ];

        this.softSkills = [
            { name: 'Comunicação', level: 70, icon: 'fas fa-comments' },
            { name: 'Trabalho em Equipe', level: 60, icon: 'fas fa-users' },
            { name: 'Liderança', level: 65, icon: 'fas fa-crown' },
            { name: 'Resolução de Problemas', level: 70, icon: 'fas fa-puzzle-piece' }
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