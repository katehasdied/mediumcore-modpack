ServerEvents.tags("block", event => {
    event.remove("minecraft:needs_stone_tool", "minecraft:copper_ore");
    event.remove("minecraft:needs_stone_tool", "minecraft:deepslate_copper_ore");
})

ServerEvents.tags("item", event => {
    event.add("notreepunching:weak_saws", "minecraft:copper_axe");

    event.add("c:starts_fires", "notreepunching:fire_starter");
    event.add("c:starts_fires", "minecraft:flint_and_steel");

    event.add("c:nuggets", "minecraft:copper_nugget");

    event.add("c:chains", "minecraft:chain");

    event.add("minecraft:pickaxes", "notreepunching:flint_pickaxe");

    event.add("toolbar_sounds:tools", "kubejs:hammers");
    event.add("toolbar_sounds:tools", "notreepunching:saws");
    event.add("toolbar_sounds:tools", "notreepunching:knives");
    event.add("toolbar_sounds:swords", "notreepunching:knives");
})