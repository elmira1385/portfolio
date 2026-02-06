import { create } from 'zustand'

type Theme = {
  theme: "light"|"dark"
  setTheme: (v:"light"|"dark") => void
}

export const useTheme = create<Theme>()((set) => ({
  theme: "dark",
  setTheme: (v) => set(() => ({ theme:v })),
}))

