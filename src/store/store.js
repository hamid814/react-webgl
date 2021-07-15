import create from 'zustand';

import { values } from '../components/canvas/Canvas';

const useStore = create((set, get) => ({
  mousePos: { x: 0, y: 0 },
  mouseActive: false,
  setMousePos: (p) => {
    values.mouse.x = p.x;
    values.mouse.y = p.y;

    return set(() => ({ mousePos: p }));
  },
  setMouseActive: (a) => set(() => ({ mouseActive: a })),
}));

export default useStore;
