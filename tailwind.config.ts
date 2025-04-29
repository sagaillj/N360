import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#ffffff',
        'background-secondary': '#f8f9fa',
        'text-primary': '#1a1a1a',
        'text-secondary': '#4a5568',
        'accent-primary': '#2B7A78',
        'accent-secondary': '#3AAFA9',
        'border-primary': '#e2e8f0',
        'success': '#48bb78',
        'error': '#f56565',
        'warning': '#ed8936',
        'info': '#4299e1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft': '0 2px 4px 0 rgba(0,0,0,0.05)',
        'medium': '0 4px 6px -1px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};

export default config; 