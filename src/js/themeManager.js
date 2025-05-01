export class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.icon = this.themeToggle?.querySelector('i');
        
        // Get theme from localStorage or use default
        this.currentTheme = localStorage.getItem('theme');
        if (!this.currentTheme) {
            this.currentTheme = 'dark';
            localStorage.setItem('theme', this.currentTheme);
        }
        
        this.init();
        this.bindEvents();
    }

    init() {
        // Apply theme on initialization
        document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
        this.updateIcon();
    }

    bindEvents() {
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.currentTheme);
        document.body.classList.toggle('dark-theme');
        this.updateIcon();
    }

    updateIcon() {
        if (!this.icon) return;
        
        this.icon.className = this.currentTheme === 'dark' 
            ? 'fas fa-moon' 
            : 'fas fa-sun';
    }
}