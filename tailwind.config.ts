/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeando as variáveis CSS para cores do Tailwind
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Suas cores personalizadas
        'brand-blue': '#0A69A2',
        'brand-green': '#37A843',
        'bg-dark': '#121A26',
        
        'white': '#ffffff',
        'black': '#000000',
        'gray': {
          light: '#d1d5db',
          DEFAULT: '#4b5563',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        heading: ['Satoshi', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cta': '0 8px 20px rgba(16,185,129,0.4)',
        'cta-hover': '0 12px 28px rgba(16,185,129,0.6)',
        'card': '0 6px 18px rgba(0,0,0,0.3)',
        'card-hover': '0 12px 28px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '24': '6rem',
        '32': '8rem',
      },
      keyframes: {
        'whatsapp-wave': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '10%': { transform: 'translateY(-2px) rotate(-3deg)' },
          '20%': { transform: 'translateY(2px) rotate(3deg)' },
          '30%': { transform: 'translateY(-2px) rotate(-2deg)' },
          '40%': { transform: 'translateY(2px) rotate(2deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'whatsapp-wave': 'whatsapp-wave 1.5s ease-in-out infinite',
        marquee: 'marquee linear infinite',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};