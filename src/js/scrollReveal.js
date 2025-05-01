export class ScrollReveal {
    constructor() {
        try {
            this.elements = document.querySelectorAll('.reveal-text');
            this.options = {
                threshold: 0.1,
                rootMargin: '0px'
            };

            this.init();
        } catch (error) {
            console.error('Error initializing ScrollReveal:', error);
        }
    }

    init() {
        if (!('IntersectionObserver' in window)) {
            this.elements.forEach(element => {
                element.classList.add('revealed');
            });
            return;
        }

        const observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
        this.elements.forEach(element => {
            try {
                observer.observe(element);
            } catch (error) {
                console.error('Error observing element:', error);
                element.classList.add('revealed');
            }
        });
    }

    handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }
}
