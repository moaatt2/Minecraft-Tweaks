
console.log("============ Ars Debug Script Loaded ============")

const XP_VALUES = {
    "ars_nouveau:novice_spell_book": 5,
    "ars_nouveau:apprentice_spell_book": 10,
    "ars_nouveau:archmage_spell_book": 20
}

ItemEvents.rightClicked(event => {
    let xp = XP_VALUES[event.item.id]
    if (!xp) return

    event.server.runCommandSilent(
        `puffish_skills experience add ${event.player.username} puffish_skills:ars ${xp}`
    )
})
