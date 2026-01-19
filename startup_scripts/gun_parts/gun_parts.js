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
    event.create('geckojs:m1911_receiver', 'animatable')//柯尔特M1911手枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
            .displayName('柯尔特M1911机匣')

    event.create('geckojs:m1912_receiver', 'animatable')//斯太尔M1912（8发半自动型）、斯太尔M1912/P16（16发全自动型）的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('斯太尔M1912机匣')

    event.create('geckojs:m1912_auto_receiver', 'animatable')//斯太尔M1912/P16（16发全自动型）的机匣零件
                .geoModel(geo => {//和m1912共用模型
            geo.setSimpleModel('geckojs:geo/item/m1912_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1912_receiver.png');
        })
        .displayName('斯太尔M1912/P16机匣')
    //全自动型合成配方需要额外添加一个精密构件

    event.create('geckojs:p320_receiver', 'animatable')//P320手枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('P320机匣')

    event.create('geckojs:glock17_receiver', 'animatable')//格洛克17手枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('格洛克17机匣')

    event.create('geckojs:cz75_receiver', 'animatable')//CZ75自动手枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
    // 全自动，需要精密构件

    event.create('geckojs:b93r_receiver', 'animatable')//B93R冲锋手枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('B93R机匣')
    // 全自动，需要精密构件

    event.create('geckojs:deagle_receiver', 'animatable')//.50沙漠之鹰、.357黄金沙漠之鹰、永恒.50Z型的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('沙漠之鹰机匣')
    //用钢枪身-.50口径、金枪身-.357口径、金枪身-.50口径来确定最终生产枪械

    /*---------------- 冲锋枪机匣类分割线 ----------------*/
    event.create('geckojs:csg19_receiver', 'animatable')//CSG19冲锋枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('CSG19机匣')
    // 全自动，需要精密构件

    event.create('geckojs:uzi_receiver', 'animatable')//乌兹冲锋枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('乌兹机匣')
    // 全自动，需要精密构件

    event.create('geckojs:mp5a5_receiver', 'animatable')//MP5A5冲锋枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
    // 全自动，需要精密构件

    event.create('geckojs:ump45_receiver', 'animatable')//UMP45冲锋枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
    // 全自动，需要精密构件

    event.create('geckojs:victor_receiver', 'animatable')//维克托冲锋枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('维克托机匣')
    // 全自动，需要精密构件

    event.create('geckojs:p90_receiver', 'animatable')//P90冲锋枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
    // 全自动，需要精密构件

    /*---------------- 步枪机匣类分割线 ----------------*/
    event.create('geckojs:m1860_receiver', 'animatable')        // 亨利M1860的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('亨利M1860机匣')

    event.create('geckojs:m1865_receiver', 'animatable')      // 斯宾塞M1865/1871的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('斯宾塞M1865/1871机匣')

    event.create('geckojs:cbr11_receiver', 'animatable')     // CBR11系列栓动步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('CBR11机匣')

    event.create('geckojs:cbr9_receiver', 'animatable')         // CBR9 mod.1875单发步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('CBR9机匣')

    event.create('geckojs:hanyang88_receiver', 'animatable')    // 汉阳造88式步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('汉阳造88式机匣')

    event.create('geckojs:m1903a3_receiver', 'animatable')      // 斯普林菲尔德M1903A3的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('斯普林菲尔德M1903A3机匣')

    event.create('geckojs:c11_receiver', 'animatable')          // C11民用狩猎步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('C11机匣')

    event.create('geckojs:ma_receiver', 'animatable')         // MA系列的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('MA机匣')

    // event.create('geckojs:mu73_receiver', 'animatable')         // MU73(MA) mod.1942半自动步枪的机匣零件
    //     // .defaultGeoModel()//使用标准路径geckojs模型
    //     .geoModel(geo => {//占位符模型
    //         geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
    //         geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
    //     })
    //     .displayName('MU73(MA)机匣')

    // event.create('geckojs:cbr11_receiver', 'animatable')    // CBR11/935 mod.1920卡宾枪的机匣零件
    //     // .defaultGeoModel()//使用标准路径geckojs模型
    //     .geoModel(geo => {//占位符模型
    //         geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
    //         geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
    //     })
    //     .displayName('CBR11/935机匣')//cbr11系共用机匣

    event.create('geckojs:ma_auto_receiver', 'animatable')        // MUA73(MA) mod.1944自动步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//共用ma机匣模型
            geo.setSimpleModel('geckojs:geo/item/ma_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/ma_receiver.png');
        })
        .displayName('MA自动机匣')
    // 全自动，需要精密构件

    event.create('geckojs:sks_receiver', 'animatable')          // SKS战术步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('SKS机匣')

    event.create('geckojs:fn_fal_receiver', 'animatable')       // FN FAL战斗步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型        .displayName('FN FAL机匣')
    // 全自动，需要精密构件

    event.create('geckojs:g3_receiver', 'animatable')           // G3战斗步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('G3战斗步枪的机匣零件')
    // 全自动，需要精密构件

    event.create('geckojs:m16a1_receiver', 'animatable')        // M16A1制式步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('M16A1机匣')
    // 全自动，需要精密构件

    event.create('geckojs:m16a4_receiver', 'animatable')        // M16A4制式步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('M16A4机匣')
    // 全自动，需要精密构件

    event.create('geckojs:akm_receiver', 'animatable')          // AKM突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('AKM机匣')
    // 全自动，需要精密构件

    event.create('geckojs:type18_receiver', 'animatable')       // 18-1式制式步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('18-1式机匣')
    // 全自动，需要精密构件

    event.create('geckojs:qbz95_receiver', 'animatable')        // 95式“长弓”突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('95式“长弓”机匣')
    // 全自动，需要精密构件

    event.create('geckojs:aug_receiver', 'animatable')          // AUG突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('AUG机匣')
    // 全自动，需要精密构件

    event.create('geckojs:g36k_receiver', 'animatable')         // G36K突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('G36K机匣')
    // 全自动，需要精密构件

    event.create('geckojs:hk416a5_receiver', 'animatable')      // HK-416A5突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('HK-416A5机匣')
    // 全自动，需要精密构件

    event.create('geckojs:m4a1_receiver', 'animatable')         // M4A1卡宾枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('M4A1机匣')
    // 全自动，需要精密构件

    event.create('geckojs:scar_l_receiver', 'animatable')       // SCAR-L突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('SCAR-L机匣')
    // 全自动，需要精密构件

    event.create('geckojs:scar_h_receiver', 'animatable')       // SCAR-H战斗步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型        .displayName('SCAR-H机匣')
    // 全自动，需要精密构件

    event.create('geckojs:qbu191_receiver', 'animatable')       // 191式突击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('191式机匣')
    // 全自动，需要精密构件

    event.create('geckojs:spr_15_receiver', 'animatable')        // SPR-15 HB“射手座”反狙击步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('SPR-15 HB“射手座”机匣')
    // 全自动，需要精密构件

    event.create('geckojs:mk14_receiver', 'animatable')         // MK14 EBR精确射手步枪的机匣零件
        .defaultGeoModel()//使用标准路径geckojs模型
        .displayName('MK14 EBR机匣')
    // 全自动，需要精密构件

    /*---------------- 霰弹枪机匣类分割线 ----------------*/
    event.create('geckojs:clf10_receiver', 'animatable')//CLF10中折式霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('CLF10机匣')

    event.create('geckojs:db2_receiver', 'animatable')//DB-2杜林人霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('DB-2杜林人机匣')

    event.create('geckojs:db4_receiver', 'animatable')//DB-4乌萨斯霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('DB-4乌萨斯机匣')

    event.create('geckojs:winchester1897_receiver', 'animatable')//温切斯特M1897泵动霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('温切斯特M1897机匣')

    event.create('geckojs:m870_receiver', 'animatable')//M870霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M870机匣')

    event.create('geckojs:m1014_receiver', 'animatable')//M1014战斗霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M1014机匣')

    event.create('geckojs:spas12_receiver', 'animatable')//SPAS-12多功能霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('SPAS-12机匣')

    event.create('geckojs:aa12_receiver', 'animatable')//AA12霰弹枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('AA12机匣')
    // 全自动，需要精密构件

    /*---------------- 狙击枪机匣类分割线 ----------------*/
    event.create('geckojs:springfield1873_receiver', 'animatable')//春田1873活门步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('春田1873机匣')

    event.create('geckojs:cbr1125_receiver', 'animatable')//CBR11/25 mod.1915狙击步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('CBR11/25机匣')

    event.create('geckojs:at50_receiver', 'animatable')//AT50 mod.1941反坦克枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('AT50机匣')

    event.create('geckojs:m700_receiver', 'animatable')//M700狙击步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M700机匣')

    event.create('geckojs:awm_receiver', 'animatable')//精密国际AWM狙击步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('AWM机匣')

    event.create('geckojs:m95_receiver', 'animatable')//M95 .50口径反器材步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M95机匣')

    event.create('geckojs:m107_receiver', 'animatable')//M107 .50口径反器材步枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M107机匣')

    /*---------------- 机枪机匣类分割线 ----------------*/
    event.create('geckojs:lmg31_receiver', 'animatable')//LMG31 mod.1940/1955班用机枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('LMG31机匣')
    // 全自动，需要精密构件

    event.create('geckojs:rmg_receiver', 'animatable')//RMG mod.1970通用机枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('RMG机匣')
    // 全自动，需要精密构件

    event.create('geckojs:rpk_receiver', 'animatable')//RPK轻机枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('RPK机匣')
    // 全自动，需要精密构件

    event.create('geckojs:m249_receiver', 'animatable')//M249机枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M249机匣')
    // 全自动，需要精密构件

    event.create('geckojs:evolys_receiver', 'animatable')//FN EVOLYS机枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('FN EVOLYS机匣')
    // 全自动，需要精密构件

    event.create('geckojs:m134_receiver', 'animatable')//M134转管机枪的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M134机匣')
    // 全自动，需要精密构件

    /*---------------- 重型武器机匣类分割线 ----------------*/
    event.create('geckojs:m320_receiver', 'animatable')//M320榴弹发射器的机匣零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('M320机匣')

    event.create('geckojs:rpg7_receiver', 'animatable')//RPG-7火箭筒的发射筒零件
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('RPG-7发射筒')

    /*---------------- 枪管类分割线 ----------------*/
    event.create('geckojs:short_barrel_45acp', 'animatable')//.45口径短枪管（.45ACP）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.45口径短枪管')

    event.create('geckojs:long_barrel_45acp', 'animatable')//.45口径长枪管（45-70“政府”）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.45口径长枪管')

    event.create('geckojs:short_barrel_9mm', 'animatable')//9mm短枪管（.357、9mm）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('9mm口径枪管')

    event.create('geckojs:long_barrel_9mm', 'animatable')//9mm长枪管（.357）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.357口径长枪管')

    event.create('geckojs:short_barrel_7.62mm', 'animatable')//7.62mm短枪管（7.62x25mm）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('7.62mm口径短枪管')

    event.create('geckojs:long_barrel_7.62mm', 'animatable')//7.62mm长枪管（.30-06、.308温彻斯顿、7.62x39mm、7.62x54mm）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('7.62mm口径长枪管')

    event.create('geckojs:short_barrel_50acp', 'animatable')//.50口径短枪管（.50AE)
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.50口径短枪管')

    event.create('geckojs:long_barrel_50acp', 'animatable')//.50口径长枪管(.50AE、.50BMG)
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.50口径长枪管')

    event.create('geckojs:barrel_5.7mm', 'animatable')//5.7mm枪管(5.7x28mm)
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('5.7mm口径枪管')


    event.create('geckojs:barrel_5.8mm', 'animatable')//5.8mm枪管(5.8x42mm)
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('5.8mm口径枪管')

    event.create('geckojs:barrel_5.56mm', 'animatable')//5.56mm枪管(5.56x45mm)
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('5.56mm口径枪管')

    event.create('geckojs:barrel_7.5mm', 'animatable')//7.5mm枪管(7.5x52mm)
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('7.5mm口径枪管')

    event.create('geckojs:barrel_12ga.', 'animatable')//12号口径枪管（12ga.）
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('12号口径枪管')

    /*---------------- 弹匣类分割线 ----------------*/
    event.create('geckojs:mag_45acp', 'animatable')//.45ACP弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.45ACP弹匣')

    event.create('geckojs:mag_9mm', 'animatable')//9mm弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('9mm弹匣')

    event.create('geckojs:mag_7.62mm', 'animatable')//7.62mm弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('7.62mm弹匣')

    event.create('geckojs:mag_50acp', 'animatable')//.50ACP弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('.50ACP弹匣')

    event.create('geckojs:mag_5.7mm', 'animatable')//5.7mm弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('5.7mm弹匣')

    event.create('geckojs:mag_5.8mm', 'animatable')//5.8mm弹匣   
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('5.8mm弹匣')

    event.create('geckojs:mag_5.56mm', 'animatable')//5.56mm弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('5.56mm弹匣')

    event.create('geckojs:mag_7.5mm', 'animatable')//7.5mm弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
        .displayName('7.5mm弹匣')

    event.create('geckojs:mag_12ga.', 'animatable')//12ga.弹匣
        // .defaultGeoModel()//使用标准路径geckojs模型
        .geoModel(geo => {//占位符模型
            geo.setSimpleModel('geckojs:geo/item/m1911_receiver.geo.json');
            geo.setSimpleTexture('geckojs:textures/item/m1911_receiver.png');
        })
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