import { jest } from '@jest/globals';
import { ThemeManager } from '../js/themeManager.js';

describe('ThemeManager', () => {
    let themeManager;
    let mockStorage;
    
    beforeEach(() => {
        // Setup mock storage
        mockStorage = {};
        global.localStorage = {
            getItem: jest.fn(key => mockStorage[key]),
            setItem: jest.fn((key, value) => {
                mockStorage[key] = value;
            }),
            clear: jest.fn(() => {
                mockStorage = {};
            })
        };

        document.body.innerHTML = `
            <button id="theme-toggle">
                <i class="fas fa-moon"></i>
            </button>
        `;
        
        localStorage.clear();
        themeManager = new ThemeManager();
    });

    test('should initialize with dark theme by default', () => {
        expect(document.body.classList.contains('dark-theme')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
        expect(mockStorage.theme).toBe('dark');
    });

    test('should toggle theme when button is clicked', () => {
        const button = document.getElementById('theme-toggle');
        const icon = button.querySelector('i');
        
        // Initial state (dark)
        expect(document.body.classList.contains('dark-theme')).toBeTruthy();
        expect(icon.classList.contains('fa-moon')).toBeTruthy();
        
        // Toggle to light
        button.click();
        expect(document.body.classList.contains('dark-theme')).toBeFalsy();
        expect(icon.classList.contains('fa-sun')).toBeTruthy();
        expect(mockStorage.theme).toBe('light');
        
        // Toggle back to dark
        button.click();
        expect(document.body.classList.contains('dark-theme')).toBeTruthy();
        expect(icon.classList.contains('fa-moon')).toBeTruthy();
        expect(mockStorage.theme).toBe('dark');
    });

    test('should load theme from localStorage on initialization', () => {
        localStorage.clear();
        mockStorage.theme = 'light';
        themeManager = new ThemeManager();
        
        expect(document.body.classList.contains('dark-theme')).toBeFalsy();
        const icon = document.querySelector('#theme-toggle i');
        expect(icon.classList.contains('fa-sun')).toBeTruthy();
    });
});