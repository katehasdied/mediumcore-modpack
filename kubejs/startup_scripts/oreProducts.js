StartupEvents.registry("item", event => {
    event.create("iron_chunk")
    .displayName("Iron Chunk");

    event.create("gold_chunk")
    .displayName("Gold Chunk");

    event.create("copper_chunk")
    .displayName("Copper Chunk");

    event.create("raw_diamond")
    .displayName("Raw Diamond");

    event.create("pure_diamond")
    .displayName("Pure Diamond");

    event.create("cleansed_diamond")
    .displayName("Cleansed Diamond");

    event.create("iron_plate")
    .displayName("Iron Plate")
    .tag("c:plates");

    event.create("copper_plate")
    .displayName("Copper Plate")
    .tag("c:plates");

    event.create("gold_plate")
    .displayName("Gold Plate")
    .tag("c:plates");
})