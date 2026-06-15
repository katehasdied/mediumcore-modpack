ServerEvents.recipes(event => {    
    [
        "#notreepunching:mattocks",
        "minecraft:furnace",
        "minecraft:iron_ingot",
        "minecraft:gold_ingot",
        "minecraft:copper_ingot",
        "minecraft:string",
        "minecraft:torch",
        "minecraft:bookshelf",
        "minecraft:leather",
        "minecraft:stonecutter",

        "minecraft:golden_helmet",
        "minecraft:golden_chestplate",
        "minecraft:golden_leggings",
        "minecraft:golden_boots",
        "minecraft:golden_pickaxe",
        "minecraft:golden_shovel",
        "minecraft:golden_sword",
        "minecraft:golden_hoe",
        "minecraft:golden_axe",
        "basicshields:golden_shield",
        "notreepunching:gold_saw",
        "notreepunching:gold_knife"
    ].forEach((item) => {
        event.remove({
            output: item
        });
    })

    event.shapeless(
        Item.of("minecraft:stick",1),
        [
            "2x #minecraft:saplings",
            "1x #notreepunching:loose_rocks"
        ]
    ).keepIngredient("#notreepunching:loose_rocks")

    event.shapeless(
        Item.of("minecraft:campfire", 1),
        [
            "1x #notreepunching:fire_starter_logs",
            "3x #notreepunching:fire_starter_kindling",
            "#c:starts_fires"
        ]
    ).damageIngredient("#c:starts_fires", 4);

    event.shapeless(
        Item.of("minecraft:tipped_arrow",8,"{Potion:\"minecraft:poison\"}"),
        [
            "1x minecraft:spider_eye",
            "8x minecraft:arrow"
        ]
    )

    event.shapeless(
        Item.of("minecraft:tipped_arrow",4,"{Potion:\"minecraft:long_poison\"}"),
        [
            "1x minecraft:spider_eye",
            "4x minecraft:arrow"
        ]
    )

    event.shaped(
        Item.of("minecraft:furnace", 1),
        [
            "SCS",
            "SFS",
            "SSS"
        ],
        {
            S: "#minecraft:stone_tool_materials",
            C: "minecraft:copper_block",
            F: "#c:coal"
        }
    );

    event.shaped(
        Item.of("kubejs:unlit_torch", 4),
        [
            "C",
            "S",
        ],
        {
            S: "minecraft:stick",
            C: "#c:coal"
        }
    );

    event.shapeless(
        Item.of("minecraft:torch"),
        [
            "1x #c:starts_fires",
            "1x kubejs:unlit_torch"
        ] 
    ).damageIngredient("#c:starts_fires");

    event.shaped(
        Item.of("kubejs:copper_saw", 1),
        [
            "  S",
            " SC",
            "SC "
        ],
        {
            S: "minecraft:stick",
            C: "minecraft:copper_ingot"
        }
    );

    event.shaped(
        Item.of("kubejs:copper_hammer", 1),
        [
            "CCC",
            "CCC",
            " S "
        ],
        {
            S: "minecraft:stick",
            C: "minecraft:copper_ingot"
        }
    );

    event.shaped(
        Item.of("kubejs:iron_hammer", 1),
        [
            "CCC",
            "CCC",
            " S "
        ],
        {
            S: "minecraft:stick",
            C: "minecraft:iron_ingot"
        }
    );

    event.shaped(
        Item.of("kubejs:diamond_hammer", 1),
        [
            "CCC",
            "CCC",
            " S "
        ],
        {
            S: "minecraft:stick",
            C: "minecraft:diamond"
        }
    );

    event.smithing(
      'kubejs:netherite_hammer',
      'minecraft:netherite_upgrade_smithing_template',
      'kubejs:diamond_hammer',
      'minecraft:netherite_ingot'
    )

    event.shapeless(
        Item.of("minecraft:string", 1),
        [
            "1x #minecraft:wool",
            "1x #notreepunching:knives"
        ]
    ).damageIngredient("#notreepunching:knives");

    let nuggetCount = 3;
    ["iron", "gold", "copper"].forEach((material) => {
        event.shapeless(
            Item.of(`minecraft:${material}_nugget`, nuggetCount++),
            [
                "1x #minecraft:pickaxes",
                `1x kubejs:${material}_chunk`
            ]
        ).damageIngredient("#minecraft:pickaxes");

        event.shapeless(
        Item.of(`minecraft:${material}_ingot`,1),
        [
            `9x minecraft:${material}_nugget`
        ]
    )
    })

    event.shaped(
        Item.of("minecraft:bookshelf",1),
        [
            "PSP",
            "BBB",
            "PSP"
        ],
        {
            P: "#minecraft:planks",
            B: "minecraft:book",
            S: "#minecraft:wooden_slabs"
        }
    )

    event.shapeless(
        Item.of("minecraft:leather", 1),
        [
            "2x minecraft:rabbit_hide"
        ]
    )

    event.shaped(
        Item.of("minecraft:stonecutter"),
        [
            "XIH",
            "CRC",
            "SSS"
        ],
        {
            X: "#kubejs:hammers",
            I: "minecraft:iron_ingot",
            C: "minecraft:repeater",
            R: "minecraft:redstone",
            S: "minecraft:stone",
            H: "minecraft:tripwire_hook"
        }
    ).damageIngredient("#kubejs:hammers",5)

    event.shapeless(
        Item.of("minecraft:string",1),
        [
            "2x kubejs:sinew",
            "1x #notreepunching:knives"
        ]
    ).damageIngredient("#notreepunching:knives");

    event.smelting("kubejs:iron_chunk", "minecraft:raw_iron");
    event.blasting("kubejs:iron_chunk", "minecraft:raw_iron");

    event.smelting("kubejs:copper_chunk", "minecraft:raw_copper");
    event.blasting("kubejs:copper_chunk", "minecraft:raw_copper");

    event.smelting("kubejs:gold_chunk", "minecraft:raw_gold");
    event.blasting("kubejs:gold_chunk", "minecraft:raw_gold");
    
    event.campfireCooking('kubejs:copper_chunk', 'minecraft:raw_copper', 1, 1200);
    event.campfireCooking('minecraft:charcoal', '#minecraft:logs', 1, 2400);
    event.campfireCooking('minecraft:rabbit_hide', 'minecraft:rotten_flesh', 1, 1200);
    event.campfireCooking('minecraft:torch', 'kubejs:unlit_torch', 1, 5);
})