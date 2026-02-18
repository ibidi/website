/**
 * Micro-interaction animation utilities
 * These functions provide reusable animations for UI elements
 */

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hover lift effect for cards
 */
export const hoverLift = (element: HTMLElement, options = {}) => {
  if (prefersReducedMotion()) return;

  const defaults = {
    y: -4,
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out'
  };

  const config = { ...defaults, ...options };

  element.style.transition = `transform ${config.duration}s ${config.ease}`;
  element.style.transform = `translateY(${config.y}px) scale(${config.scale})`;
};

/**
 * Reset hover lift effect
 */
export const resetHoverLift = (element: HTMLElement) => {
  element.style.transform = 'translateY(0) scale(1)';
};

/**
 * Button ripple effect
 */
export const createRipple = (event: MouseEvent, color = 'rgba(139, 92, 246, 0.3)') => {
  if (prefersReducedMotion()) return;

  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  
  const ripple = document.createElement('span');
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - rect.left - radius}px`;
  ripple.style.top = `${event.clientY - rect.top - radius}px`;
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = color;
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple 600ms ease-out';
  ripple.style.pointerEvents = 'none';

  // Add ripple animation keyframes if not exists
  if (!document.getElementById('ripple-keyframes')) {
    const style = document.createElement('style');
    style.id = 'ripple-keyframes';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
};

/**
 * Stagger fade-in animation for lists
 */
export const staggerFadeIn = (elements: HTMLElement[], options = {}) => {
  if (prefersReducedMotion()) {
    elements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return;
  }

  const defaults = {
    stagger: 0.1,
    duration: 0.6,
    y: 20,
    ease: 'power2.out'
  };

  const config = { ...defaults, ...options };

  elements.forEach((element, index) => {
    const delay = index * config.stagger;
    
    element.style.opacity = '0';
    element.style.transform = `translateY(${config.y}px)`;
    element.style.transition = `opacity ${config.duration}s ${config.ease} ${delay}s, transform ${config.duration}s ${config.ease} ${delay}s`;

    // Trigger animation
    requestAnimationFrame(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  });
};

/**
 * Scroll reveal animation using Intersection Observer
 */
export const scrollReveal = (element: HTMLElement, options = {}) => {
  if (prefersReducedMotion()) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    return;
  }

  const defaults = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  };

  const config = { ...defaults, ...options };

  // Set initial state
  element.style.opacity = '0';
  element.style.transform = `translateY(${config.y}px)`;
  element.style.transition = `opacity ${config.duration}s ${config.ease}, transform ${config.duration}s ${config.ease}`;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        observer.unobserve(element);
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  observer.observe(element);

  return observer;
};

/**
 * Scale pulse animation
 */
export const scalePulse = (element: HTMLElement) => {
  if (prefersReducedMotion()) return;

  element.style.animation = 'scale-pulse 0.3s ease-in-out';

  if (!document.getElementById('scale-pulse-keyframes')) {
    const style = document.createElement('style');
    style.id = 'scale-pulse-keyframes';
    style.textContent = `
      @keyframes scale-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(0.95); }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    element.style.animation = '';
  }, 300);
};

/**
 * Shake animation for errors
 */
export const shake = (element: HTMLElement) => {
  if (prefersReducedMotion()) return;

  element.style.animation = 'shake 0.5s ease-in-out';

  if (!document.getElementById('shake-keyframes')) {
    const style = document.createElement('style');
    style.id = 'shake-keyframes';
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    element.style.animation = '';
  }, 500);
};

/**
 * Glow effect on hover
 */
export const addGlow = (element: HTMLElement, color = '139, 92, 246') => {
  if (prefersReducedMotion()) return;

  element.style.boxShadow = `0 0 20px rgba(${color}, 0.4), 0 0 40px rgba(${color}, 0.2)`;
  element.style.transition = 'box-shadow 0.3s ease';
};

/**
 * Remove glow effect
 */
export const removeGlow = (element: HTMLElement) => {
  element.style.boxShadow = '';
};

/**
 * Smooth scroll to element
 */
export const smoothScrollTo = (element: HTMLElement | string, offset = 0) => {
  const target = typeof element === 'string' 
    ? document.querySelector(element) as HTMLElement
    : element;

  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  });
};

/**
 * Fade in element
 */
export const fadeIn = (element: HTMLElement, duration = 0.3) => {
  if (prefersReducedMotion()) {
    element.style.opacity = '1';
    return;
  }

  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}s ease`;

  requestAnimationFrame(() => {
    element.style.opacity = '1';
  });
};

/**
 * Fade out element
 */
export const fadeOut = (element: HTMLElement, duration = 0.3) => {
  if (prefersReducedMotion()) {
    element.style.opacity = '0';
    return;
  }

  element.style.transition = `opacity ${duration}s ease`;
  element.style.opacity = '0';
};
