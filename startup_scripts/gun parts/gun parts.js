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
    event.create('m1911_receiver', 'basic')//柯尔特M1911手枪的机匣零件
        .displayName('柯尔特M1911机匣')

    event.create('m1912_receiver', 'basic')//斯太尔M1912（8发半自动型）、斯太尔M1912/P16（16发全自动型）的机匣零件
        .displayName('斯太尔M1912机匣')

    event.create('m1912_auto_receiver', 'basic')//斯太尔M1912/P16（16发全自动型）的机匣零件
        .displayName('斯太尔M1912/P16机匣')
    //全自动型合成配方需要额外添加一个精密构件

    event.create('p320_receiver', 'basic')//P320手枪的机匣零件
        .displayName('P320机匣')

    event.create('glock17_receiver', 'basic')//格洛克17手枪的机匣零件
        .displayName('格洛克17机匣')

    event.create('cz75_receiver', 'basic')//CZ75自动手枪的机匣零件
        .displayName('CZ75机匣')
    // 全自动，需要精密构件

    event.create('b93r_receiver', 'basic')//B93R冲锋手枪的机匣零件
        .displayName('B93R机匣')
    // 全自动，需要精密构件

    event.create('deagle_receiver', 'basic')//.50沙漠之鹰、.357黄金沙漠之鹰、永恒.50Z型的机匣零件
        .displayName('沙漠之鹰机匣')
    //用钢枪身-.50口径、金枪身-.357口径、金枪身-.50口径来确定最终生产枪械

    /*---------------- 冲锋枪机匣类分割线 ----------------*/
    event.create('csg19_receiver', 'basic')//CSG19冲锋枪的机匣零件
        .displayName('CSG19机匣')
    // 全自动，需要精密构件

    event.create('uzi_receiver', 'basic')//乌兹冲锋枪的机匣零件
        .displayName('乌兹机匣')
    // 全自动，需要精密构件

    event.create('mp5a5_receiver', 'basic')//MP5A5冲锋枪的机匣零件
        .displayName('MP5A5机匣')
    // 全自动，需要精密构件

    event.create('ump45_receiver', 'basic')//UMP45冲锋枪的机匣零件
        .displayName('UMP45机匣')
    // 全自动，需要精密构件

    event.create('victor_receiver', 'basic')//维克托冲锋枪的机匣零件
        .displayName('维克托机匣')
    // 全自动，需要精密构件

    event.create('p90_receiver', 'basic')//P90冲锋枪的机匣零件
        .displayName('P90机匣')
    // 全自动，需要精密构件

    /*---------------- 步枪机匣类分割线 ----------------*/
    event.create('m1860_receiver', 'basic')        // 亨利M1860的机匣零件
        .displayName('亨利M1860机匣')

    event.create('m1865_receiver', 'basic')      // 斯宾塞M1865/1871的机匣零件
        .displayName('斯宾塞M1865/1871机匣')

    event.create('cbr11_93_receiver', 'basic')     // CBR11/93 mod.1901栓动步枪的机匣零件
        .displayName('CBR11/93机匣')

    event.create('cbr9_receiver', 'basic')         // CBR9 mod.1875单发步枪的机匣零件
        .displayName('CBR9机匣')

    event.create('hanyang88_receiver', 'basic')    // 汉阳造88式步枪的机匣零件
        .displayName('汉阳造88式机匣')

    event.create('m1903a3_receiver', 'basic')      // 斯普林菲尔德M1903A3的机匣零件
        .displayName('斯普林菲尔德M1903A3机匣')

    event.create('c11_receiver', 'basic')          // C11民用狩猎步枪的机匣零件
        .displayName('C11机匣')

    event.create('ma90_receiver', 'basic')         // MA90(C)民用半自动步枪的机匣零件
        .displayName('MA90(C)机匣')

    event.create('mu73_receiver', 'basic')         // MU73(MA) mod.1942半自动步枪的机匣零件
        .displayName('MU73(MA)机匣')

    event.create('cbr11_receiver', 'basic')    // CBR11/935 mod.1920卡宾枪的机匣零件
        .displayName('CBR11/935机匣')

    event.create('mua73_receiver', 'basic')        // MUA73(MA) mod.1944自动步枪的机匣零件
        .displayName('MUA73(MA)机匣')
    // 全自动，需要精密构件

    event.create('sks_receiver', 'basic')          // SKS战术步枪的机匣零件
        .displayName('SKS机匣')

    event.create('fn_fal_receiver', 'basic')       // FN FAL战斗步枪的机匣零件
        .displayName('FN FAL机匣')
    // 全自动，需要精密构件

    event.create('g3_receiver', 'basic')           // G3战斗步枪的机匣零件
        .displayName('G3战斗步枪的机匣零件')
    // 全自动，需要精密构件

    event.create('m16a1_receiver', 'basic')        // M16A1制式步枪的机匣零件
        .displayName('M16A1机匣')
    // 全自动，需要精密构件

    event.create('m16a4_receiver', 'basic')        // M16A4制式步枪的机匣零件
        .displayName('M16A4机匣')
    // 全自动，需要精密构件

    event.create('akm_receiver', 'basic')          // AKM突击步枪的机匣零件
        .displayName('AKM机匣')
    // 全自动，需要精密构件

    event.create('type18_receiver', 'basic')       // 18-1式制式步枪的机匣零件
        .displayName('18-1式机匣')
    // 全自动，需要精密构件

    event.create('qbz95_receiver', 'basic')        // 95式“长弓”突击步枪的机匣零件
        .displayName('95式“长弓”机匣')
    // 全自动，需要精密构件

    event.create('aug_receiver', 'basic')          // AUG突击步枪的机匣零件
        .displayName('AUG机匣')
    // 全自动，需要精密构件

    event.create('g36k_receiver', 'basic')         // G36K突击步枪的机匣零件
        .displayName('G36K机匣')
    // 全自动，需要精密构件

    event.create('hk416a5_receiver', 'basic')      // HK-416A5突击步枪的机匣零件
        .displayName('HK-416A5机匣')
    // 全自动，需要精密构件

    event.create('m4a1_receiver', 'basic')         // M4A1卡宾枪的机匣零件
        .displayName('M4A1机匣')
    // 全自动，需要精密构件

    event.create('scar_l_receiver', 'basic')       // SCAR-L突击步枪的机匣零件
        .displayName('SCAR-L机匣')
    // 全自动，需要精密构件

    event.create('scar_h_receiver', 'basic')       // SCAR-H战斗步枪的机匣零件
        .displayName('SCAR-H机匣')
    // 全自动，需要精密构件

    event.create('qbu191_receiver', 'basic')       // 191式突击步枪的机匣零件
        .displayName('191式机匣')
    // 全自动，需要精密构件

    event.create('spr_15_receiver', 'basic')        // SPR-15 HB“射手座”反狙击步枪的机匣零件
        .displayName('SPR-15 HB“射手座”机匣')
    // 全自动，需要精密构件

    event.create('mk14_receiver', 'basic')         // MK14 EBR精确射手步枪的机匣零件
        .displayName('MK14 EBR机匣')
    // 全自动，需要精密构件

    /*---------------- 霰弹枪机匣类分割线 ----------------*/
    event.create('clf10_receiver', 'basic')//CLF10中折式霰弹枪的机匣零件
        .displayName('CLF10机匣')

    event.create('db2_receiver', 'basic')//DB-2杜林人霰弹枪的机匣零件
        .displayName('DB-2杜林人机匣')

    event.create('db4_receiver', 'basic')//DB-4乌萨斯霰弹枪的机匣零件
        .displayName('DB-4乌萨斯机匣')

    event.create('winchester1897_receiver', 'basic')//温切斯特M1897泵动霰弹枪的机匣零件
        .displayName('温切斯特M1897机匣')

    event.create('m870_receiver', 'basic')//M870霰弹枪的机匣零件
        .displayName('M870机匣')

    event.create('m1014_receiver', 'basic')//M1014战斗霰弹枪的机匣零件
        .displayName('M1014机匣')

    event.create('spas12_receiver', 'basic')//SPAS-12多功能霰弹枪的机匣零件
        .displayName('SPAS-12机匣')

    event.create('aa12_receiver', 'basic')//AA12霰弹枪的机匣零件
        .displayName('AA12机匣')
    // 全自动，需要精密构件

    /*---------------- 狙击枪机匣类分割线 ----------------*/
    event.create('springfield1873_receiver', 'basic')//春田1873活门步枪的机匣零件
        .displayName('春田1873机匣')

    event.create('cbr1125_receiver', 'basic')//CBR11/25 mod.1915狙击步枪的机匣零件
        .displayName('CBR11/25机匣')

    event.create('at50_receiver', 'basic')//AT50 mod.1941反坦克枪的机匣零件
        .displayName('AT50机匣')

    event.create('m700_receiver', 'basic')//M700狙击步枪的机匣零件
        .displayName('M700机匣')

    event.create('awm_receiver', 'basic')//精密国际AWM狙击步枪的机匣零件
        .displayName('AWM机匣')

    event.create('m95_receiver', 'basic')//M95 .50口径反器材步枪的机匣零件
        .displayName('M95机匣')

    event.create('m107_receiver', 'basic')//M107 .50口径反器材步枪的机匣零件
        .displayName('M107机匣')

    /*---------------- 机枪机匣类分割线 ----------------*/
    event.create('lmg31_receiver', 'basic')//LMG31 mod.1940/1955班用机枪的机匣零件
        .displayName('LMG31机匣')
    // 全自动，需要精密构件

    event.create('rmg_receiver', 'basic')//RMG mod.1970通用机枪的机匣零件
        .displayName('RMG机匣')
    // 全自动，需要精密构件

    event.create('rpk_receiver', 'basic')//RPK轻机枪的机匣零件
        .displayName('RPK机匣')
    // 全自动，需要精密构件

    event.create('m249_receiver', 'basic')//M249机枪的机匣零件
        .displayName('M249机匣')
    // 全自动，需要精密构件

    event.create('evolys_receiver', 'basic')//FN EVOLYS机枪的机匣零件
        .displayName('FN EVOLYS机匣')
    // 全自动，需要精密构件

    event.create('m134_receiver', 'basic')//M134转管机枪的机匣零件
        .displayName('M134机匣')
    // 全自动，需要精密构件

    /*---------------- 重型武器机匣类分割线 ----------------*/
    event.create('m320_receiver', 'basic')//M320榴弹发射器的机匣零件
        .displayName('M320机匣')

    event.create('rpg7_receiver', 'basic')//RPG-7火箭筒的发射筒零件
        .displayName('RPG-7发射筒')

    /*---------------- 枪管类分割线 ----------------*/
    event.create('short_barrel_45acp', 'basic')//.45口径短枪管（.45ACP）
        .displayName('.45口径短枪管')

    event.create('long_barrel_45acp', 'basic')//.45口径长枪管（45-70“政府”）
        .displayName('.45口径长枪管')

    event.create('short_barrel_9mm', 'basic')//9mm短枪管（.357、9mm）
        .displayName('9mm口径枪管')

    event.create('long_barrel_9mm', 'basic')//9mm长枪管（.357）
        .displayName('.357口径长枪管')

    event.create('short_barrel_7.62mm', 'basic')//7.62mm短枪管（7.62x25mm）
        .displayName('7.62mm口径短枪管')

    event.create('long_barrel_7.62mm', 'basic')//7.62mm长枪管（.30-06、.308温彻斯顿、7.62x39mm、7.62x54mm）
        .displayName('7.62mm口径长枪管')

    event.create('short_barrel_50acp', 'basic')//.50口径短枪管（.50AE)
        .displayName('.50口径短枪管')

    event.create('long_barrel_50acp', 'basic')//.50口径长枪管(.50AE、.50BMG)
        .displayName('.50口径长枪管')

    event.create('barrel_5.7mm', 'basic')//5.7mm枪管(5.7x28mm)
        .displayName('5.7mm口径枪管')


    event.create('barrel_5.8mm', 'basic')//5.8mm枪管(5.8x42mm)
        .displayName('5.8mm口径枪管')

    event.create('barrel_5.56mm', 'basic')//5.56mm枪管(5.56x45mm)
        .displayName('5.56mm口径枪管')

    event.create('barrel_7.5mm', 'basic')//7.5mm枪管(7.5x52mm)
        .displayName('7.5mm口径枪管')

    event.create('barrel_12ga.', 'basic')//12号口径枪管（12ga.）
        .displayName('12号口径枪管')

    /*---------------- 弹匣类分割线 ----------------*/
    event.create('mag_45acp', 'basic')//.45ACP弹匣
        .displayName('.45ACP弹匣')

    event.create('mag_9mm', 'basic')//9mm弹匣
        .displayName('9mm弹匣')

    event.create('mag_7.62mm', 'basic')//7.62mm弹匣
        .displayName('7.62mm弹匣')

    event.create('mag_50acp', 'basic')//.50ACP弹匣
        .displayName('.50ACP弹匣')

    event.create('mag_5.7mm', 'basic')//5.7mm弹匣
        .displayName('5.7mm弹匣')

    event.create('mag_5.8mm', 'basic')//5.8mm弹匣   
        .displayName('5.8mm弹匣')

    event.create('mag_5.56mm', 'basic')//5.56mm弹匣
        .displayName('5.56mm弹匣')

    event.create('mag_7.5mm', 'basic')//7.5mm弹匣
        .displayName('7.5mm弹匣')

    event.create('mag_12ga.', 'basic')//12ga.弹匣
        .displayName('12ga.弹匣')

    /*---------------- 枪托类分割线 ----------------*/
    //安山合金可能替换为专门的聚合物材料
    event.create('stock_wood_light')//剥皮木轻型枪托
        .displayName('剥皮木轻型枪托')

    event.create('stock_wood_heavy')//剥皮木重型枪托
        .displayName('剥皮木重型枪托')

    event.create('stock_alloy_light')//安山合金轻型聚合物枪托
        .displayName('安山合金轻型枪托')

    event.create('stock_alloy_heavy')//安山合金重型聚合物枪托
        .displayName('安山合金重型枪托')

    /*---------------- 护木类分割线 ----------------*/
    //安山合金可能替换为专门的聚合物材料
    event.create('foregrip_wood_light')//剥皮木轻型护木
        .displayName('剥皮木轻型护木')

    event.create('foregrip_wood_heavy')//剥皮木重型护木
        .displayName('剥皮木重型护木')

    event.create('foregrip_alloy_light')//安山合金轻型聚合物护木
        .displayName('安山合金轻型护木')

    event.create('foregrip_alloy_heavy')//安山合金重型聚合物护木
        .displayName('安山合金重型护木')

    /*---------------- 机械瞄具类分割线 ----------------*/
    //铁粒可能替换为专门的轻金属材料
    event.create('iron_sight_light')//铁粒轻型机械瞄具
        .displayName('铁粒轻型机械瞄具')

    event.create('iron_sight_heavy')//铁粒重型机械瞄具
        .displayName('铁粒重型机械瞄具')

    /*---------------- 基础零件类分割线 ----------------*/
    event.create('wood_chip')//木片
        .displayName('木片')

    event.create('iron_part_t')//T型铁零件
        .displayName('T型铁零件')

    event.create('iron_part_l')//L型铁零件
        .displayName('L型铁零件')

    event.create('iron_part_link')//连杆铁零件
        .displayName('连杆铁零件')

    event.create('iron_spring')//铁弹簧
        .displayName('铁弹簧')

    event.create('iron_rod')//铁杆
        .displayName('铁杆')
        
    event.create('ironboard_sword', 'sword')//铁管
        .displayName('铁管')
        .maxStackSize(1)
        .tier('iron')                 // 使用铁制工具属性（耐久 250，挖掘速度等）
        .attackDamageBaseline(1.0)   // 基础攻击伤害1
    // .attackDamageBonus(1.0)   // 额外伤害（可选，总伤害 = baseline + bonus）
    // .speed(-2.4)              // 攻击速度惩罚（原版剑默认值，通常不需要改）

    event.create("iron_sheet_small")//注册小铁片
        .displayName("小铁片")
        .maxStackSize(64)

})