ServerEvents.recipes(event => {
    function simpleReplaceTier(recipeList, itemList, key) {
        for (let i = 0; i <= recipeList.length - 1; i++) {
            event.remove({output: itemList[i]})
            event.shaped(
                Item.of(itemList[i],1),
                recipeList[i],
                key
            )
        }
    } 

    // X is used for augment item
    function augmentReplaceTier(recipeList, itemList, key, augmentItem) {
        for (let i = 0; i <= recipeList.length - 1; i++) {
            let augmentedKey = key;
            augmentedKey.X = augmentItem[i];
            augmentedKey.Y = "#kubejs:hammers";

            event.remove({output: itemList[i]})
            event.shaped(
                Item.of(itemList[i],1),
                recipeList[i],
                augmentedKey
            )
        }
    }
    
    function augmentReplaceTierHammer(recipeList, itemList, key, augmentItem) {
        for (let i = 0; i <= recipeList.length - 1; i++) {
            let augmentedKey = key;
            augmentedKey.X = augmentItem[i];
            augmentedKey.Y = "#kubejs:hammers";

            event.remove({output: itemList[i]})
            event.shaped(
                Item.of(itemList[i],1),
                recipeList[i],
                augmentedKey
            ).damageIngredient("#kubejs:hammers");
        }
    } 

    // add string to leather recipe
    simpleReplaceTier(
        [
            [
                "LLL",
                "LSL",
                "S S"
            ],
            [
                "LSL",
                "LLL",
                "LLL"
            ],
            [
                "LLL",
                "LSL",
                "L L"
            ],
            [
                "S S",
                "L L",
                "L L"
            ]
        ],
        [
            "minecraft:leather_helmet",
            "minecraft:leather_chestplate",
            "minecraft:leather_leggings",
            "minecraft:leather_boots"
        ],
        {
            L: "minecraft:leather",
            S: "minecraft:string"
        }
    )
    
    // add leather to iron armor recipe
    augmentReplaceTierHammer(
        [
            [
                " Y ",
                "PIP",
                " X "
            ],
            [
                "IYI",
                "PXP",
                " P "
            ],
            [
                " I ",
                "IXI",
                "PYP"
            ],
            [
                " Y ",
                "PXP",
                " I "
            ]
        ],
        [
            "minecraft:iron_helmet",
            "minecraft:iron_chestplate",
            "minecraft:iron_leggings",
            "minecraft:iron_boots"
        ],
        {
            I: "minecraft:iron_ingot",
            P: "kubejs:iron_plate"
        },
        [
            "minecraft:leather_helmet",
            "minecraft:leather_chestplate",
            "minecraft:leather_leggings",
            "minecraft:leather_boots"
        ]
    );

    // add leather to copper armor recipe
    augmentReplaceTier(
        [
            [
                " Y ",
                "PCP",
                " X "
            ],
            [
                "CYC",
                "PXP",
                " P "
            ],
            [
                " C ",
                "CXC",
                "PYP"
            ],
            [
                " Y ",
                "PXP",
                " C "
            ]
        ],
        [
            "minecraft:copper_helmet",
            "minecraft:copper_chestplate",
            "minecraft:copper_leggings",
            "minecraft:copper_boots"
        ],
        {
            C: "minecraft:copper_ingot",
            P: "kubejs:copper_plate"
        },
        [
            "minecraft:leather_helmet",
            "minecraft:leather_chestplate",
            "minecraft:leather_leggings",
            "minecraft:leather_boots"
        ]
    )

    // add leather to diamond armor recipe
    augmentReplaceTier(
        [
            [
                "DDD",
                "DXD"
            ],
            [
                "DXD",
                "DDD",
                "DDD"
            ],
            [
                "DDD",
                "DXD",
                "D D"
            ],
            [
                "DXD",
                "D D"
            ]
        ],
        [
            "minecraft:diamond_helmet",
            "minecraft:diamond_chestplate",
            "minecraft:diamond_leggings",
            "minecraft:diamond_boots"
        ],
        {
            D: "minecraft:diamond"
        },
        [
            "minecraft:leather_helmet",
            "minecraft:leather_chestplate",
            "minecraft:leather_leggings",
            "minecraft:leather_boots"
        ]
    )
})