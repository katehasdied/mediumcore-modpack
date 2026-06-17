function breakAndReplace(event, block) {
		let item = event.player.mainHandItem;

		if ( item.enchantments.containsKey("minecraft:silk_touch") ) {
			return;
		}

		item.hurtAndBreak(1, event.player, (p) => {p.level.broadcastEntityEvent(p, 47)});

		event.block.set(block);
		event.cancel();
}

function replaceAndDropEvent(block, replacement) {
	BlockEvents.broken(block, event => {
		if (event.player.isCreative()) {
		 return;
		}

		let face = event.player.pick(5, 1, false).direction;
	
		let item = event.player.mainHandItem;
		let loot = event.block.getDrops(event.player, item);
		if ( !item.enchantments.containsKey("minecraft:silk_touch") ) {
			loot.forEach((individualItem) => {
				event.block.popItemFromFace(individualItem, face);
			});
		}
		
		breakAndReplace(event, replacement);
	})
}

function replaceEvent(block, replacement) {
	BlockEvents.broken(block, event => {
		if (event.player.isCreative()) {
		 return;
		}
		breakAndReplace(event, replacement);
	})
}
 
replaceAndDropEvent("minecraft:iron_ore","minecraft:stone");
replaceAndDropEvent("minecraft:copper_ore","minecraft:stone");
replaceAndDropEvent("minecraft:redstone_ore","minecraft:stone");
replaceAndDropEvent("minecraft:coal_ore","minecraft:stone");
replaceAndDropEvent("minecraft:lapis_ore","minecraft:stone");
replaceAndDropEvent("minecraft:gold_ore","minecraft:stone");
replaceAndDropEvent("minecraft:diamond_ore","minecraft:stone");
replaceAndDropEvent("minecraft:deepslate_iron_ore","minecraft:deepslate");
replaceAndDropEvent("minecraft:deepslate_copper_ore","minecraft:deepslate");
replaceAndDropEvent("minecraft:deepslate_redstone_ore","minecraft:deepslate");
replaceAndDropEvent("minecraft:deepslate_coal_ore","minecraft:deepslate");
replaceAndDropEvent("minecraft:deepslate_lapis_ore","minecraft:deepslate");
replaceAndDropEvent("minecraft:deepslate_gold_ore","minecraft:deepslate");
replaceAndDropEvent("minecraft:deepslate_diamond_ore","minecraft:deepslate");

replaceAndDropEvent("minecraft:nether_gold_ore","minecraft:netherrack");
replaceAndDropEvent("minecraft:nether_quartz_ore","minecraft:netherrack");

replaceEvent("minecraft:stone", "minecraft:cobblestone");
replaceEvent("minecraft:deepslate", "minecraft:cobbled_deepslate");
replaceEvent("minecraft:diorite", "notreepunching:diorite_cobblestone");
replaceEvent("minecraft:granite", "notreepunching:granite_cobblestone");
replaceEvent("minecraft:andesite", "notreepunching:andesite_cobblestone");
replaceEvent("minecraft:andesite", "notreepunching:andesite_cobblestone");

replaceEvent("minecraft:oak_log", "minecraft:stripped_oak_log");
replaceEvent("minecraft:birch_log", "minecraft:stripped_birch_log");
replaceEvent("minecraft:spruce_log", "minecraft:stripped_spruce_log");
replaceEvent("minecraft:jungle_log", "minecraft:stripped_jungle_log");
replaceEvent("minecraft:acacia_log", "minecraft:stripped_acacia_log");
replaceEvent("minecraft:cherry_log", "minecraft:stripped_cherry_log");
replaceEvent("minecraft:dark_oak_log", "minecraft:stripped_dark_oak_log");
replaceEvent("minecraft:mangrove_log", "minecraft:stripped_mangrove_log");