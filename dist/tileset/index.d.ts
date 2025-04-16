export { default as tilesetImage } from './image.png';
export type TileData = [number, number, number, number];
type Tile = Record<string, TileData>;
declare const tiles: Tile;
type Tiles = keyof typeof tiles;
export declare function blockWindowXY(n: number): [number, number];
export declare const tileData: (tile: Tiles) => TileData;
//# sourceMappingURL=index.d.ts.map