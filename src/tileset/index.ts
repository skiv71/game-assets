export { default as tilesetImage } from './image.png'

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
