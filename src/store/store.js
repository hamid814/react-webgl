import create from 'zustand';

import { values } from '../components/layout/canvas/Canvas';

const useStore = create((set, get) => ({
  mousePos: { x: 0, y: 0 },
  mouseActive: false,
  isTemplateReverse: false,
  isMenuOpen: false,
  setMousePos: (p) => {
    values.mouse.x = p.x;
    values.mouse.y = p.y;

    return set(() => ({ mousePos: p }));
  },
  setMouseActive: (a) => set(() => ({ mouseActive: a })),
  setTemplateReverse: (s) => set(() => ({ isTemplateReverse: s })),
  setMenuOpen: (o) => set(() => ({ isMenuOpen: o })),
}));

export default useStore;
