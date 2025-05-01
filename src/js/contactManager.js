export class ContactManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        this.setupFormValidation();
    }

    setupFormValidation() {
        this.form?.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                await this.handleSubmit();
            }
        });
    }

    validateForm() {
        const name = this.form?.querySelector('#name');
        const email = this.form?.querySelector('#email');
        const message = this.form?.querySelector('#message');
        
        let isValid = true;

        if (!this.validateField(name, /^[a-zA-Z\s]{2,}$/)) {
            isValid = false;
        }

        if (!this.validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            isValid = false;
        }

        if (!this.validateField(message, /.{10,}/)) {
            isValid = false;
        }

        return isValid;
    }

    validateField(field, pattern) {
        if (!field) return false;
        
        const isValid = pattern.test(field.value);
        field.classList.toggle('invalid', !isValid);
        
        return isValid;
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/mgvkvlly', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if (response.ok) {
                this.showSuccess();
            } else {
                this.showError();
            }
        } catch (error) {
            this.showError();
        }
    }

    showSuccess() {
        const button = this.form?.querySelector('.submit-button');
        if (!button) return;

        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            this.form?.reset();
        }, 3000);
    }

    showError() {
        const button = this.form?.querySelector('.submit-button');
        if (!button) return;

        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-exclamation-circle"></i> Erro ao enviar';
        
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 3000);
    }
}