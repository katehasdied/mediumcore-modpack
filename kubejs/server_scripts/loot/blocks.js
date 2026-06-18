LootJS.modifiers((event) => {
    // for some reason, kite obliterates loot table changes
    event.addBlockLootModifier("minecraft:grass")
    .randomChance(0.3)
    .addLoot("notreepunching:plant_fiber");

    event.addBlockLootModifier("minecraft:diamond_ore")
    .replaceLoot("minecraft:diamond", "kubejs:raw_diamond")
    .applyOreBonus("minecraft:fortune");
})

