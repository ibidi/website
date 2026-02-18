export const useTheme = () => {
  const colorMode = useColorMode();
  const isAnimating = ref(false);

  /**
   * Toggle theme with animation
   */
  const toggleTheme = async () => {
    if (isAnimating.value) return;
    
    isAnimating.value = true;

    // Get the button element for animation origin
    const button = document.querySelector('.theme-toggle-button');
    const rect = button?.getBoundingClientRect();

    // Create overlay element for circle expand animation
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: ${rect?.top || 0}px;
      left: ${rect?.left || 0}px;
      width: ${rect?.width || 40}px;
      height: ${rect?.height || 40}px;
      border-radius: 50%;
      background: ${colorMode.value === 'dark' ? '#ffffff' : '#18181b'};
      z-index: 9999;
      pointer-events: none;
      transform-origin: center;
      will-change: transform;
    `;
    document.body.appendChild(overlay);

    // Calculate scale needed to cover screen
    const maxDimension = Math.max(window.innerWidth, window.innerHeight);
    const scale = Math.ceil(maxDimension / 20); // Smaller scale for better performance
    
    // Animate the overlay
    const animation = overlay.animate([
      { transform: 'scale(1)', opacity: 1 },
      { transform: `scale(${scale})`, opacity: 1 }
    ], {
      duration: 300, // Reduced from 400ms
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fill: 'forwards'
    });

    await animation.finished;

    // Toggle the theme
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';

    // Small delay for theme to apply
    await new Promise(resolve => setTimeout(resolve, 30));

    // Fade out overlay
    const fadeOut = overlay.animate([
      { opacity: 1 },
      { opacity: 0 }
      ], {
      duration: 150, // Reduced from 200ms
      easing: 'ease-out',
      fill: 'forwards'
    });

    await fadeOut.finished;

    // Clean up
    overlay.remove();
    isAnimating.value = false;
  };

  /**
   * Check if user prefers reduced motion
   */
  const prefersReducedMotion = computed(() => {
    if (process.client) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  /**
   * Toggle theme without animation (for reduced motion)
   */
  const toggleThemeSimple = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };

  /**
   * Smart toggle that respects motion preferences
   */
  const smartToggle = () => {
    if (prefersReducedMotion.value) {
      toggleThemeSimple();
    } else {
      toggleTheme();
    }
  };

  return {
    colorMode,
    isAnimating: readonly(isAnimating),
    prefersReducedMotion,
    toggleTheme,
    toggleThemeSimple,
    smartToggle
  };
};
