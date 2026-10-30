import type { Wall } from "./types";

export const MAP_WIDTH = 3000;
export const MAP_HEIGHT = 3000;

export function distance(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function overlaps(x: number, y: number, r: number, w: Wall) {
  return x + r > w.x && x - r < w.x + w.w && y + r > w.y && y - r < w.y + w.h;
}

export function hitsWall(x: number, y: number, r: number, walls: Wall[], mapW: number, mapH: number) {
  if (x - r < 0 || x + r > mapW || y - r < 0 || y + r > mapH) return true;
  return walls.some((w) => overlaps(x, y, r, w));
}

export function moveCircle(
  x: number,
  y: number,
  dx: number,
  dy: number,
  r: number,
  walls: Wall[],
  mapW: number,
  mapH: number,
) {
  let nx = x;
  let ny = y;
  if (!hitsWall(x + dx, y, r, walls, mapW, mapH)) nx = x + dx;
  if (!hitsWall(nx, y + dy, r, walls, mapW, mapH)) ny = y + dy;
  return { x: nx, y: ny };
}

export function getMapWalls(levelId: number | string): Wall[] {
  const w: Wall[] = [
    { id: "bw1", x: 0, y: 0, w: MAP_WIDTH, h: 40, isBorder: true, hp: 1, maxHp: 1 },
    { id: "bw2", x: 0, y: MAP_HEIGHT - 40, w: MAP_WIDTH, h: 40, isBorder: true, hp: 1, maxHp: 1 },
    { id: "bw3", x: 0, y: 0, w: 40, h: MAP_HEIGHT, isBorder: true, hp: 1, maxHp: 1 },
    { id: "bw4", x: MAP_WIDTH - 40, y: 0, w: 40, h: MAP_HEIGHT, isBorder: true, hp: 1, maxHp: 1 },
  ];
  if (levelId === "m_eason_1") {
    w.push(
      { id: "iw1", x: 0, y: 600, w: 1200, h: 40, hp: 500, maxHp: 500 },
      { id: "iw2", x: 1800, y: 600, w: 1200, h: 40, hp: 500, maxHp: 500 },
    );
    for (let i = 0; i < 8; i++) {
      w.push(
        { id: `iw3_${i}`, x: 400, y: 1200 + i * 200, w: 800, h: 40, hp: 300, maxHp: 300 },
        { id: `iw4_${i}`, x: 1800, y: 1200 + i * 200, w: 800, h: 40, hp: 300, maxHp: 300 },
      );
    }
  } else {
    w.push(
      { id: "iw5", x: 1000, y: 40, w: 40, h: 800, hp: 600, maxHp: 600 },
      { id: "iw6", x: 2000, y: 2160, w: 40, h: 800, hp: 600, maxHp: 600 },
      { id: "iw7", x: 40, y: 2000, w: 800, h: 40, hp: 600, maxHp: 600 },
      { id: "iw8", x: 2160, y: 1000, w: 800, h: 40, hp: 600, maxHp: 600 },
    );
    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        if ((i === 2 && j === 2) || (i === 3 && j === 3) || (i === 2 && j === 3) || (i === 3 && j === 2)) continue;
        w.push(
          { id: `gridx_${i}_${j}`, x: i * 600, y: j * 600 - 100, w: 40, h: 200, hp: 400, maxHp: 400 },
          { id: `gridy_${i}_${j}`, x: i * 600 - 100, y: j * 600, w: 200, h: 40, hp: 400, maxHp: 400 },
        );
      }
    }
  }
  return w;
}

export function findOpenSpot(
  preferX: number,
  preferY: number,
  r: number,
  walls: Wall[],
  mapW: number,
  mapH: number,
) {
  if (!hitsWall(preferX, preferY, r, walls, mapW, mapH)) return { x: preferX, y: preferY };
  for (let ring = 1; ring <= 8; ring++) {
    for (let a = 0; a < 8; a++) {
      const x = preferX + Math.cos((a / 8) * Math.PI * 2) * ring * 80;
      const y = preferY + Math.sin((a / 8) * Math.PI * 2) * ring * 80;
      if (!hitsWall(x, y, r, walls, mapW, mapH)) return { x, y };
    }
  }
  return { x: mapW / 2, y: mapH / 2 };
}
