// =========================方法解释==============================
// KubeJS ItemBuilder 方法速查表（纯注释版）
// 适用于 StartupEvents.registry('item', event => { ... })
// 所有内容均为注释，无实际代码，仅作开发参考
// ===========================================================

// ┌──────────────────────────────┐
// │ 基础属性设置                 │
// └──────────────────────────────┘

// .maxStackSize(size)
//   设置物品最大堆叠数量（默认 64）
//   示例：.maxStackSize(16)

// .unstackable()
//   等价于 maxStackSize(1)，使物品不可堆叠（常用于工具、武器）

// .maxDamage(damage)
//   设置耐久值（>0 表示有耐久条）
//   示例：.maxDamage(250)

// .burnTime(ticks)
//   设置作为燃料时的燃烧时间（单位：游戏刻，20 ticks = 1 秒）
//   示例：.burnTime(1600) // 相当于煤炭

// .fireResistant(true/false)
//   是否抗火（true 时不会被岩浆或火焰烧毁）

// .rarity(rarity)
//   设置稀有度，影响物品名称颜色
//   可选值：'common'（白）、'uncommon'（黄）、'rare'（青）、'epic'（紫）
//   示例：.rarity('epic')

// .glow(true/false)
//   是否发光（像附魔物品一样显示粒子效果）

// ┌──────────────────────────────┐
// │ 显示与文本                   │
// └──────────────────────────────┘

// .tooltip(text...)
//   添加悬停提示文本，支持多个参数（每行一个）
//   支持格式代码（如 §7灰色，§c红色）
//   示例：.tooltip('§7神秘武器', '§o右键激活')

// .displayName(name)
//   设置固定显示名称（支持格式代码）
//   示例：.displayName('§c烈焰之刃')

// .name((itemStack) => string)
//   动态名称：根据 ItemStack 返回不同名字
//   示例：.name(stack => stack.damage === 0 ? '完好' : '破损')

// .translationKey(key)
//   指定多语言键，用于 lang 文件本地化
//   示例：.translationKey('item.mymod.magic_sword')

// ┌──────────────────────────────┐
// │ 材质、模型与渲染             │
// └──────────────────────────────┘

// .texture(texturePath)
//   指定主纹理路径（自动补全为 textures/item/...png）
//   实际文件路径：kubejs/assets/kubejs/textures/item/my_item.png
//   示例：.texture('kubejs:item/my_sword')

// .texture(layerName, texturePath)
//   为特定渲染层指定纹理（用于多层材质，如皮革盔甲）
//   示例：.texture('layer0', 'kubejs:item/helmet')

// .color(index, colorHex)
//   固定染色（index=0 为主色，colorHex 为十六进制 RGB 整数）
//   示例：.color(0, 0xFF5555) // 红色

// .color((itemStack, tintIndex) => colorInt)
//   动态染色：根据 ItemStack 和 tintIndex 返回颜色（RGB 整数）
//   示例：.color((stack, idx) => stack.damage > 50 ? 0x333333 : 0xFFFFFF)

// .parentModel(modelPath)
//   指定父模型（继承原版模型结构）
//   常用值：
//     'item/generated' —— 普通物品（正面贴图）
//     'item/handheld'  —— 剑、镐等手持工具
//   示例：.parentModel('item/handheld')

// .modelJson(jsonObject)
//   （高级）直接提供完整的模型 JSON 对象（极少使用）

// .textureJson(jsonObject)
//   （高级）直接提供纹理 JSON（极少使用）

// ┌──────────────────────────────┐
// │ 耐久条与使用行为             │
// └──────────────────────────────┘

// .barColor((itemStack) => colorInt)
//   自定义耐久条颜色（返回 RGB 整数）
//   示例：.barColor(stack => 0x00FF00) // 绿色

// .barWidth((itemStack) => int)
//   自定义耐久条宽度（0～13），通常无需修改
//   默认逻辑：Math.floor((maxDamage - damage) / maxDamage * 13)

