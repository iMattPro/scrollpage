/**
 * Tests for scrollpage.js
 */

// Mock DOM elements
document.body.innerHTML = `
  <div class="scroll-page">
    <i class="scroll-up"></i>
    <i class="scroll-down"></i>
  </div>
  <div class="to-top-button"></div>
`;

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});

// Mock getComputedStyle
Object.defineProperty(window, 'getComputedStyle', {
  value: jest.fn(() => ({
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  })),
  writable: true
});

describe('ScrollPage Extension', () => {
  beforeEach(() => {
    // Reset DOM
    document.querySelector('.scroll-page').classList.remove('visible');
    document.querySelector('.to-top-button').style.display = '';
    
    // Clear all timers
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('hides phpBB built-in button', () => {
    require('../styles/all/template/scrollpage.js');
    expect(document.querySelector('.to-top-button').style.display).toBe('none');
  });

  test('shows button when scrolled past threshold', () => {
    Object.defineProperty(window, 'scrollY', { value: 30, writable: true });
    
    require('../styles/all/template/scrollpage.js');
    
    // Trigger scroll event
    window.dispatchEvent(new Event('scroll'));
    
    // Fast-forward throttle delay
    jest.advanceTimersByTime(100);
    
    expect(document.querySelector('.scroll-page').classList.contains('visible')).toBe(true);
  });

  test('scroll-up button scrolls to top', () => {
    require('../styles/all/template/scrollpage.js');
    
    document.querySelector('.scroll-up').click();
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });

  test('scroll-down button scrolls to bottom', () => {
    require('../styles/all/template/scrollpage.js');
    
    document.querySelector('.scroll-down').click();
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
});