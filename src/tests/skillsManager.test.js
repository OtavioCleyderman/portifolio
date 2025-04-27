import { SkillsManager } from '../js/skillsManager.js';

describe('SkillsManager', () => {
    let skillsManager;
    
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="hardSkills"></div>
            <div id="softSkills"></div>
        `;
        skillsManager = new SkillsManager();
    });

    test('should render hard skills', () => {
        const hardSkillsContainer = document.getElementById('hardSkills');
        expect(hardSkillsContainer.children.length).toBe(6); // Updated to match current number of skills
    });

    test('should render soft skills', () => {
        const softSkillsContainer = document.getElementById('softSkills');
        expect(softSkillsContainer.children.length).toBe(4);
    });

    test('should create skill card with correct structure', () => {
        const skill = {
            name: 'Test Skill',
            level: 80,
            icon: 'fas fa-test'
        };
        
        const card = skillsManager.createSkillCard(skill);
        expect(card).toContain('Test Skill');
        expect(card).toContain('fas fa-test');
        expect(card).toContain('data-level="80"');
    });

    test('should animate skill level when card is intersecting', () => {
        const skill = {
            name: 'Test Skill',
            level: 80,
            icon: 'fas fa-test'
        };
        
        document.body.innerHTML = skillsManager.createSkillCard(skill);
        const fillBar = document.querySelector('.skill-level-fill');
        
        skillsManager.observeSkillCards();
        expect(fillBar.style.width).toBe('80%');
    });
});