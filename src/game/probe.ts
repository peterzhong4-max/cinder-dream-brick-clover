export type ControlsProbe = {
  getYaw: () => number;
  getSpeed: () => number;
  getX: () => number;
  getY: () => number;
  setKeys: (codes: string[]) => void;
  setPos: (x: number, y: number) => void;
};

declare global {
  interface Window {
    __controlsTest?: ControlsProbe;
  }
}

export function bindProbe(probe: ControlsProbe) {
  window.__controlsTest = probe;
  return () => {
    if (window.__controlsTest === probe) delete window.__controlsTest;
  };
}