// .useAnimation(animationType)
//   使用时的动画类型
//   可选值：'none'、'eat'、'drink'、'block'、'bow'
//   示例：.useAnimation('bow')

// .useDuration((itemStack) => ticks)
//   使用所需时间（单位：tick）
//   示例：.useDuration(stack => 32) // 1.6 秒

// .use((level, player, hand) => ItemUseResult)
//   开始使用时触发（如右键）
//   必须返回 ItemUseResult 枚举值（如 SUCCESS, CONSUME, PASS）
//   示例：.use((level, player, hand) => { /* 自定义逻辑 */; return ItemUseResult.SUCCESS; })

// .finishUsing((itemStack, level, entity) => itemStack)
//   使用完成时触发（如吃完食物）
//   返回修改后的 ItemStack
//   示例：给予效果、恢复生命等

// .releaseUsing((itemStack, level, entity, remainingTicks) => void)
//   释放使用时触发（如拉弓后松手）
//   常用于实现弓箭、蓄力技能等

// ┌──────────────────────────────┐
// │ 高级功能                     │
// └──────────────────────────────┘

// .tag(resourceLocation)
//   给物品打上标签（Tag），便于其他模组或脚本识别
//   示例：.tag('kubejs:my_weapons')

// .modifyAttribute(attribute, identifier, value, operation)
//   修改玩家属性（如攻击力、速度）
//   参数说明：
//     attribute    —— 属性名，如 'generic.attack_damage'
//     identifier   —— 唯一ID（建议 modid:name）
//     value        —— 数值
//     operation    —— 操作类型：'ADDITION'、'MULTIPLY_BASE'、'MULTIPLY_TOTAL'
//   示例：.modifyAttribute('generic.attack_damage', 'mymod:sword_bonus', 5, 'ADDITION')

// .group(groupId)
//   设置创造模式物品栏分组（需先通过 ItemGroups 注册 group）

// .containerItem(itemId)
//   使用后保留容器（如桶装水用完变空桶）
//   示例：.containerItem('minecraft:bucket')

// .subtypes((itemStack) => string[])
//   定义子类型（用于 JEI 分类显示多个变种）
//   示例：.subtypes(stack => ['normal', 'enchanted'])

// .food((foodBuilder) => void)
//   将物品设为食物，并配置营养与效果
//   内部常用方法：
//     .nutrition(int)        —— 饱食度（如 4）
//     .saturation(float)     —— 饱食度饱和系数（如 0.8）
//     .effect(effectId, duration, amplifier, probability)
//                            —— 添加效果（持续时间单位：tick）
//     .fastToEat(true/false) —— 是否快速食用
//   示例：
//     .food(food => food
//       .nutrition(6)
//       .saturation(1.2)
//       .effect('minecraft:strength', 200, 0, 1.0)
//     )

// ===========================================================
// ⚠️ 注意事项：
// - 不是所有方法都能同时使用（如 maxDamage 与 food 互斥）
// - 动态方法必须返回正确类型，否则会报错
// - 纹理路径基于资源包结构：kubejs/assets/kubejs/textures/item/...
// - 此文件仅为注释参考，请勿直接运行
// ===========================================================


StartupEvents.registry('item', event => {
  // 注册一把自定义剑
  event.create('test_sword', 'sword')//创建一把名为test_sword的剑，测试用途


  event.create('ironboard_sword', 'sword')
    .displayName('铁管')
    .maxStackSize(1)
    .tier('iron')                 // 使用铁制工具属性（耐久 250，挖掘速度等）
    .attackDamageBaseline(3.0)   // 基础攻击伤害 = 3（和原版铁剑一致）
  // .attackDamageBonus(1.0)   // 额外伤害（可选，总伤害 = baseline + bonus）
  // .speed(-2.4)              // 攻击速度惩罚（原版剑默认值，通常不需要改）
});