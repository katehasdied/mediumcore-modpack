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
            player.potionEffects.add("kubejs:hyperviolent", 200 + 40*effectLevel, effectLevel, true, true);
        } else if (event.getDamage() >= 3) {
            target.potionEffects.add("kubejs:bleeding", 100 + 40*effectLevel, effectLevel, true, true);
            target.removeEffect("kubejs:marked_for_death");
        }
    }

    
    if (heldItemIsKnife) {
        const isComboValid = pData.knifeComboEntity == target.uuid;
        const isEffectiveHit = event.getDamage() >= 2.5;
        const isTimely = ((Date.now() - pData.knifeLastHitTime) < 3*1000);
        
        // repeating the marked for death code because putting it in a function broke something
        if (isComboValid && isEffectiveHit) {
            pData.putDouble("knifeCombo", pData.knifeCombo + 1)
            pData.putLong("knifeLastHitTime", Date.now());
            if (pData.knifeCombo >= 3) {
                let effectLevel = Math.max(0,Math.floor(Math.sqrt(0.75*(pData.knifeCombo - 3)) - 0.25));
                target.potionEffects.add("kubejs:marked_for_death", 300/(1 + effectLevel/2), effectLevel, true, true);
            }
        } else if (isEffectiveHit && isTimely)  {
            pData.putDouble("knifeCombo", pData.knifeCombo + 0.34)
            pData.putLong("knifeLastHitTime", Date.now());
            pData.putString("knifeComboEntity", target.uuid)
            if (pData.knifeCombo >= 3) {
                let effectLevel = Math.max(0,Math.floor(Math.sqrt(0.75*(pData.knifeCombo - 3)) - 0.25));
                target.potionEffects.add("kubejs:marked_for_death", 300/(1 + effectLevel/2), effectLevel, true, true);
            }
        } else if (isEffectiveHit) {
            pData.putDouble("knifeCombo", 1);
            pData.putLong("knifeLastHitTime", Date.now());
            pData.putString("knifeComboEntity", target.uuid)
        }
    } else {
        pData.putDouble("knifeCombo", 0);
    }
    
    // debug
    event.server.tell(`${pData.knifeComboEntity} hit with a combo score of ${pData.knifeCombo}`);
})
