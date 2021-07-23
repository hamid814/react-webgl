import create from 'zustand';

import { shader } from '../components/layout/canvas/Canvas';

const useStore = create((set, get) => ({
  mousePos: { x: 0, y: 0 },
  mouseActive: false,
  isTemplateReverse: false,
  isMenuOpen: false,
  setMousePos: (p) => {
    shader.uniforms.mouse.value.x = p.x;
    shader.uniforms.mouse.value.y = p.y;

    return set(() => ({ mousePos: p }));
  },
  setMouseActive: (a) => set(() => ({ mouseActive: a })),
  setTemplateReverse: (s) => set(() => ({ isTemplateReverse: s })),
  setMenuOpen: (o) => set(() => ({ isMenuOpen: o })),
}));

export default useStore;
