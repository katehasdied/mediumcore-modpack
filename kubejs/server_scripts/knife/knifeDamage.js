function applyKnifeDebuff(event, combo) {
    if (combo >= 3) {
        let effectLevel = Math.min(4,Math.max(0,Math.floor(Math.sqrt(0.75*(combo - 3)) - 0.25)));
        
        event.entity.potionEffects.add("kubejs:marked_for_death", 300/(1 + effectLevel/2), effectLevel, true, true);
    }
    event.server.runCommandSilent(`playsound minecraft:block.copper_grate.place player @a ${event.entity.x} ${event.entity.y} ${event.entity.z} 30 ${0.5 + Math.random()*0.33}`);
    event.server.runCommandSilent(`particle block minecraft:nether_wart_block ${event.entity.x} ${event.entity.y + 0.25} ${event.entity.z} 0.25 0.66 0.25 1 10 normal`);
}

EntityEvents.hurt(event => {
    let player = event.source.actual;
    let heldItem = player.getMainHandItem();
    let target = event.entity;
    let heldItemIsKnife = heldItem.hasTag("notreepunching:knives");
    let pData = player.persistentData;
    let positionString = `${target.x} ${target.y} ${target.z}`

    if (!event.source.actual.isPlayer() || !event.entity.alive) {
        return;
    }

    // in case I ever decide to cancel the damage and re-apply it
    if (pData.feedbackLoopPreventer) {
        pData.putBoolean("feedbackLoopPreventer", false);
        return;
    }

    // before knife applies marked for death
    // fourth hit gives the player hyperviolence and re-applies marked for death
    if (target.hasEffect("kubejs:marked_for_death")) {
        let effectLevel = target.getEffect("kubejs:marked_for_death").getAmplifier();
        if (heldItemIsKnife) {
            player.potionEffects.add("kubejs:hyperviolent", 200 + 40*effectLevel, effectLevel, true, true);
        } else if (event.getDamage() >= 3) {
            target.potionEffects.add("kubejs:bleeding", 100 + 40*effectLevel, effectLevel, true, true);
            target.removeEffect("kubejs:marked_for_death");
            event.server.runCommandSilent(`playsound minecraft:entity.player.attack.crit player @a ${positionString} 2 ${1.5 + Math.random()*0.5}`);
            event.server.runCommandSilent(`particle block minecraft:nether_wart_block ${positionString} 0.5 0.66 0.5 1 100 normal`);
        }
    }
    
    if (heldItemIsKnife) {
        const isComboValid = pData.knifeComboEntity == target.uuid;
        const isEffectiveHit = event.getDamage() >= 2.5;
        const isTimely = ((player.age - pData.knifeLastHitTime) < 3*20);
        
        // repeating the marked for death code because putting it in a function broke something
        if (isComboValid && isEffectiveHit) {
            pData.putDouble("knifeCombo", pData.knifeCombo + 1)
            pData.putLong("knifeLastHitTime", player.age);
            applyKnifeDebuff(event, pData.knifeCombo);
        } else if (isEffectiveHit && isTimely)  {
            pData.putDouble("knifeCombo", pData.knifeCombo + 0.34)
            pData.putLong("knifeLastHitTime", player.age);
            pData.putString("knifeComboEntity", target.uuid)
            applyKnifeDebuff(event, pData.knifeCombo);
        } else if (isEffectiveHit) {
            pData.putDouble("knifeCombo", 1);
            pData.putLong("knifeLastHitTime", player.age);
            pData.putString("knifeComboEntity", target.uuid)
        }
    } else {
        pData.putDouble("knifeCombo", 0);
    }
    
    // debug
    // event.server.tell(`${pData.knifeComboEntity} hit with a combo score of ${pData.knifeCombo}`);
})
