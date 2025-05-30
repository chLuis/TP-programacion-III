import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStoreType = {
  theme: 'dark' | 'light' ;
  getTheme: () => 'dark' | 'light' ;
  toogleTheme: () => void;
  initTheme: () => void
}

const themeStore: StateCreator<ThemeStoreType> = (set, get) => ({
  theme: 'light',
  getTheme: () => get().theme,
  toogleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    set({ theme: newTheme })
  },
  initTheme: () => {
    document.documentElement.classList.toggle('dark', get().theme === 'dark');
  }
})

export const useThemeStore = create<ThemeStoreType>()(
  persist(
    themeStore,
    {name: 'theme-portfolio'}
  )
)

