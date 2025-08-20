import {useTheme } from '../theme/ThemeContext';

export default function ThemeToggle() {
  const {theme, toggle } = useTheme();


return (
  <button onClick ={toggle} className='inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm border border-gray-500 dark:border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition' aria-label='Toggle theme'>

  {theme === 'dark' ? '🌙' : '☀️'}
  </button>
)}