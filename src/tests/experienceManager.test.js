import { ExperienceManager } from '../js/experienceManager.js';

describe('ExperienceManager', () => {
    let experienceManager;
    
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="experienceTimeline"></div>
        `;
        experienceManager = new ExperienceManager();
    });

    test('should render all experiences', () => {
        const container = document.getElementById('experienceTimeline');
        const items = container.querySelectorAll('.timeline-item');
        expect(items.length).toBe(2);
    });

    test('should create experience item with correct structure', () => {
        const experience = {
            company: 'Test Company',
            role: 'Test Role',
            period: '2023 - Present',
            description: 'Test Description',
            technologies: ['Tech1', 'Tech2']
        };
        
        const item = experienceManager.createExperienceItem(experience);
        
        expect(item).toContain('Test Company');
        expect(item).toContain('Test Role');
        expect(item).toContain('2023 - Present');
        expect(item).toContain('Test Description');
        expect(item).toContain('Tech1');
        expect(item).toContain('Tech2');
    });

    test('should render technology tags', () => {
        const container = document.getElementById('experienceTimeline');
        const firstItem = container.firstElementChild;
        const techTags = firstItem.querySelectorAll('.tech-tag');
        
        expect(techTags.length).toBe(3);
        expect(techTags[0].textContent).toBe('React');
    });
});