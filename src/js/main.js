import { ThemeManager } from './themeManager.js';
import { ScrollReveal } from './scrollReveal.js';
import { SkillsManager } from './skillsManager.js';
import { ProjectsManager } from './projectsManager.js';
import { CertificationsManager } from './certificationsManager.js';
import { ExperienceManager } from './experienceManager.js';
import { BlogManager } from './blogManager.js';
import { ContactManager } from './contactManager.js';
import { TextTyper } from './textTyper.js';

document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    const scrollReveal = new ScrollReveal();
    const skillsManager = new SkillsManager();
    const projectsManager = new ProjectsManager();
    const certificationsManager = new CertificationsManager();
    const experienceManager = new ExperienceManager();
    const blogManager = new BlogManager();
    const contactManager = new ContactManager();

    const phrases = [
        "Eu sou um desenvolvedor de software.", 
        "Sou um programador de software.", 
        "I am a software developer.", 
        "Soy un desarrollador de software."
    ];
    const textTyper = new TextTyper("#typing-text", phrases);

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks?.classList.remove('active');
                const icon = hamburger?.querySelector('i');
                icon?.classList.add('fa-bars');
                icon?.classList.remove('fa-times');
            }
        });
    });
});