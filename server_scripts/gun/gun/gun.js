    ServerEvents.recipes(event => {
    event.shaped(//铁管，木头，打火石合成燧发枪
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"qkl:fk15",HasBulletInBarrel:1b}'),
        [
            "  G",
            "DGB",
            "MM "
        ],
        {
            G: "kubejs:ironboard_sword",//铁管
            D: "minecraft:flint_and_steel",//打火石
            B: "minecraft:stick",//木棍
            M: "minecraft:stripped_oak_wood"//木头
        }
    )

    create.sequenced_assembly(//CLF10-中折式霰弹枪配方（中间产物用的是铁锭，后面有专门的枪械中间产物可以替换）
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"qkl:clf10",HasBulletInBarrel:1b}'),
        "minecraft:iron_ingot",//输入铁锭
        [
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","minecraft:iron_ingot"]),
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","minecraft:iron_ingot"]),//组装两个铁锭作为机匣基材
        create.cutting("minecraft:iron_ingot","minecraft:iron_ingot"),//切割机匣基材
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","create:andesite_alloy"]),
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","create:andesite_alloy"]),//组装两个安山合金作为机匣粗胚
        create.cutting("minecraft:iron_ingot","minecraft:iron_ingot"),//切割机匣粗胚
        create.pressing("minecraft:iron_ingot","minecraft:iron_ingot"),//锻压为机匣
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","minecraft:lightning_rod"]),//组装撞针
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","create:cardboard_sword"]),
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","kubejs:ironboard_sword"]),//组装铁管作为枪管
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","#kubejs:stripped_wood"]),
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","#kubejs:stripped_wood"]),
        create.deploying("minecraft:iron_ingot",["minecraft:iron_ingot","#kubejs:stripped_wood"]),//组装去皮木材
        create.cutting("minecraft:iron_ingot","minecraft:iron_ingot"),//切割去皮木材作为枪托、护木和握把
        ]
    ).transitionalItem("minecraft:iron_ingot").loops(1)

        create.sequenced_assembly(//刺刀配方
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"SEMI",GunId:"qkl:m1905",HasBulletInBarrel:1b}'),
        "create:iron_sheet",//输入铁板
        [create.deploying("create:iron_sheet",["create:iron_sheet","create:andesite_alloy"]),
        create.deploying("create:iron_sheet",["create:iron_sheet","create:andesite_alloy"]),
        create.pressing("create:iron_sheet","create:iron_sheet"),
        create.deploying("create:iron_sheet",["create:iron_sheet","minecraft:stripped_oak_wood"]),
        create.cutting("create:iron_sheet","create:iron_sheet")]//"神之手"依次组装安山合金，锻压，去皮橡木
    ).transitionalItem("create:iron_sheet").loops(1)//中间物为铁板，循环1次




})