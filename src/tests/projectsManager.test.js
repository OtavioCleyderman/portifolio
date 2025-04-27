import { ProjectsManager } from '../js/projectsManager.js';

describe('ProjectsManager', () => {
    let projectsManager;
    
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="projectsContainer"></div>
        `;
        projectsManager = new ProjectsManager();
    });

    test('should render all projects', () => {
        const container = document.getElementById('projectsContainer');
        expect(container.children.length).toBe(2);
    });

    test('should create project card with correct structure', () => {
        const project = {
            title: 'Test Project',
            description: 'Test Description',
            image: 'test.jpg',
            tags: ['Test', 'Demo'],
            demoLink: 'https://demo.test',
            repoLink: 'https://github.com/test'
        };
        
        const card = projectsManager.createProjectCard(project);
        
        expect(card).toContain('Test Project');
        expect(card).toContain('Test Description');
        expect(card).toContain('test.jpg');
        expect(card).toContain('Test');
        expect(card).toContain('Demo');
        expect(card).toContain('https://demo.test');
        expect(card).toContain('https://github.com/test');
    });

    test('should render project tags correctly', () => {
        const container = document.getElementById('projectsContainer');
        const firstProject = container.firstElementChild;
        const tags = firstProject.querySelectorAll('.project-tag');
        
        expect(tags.length).toBe(3);
        expect(tags[0].textContent.trim()).toBe('React');
    });
});