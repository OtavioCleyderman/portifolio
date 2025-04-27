import { BlogManager } from '../js/blogManager.js';

describe('BlogManager', () => {
    let blogManager;
    
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="blogFilters"></div>
            <div id="blogGrid"></div>
        `;
        blogManager = new BlogManager();
    });

    test('should render all blog posts initially', () => {
        const container = document.getElementById('blogGrid');
        const posts = container.querySelectorAll('.blog-card');
        expect(posts.length).toBe(2);
    });

    test('should render all categories as filters', () => {
        const container = document.getElementById('blogFilters');
        const filters = container.querySelectorAll('.filter-button');
        // +1 for the "all" filter
        expect(filters.length).toBe(3);
    });

    test('should filter posts by category', () => {
        const reactFilter = document.querySelector('[data-category="React"]');
        reactFilter.click();
        
        const container = document.getElementById('blogGrid');
        const posts = container.querySelectorAll('.blog-card');
        expect(posts.length).toBe(1);
    });

    test('should create post card with correct structure', () => {
        const post = {
            title: 'Test Post',
            category: 'Test',
            excerpt: 'Test excerpt',
            image: 'test.jpg',
            date: '2024-03-15',
            readTime: '3 min'
        };
        
        const card = blogManager.createPostCard(post);
        
        expect(card).toContain('Test Post');
        expect(card).toContain('Test');
        expect(card).toContain('Test excerpt');
        expect(card).toContain('test.jpg');
        expect(card).toContain('2024-03-15');
        expect(card).toContain('3 min');
    });
});