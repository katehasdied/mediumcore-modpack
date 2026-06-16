ServerEvents.recipes(event => {
     const planksWoodList = [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "cherry",
        "dark_oak",
        "mangrove",
        "bamboo",
        "crimson",
        "warped"
    ]

    const colors = [
        "white",
        "gray",
        "orange",
        "magenta",
        "purple",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "light_gray",
        "cyan",
        "blue",
        "brown",
        "green",
        "red",
        "black"
    ]

    let shapedSawRecipe = global.shapedToolRecipe(event, "#notreepunching:saws");

    planksWoodList.forEach((wood) => {
        shapedSawRecipe(
            Item.of(`minecraft:${wood}_stairs`,4),
            [
                "P X",
                "PP ",
                "PPP"
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_slab`,6),
            [
                "PPP",
                " X ",
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_shelf`,4),
            [
                "PPP",
                " X ",
                "PPP"
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_door`,3),
            [
                "PP ",
                "PPI",
                "PPX"
            ],
            {
                P: `minecraft:${wood}_planks`,
                I: "#c:nuggets"
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_trapdoor`,2),
            [
                "PPP",
                "PPP",
                " X "
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_fence`,3),
            [
                "PSP",
                "PSP",
                " X "
            ],
            {
                P: `minecraft:${wood}_planks`,
                S: "minecraft:stick"
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_fence_gate`,1),
            [
                "SPS",
                "SPS",
                " X "
            ],
            {
                P: `minecraft:${wood}_planks`,
                S: "minecraft:stick"
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_sign`,3),
            [
                "PPP",
                "PPP",
                "XS "
            ],
            {
                P: `minecraft:${wood}_planks`,
                S: "minecraft:stick"
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_hanging_sign`,6),
            [
                "CXC",
                "PPP",
                "PPP"
            ],
            {
                P: `minecraft:${wood}_planks`,
                C: "#c:chains"
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_pressure_plate`,1),
            [
                "PP",
                "X "
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_pressure_plate`,1),
            [
                "PP",
                "X "
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )

        shapedSawRecipe(
            Item.of(`minecraft:${wood}_button`,1),
            [
                "P ",
                " X"
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )
    })

    // boats
    planksWoodList
    .filter((p) => (p != "bamboo") && (p != "warped") && (p != "crimson"))
    .forEach((wood) => {
        shapedSawRecipe(
            Item.of(`minecraft:${wood}_boat`,1),
            [
                "PXP",
                "PPP"
            ],
            {
                P: `minecraft:${wood}_planks`
            }
        )
    })

    // it breaks the naming convention for some reason
    shapedSawRecipe(
        "minecraft:bamboo_raft",
        [
            "PXP",
            "PPP"
        ],
        {
            P: `minecraft:bamboo_planks`
        }
    )

    shapedSawRecipe(
        "minecraft:chest",
        [
            "PPP",
            "IXI",
            "PPP"
        ],
        {
            P: "#minecraft:planks",
            I: "minecraft:iron_ingot"
        }
    )

    shapedSawRecipe(
        "minecraft:barrel",
        [
            "PSP",
            "IXI",
            "PSP"
        ],
        {
            P: "#minecraft:planks",
            I: "minecraft:iron_ingot",
            S: "#minecraft:wooden_slabs"
        }
    )

    shapedSawRecipe(
        "minecraft:smithing_table",
        [
            "IIX",
            "PP ",
            "PP "
        ],
        {
            P: "#minecraft:planks",
            I: "minecraft:iron_ingot",
        }
    )

    shapedSawRecipe(
        "minecraft:fletching_table",
        [
            "FFX",
            "PP ",
            "PP "
        ],
        {
            P: "#minecraft:planks",
            F: "minecraft:feather",
        }
    )

     shapedSawRecipe(
        "minecraft:cartography_table",
        [
            "BBX",
            "PP ",
            "PP "
        ],
        {
            P: "#minecraft:planks",
            B: "minecraft:paper",
        }
    )

    shapedSawRecipe(
        Item.of("minecraft:cut_copper",4),
        [
            "CC ",
            "CC ",
            "  X" 
        ],
        {
            C: "minecraft:copper_block"
        }
    )

    shapedSawRecipe(
        Item.of("minecraft:waxed_cut_copper",4),
        [
            "CC ",
            "CC ",
            "  X" 
        ],
        {
            C: "minecraft:waxed_copper_block"
        }
    )

    shapedSawRecipe(
        Item.of("minecraft:bamboo_mosaic",1),
        [
            "SX",
            "S "
        ],
        {
            S: "minecraft:bamboo_slab"
        }
    )

    shapedSawRecipe(
        Item.of("minecraft:bamboo_mosaic_stairs",4),
        [
            "S X",
            "SS ",
            "SSS"
        ],
        {
            S: "minecraft:bamboo_mosaic"
        }
    )

    shapedSawRecipe(
        Item.of("minecraft:bamboo_mosaic_slab",4),
        [
            "SSS",
            " X "
        ],
        {
            S: "minecraft:bamboo_mosaic"
        }
    )

    shapedSawRecipe(
        Item.of("minecraft:composter"),
        [
            "S S",
            "SXS",
            "SSS"
        ],
        {
            S: "#minecraft:wooden_slabs"
        }
    )
    
    colors.forEach(color => {
        shapedSawRecipe(
            Item.of(`minecraft:${color}_bed`,1),
            [
                "WWW",
                "PPP",
                "FXF"
            ],
            {
                P: "#minecraft:planks",
                W: `minecraft:${color}_wool`,
                F: "#minecraft:wooden_fences"
            }
        )
    })
})