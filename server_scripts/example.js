// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event =>{
    event.remove({mod:"tacz"})
    const create = event.recipes.create
    event.shaped(
        "tacz:target",
        [
            " r ",
            " t ",
            " g "
        ],
        {
            r: "minecraft:redstone",
            t: "create:iron_sheet",
            g: "minecraft:stick"
        }
    )
    create.compacting(Item.of('tacz:ammo_box', '{Level:0}'),
        Item.of("create:iron_sheet",2))
    create.compacting(Item.of('tacz:ammo_box', '{Level:1}'),
        [Item.of("create:iron_sheet",2),Item.of('create_new_age:overcharged_golden_sheet',2)])
    create.compacting(Item.of('tacz:ammo_box', '{Level:2}'),
        [Item.of("create:iron_sheet",2),Item.of('create_new_age:overcharged_golden_sheet',2),Item.of("create_new_age:overcharged_diamond",2)])

        
})

