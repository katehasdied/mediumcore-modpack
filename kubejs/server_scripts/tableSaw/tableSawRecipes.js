ServerEvents.recipes(event => {
    // bamboo, crimson, warped not included because the log doesn't follow the log naming pattern
    const planksWoodList = [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "cherry",
        "dark_oak",
        "mangrove"
    ]

    event.remove({
        type: "minecraft:crafting_shaped",
        output: "#minecraft:stairs",
    });

    event.remove({
        type: "minecraft:crafting_shaped",
        output: "#minecraft:walls",
    });

    event.remove({
        type: "minecraft:crafting_shaped",
        output: "#minecraft:slabs",
    });

    [
        "notreepunching:andesite_cobblestone_stairs",
        "notreepunching:diorite_cobblestone_stairs",
        "notreepunching:granite_cobblestone_stairs",
        "notreepunching:andesite_cobblestone_wall",
        "notreepunching:diorite_cobblestone_wall",
        "notreepunching:granite_cobblestone_wall",
        "notreepunching:andesite_cobblestone_slab",
        "notreepunching:diorite_cobblestone_slab",
        "notreepunching:granite_cobblestone_slab"
    ].forEach((recipeId) => {event.remove({
        id: recipeId
    })})

    event.stonecutting("minecraft:diamond", "kubejs:pure_diamond");

    event.stonecutting("8x minecraft:stick", "#minecraft:logs");

    planksWoodList.forEach((woodType) => {
        event.stonecutting(`4x minecraft:${woodType}_planks`, `#minecraft:${woodType}_logs`);
    })

    event.stonecutting("4x minecraft:warped_planks", "#minecraft:warped_stems");
    event.stonecutting("4x minecraft:crimson_planks", "#minecraft:crimson_stems");
    event.stonecutting("2x minecraft:bamboo_planks", "#minecraft:bamboo_blocks");
    event.stonecutting("2x minecraft:stick", "minecraft:bamboo_planks");

    // anything after this point avoids the logs
    planksWoodList = planksWoodList.concat(
        ["crimson", "warped", "bamboo"]
    )

    planksWoodList.forEach((woodType) => {
        event.stonecutting(`1x minecraft:${woodType}_stairs`, `minecraft:${woodType}_planks`);
        event.stonecutting(`2x minecraft:${woodType}_slab`, `minecraft:${woodType}_planks`);
    })
})