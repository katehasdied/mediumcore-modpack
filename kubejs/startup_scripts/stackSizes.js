ItemEvents.modification(event => {
    let unstackables = [
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:crafting_table",
        "minecraft:enchanting_table",
        "minecraft:cartography_table",
        "minecraft:chest",
        "minecraft:fletching_table",
        "minecraft:smithing_table",
        "minecraft:stonecutter",
        "minecraft:brewing_stand",
        "minecraft:grindstone",
        "minecraft:barrel",
        "minecraft:smoker",
        "minecraft:cauldron",
        "minecraft:campfire",
        "minecraft:loom",
        "minecraft:composter",

        "minecraft:ender_chest",
        "minecraft:trapped_chest",
        "minecraft:copper_chest",
        "minecraft:exposed_copper_chest",
        "minecraft:weathered_copper_chest",
        "minecraft:oxidized_copper_chest",
        "minecraft:waxed_copper_chest",
        "minecraft:waxed_exposed_copper_chest",
        "minecraft:waxed_weathered_copper_chest",
        "minecraft:waxed_oxidized_copper_chest"
    ];

    unstackables.forEach((id) => {
        event.modify(id, item => {
            item.maxStackSize = 1;
        })
    })
})