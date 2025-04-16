# Game Assets

## Introduction

This library provides both `tileset` and `audio` modules, which can be used with the Game project.

Can help bring your game to life with `graphics` and `sound effects`.

## Installation

```shell
npm install https://github.com/skiv71/game-assets
```

## Usage

### Tileset

The tileset module provides the following `exports`

```javascript

// main tileset image
import { tilesetImage } from 'game-assets/tileset' // as url

// tile data
import {
    blockTile,
    bombTile,
    explosionTile,
    planeTile,
    redWindowTile,
    yellowWindowTile
} from 'game-assets/tileset/data' // as [x, y, width, height] data

// other
import {
    blockWindowXY, // special function for blocks (see below)
    TileData // Typescript type alias
} from 'game-assets/tileset/data'
```

The `blockWindowXY` is a function which provides an `[x, y]` position based on a `index`.

```
blockWindowTile(index: number) => [x: number, y: number]
```

You can use this data to place an `xxxWindowTile` image on the `blockTile` image.

### Audio

The audio module provides the following `exports`

```javascript
import {
    bombAudio,
    explosionAudio,
    failAudio,
    planeAudio
} from 'game-assets/audio' // as url
```
