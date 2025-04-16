interface TileXY {
    x: number;
    y: number;
}
interface TileWH {
    width: number;
    height: number;
}
export interface TileData extends TileXY, TileWH {
}
export declare const blockTile: TileData;
export declare const planeTile: TileData;
export declare const bombTile: TileData;
export declare const explosionTile: TileData;
export declare const yellowWindowTile: TileData;
export declare const redWindowTile: TileData;
export declare function blockWindowXY(n: number): TileXY;
export {};
//# sourceMappingURL=data.d.ts.map