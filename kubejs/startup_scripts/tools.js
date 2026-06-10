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

    // add hammers?
})