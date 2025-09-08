import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
    presetAttributify(),
    presetWebFonts(
      {
        provider: 'fontshare',
        fonts: {
          sans: 'Satoshi',
          serif: 'Telma',
        },
      },
    ),
    presetTypography(),
  ],
  shortcuts: [
    {
      themeBase: 'bg-sage-50 text-sage-400 dark:bg-gray-900 dark:text-sage-100 transition-colors duration-300',
      borderBase: 'dark:border-sage-300 border-sage-200 ',
      linkBase: 'block decoration-none border-b border-sage-200 dark:border-sage-300 hover:border-sage-400 dark:hover:border-sage-100 transition-all duration-300 hover:shadow-sm',
      linkMd: 'decoration-none border-b hover:border-sage-300 dark:hover:border-sage-200 border-sage-400 dark:border-sage-300 transition-all duration-300',
      glassCard: 'backdrop-blur-md bg-sage-50/80 dark:bg-gray-800/80 border border-sage-200/50 dark:border-sage-300/30 rounded-xl shadow-lg',
      floatingElement: 'animate-float animate-iteration-infinite',
      shimmerText: 'bg-gradient-to-r from-sage-400 via-sage-300 to-sage-400 bg-size-200% animate-shimmer animate-iteration-infinite bg-clip-text text-transparent',
      glowEffect: 'animate-glow animate-iteration-infinite',
    },
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      // Silver Sage Palette
      sage: {
        50: '#E0E2DB',   // Lightest sage
        100: '#D2D4C8',  // Light sage
        200: '#B8BDB5',  // Medium sage
        300: '#889696',  // Dark sage
        400: '#5F7470',  // Darkest sage
      },
      // Enhanced grays for better contrast
      gray: {
        50: '#F8F9FA',
        100: '#E9ECEF',
        200: '#DEE2E6',
        300: '#CED4DA',
        400: '#ADB5BD',
        500: '#6C757D',
        600: '#495057',
        700: '#343A40',
        800: '#212529',
        900: '#0D1117',
      }
    },
    animation: {
      keyframes: {
        slideUp: '{ from {transform: translateY(10px);opacity:0;} to {transform: translateY(0px);opacity:100;}}',
        float: '{ 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }',
        shimmer: '{ 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }',
        pulse: '{ 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }',
        glow: '{ 0%, 100% { box-shadow: 0 0 5px rgba(95, 116, 112, 0.3); } 50% { box-shadow: 0 0 20px rgba(95, 116, 112, 0.6), 0 0 30px rgba(95, 116, 112, 0.4); } }',
      },
      durations: {
        slideUp: '0.8s',
        float: '3s',
        shimmer: '2s',
        pulse: '2s',
        glow: '2s',
      },
      timingFns: {
        slideUp: 'ease',
        float: 'ease-in-out',
        shimmer: 'linear',
        pulse: 'ease-in-out',
        glow: 'ease-in-out',
      },
    },
  },

})
