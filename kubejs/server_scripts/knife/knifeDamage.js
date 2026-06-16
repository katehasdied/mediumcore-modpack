EntityEvents.hurt(event => {
    let player = event.source.actual;
    let heldItem = player.getMainHandItem();
    let target = event.entity;
    let heldItemIsKnife = heldItem.hasTag("notreepunching:knives");
    let pData = player.persistentData;

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
            player.potionEffects.add("kubejs:hyperviolent", 120 + 60*effectLevel, effectLevel, true, true);
        } else if (event.getDamage() >= 3) {
            target.potionEffects.add("kubejs:bleeding", 100 + 40*effectLevel, effectLevel, true, true);
            target.removeEffect("kubejs:marked_for_death");
        }
    }

    if (heldItemIsKnife) {
        if (pData.knifeComboEntity == target.uuid && event.getDamage() >= 2.5) {
            pData.putDouble("knifeCombo", pData.knifeCombo + 1)
            if (pData.knifeCombo >= 3) {
                let effectLevel = Math.max(0,Math.floor(Math.sqrt(0.75*(pData.knifeCombo - 3)) - 0.25));
                target.potionEffects.add("kubejs:marked_for_death", 600/(1 + effectLevel/2), effectLevel, true, true);
            }
        } else {
            pData.putString("knifeComboEntity", target.uuid)
            pData.putDouble("knifeCombo", 1)
        } 
    } else {
        pData.putDouble("knifeCombo", 0);
    }
    // debug
    // event.server.tell(`${pData.knifeComboEntity} hit with knife ${pData.knifeCombo} times`);
})
