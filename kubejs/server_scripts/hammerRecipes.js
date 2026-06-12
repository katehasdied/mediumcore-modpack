ServerEvents.recipes(event => {
    let shapedHammerRecipe = global.shapedToolRecipe(event, "#kubejs:hammers");

    // i have to define the list before using it because kubejs
    let metals = ["iron", "copper"]
    metals.forEach((metal) => {
            shapedHammerRecipe(
                Item.of(`minecraft:${metal}_bars`, 16),
                [
                    "BBB",
                    "BBB",
                    " X "
                ],
                {
                    B: `minecraft:${metal}_ingot`
                }
            )
        }
    )

    let shieldRecipes = [
        {
            result: "basicshields:copper_shield",
            material: "minecraft:copper_ingot"
        },
        {
            result: "minecraft:shield",
            material: "minecraft:iron_ingot"
        },
        {
            result: "basicshields:diamond_shield",
            material: "minecraft:diamond"
        }
    ];
    shieldRecipes.forEach((shieldRecipe) => {
        shapedHammerRecipe(
            Item.of(shieldRecipe.result),
            [
                "MWM",
                "WWW",
                "XW "
            ],
            {
                M: shieldRecipe.material,
                W: "#minecraft:planks"
            }
        )
    })

    shapedHammerRecipe(
        Item.of("minecraft:shears"),
        [
            "IX",
            " I"
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:iron_door", 3),
        [
            "II ",
            "IIX",
            "II "
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:heavy_weighted_pressure_plate"),
        [
            "II",
            "X "
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:bucket"),
        [
            "IXI",
            " I"
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:cauldron"),
        [
            "I I",
            "IXI",
            "III"
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:anvil"),
        [
            "BBB",
            "XI ",
            "III"
        ],
        {
            I: "minecraft:iron_ingot",
            B: "minecraft:iron_block"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:chain", 3),
        [
            "N ",
            "IX",
            "N "
        ],
        {
            I: "minecraft:iron_ingot",
            N: "minecraft:iron_nugget"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:copper_chain", 3),
        [
            "N ",
            "CX",
            "N "
        ],
        {
            C: "minecraft:copper_ingot",
            N: "minecraft:copper_nugget"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:minecart"),
        [
            "IXI",
            "III"
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:rail", 16),
        [
            "IXI",
            "ISI",
            "I I"
        ],
        {
            I: "minecraft:iron_ingot",
            S: "minecraft:stick"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:powered_rail", 6),
        [
            "GXG",
            "GSG",
            "GRG"
        ],
        {
            G: "minecraft:gold_ingot",
            S: "minecraft:stick",
            R: "minecraft:redstone"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:detector_rail", 6),
        [
            "IXI",
            "I I",
            "IRI"
        ],
        {
            I: "minecraft:iron_ingot",
            R: "minecraft:redstone"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:activator_rail", 6),
        [
            "IXI",
            "ISI",
            "ITI"
        ],
        {
            I: "minecraft:iron_ingot",
            T: "minecraft:redstone_torch",
            S: "minecraft:stick"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:iron_trapdoor"),
        [
            "II ",
            "II ",
            "  X"
        ],
        {
            I: "minecraft:iron_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:copper_trapdoor"),
        [
            "CC ",
            "CC ",
            "  X"
        ],
        {
            C: "minecraft:copper_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:lightning_rod"),
        [
            "C ",
            "CX",
            "C "
        ],
        {
            C: "minecraft:copper_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:lightning_rod"),
        [
            "C ",
            "CX",
            "C "
        ],
        {
            C: "minecraft:copper_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:copper_door",3),
        [
            "CC ",
            "CCX",
            "CC "
        ],
        {
            C: "minecraft:copper_ingot"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:copper_grate",4),
        [
            " C ",
            "CXC",
            " C "
        ],
        {
            C: "minecraft:copper_block"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:chiseled_copper ",4),
        [
            "CX",
            "C ",
        ],
        {
            C: "minecraft:cut_copper_slab"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:cut_copper_slab",6),
        [
            "CCC",
            " X ",
        ],
        {
            C: "minecraft:cut_copper"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:waxed_cut_copper_slab",6),
        [
            "CCC",
            " X ",
        ],
        {
            C: "minecraft:waxed_cut_copper"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:cut_copper_stairs",4),
        [
            "C X",
            "CC ",
            "CCC"
        ],
        {
            C: "minecraft:cut_copper"
        }
    )

    shapedHammerRecipe(
        Item.of("minecraft:waxed_cut_copper_stairs",4),
        [
            "C X",
            "CC ",
            "CCC"
        ],
        {
            C: "minecraft:waxed_cut_copper"
        }
    )

    shapedHammerRecipe(
        Item.of("copperagebackport:copper_button",1),
        [
            "C ",
            " X",
        ],
        {
            C: "minecraft:cut_copper"
        }
    )

    shapedHammerRecipe(
        Item.of("copperagebackport:waxed_copper_button",1),
        [
            "C ",
            " X",
        ],
        {
            C: "minecraft:waxed_cut_copper"
        }
    )
})