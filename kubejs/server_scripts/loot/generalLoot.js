// for some reason, kite obliterates loot table changes
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:grass")
    .randomChance(0.2)
    .addLoot("notreepunching:plant_fiber");

    event.addBlockLootModifier("minecraft:diamond_ore")
    .replaceLoot("minecraft:diamond", "kubejs:raw_diamond")
    .applyOreBonus("minecraft:fortune");
})

