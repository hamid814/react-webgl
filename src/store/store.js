import create from 'zustand';

const useStore = create((set) => ({
  mousePos: { x: 0, y: 0 },
  mouseActive: false,
  setMousePos: (pos) => set(() => ({ mousePos: pos })),
  setMouseActive: (a) => set(() => ({ mouseActive: a })),
}));

export default useStore;
