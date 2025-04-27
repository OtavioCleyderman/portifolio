import { jest } from '@jest/globals';

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  },
  writable: true
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    // Simulate intersection immediately
    this.callback([
      {
        isIntersecting: true,
        target: element
      }
    ]);
  }

  unobserve() {}
  disconnect() {}
};