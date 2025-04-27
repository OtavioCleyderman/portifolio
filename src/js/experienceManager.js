export class ExperienceManager {
    constructor() {
        this.experiences = [
            {
                company: 'MagaluPay',
                role: 'Junior Software Developer',
                period: 'nov-2024 - Present',
                description: 'Experiência no desenvolvimento de aplicações em Python e tecnologias em nuvem (AWS, GCP, Docker, Redis, Kafka, RabbitMQ). Habilidade no desenvolvimento de funcionalidades, análise de causas raiz e mitigação de impactos. Dedicação ao aprendizado contínuo, colaboração em equipe e entrega de soluções estratégicas e de alto valor para clientes, negócios e stakeholders.',
                technologies: ['Python','AWS', 'GCP', 'Docker', 'Redis', 'Kafka', 'RabbitMQ', 'Backend Development', 'API Development']
            },
            {
                company: 'Magazine Luiza',
                role: 'Infrastructure Analyst',
                period: 'jul-2022 - out-2024',
                description: 'Especializado em análise de erros sistêmicos, desenvolvimento de automações (Python, Selenium, Node.js) e implementação de chatbots (Dialogflow, IBM Watson). Experiência em pesquisar e implementar novas funcionalidades, melhorar a infraestrutura para operações de crédito e fornecer suporte técnico ao departamento de crédito do Magazine Luiza. Habilidade em configuração de impressoras, configuração de estações de trabalho e administração de redes e Windows Server.',
                technologies: ['Automation Developer', 'Python', 'Selenium', 'Node.js',  'Chatbot (Dialogflow, IBM Watson)',  'Infrastructure & Support Specialist', 'Windows Server & Networking', 'Focused on problem-solving and infrastructure improvement']
            },
            {
                company: 'Magazine Luiza',
                role: 'Technical Support Analyst',
                period: 'out-2020 - jun-2022',
                description: 'Fornecendo suporte técnico e manutenção de infraestrutura para operações críticas de negócios no setor de crédito, com especialização em configuração de estações de trabalho, instalação de impressoras, gerenciamento de redes e desenvolvimento de chatbots com Dialogflow e IBM Watson.',
                technologies: ['Technical Support', 'Remote Access', 'Troubleshooting', 'Windows Server', 'Networking', 'Workstation Setup', 'Dialogflow', 'IBM Watson', 'Chatbot Development', 'System Error Analysis', 'Root Cause Analysis']
            }
        ];

        this.init();
    }

    init() {
        this.renderExperiences();
    }

    renderExperiences() {
        const container = document.getElementById('experienceTimeline');
        if (!container) return;

        container.innerHTML = this.experiences
            .map(exp => this.createExperienceItem(exp))
            .join('');
    }

    createExperienceItem(experience) {
        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${experience.period}</div>
                    <h3 class="timeline-title">${experience.role}</h3>
                    <h4 class="timeline-company">${experience.company}</h4>
                    <p class="timeline-description">${experience.description}</p>
                    <span>---------------------</span>
                    <div class="timeline-tech">
                        ${experience.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>, `
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}