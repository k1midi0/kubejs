//现代枪械需要单独的机匣零件
//历史枪械统一使用一种机匣零件
//每种口径需要单独的枪管零件，并且需要区分长短枪管
//每种弹药需要单独的弹匣零件
//无枪托，一个剥皮木的轻型枪托，两个剥皮木的重型枪托
//无护木，一个剥皮木的轻型护木，两个剥皮木的重型护木
//无机械瞄具，一个铁粒的轻型机械瞄具，两个铁粒的重型机械瞄具
//全自动武器需要至少一个精密构件

//剥皮木//木片//木棍
//T型铁零件//L型铁零件//连杆铁零件//铁弹簧//铁杆//铁管//小铁片
//精密构件//安山合金
//铜板//铜锭//铜粒
//铁板//充电铁板//铁锭//充电铁锭//铁粒
//锌锭//锌粒
//黄铜板//黄铜锭//黄铜粒
//金板//充电金板//金锭//充电金锭//金粒
//钻石//充电钻石
ServerEvents.recipes(event => {
    const create = event.recipes.create//创建一个快捷方式来使用Create的配方方法

    create.cutting(//铁板切出小铁板
        Item.of("kubejs:iron_sheet_small", 2),
        "create:iron_sheet"
    )



    create.mechanical_crafting('kubejs:m1911_receiver', [
        'L    ',
        'GNZCC',
        ' M   ',
        'C    ',
        '     '
    ], {
        L: 'kubejs:iron_part_l',//L型铁零件
        C: 'kubejs:iron_sheet_small',//小铁片
        G: 'kubejs:iron_part_link',//连杆铁零件
        N: 'kubejs:iron_spring',//铁弹簧
        Z: 'minecraft:lightning_rod',//避雷针
        M: 'minecraft:stick'//木片（木棍占位）
    })


})
