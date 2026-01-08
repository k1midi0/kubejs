// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event =>{
    event.remove({mod:"tacz"})//移除tacz的所有原版配方
    event.remove({ mod:"qkl"})//移除巧克力人枪包的所有配方
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
    )//工作台红石铁板木棍合成标靶
    event.shapeless("tacz:target_minecart",["tacz:target","minecraft:minecart"])//工作台标靶和矿车无序合成
    event.stonecutting("tacz:statue",Item.of("minecraft:smooth_stone",2))//两个平滑石切割出一个石像
    //标靶和和石像




    create.compacting(Item.of('tacz:ammo_box', '{Level:0}'),
        Item.of("create:iron_sheet",2))
    create.compacting(Item.of('tacz:ammo_box', '{Level:1}'),
        [Item.of("create:iron_sheet",2),Item.of('create_new_age:overcharged_golden_sheet',2)])
    create.compacting(Item.of('tacz:ammo_box', '{Level:2}'),
        [Item.of("create:iron_sheet",2),Item.of('create_new_age:overcharged_golden_sheet',2),Item.of("create_new_age:overcharged_diamond",2)])

    //弹药箱合成路径
    //Level【0】铁弹药箱:2铁板
    //Level【1】金弹药箱:2铁板+2充电金板
    //Level【2】钻石弹药箱:2铁板+2充电金板+2充电钻石


    const makestring = (input,int) => {        //输入材料，煮出线的数量
        create.mixing(
            Item.of("minecraft:string",int ),
            [
                input
            ]
        ).heated()
        
    }
    //树叶类煮线
    makestring(Ingredient.of('#minecraft:leaves').withCount(4),1)
    //纸浆原料类煮线
    makestring('#create:pulpifiable',1)






    // event.custom({//原版配方格式
    //     "type":"create:sequenced_assembly",//合成方式：序列化组装
    //     "ingredient":{"type":"forge:partial_nbt","item":"sentrymechanicalarm:unfinished_ammo","nbt":{"AmmoId":"tacz:762x54"}},//输入物：未完成弹药（部分nbt匹配，匹配AmmoId为tacz:762x54的）tacz用nbt区分弹药类型，而不是用不同的物品ID，物品id只用来表示弹药这个大类
    //     "loops":1,"results":[{"count":9,"item":"tacz:ammo","nbt":{"AmmoId":"tacz:762x54"}}],//输出物：9发tacz:762x54弹药
    //     "sequence":[{"type":"create:deploying","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"},{"item":"create:copper_sheet"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]},{"type":"create:deploying","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"},{"item":"create:copper_sheet"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]},{"type":"create:deploying","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"},{"item":"minecraft:gunpowder"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]},{"type":"create:pressing","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]}],"transitionalItem":{"item":"sentrymechanicalarm:unfinished_ammo"}
    //     //序列化组装过程：使用未完成弹药作为过渡物，经过4个步骤（2次放置铜板，1次放置火药，1次压制）最终产出9发tacz:762x54弹药
    // })
    ////以此为参照添加7.5x52弹药的配方
    event.custom({
        "type":"create:sequenced_assembly",
        "ingredient":{"type":"forge:partial_nbt","item":"sentrymechanicalarm:unfinished_ammo","nbt":{"AmmoId":"qkl:rb10"}},
        "loops":1,"results":[{"count":9,"item":"tacz:ammo","nbt":{"AmmoId":"qkl:rb10"}}],
        "sequence":[{"type":"create:deploying","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"},{"item":"create:copper_sheet"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]},{"type":"create:deploying","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"},{"item":"create:copper_sheet"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]},{"type":"create:deploying","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"},{"item":"minecraft:gunpowder"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]},{"type":"create:pressing","ingredients":[{"item":"sentrymechanicalarm:unfinished_ammo"}],"results":[{"item":"sentrymechanicalarm:unfinished_ammo"}]}],"transitionalItem":{"item":"sentrymechanicalarm:unfinished_ammo"}
    })//几乎完全复制上面的配方，只是把AmmoId改成了qkl:rb10，也就是7.5x52弹药的nbt标识

    // event.custom({
    //     "type":"create:deploying",
    //     "ingredients":[{"item":"create:copper_sheet"},{"type":"forge:partial_nbt","item":"tacz:ammo","nbt":{"AmmoId":"tacz:762x54"}}],
    //     "results":[{"item":"sentrymechanicalarm:unfinished_ammo","nbt":{"AmmoId":"tacz:762x54"}}]
    // })//类似的，这是7.62x54弹药的待加工蛋壳合成配方
    // //模仿上面的，添加7.5x52弹药的待加工蛋壳配方
    event.custom({
        "type":"create:deploying",
        "ingredients":[{"item":"create:copper_sheet"},{"type":"forge:partial_nbt","item":"tacz:ammo","nbt":{"AmmoId":"qkl:rb10"}}],
        "results":[{"item":"sentrymechanicalarm:unfinished_ammo","nbt":{"AmmoId":"qkl:rb10"}}]
    })//7.5x52弹药的待加工蛋壳合成配方
    //同样几乎完全复制上面的配方，只是把AmmoId改成了qkl:rb10

    create.sequenced_assembly(//16.5mm弹药的序列组装配方，nbty标识为qkl:16mm
        Item.of('tacz:ammo', '{AmmoId:"qkl:16mm"}'),//输出16.5mm弹药
        "create:cardboard",//输入纸板
        [create.deploying("create:cardboard",["create:cardboard","minecraft:gunpowder"]),//神之手依次组装，火药，铁粒
        create.deploying("create:cardboard",["create:cardboard","minecraft:iron_nugget"])]
    ).transitionalItem("create:cardboard").loops(1)//中间物为纸板，循环1次

    event.shapeless(//用shapeless添加16.5mm弹药的工作台无序合成配方
        Item.of('tacz:ammo', '{AmmoId:"qkl:16mm"}'),//输出16.5mm弹药
        [//输入材料：铁粒，火药，纸板
            Item.of("minecraft:iron_nugget"),
            Item.of("minecraft:gunpowder"),
            Item.of("create:cardboard")
        ]
    ).id("kjsm:tacz/ammo_16mm_manual_only")//给配方id加上muanual_only标识，表示这个配方只能手动合成


})