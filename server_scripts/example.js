// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    event.remove({ mod: "tacz" })//移除tacz的所有原版配方
    event.remove({ mod: "qkl" })//移除巧克力人枪包的所有配方
    event.remove({ output: "create:empty_blaze_burner" })//移除烈焰人燃烧室配方，电气时代的锅炉加热器替代
    const create = event.recipes.create//创建一个快捷方式来使用Create的配方方法
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
    event.shapeless("tacz:target_minecart", ["tacz:target", "minecraft:minecart"])//工作台标靶和矿车无序合成
    event.stonecutting("tacz:statue", Item.of("minecraft:smooth_stone", 2))//两个平滑石切割出一个石像
    //标靶和石像




    create.compacting(Item.of('tacz:ammo_box', '{Level:0}'),
        Item.of("create:iron_sheet", 2))
    create.compacting(Item.of('tacz:ammo_box', '{Level:1}'),
        [Item.of("create:iron_sheet", 2), Item.of('create_new_age:overcharged_golden_sheet', 2)])
    create.compacting(Item.of('tacz:ammo_box', '{Level:2}'),
        [Item.of("create:iron_sheet", 2), Item.of('create_new_age:overcharged_golden_sheet', 2), Item.of("create_new_age:overcharged_diamond", 2)])

    //弹药箱合成路径
    //Level【0】铁弹药箱:2铁板
    //Level【1】金弹药箱:2铁板+2充电金板
    //Level【2】钻石弹药箱:2铁板+2充电金板+2充电钻石


    const makestring = (input, int) => {        //输入材料，煮出线的数量
        create.mixing(
            Item.of("minecraft:string", int),
            [
                input
            ]
        ).heated()

    }
    //树叶类煮线
    makestring(Ingredient.of('#minecraft:leaves').withCount(4), 1)
    //纸浆原料类煮线
    makestring('#create:pulpifiable', 1)













})


EntityEvents.hurt(event => {
    // 监听实体受伤事件
    const { entity, source } = event;

    // 只处理伤害来源为玩家的情况
    if (source.getType() !== 'player') return;

    const player = source.actual;
    // 确保实际来源存在且为玩家实体
    if (!player || !player.isPlayer()) return;

    // 仅在玩家主手持有铁管时触发击退效果
    if (player.mainHandItem.id === 'kubejs:ironboard_sword') {
        // 获取玩家的视线方向向量
        const look = player.getLookAngle();

        /**
         * 运动向量：将视线向量放大 5 倍以作为速度
         * x, y, z 分量分别对应世界坐标的速度分量
         *
         * @type {Vec3d}
         */
        const motion = new Vec3d(
            look.x() * 5,
            look.y() * 5,
            look.z() * 5
        );

        // 将计算得到的速度应用到被击中的实体上，实现击退/击飞效果
        entity.setDeltaMovement(motion);
        // 日志输出，便于调试
        console.info('[KubeJS] Ironboard sword knockback applied!');
    }
});
