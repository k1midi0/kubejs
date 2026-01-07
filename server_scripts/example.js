// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event =>{
    event.remove({mod:"tacz"})
    event.remove({ mod:"qkl"})
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
    )//红石铁板木棍合成标靶
    event.shapeless("tacz:target_minecart",["tacz:target","minecraft:minecart"])//标靶和矿车合成
    event.stonecutting("tacz:statue",Item.of("minecraft:smooth_stone",2))//两个平滑石切割一个
    //标靶和和石像




    create.compacting(Item.of('tacz:ammo_box', '{Level:0}'),
        Item.of("create:iron_sheet",2))
    create.compacting(Item.of('tacz:ammo_box', '{Level:1}'),
        [Item.of("create:iron_sheet",2),Item.of('create_new_age:overcharged_golden_sheet',2)])
    create.compacting(Item.of('tacz:ammo_box', '{Level:2}'),
        [Item.of("create:iron_sheet",2),Item.of('create_new_age:overcharged_golden_sheet',2),Item.of("create_new_age:overcharged_diamond",2)])

    //弹药箱合成路径
    //Level【0】:2铁板
    //Level【1】:2铁板+2充电金板
    //Level【2】:2铁板+2充电金板+2充电钻石


    const makestring = (input,int) => {        //输入材料，煮出线的数量
        create.mixing(
            Item.of("minecraft:string",int ),
            [
                input
            ]
        ).heated()
        
    }
    //树叶煮线
    makestring(Ingredient.of('#minecraft:leaves').withCount(4),1)
    //纸浆原料煮线
    makestring('#create:pulpifiable',1)

})