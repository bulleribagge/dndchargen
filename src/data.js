export function getRaces()
{
    return [
        {
            name: "Dragonborn", 
            url: require('./images/dragonborn.png'),
            abilityModifiers: [
                {
                    attribute: attributes.STRENGTH,
                    value: 2
                },{
                    attribute: attributes.CHARISMA,
                    value: 1
                }
            ],
            subRaces: []
        },
        {
            name: "Dwarf", 
            url: require('./images/dwarf.png'),
            abilityModifiers: [
                {
                    attribute: attributes.CONSTITUTION,
                    value: 2
                }
            ],
            subRaces: [
                {
                    name: "Hill Dwarf",
                    abilityModifiers: [
                        {
                            attribute: attributes.WISDOM,
                            value: 1
                        }
                    ]
                },
                {
                    name: "Mountain Dwarf",
                    abilityModifiers: [
                        {
                            attribute: attributes.STRENGTH,
                            value: 2
                        }
                    ]
                }
            ]
        },
        {
            name: "Elf", 
            url: require('./images/elf.png'),
            abilityModifiers: [
                {
                    attribute: attributes.DEXTERITY,
                    value: 2
                }
            ],
            subRaces: []
        },
        {
            name: "Gnome", 
            url: require('./images/gnome.png'),
            abilityModifiers: [
                {
                    attribute: attributes.INTELLIGENCE,
                    value: 2
                }
            ],
            subRaces: []
        },
        {
            name: "Halfling", 
            url: require('./images/halfling.png'),
            abilityModifiers: [
                {
                    attribute: attributes.DEXTERITY,
                    value: 2
                }
            ],
            subRaces: []
        },
        {
            name: "Half-elf", 
            url: require('./images/halfelf.png'),
            abilityModifiers: [
                {
                    attribute: attributes.CHARISMA,
                    value: 2
                }
            ],
            subRaces: []
        },
        {
            name: "Half-orc", 
            url: require('./images/halforc.png'),
            abilityModifiers: [
                {
                    attribute: attributes.STRENGTH,
                    value: 2
                },{
                    attribute: attributes.CONSTITUTION,
                    value: 1
                }
            ],
            subRaces: []
        },
        {
            name: "Human", 
            url: require('./images/human.png'),
            abilityModifiers: [
                {
                    attribute: attributes.STRENGTH,
                    value: 1
                },
                {
                    attribute: attributes.DEXTERITY,
                    value: 1
                },
                {
                    attribute: attributes.INTELLIGENCE,
                    value: 1
                },
                {
                    attribute: attributes.CHARISMA,
                    value: 1
                },
                {
                    attribute: attributes.CONSTITUTION,
                    value: 1
                },
                {
                    attribute: attributes.WISDOM,
                    value: 1
                },
            ],
            subRaces: []
        },
        {
            name: "Tiefling", 
            url: require('./images/tiefling.png'),
            abilityModifiers: [
                {
                    attribute: attributes.INTELLIGENCE,
                    value: 1
                },{
                    attribute: attributes.CHARISMA,
                    value: 2
                }
            ],
            subRaces: []
        }
    ]
}

export function getClasses()
{
    return [
        {name: "Barbarian"},
        {name: "Bard"},
        {name: "Cleric"},
        {name: "Druid"},
        {name: "Fighter"},
        {name: "Monk"},
        {name: "Paladin"},
        {name: "Ranger"},
        {name: "Rogue"},
        {name: "Sorcerer"},
        {name: "Warlock"},
        {name: "Wizard"}
    ]
}

export const attributes = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
]