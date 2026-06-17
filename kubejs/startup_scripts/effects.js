StartupEvents.registry("mob_effect", event => {
    event.create("marked_for_death")
        .harmful();

    event.create("bleeding")
        .harmful()
        .modifyAttribute(
            "minecraft:generic.movement_speed", 
            "059bbc03-cfcb-4ba0-9fd9-66150de2d1b7", 
            -0.15, 
            "multiply_total"
        )
        .effectTick((entity, level) => {
            if (entity.age % 20 == 0) {
                entity.attack(level + 1);
            }
        });

    // THERE'S GARBAGE IN MY VEINS
    // AND IT SPREADS INTO THE GARBAGE IN MY BRAIN
    // WHEN IT KILLS ME THROW ME OUT
    // LET ME FILL THE LONELY GROUND
    // GARBAGE TILL IT SWALLOWS ME DOWN
    // https://ihateomerta.bandcamp.com/album/hyperviolence
    event.create("hyperviolent")
        .modifyAttribute(
            "minecraft:generic.attack_damage",
            "f89a7eaf-3092-46cd-8ee3-d43e4b4ac96b",
            0.25,
            "multiply_total"
        )
        .modifyAttribute(
            "minecraft:generic.attack_speed",
            "62530ed6-b10c-46e6-893f-a7cd9daafc32",
            0.1,
            "multiply_total"
        )
        .beneficial();
})