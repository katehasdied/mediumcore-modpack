let mobs = [
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

mobs.forEach((mob) => {EntityEvents.death(mob, event => {
    let roll = Math.random()*100;

    if (roll < 7.5) {
        event.entity.block.popItem(Item.of("kubejs:sinew"));
    }
})})