// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003060b0d0f0f0f10110f0f0f0e0b0604070b090b090b0a12130a090b0b090b0807090100000000000000000000010908070000000000000000000000000000080700000000000000000000000000000807000000000000000000000000000008070000000000000000000000000000080700000000000000000000000000000807000000000000000000000000000008070000000000000000000000000000080700000000000000000000000000000807000000000000000000000000000008070c0b090b0101090b090b090b010c08070909010909090901010901090901080709010b010b0b0901090b0b0b0b0b08020a090109090b010b09090901090a05`, img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.