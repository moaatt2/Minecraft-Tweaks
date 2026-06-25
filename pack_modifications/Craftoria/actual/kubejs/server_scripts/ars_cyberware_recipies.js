
ServerEvents.recipes(event => {

    event.shaped('kubejs:dermal_plating_gold', [
        'FGF',
        'GMG',
        'FGF'
    ], {
        G: 'minecraft:gold_ingot',
        F: 'cyber_ware_port:component_fullerene',
        M: 'cyber_ware_port:component_microelectric'
    })

    event.shaped('kubejs:dermal_plating_iron', [
        'MIM',
        'IGI',
        'MIM'
    ], {
        G: 'kubejs:dermal_plating_gold',
        I: 'minecraft:iron_ingot',
        M: 'cyber_ware_port:component_microelectric'
    })

    event.shaped('kubejs:dermal_plating_diamond', [
        'MDM',
        'DID',
        'MDM'
    ], {
        I: 'kubejs:dermal_plating_iron',
        D: 'minecraft:diamond',
        M: 'cyber_ware_port:component_microelectric'
    })

    event.smithing(
        'kubejs:dermal_plating_netherite',               // result
        'minecraft:netherite_upgrade_smithing_template', // template
        'kubejs:dermal_plating_diamond',                 // base item
        'minecraft:netherite_ingot'                      // addition item
    )

})
