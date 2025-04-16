interface TileXY {
    x: number,
    y: number
}

interface TileWH {
    width: number,
    height: number
}

export interface TileData extends TileXY, TileWH {}

function tileData(
    x: number,
    y: number,
    width: number,
    height: number
): TileData {
    return Object.freeze({
        x,
        y,
        width,
        height
    })
} 

export const blockTile = tileData(1, 1, 33, 33)

export const planeTile = tileData(1, 35, 67, 22)

export const bombTile = tileData(43, 1, 9, 17)

export const explosionTile = tileData(53, 1, 22, 22)

export const yellowWindowTile = tileData(35, 1, 7, 9)

export const redWindowTile = tileData(35, 11, 7, 9)

export function blockWindowXY(
    n: number
): TileXY {
    const cols = [4, 13, 22]
    const rows = [5, 19]
    const c = n % cols.length
    const r = Math.floor(n / cols.length)
    return {
        x: cols[c],
        y: rows[r]
    }
}
