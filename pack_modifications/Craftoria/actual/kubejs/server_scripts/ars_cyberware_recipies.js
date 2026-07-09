
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


    ///////////////////////
    /// Source Circuits ///
    ///////////////////////

    event.shaped('kubejs:source_circuits_tier_1', [
        ' I ',
        'ABA',
        ' A '
    ], {
        I: 'minecraft:iron_ingot',
        A: 'minecraft:amethyst_shard',
        B: 'minecraft:bone'
    })

    ars.enchantingApparatus(
        'kubejs:source_circuits_tier_2', // output
        'kubejs:source_circuits_tier_1', // center item
        [ // Pedestal items
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        1000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_circuits_tier_3', // output
        'kubejs:source_circuits_tier_2', // center item
        [ // Pedestal items
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod'
        ],
        2000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_circuits_tier_4', // output
        'kubejs:source_circuits_tier_3', // center item
        [ // Pedestal items
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit'
        ],
        4000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_circuits_tier_5', // output
        'kubejs:source_circuits_tier_4', // center item
        [ // Pedestal items
            'minecraft:dragon_egg',
            'minecraft:nether_star',
            'minecraft:dragon_breath',
            'minecraft:nether_star'
        ],
        8000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_circuits_tier_6', // output
        'kubejs:source_circuits_tier_5', // center item
        [ // Pedestal items
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard',
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard'
        ],
        16000, // source cost
    )

    ///////////////////
    /// Spell Focus ///
    ///////////////////

    event.shaped('kubejs:spell_focus_tier_1', [
        ' I ',
        'AGA',
        ' A '
    ], {
        I: 'minecraft:iron_ingot',
        A: 'minecraft:amethyst_shard',
        G: 'minecraft:glass'
    })

    ars.enchantingApparatus(
        'kubejs:spell_focus_tier_2', // output
        'kubejs:spell_focus_tier_1', // center item
        [ // Pedestal items
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        1000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:spell_focus_tier_3', // output
        'kubejs:spell_focus_tier_2', // center item
        [ // Pedestal items
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod'
        ],
        2000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:spell_focus_tier_4', // output
        'kubejs:spell_focus_tier_3', // center item
        [ // Pedestal items
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit'
        ],
        4000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:spell_focus_tier_5', // output
        'kubejs:spell_focus_tier_4', // center item
        [ // Pedestal items
            'minecraft:dragon_egg',
            'minecraft:nether_star',
            'minecraft:dragon_breath',
            'minecraft:nether_star'
        ],
        8000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:spell_focus_tier_6', // output
        'kubejs:spell_focus_tier_5', // center item
        [ // Pedestal items
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard',
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard'
        ],
        16000, // source cost
    )

    /////////////////////////////
    /// Auxillary Source Core ///
    /////////////////////////////

    event.shaped('kubejs:auxillary_source_core_tier_1', [
        ' I ',
        'ADA',
        ' A '
    ], {
        I: 'minecraft:iron_ingot',
        A: 'minecraft:amethyst_shard',
        D: 'minecraft:diamond'
    })

    ars.enchantingApparatus(
        'kubejs:auxillary_source_core_tier_2', // output
        'kubejs:auxillary_source_core_tier_1', // center item
        [ // Pedestal items
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        1000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:auxillary_source_core_tier_3', // output
        'kubejs:auxillary_source_core_tier_2', // center item
        [ // Pedestal items
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod'
        ],
        2000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:auxillary_source_core_tier_4', // output
        'kubejs:auxillary_source_core_tier_3', // center item
        [ // Pedestal items
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit'
        ],
        4000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:auxillary_source_core_tier_5', // output
        'kubejs:auxillary_source_core_tier_4', // center item
        [ // Pedestal items
            'minecraft:dragon_egg',
            'minecraft:nether_star',
            'minecraft:dragon_breath',
            'minecraft:nether_star'
        ],
        8000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:auxillary_source_core_tier_6', // output
        'kubejs:auxillary_source_core_tier_5', // center item
        [ // Pedestal items
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard',
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard'
        ],
        16000, // source cost
    )

    ////////////////////////
    /// Source Capacitor ///
    ////////////////////////

    event.shaped('kubejs:source_capacitor_tier_1', [
        ' I ',
        'ACA',
        ' A '
    ], {
        I: 'minecraft:iron_ingot',
        A: 'minecraft:amethyst_shard',
        C: 'minecraft:cauldron'
    })

    ars.enchantingApparatus(
        'kubejs:source_capacitor_tier_2', // output
        'kubejs:source_capacitor_tier_1', // center item
        [ // Pedestal items
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        1000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_capacitor_tier_3', // output
        'kubejs:source_capacitor_tier_2', // center item
        [ // Pedestal items
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod'
        ],
        2000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_capacitor_tier_4', // output
        'kubejs:source_capacitor_tier_3', // center item
        [ // Pedestal items
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit'
        ],
        4000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_capacitor_tier_5', // output
        'kubejs:source_capacitor_tier_4', // center item
        [ // Pedestal items
            'minecraft:dragon_egg',
            'minecraft:nether_star',
            'minecraft:dragon_breath',
            'minecraft:nether_star'
        ],
        8000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:source_capacitor_tier_6', // output
        'kubejs:source_capacitor_tier_5', // center item
        [ // Pedestal items
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard',
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard'
        ],
        16000, // source cost
    )

    //////////////////////////////
    /// Fortuitousness Booster ///
    //////////////////////////////

    event.shaped('kubejs:fortuitousness_booster_tier_1', [
        ' I ',
        'AFA',
        ' A '
    ], {
        I: 'minecraft:iron_ingot',
        A: 'minecraft:amethyst_shard',
        F: '#minecraft:flowers'
    })

    ars.enchantingApparatus(
        'kubejs:fortuitousness_booster_tier_2', // output
        'kubejs:fortuitousness_booster_tier_1', // center item
        [ // Pedestal items
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem'
        ],
        1000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:fortuitousness_booster_tier_3', // output
        'kubejs:fortuitousness_booster_tier_2', // center item
        [ // Pedestal items
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod'
        ],
        2000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:fortuitousness_booster_tier_4', // output
        'kubejs:fortuitousness_booster_tier_3', // center item
        [ // Pedestal items
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit',
            'minecraft:ender_pearl',
            'minecraft:chorus_fruit'
        ],
        4000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:fortuitousness_booster_tier_5', // output
        'kubejs:fortuitousness_booster_tier_4', // center item
        [ // Pedestal items
            'minecraft:dragon_egg',
            'minecraft:nether_star',
            'minecraft:dragon_breath',
            'minecraft:nether_star'
        ],
        8000, // source cost
    )

    ars.enchantingApparatus(
        'kubejs:fortuitousness_booster_tier_6', // output
        'kubejs:fortuitousness_booster_tier_5', // center item
        [ // Pedestal items
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard',
            'minecraft:sculk_catalyst',
            'minecraft:echo_shard'
        ],
        16000, // source cost
    )

})
