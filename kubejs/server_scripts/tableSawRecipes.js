ServerEvents.recipes(event => {
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
})