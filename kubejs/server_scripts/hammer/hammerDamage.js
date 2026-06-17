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
        if (player.fallDistance > 1.5 && !player.cooldowns.isOnCooldown(heldItem.id)) {
            let totalDamage = event.getDamage()*(1.2+Math.sqrt(player.fallDistance/12));

            player.addItemCooldown(heldItem.id, 50);
            target.attack(target.damageSources().playerAttack(player), totalDamage);
            player.fallDistance = 0;
            
            let positionString = `${target.x} ${target.y} ${target.z}`

            event.server.runCommandSilent(`playsound minecraft:entity.copper_golem.death.oxidized player @a ${positionString} 1 ${Math.random()}`);
            event.server.runCommandSilent(`playsound minecraft:entity.generic.big_fall player @a ${positionString} 1 ${Math.random()}`);
            event.server.runCommandSilent(`playsound minecraft:entity.zombie.destroy_egg player @a ${positionString} 1.5 ${Math.random()}`);
            event.server.runCommandSilent(`playsound minecraft:block.grass.break player @a ${positionString} 1 ${Math.random()/1.5}`);
            event.server.runCommandSilent(`playsound minecraft:entity.zombie_villager.cure player @a ${positionString} 0.15 ${1.5+Math.random()*0.5}`);

            let block = target.level.getBlock(target.position().add(0, -1, 0));
            event.server.runCommandSilent(`particle block ${block} ${positionString} 1.5 0.66 1.5 1 10 normal`);

            target.setMotionY(target.getMotionY() + 0.25);

            event.cancel();
        }
    }
})
