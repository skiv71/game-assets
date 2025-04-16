export { default as tilesetImage } from './image.png'

export type TileData = [number, number, number, number]

type Tile = Record<string, TileData>

const tiles: Tile = {
    block: [1, 1, 33, 33],
    plane: [1, 35, 67, 22],
    bomb: [43, 1, 9, 17],
    explosion: [53, 1, 22, 22],
    yellowWindow: [35, 1, 7, 9],
    redWindowTile: [35, 11, 7, 9]
}

type Tiles = keyof typeof tiles

export function blockWindowXY(
    n: number
): [number, number] {
    const cols = [4, 13, 22]
    const rows = [5, 19]
    const c = n % cols.length
    const r = Math.floor(n / cols.length)
    return [
        cols[c],
        rows[r]
    ]
}

export const tileData = (tile: Tiles): TileData => tiles[tile]
