//现代枪械需要单独的机匣零件
//每种口径需要单独的枪管零件，并且由于部分同口径不同武器类型弹药需要区分长短枪管
//每种弹药需要单独的弹匣零件
//无枪托，一个剥皮木的轻型枪托，两个剥皮木的重型枪托，一个安山合金的轻型聚合物枪托，两个安山合金的重型聚合物枪托，安山合金（代替聚合物）
//无护木，一个剥皮木的轻型护木，两个剥皮木的重型护木，一个安山合金的轻型聚合物护木，两个安山合金的重型聚合物护木，安山合金（代替聚合物）
//无机械瞄具，一个铁粒的轻型机械瞄具，两个铁粒的重型机械瞄具
//全自动武器需要至少一个精密构件
StartupEvents.registry('item', event => {
    // event.create('Simple_receiver', 'basic')//历史枪械统一使用的简易机匣零件
    //暂时弃用(历史枪械统一机匣零件)，改为每种历史枪械单独机匣零件，方便后续区分不同武器型号

    /*---------------- 手枪机匣类分割线 ----------------*/
        event.create('deagle_receiver', 'basic')//.50沙漠之鹰、.357黄金沙漠之鹰、永恒.50Z型的机匣零件
        //用钢枪身-.50口径、金枪身-.357口径、金枪身-.50口径来确定最终生产枪械

        event.create('M1912_receiver', 'basic')//斯太尔M1912（8发半自动型）、斯太尔M1912/P16（16发全自动型）的机匣零件
        //全自动型合成配方需要额外添加一个精密构件

        event.create('M1911_receiver', 'basic')//柯尔特M1911手枪的机匣零件

        event.create('glock17_receiver', 'basic')//格洛克17手枪的机匣零件

        event.create('P320_receiver', 'basic')//P320手枪的机匣零件

        event.create('CZ75_receiver', 'basic')//CZ75自动手枪的机匣零件
        // 全自动，需要精密构件

        event.create('B93R_receiver', 'basic')//B93R冲锋手枪的机匣零件
        // 全自动，需要精密构件

    /*---------------- 冲锋枪机匣类分割线 ----------------*/
        event.create('UMP45_receiver', 'basic')//UMP45冲锋枪的机匣零件
        // 全自动，需要精密构件

        event.create('MP5A5_receiver', 'basic')//MP5A5冲锋枪的机匣零件
        // 全自动，需要精密构件

        event.create('UZI_receiver', 'basic')//乌兹冲锋枪的机匣零件
        // 全自动，需要精密构件

        event.create('Victor_receiver', 'basic')//维克托冲锋枪的机匣零件
        // 全自动，需要精密构件

        event.create('P90_receiver', 'basic')//P90冲锋枪的机匣零件
        // 全自动，需要精密构件

         event.create('CSG19_receiver', 'basic')//CSG19冲锋枪的机匣零件
        // 全自动，需要精密构件

    /*---------------- 步枪机匣类分割线 ----------------*/
        event.create('m1860_receiver', 'basic')//亨利M1860步枪的机匣零件



    event.create('barrel_45acp', 'basic')//.45口径枪管
    event.create('barrel_9mm', 'basic')//9mm枪管







    event.create('metal_part_t')//金属零件
        .displayName('T型金属零件')

    event.create('ironboard_sword', 'sword')//铁管
        .displayName('铁管')
        .maxStackSize(1)
        .tier('iron')                 // 使用铁制工具属性（耐久 250，挖掘速度等）
        .attackDamageBaseline(1.0)   // 基础攻击伤害 = 3（和原版铁剑一致）
    // .attackDamageBonus(1.0)   // 额外伤害（可选，总伤害 = baseline + bonus）
    // .speed(-2.4)              // 攻击速度惩罚（原版剑默认值，通常不需要改）

event.create("iron_sheet_small")//注册小铁片
        .displayName("小铁片")
        .maxStackSize(64)

})