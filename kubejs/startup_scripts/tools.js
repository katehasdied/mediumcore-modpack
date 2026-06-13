// a copper tier already exists but i needed a way to make kubejs copper tools repairable with copper
ItemEvents.toolTierRegistry(event => {
  event.add('copper', tier => {
    tier.uses = 180
    tier.speed = 5
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 13
    tier.repairIngredient = 'minecraft:copper_ingot'
  })
})

StartupEvents.registry("item", event => {
    event.create("copper_saw", "axe")
    .displayName("Copper Saw")
    .tier("copper")
    .tag("notreepunching:saws")
    .speedBaseline(-3.2)
    .attackDamageBonus(-3);

    // hammers should be given speed 0 because they shouldn't be able to break blocks
    event.create("copper_hammer", "axe")
    .displayName("Copper Hammer")
    .tier("copper")
    .tag("kubejs:hammers")
    .speedBaseline(-2.9)
    .attackDamageBonus(-1.5)
    .speed(0);

    event.create("iron_hammer", "axe")
    .displayName("Iron Hammer")
    .tier("iron")
    .tag("kubejs:hammers")
    .speedBaseline(-2.9)
    .attackDamageBonus(-0.5)
    .speed(0);

    event.create("diamond_hammer", "axe")
    .displayName("Diamond Hammer")
    .tier("diamond")
    .tag("kubejs:hammers")
    .speedBaseline(-2.9)
    .attackDamageBonus(0.5)
    .speed(0);

    event.create("netherite_hammer", "axe")
    .displayName("Netherite Hammer")
    .tier("diamond")
    .tag("kubejs:hammers")
    .speedBaseline(-2.9)
    .attackDamageBonus(1.5)
    .speed(0);
})