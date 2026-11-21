/**
 * MASTER THEME FILE
 * 
 * All commonly used colors in the website are defined here.
 * To change any color across the entire website, simply edit the values below.
 * No need to modify individual component files!
 */

export interface ThemeColors {
  // Brand Colors
  primary: string;              // Main brand electric indigo (#635cf7)
  primaryDark: string;          // Deep indigo for hover states (#4f46e5)
  secondary: string;            // Secondary accent amber gold (#feac22)
  muted: string;                // Technical slate gray (#94a3b8)

  // Canvas & Backgrounds
  canvas: string;               // Main light page background (#F8FAFC)
  canvasDark: string;           // Dark page background (#000000)
  surface: string;              // Card and panel surface (#ffffff)
  surfaceDark: string;          // Dark card surface (#0A0A0A)

  // Borders
  border: string;               // Standard card/container border (#e2e8f0)
  borderDark: string;           // Dark container border (rgba(255, 255, 255, 0.1))

  // Typography
  textHeadings: string;         // Main headings color (#0f172a - slate 900)
  textBody: string;             // Body text color (#475569 - slate 600)
  textMuted: string;            // Muted subtitle/caption color (#94a3b8)

  // Status & Availability Badge
  statusAvailable: string;       // Active ping dot (#10b981 - emerald 500)
  statusAvailableBg: string;     // Active badge background (#ecfdf5 - emerald 50)
  statusAvailableBorder: string; // Active badge border (#a7f3d0 - emerald 200)
  statusAvailableText: string;   // Active badge text (#047857 - emerald 700)

  // Reviews & Rating
  ratingStar: string;           // Star rating color (#feac22)

  // Creative Highlight
  creative: string;             // Creative menu standout accent (#ec4899)
  creativeGradient: string;     // Creative gradient
}

export const THEME: ThemeColors = {
  // Brand Colors
  primary: '#635cf7',
  primaryDark: '#4f46e5',
  secondary: '#feac22',
  muted: '#94a3b8',
  creative: '#ec4899',
  creativeGradient: 'linear-gradient(135deg, #635cf7 0%, #9333ea 50%, #ec4899 100%)',

  // Canvas & Backgrounds
  canvas: '#F8FAFC',
  canvasDark: '#000000',
  surface: '#ffffff',
  surfaceDark: '#0A0A0A',

  // Borders
  border: '#e2e8f0',
  borderDark: 'rgba(255, 255, 255, 0.1)',

  // Typography
  textHeadings: '#0f172a',
  textBody: '#475569',
  textMuted: '#94a3b8',

  // Status & Availability
  statusAvailable: '#10b981',
  statusAvailableBg: '#ecfdf5',
  statusAvailableBorder: '#a7f3d0',
  statusAvailableText: '#047857',

  // Rating Stars
  ratingStar: '#feac22',
};

/**
 * Converts hex color (e.g. #635cf7) to space-separated RGB (e.g. "99 92 247")
 * so Tailwind can support dynamic opacity modifiers like bg-primary/10.
 */
function hexToRgb(hex: string): string {
  if (!hex || !hex.startsWith('#')) return '99 92 247';
  const sanitized = hex.replace('#', '').trim();
  const fullHex = sanitized.length === 3
    ? sanitized.split('').map(c => c + c).join('')
    : sanitized;
  const bigint = parseInt(fullHex, 16);
  if (isNaN(bigint)) return '99 92 247';
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}

/**
 * Applies all theme colors to document root as CSS variables.
 */
export function applyTheme(colors: ThemeColors = THEME): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  // Primary
  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-primary-rgb', hexToRgb(colors.primary));
  root.style.setProperty('--color-primary-dark', colors.primaryDark);

  // Secondary
  root.style.setProperty('--color-secondary', colors.secondary);
  root.style.setProperty('--color-secondary-rgb', hexToRgb(colors.secondary));

  // Muted
  root.style.setProperty('--color-muted', colors.muted);
  root.style.setProperty('--color-muted-rgb', hexToRgb(colors.muted));

  // Canvas & Surface
  root.style.setProperty('--color-canvas', colors.canvas);
  root.style.setProperty('--color-canvas-rgb', hexToRgb(colors.canvas));
  root.style.setProperty('--color-canvas-dark', colors.canvasDark);
  root.style.setProperty('--color-surface', colors.surface);
  root.style.setProperty('--color-surface-dark', colors.surfaceDark);

  // Borders
  root.style.setProperty('--color-border', colors.border);
  root.style.setProperty('--color-border-dark', colors.borderDark);

  // Typography
  root.style.setProperty('--color-text-headings', colors.textHeadings);
  root.style.setProperty('--color-text-body', colors.textBody);
  root.style.setProperty('--color-text-muted', colors.textMuted);

  // Status Available
  root.style.setProperty('--color-status-available', colors.statusAvailable);
  root.style.setProperty('--color-status-available-rgb', hexToRgb(colors.statusAvailable));
  root.style.setProperty('--color-status-available-bg', colors.statusAvailableBg);
  root.style.setProperty('--color-status-available-border', colors.statusAvailableBorder);
  root.style.setProperty('--color-status-available-text', colors.statusAvailableText);

  // Rating Star
  root.style.setProperty('--color-rating-star', colors.ratingStar);
}

// Auto-run on import in browser
applyTheme();

export default THEME;
