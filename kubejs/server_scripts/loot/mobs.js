LootJS.modifiers((event) => {
    let sinewAnimals = [
        "minecraft:pig",
        "minecraft:cow",
        "minecraft:chicken",
        "minecraft:donkey",
        "minecraft:horse",
        "minecraft:mule",
        "minecraft:fox",
        "minecraft:sheep",
        "minecraft:llama",
        "minecraft:mooshroom",
        "minecraft:panda",
        "minecraft:rabbit",
        "minecraft:wolf",
        "minecraft:pig"
    ]

    event.addEntityLootModifier(sinewAnimals)
    .randomChance(0.13)
    .addLoot("kubejs:sinew")
    .applyLootingBonus([0.25, 1]);
})

