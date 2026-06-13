EntityEvents.hurt(event => {
    let player = event.source.actual;
    let heldItem = player.getMainHandItem();
    let target = event.entity;

    // checking cooldown because I cancel the damage event and attack again, which causes a feedback loop
    // this is because the player is used as the damage source. this checks if the player is the damage source
    if (!event.source.actual.isPlayer() || !event.entity.alive || player.cooldowns.isOnCooldown(heldItem.id)) {
        return;
    }

    if (heldItem.hasTag("kubejs:hammers")) {
        event.server.tell(`${event.getDamage()}`);
        if (player.fallDistance > 4 && !player.cooldowns.isOnCooldown(heldItem.id)) {
            let totalDamage = event.getDamage() + player.fallDistance*0.5;
            event.server.tell(`${totalDamage}`);

            player.addItemCooldown(heldItem.id, 50);
            target.attack(target.damageSources().playerAttack(player), totalDamage);
            player.fallDistance = 0;
            
            event.server.runCommandSilent(`playsound minecraft:entity.copper_golem.death.oxidized player @a ${target.x} ${target.y} ${target.z} 1 ${Math.random()}`);
            event.server.runCommandSilent(`playsound minecraft:entity.generic.big_fall player @a ${target.x} ${target.y} ${target.z} 1 ${Math.random()}`);
            event.server.runCommandSilent(`playsound minecraft:entity.zombie.destroy_egg player @a ${target.x} ${target.y} ${target.z} 1.5 ${Math.random()}`);
            event.server.runCommandSilent(`playsound minecraft:block.grass.break player @a ${target.x} ${target.y} ${target.z} 1 ${Math.random()/1.5}`);
            
            event.cancel();
        }
    }
})
