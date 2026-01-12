ServerEvents.tags("item", event => {//尽管是方块，但是是用于合成表，所以使用的是其物品属性
    //如果用于世界中的方块属性，则应使用 ServerEvents.tags("block", event => {
    event.add("kubejs:stripped_wood",
        [
            "minecraft:stripped_oak_log",
            "minecraft:stripped_spruce_log",
            "minecraft:stripped_birch_log",
            "minecraft:stripped_jungle_log",
            "minecraft:stripped_acacia_log",
            "minecraft:stripped_dark_oak_log",
            "minecraft:stripped_mangrove_log",
            "minecraft:stripped_cherry_log",
            "minecraft:stripped_crimson_stem",
            "minecraft:stripped_warped_stem",
            "minecraft:stripped_bamboo_block",
            "minecraft:stripped_oak_wood",
            "minecraft:stripped_spruce_wood",
            "minecraft:stripped_birch_wood",
            "minecraft:stripped_jungle_wood",
            "minecraft:stripped_acacia_wood",
            "minecraft:stripped_dark_oak_wood",
            "minecraft:stripped_mangrove_wood",
            "minecraft:stripped_cherry_wood",
            "minecraft:stripped_crimson_hyphae",
            "minecraft:stripped_warped_hyphae",
            "minecraft:stripped_bamboo_wood"]
    );
});
// 在 KubeJS 中，通过 ServerEvents.tags() 事件来添加、删除或修改标签（Tags）
// 标签分为四种主要类型：item（物品）、block（方块）、fluid（流体）、entity_type（实体类型）

// 要监听物品标签的修改，请使用：
// ServerEvents.tags('item', event => { ... })

// 要监听方块标签的修改，请使用：
// ServerEvents.tags('block', event => { ... })

// 要监听流体标签的修改，请使用：
// ServerEvents.tags('fluid', event => { ... })

// 要监听实体类型标签的修改，请使用：
// ServerEvents.tags('entity_type', event => { ... })

// 在事件回调中，event 对象提供以下常用方法：

// event.add('标签名', '物品ID')
// → 将指定物品 ID 添加到该标签中；如果标签不存在，则自动创建

// event.add('标签名', ['物品ID1', '物品ID2', ...])
// → 批量添加多个物品到标签

// event.add('目标标签', '#源标签')
// → 将整个源标签的内容嵌套进目标标签（注意源标签前加 #）

// event.remove('标签名', '物品ID')
// → 从指定标签中移除某个物品

// event.remove('标签名', ['物品ID1', '物品ID2', ...])
// → 批量移除多个物品

// event.removeAll('标签名')
// → 清空该标签中的所有条目

// event.removeAllTagsFrom('物品ID')
// → 移除该物品所拥有的所有标签（慎用！）

// event.get('标签名').getObjectIds()
// → 获取该标签包含的所有物品 ID，返回一个字符串数组，可用于遍历或条件过滤

// 标签名必须包含命名空间，例如：
// 'kubejs:my_custom_tag'、'forge:plates'、'c:ingots'

// 自定义标签推荐使用 'kubejs:' 作为命名空间，避免与其他模组冲突

// 配方系统（如 Create、原版合成）始终使用「物品标签」（item tag）
// 即使该物品在世界中表现为方块（如 cobblestone），在配方中仍属于 item 标签

// 标签是基于注册表 ID 的，不支持 NBT 数据区分
// 例如：所有 minecraft:diamond_sword 共享相同标签，无论是否附魔

// 若需对带 NBT 的物品进行特殊处理（如任务检测），可将其加入特殊标签：
// event.add('itemfilters:check_nbt', '你的物品ID')

// 修改标签后，需执行 /reload 命令或重启游戏才能生效

// 所有标签操作均为动态注册，无需手动创建 JSON 文件
// 但若同时使用 JSON 和 KubeJS 操作同一标签，可能产生冲突，建议统一使用 KubeJS