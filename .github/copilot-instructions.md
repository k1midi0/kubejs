# AI Coding Guidelines for KubeJS Gun Parts Mod

## Architecture Overview
This is a KubeJS mod that integrates TACZ gun mod with Create mod by replacing TACZ's gun workbench recipes with Create-based crafting. Gun parts are registered as GeckoJS animatable items with custom models and textures.

## Key Components
- **Gun Parts**: Receivers (per gun model), barrels/magazines (per caliber), stocks/handguards/sights (universal)
- **Recipes**: All crafting uses Create machines (cutting, pressing, mechanical_crafting, sequenced_assembly) + Vintage Improvements
- **Assets**: GeckoJS models in `assets/geckojs/geo/item/`, textures in `assets/geckojs/textures/item/`
- **Scripts**: Startup for item registration, server_scripts for recipes/tags

## Coding Patterns
### Item Registration (startup_scripts/gun_parts/gun_parts.js)
```javascript
event.create('geckojs:m1911_receiver', 'animatable')
    .defaultGeoModel()
    .displayName('柯尔特M1911机匣')
```
- Use `animatable` type for gun parts
- `.defaultGeoModel()` assumes `geckojs:geo/item/<id>.geo.json` and `geckojs:textures/item/<id>.png`
- Full auto receivers require precision mechanism in recipes

### Recipe Creation (server_scripts/gun/gun parts/gun parts.js)
```javascript
create.mechanical_crafting('geckojs:m1911_receiver', [
    'L    ',
    'GNZCC',
    ' M   ',
    'C    '
], {
    L: 'kubejs:iron_part_l',
    C: 'kubejs:iron_sheet_small',
    G: 'kubejs:iron_part_link',
    N: 'kubejs:iron_spring',
    Z: 'minecraft:lightning_rod',
    M: 'kubejs:wood_chip'
})
```
- Prefer Create's `mechanical_crafting` for complex assemblies
- Use `cutting`, `pressing`, `deploying` for basic processing
- Vintage Improvements: `vi.curving()` for rods/springs

### Gun Assembly (server_scripts/gun/gun/gun.js)
```javascript
create.sequenced_assembly(
    Item.of('tacz:modern_kinetic_gun', '{GunId:"qkl:clf10",...}'),
    'minecraft:iron_ingot',
    [/* steps */]
).transitionalItem('minecraft:iron_ingot').loops(1)
```
- Output TACZ guns with specific `GunId` NBT
- Use sequenced assembly for multi-step processes

### Ammo Recipes (server_scripts/gun/ammo/ammo.js)
```javascript
create.sequenced_assembly(
    Item.of('tacz:ammo', '{AmmoId:"qkl:rb10"}'),
    'create:cardboard',
    [/* deploy gunpowder, nuggets */]
)
```
- TACZ ammo uses NBT `AmmoId` for types, not separate item IDs

## Conventions
- **Materials**: Create items (andesite_alloy, iron_sheet), custom kubejs parts (stripped_wood tag)
- **Full Auto**: Requires `create:precision_mechanism` in receiver recipes
- **Models**: Most use placeholder `m1911_receiver.geo.json` until modeled
- **Comments**: Chinese for design notes, English for code explanations
- **File Structure**: Separate files per component type (receivers, barrels, etc.)

## Workflows
- **Adding Gun**: Register receiver in startup, add mechanical_crafting recipe in server_scripts
- **Adding Caliber**: Register barrel/mag in startup, add cutting/pressing recipes
- **Testing**: Reload KubeJS in-game (`/kubejs reload`), check JEI for recipes
- **Assets**: Place .geo.json in `assets/geckojs/geo/item/`, PNG in textures/item/

## Dependencies
- TACZ (guns/ammo), Create (crafting), GeckoJS (animations), Vintage Improvements (curving), ProbeJS (TypeScript defs)