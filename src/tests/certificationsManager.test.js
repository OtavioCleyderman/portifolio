import { CertificationsManager } from '../js/certificationsManager.js';

describe('CertificationsManager', () => {
    let certificationsManager;
    
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="certificationsContainer"></div>
            <button class="carousel-button prev"></button>
            <button class="carousel-button next"></button>
        `;
        certificationsManager = new CertificationsManager();
    });

    test('should render all certifications', () => {
        const track = document.querySelector('.carousel-track');
        const cards = track.querySelectorAll('.certification-card');
        expect(cards.length).toBe(2);
    });

    test('should create certification card with correct structure', () => {
        const certification = {
            title: 'Test Cert',
            issuer: 'Test Issuer',
            date: '2023',
            image: 'test.jpg',
            link: 'https://test.com'
        };
        
        const card = certificationsManager.createCertificationCard(certification);
        
        expect(card).toContain('Test Cert');
        expect(card).toContain('Test Issuer');
        expect(card).toContain('2023');
        expect(card).toContain('test.jpg');
        expect(card).toContain('https://test.com');
    });

    test('should navigate to next certification', () => {
        const nextButton = document.querySelector('.carousel-button.next');
        nextButton.click();
        
        const track = document.querySelector('.carousel-track');
        expect(track.style.transform).toBe('translateX(-100%)');
    });

    test('should navigate to previous certification', () => {
        const prevButton = document.querySelector('.carousel-button.prev');
        prevButton.click();
        
        const track = document.querySelector('.carousel-track');
        expect(track.style.transform).toBe('translateX(-100%)');
    });
});