import { ContactManager } from '../js/contactManager.js';

describe('ContactManager', () => {
    let contactManager;
    
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="contactForm">
                <input type="text" id="name" name="name">
                <input type="email" id="email" name="email">
                <textarea id="message" name="message"></textarea>
                <button type="submit" class="submit-button">Send</button>
            </form>
        `;
        contactManager = new ContactManager();
    });

    test('should validate name field correctly', () => {
        const nameField = document.getElementById('name');
        
        nameField.value = 'John Doe';
        expect(contactManager.validateField(nameField, /^[a-zA-Z\s]{2,}$/)).toBeTruthy();
        
        nameField.value = 'J';
        expect(contactManager.validateField(nameField, /^[a-zA-Z\s]{2,}$/)).toBeFalsy();
    });

    test('should validate email field correctly', () => {
        const emailField = document.getElementById('email');
        
        emailField.value = 'test@example.com';
        expect(contactManager.validateField(emailField, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)).toBeTruthy();
        
        emailField.value = 'invalid-email';
        expect(contactManager.validateField(emailField, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)).toBeFalsy();
    });

    test('should validate message field correctly', () => {
        const messageField = document.getElementById('message');
        
        messageField.value = 'This is a valid message';
        expect(contactManager.validateField(messageField, /.{10,}/)).toBeTruthy();
        
        messageField.value = 'Short';
        expect(contactManager.validateField(messageField, /.{10,}/)).toBeFalsy();
    });

    test('should handle form submission', async () => {
        const form = document.getElementById('contactForm');
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        
        nameField.value = 'John Doe';
        emailField.value = 'john@example.com';
        messageField.value = 'This is a test message';
        
        const submitEvent = new Event('submit');
        form.dispatchEvent(submitEvent);
        
        // Wait for async operations
        await new Promise(resolve => setTimeout(resolve, 0));
        
        const button = form.querySelector('.submit-button');
        expect(button.innerHTML).toContain('Mensagem Enviada!');
    });
});