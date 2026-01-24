//现代枪械需要单独的机匣零件
//历史枪械统一使用一种机匣零件
//每种口径需要单独的枪管零件，并且需要区分长短枪管
//每种弹药需要单独的弹匣零件
//无枪托，一个剥皮木的轻型枪托，两个剥皮木的重型枪托
//无护木，一个剥皮木的轻型护木，两个剥皮木的重型护木
//无机械瞄具，一个铁粒的轻型机械瞄具，两个铁粒的重型机械瞄具
//全自动武器需要至少一个精密构件

//安山合金'create:andesite_alloy'
//铜板'create:copper_sheet'
//铜锭'minecraft:copper_ingot'
//铜粒'create:copper_nugget'
//铁板'create:iron_sheet'
//充电铁板'create_new_age:overcharged_iron_sheet'
//铁锭'minecraft:iron_ingot'
//充电铁锭'create_new_age:overcharged_iron'
//铁粒'minecraft:iron_nugget'
//锌锭'create:zinc_ingot'
//锌粒'create:zinc_nugget'
//黄铜板'create:brass_sheet'
//黄铜锭'create:brass_ingot'
//黄铜粒'create:brass_nugget'
//金板'create:golden_sheet'
//充电金板'create_new_age:overcharged_gold'
//金锭//充电金锭'create_new_age:overcharged_gold'
//金粒'minecraft:gold_nugget'
//钻石'minecraft:diamond'
//充电钻石'create_new_age:overcharged_diamond'
//下界合金碎片'minecraft:netherite_scrap'
//下界合金锭'minecraft:netherite_ingot'
//剥皮木'kubejs:stripped_wood'
//木棍'minecraft:stick'
//燧石'minecraft:flint'
//皮革'minecraft:leather'

//木片'kubejs:wood_chip'
//避雷针'minecraft:lightning_rod'
//T型铁零件'kubejs:iron_part_t'
//L型铁零件'kubejs:iron_part_l'
//连杆铁零件'kubejs:iron_part_link'
//铁弹簧'kubejs:iron_spring'
//铁杆'kubejs:iron_rod'
//铁管'kubejs:iron_board_sword'
//小铁片'kubejs:iron_sheet_small'
//精密构件'create:precision_mechanism'


ServerEvents.recipes(event => {
    const create = event.recipes.create//创建一个快捷方式来使用机械动力（Create）的配方方法
    const vi = event.recipes.vintageimprovements//创建一个快捷方式来使用经典改进(vintageimprovements）的配方方法
    create.cutting(//铁板切出小铁板
        Item.of("kubejs:iron_sheet_small", 2),
        "create:iron_sheet"
    )

    vi.curving("kubejs:iron_rod","minecraft:iron_ingot").mode(3)


    vi.curving(
        'kubejs:rough_casing',  // 输出物品
        'minecraft:iron_ingot'  // 输入物品
    ).mode(4)   // 头物品: V形弯曲机头
        .headDamage(50);    // 每处理一次扣 50 耐久





    create.mechanical_crafting('geckojs:m1911_receiver', [
        'L    ',
        'GNZCC',
        ' M   ',
        'C    '
    ], {
        L: 'kubejs:iron_part_l',//L型铁零件
        C: 'kubejs:iron_sheet_small',//小铁片
        G: 'kubejs:iron_part_link',//连杆铁零件
        N: 'kubejs:iron_spring',//铁弹簧
        Z: 'minecraft:lightning_rod',//避雷针
        M: 'kubejs:wood_chip'//木片（木棍占位）
    })


})
