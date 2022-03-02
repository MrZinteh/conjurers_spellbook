import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MinionViewer from './Components/MinionViewer/MinionViewer';
import PossibleConjures from './Components/PossibleConjures/PossibleConjures';
import SpellSelector from './Components/SpellSelector/SpellSelector';
import SpellViewer from './Components/SpellViewer/SpellViewer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recentlyConjured: false, selectedSpell: "Find Familiar"};
        this.toggleRecentlyConjured = this.toggleRecentlyConjured.bind(this);
        this.selectSpell = this.selectSpell.bind(this);
        this.feySpiritMapper = this.feySpiritMapper.bind(this);
        this.lesserDemonMapper = this.lesserDemonMapper.bind(this);
        this.shadowSpawnMapper = this.shadowSpawnMapper.bind(this);
        this.minorElementalMapper = this.minorElementalMapper.bind(this);
        this.aberrationMapper = this.aberrationMapper.bind(this);
        this.constructMapper = this.constructMapper.bind(this);
        this.elementalSpiritMapper = this.elementalSpiritMapper.bind(this);
        this.greaterDemonMapper = this.greaterDemonMapper.bind(this);
        this.elementalMapper = this.elementalMapper.bind(this);
        this.devilMapper = this.devilMapper.bind(this);
        this.draconicSpiritMapper = this.draconicSpiritMapper.bind(this);
        this.fiendMapper = this.fiendMapper.bind(this);
        this.conjures = {
        "Find Familiar": {
            "Bat": {
                    name: "Bat",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 12,
                    HP: 1,
                    Speed: "5ft., fly 30ft",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "15 (+2)",
                        CON: "8 (-1)",
                        INT: "2 (-4)",
                        WIS: "12 (+1)",
                        CHA: "4 (-3)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Blindsight 60ft., Pas. Perception 11",
                    Languages: "--",
                    Description: [
                        {label: "Echolocation", value: "No blindsight while deafened.", spells: null},
                        {label: "Keen Hearing", value: "Adv. on hearing Perception", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Cat": {
                    name: "Cat",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 12,
                    HP: 2,
                    Speed: "40ft., climb 30ft",
                    Stats: {
                        STR: "3 (-4)",
                        DEX: "15 (+2)",
                        CON: "10 (+0)",
                        INT: "3 (-4)",
                        WIS: "12 (+1)",
                        CHA: "7 (-2)"
                    },
                    Skills: "Perception +3, Stealth +4",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Keen Smell", value: "Adv. on smelling Perception", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Crab": {
                    name: "Crab",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 11,
                    HP: 2,
                    Speed: "20ft., swim 20ft",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "11 (+0)",
                        CON: "10 (+0)",
                        INT: "1 (-5)",
                        WIS: "8 (-1)",
                        CHA: "2 (-4)"
                    },
                    Skills: "Stealth +2",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Blindsight 30ft., Pas. Perception 9",
                    Languages: "--",
                    Description: [
                        {label: "Amphibious", value: "Can breathe air and water.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Frog": {
                    name: "Frog",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 11,
                    HP: 1,
                    Speed: "20ft., swim 20ft",
                    Stats: {
                        STR: "1 (-5)",
                        DEX: "13 (+1)",
                        CON: "8 (-1)",
                        INT: "1 (-5)",
                        WIS: "8 (-1)",
                        CHA: "3 (-4)"
                    },
                    Skills: "Perception +1, Stealth +3",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 30ft., Pas. Perception 11",
                    Languages: "--",
                    Description: [
                        {label: "Amphibious", value: "Can breathe air and water.", spells: null},
                        {label: "Standing Leap", value: "Long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Hawk": {
                    name: "Hawk",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 13,
                    HP: 1,
                    Speed: "10ft., fly 60ft",
                    Stats: {
                        STR: "5 (-3)",
                        DEX: "16 (+3)",
                        CON: "8 (-1)",
                        INT: "2 (-4)",
                        WIS: "14 (+2)",
                        CHA: "6 (-2)"
                    },
                    Skills: "Perception +4",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Pas. Perception 14",
                    Languages: "--",
                    Description: [
                        {label: "Keen Sight", value: "Adv. on sight Perception", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Lizard": {
                    name: "Lizard",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 10,
                    HP: 2,
                    Speed: "20ft., climb 20ft",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "11 (+0)",
                        CON: "10 (+0)",
                        INT: "1 (-5)",
                        WIS: "8 (-1)",
                        CHA: "3 (-4)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 30ft., Pas. Perception 9",
                    Languages: "--",
                    Description: [],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Octopus": {
                    name: "Octopus",
                    subName: null,
                    type: "Fey",
                    size: "Small",
                    AC: 12,
                    HP: 3,
                    Speed: "5ft., swim 30ft",
                    Stats: {
                        STR: "4 (-3)",
                        DEX: "15 (+2)",
                        CON: "11 (+0)",
                        INT: "3 (-4)",
                        WIS: "10 (+0)",
                        CHA: "4 (-3)"
                    },
                    Skills: "Perception +2, Stealth +4",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 30ft., Pas. Perception 12",
                    Languages: "--",
                    Description: [
                        {label: "Hold Breath", value: "While out of water, can hold its breath for 30 minutes.", spells: null},
                        {label: "Underwater Camouflage", value: "Adv. on Stealth checks made while underwater.", spells: null},
                        {label: "Water Breathing", value: "Can breathe only underwater.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Owl": {
                    name: "Owl",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 11,
                    HP: 1,
                    Speed: "5ft., fly 60ft",
                    Stats: {
                        STR: "3 (-4)",
                        DEX: "13 (+1)",
                        CON: "8 (-1)",
                        INT: "2 (-4)",
                        WIS: "12 (+1)",
                        CHA: "7 (-2)"
                    },
                    Skills: "Perception +3, Stealth +3",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 120ft., Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Flyby", value: "Does not provoke opportunity attacks when it flies out of an enemy's reach.", spells: null},
                        {label: "Keen Hearing and Sight", value: "Adv. on hearing and sight Perception", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Poisonous Snake": {
                    name: "Poisonous Snake",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 13,
                    HP: 2,
                    Speed: "30ft., swim 30ft",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "16 (+3)",
                        CON: "11 (+0)",
                        INT: "1 (-5)",
                        WIS: "10 (+0)",
                        CHA: "3 (-4)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Blindsight 30ft., Pas. Perception 10",
                    Languages: "--",
                    Description: [],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Fish": {
                    name: "Fish",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 13,
                    HP: 1,
                    Speed: "0ft., swim 40ft",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "16 (+3)",
                        CON: "9 (-1)",
                        INT: "1 (-5)",
                        WIS: "7 (-2)",
                        CHA: "2 (-4)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 60ft., Pas. Perception 8",
                    Languages: "--",
                    Description: [
                        {label: "Water Breathing", value: "Can breathe only underwater.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Rat": {
                    name: "Rat",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 10,
                    HP: 1,
                    Speed: "20ft.",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "11 (+0)",
                        CON: "9 (-1)",
                        INT: "2 (-4)",
                        WIS: "10 (+0)",
                        CHA: "4 (-3)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 30ft., Pas. Perception 10",
                    Languages: "--",
                    Description: [
                        {label: "Keen Smell", value: "Adv. on smelling Perception", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Raven": {
                    name: "Raven",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 12,
                    HP: 1,
                    Speed: "10ft., fly 50ft",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "14 (+2)",
                        CON: "8 (-1)",
                        INT: "2 (-4)",
                        WIS: "12 (+1)",
                        CHA: "6 (-2)"
                    },
                    Skills: "Perception +3",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Mimicry", value: "Can mimic simple sounds it has heard. A creature that hears the sounds can tell they are imitations with a succesful DC 10 Insight check.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Sea Horse": {
                    name: "Sea Horse",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 11,
                    HP: 1,
                    Speed: "0ft., swim 20ft",
                    Stats: {
                        STR: "1 (-5)",
                        DEX: "12 (+1)",
                        CON: "8 (-1)",
                        INT: "1 (-5)",
                        WIS: "10 (+0)",
                        CHA: "2 (-4)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Pas. Perception 10",
                    Languages: "--",
                    Description: [
                        {label: "Water Breathing", value: "Can breathe only underwater.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Spider": {
                    name: "Spider",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 12,
                    HP: 1,
                    Speed: "20ft., climb 20 ft.",
                    Stats: {
                        STR: "2 (-4)",
                        DEX: "14 (+2)",
                        CON: "8 (-1)",
                        INT: "1 (-5)",
                        WIS: "10 (+0)",
                        CHA: "2 (-4)"
                    },
                    Skills: "Stealth +4",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 30ft., Pas. Perception 10",
                    Languages: "--",
                    Description: [
                        {label: "Spider Climb", value: "Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.", spells: null},
                        {label: "Web Sense", value: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.", spells: null},
                        {label: "Web Walker", value: "Ignores movement restrictions caused by webbing.", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
            "Weasel": {
                    name: "Weasel",
                    subName: null,
                    type: "Fey",
                    size: "Tiny",
                    AC: 13,
                    HP: 1,
                    Speed: "30ft.",
                    Stats: {
                        STR: "3 (-4)",
                        DEX: "16 (+3)",
                        CON: "8 (-1)",
                        INT: "2 (-4)",
                        WIS: "12 (+1)",
                        CHA: "3 (-4)"
                    },
                    Skills: "Perception +3, Stealth +5",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: null,
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Keen Hearing and Smell", value: "Adv. on hearing and smelling Perception", spells: null}
                    ],
                    Actions: null,
                    BonusActions: null,
                    Reactions: null
            },
        },
        "Summon Fey Base": {
            "Fuming": {
                name: "",
                subName: "Fuming Spirit",
                type: "Fey Spirit",
                size: "Small",
                AC: "12 + the level of the spell (natural armor)",
                HP: "30 + 10 for each spell level above 3rd",
                Speed: "40ft",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "14 (+2)",
                    INT: "14 (+2)",
                    WIS: "11 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Sylvan, understands the languages you speak",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Shortsword.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + the spell’s level piercing damage + 1d6 force damage."}
                ],
                BonusActions: [
                    {label: "Fey Step.", sublabel: "", description: "The fey magically teleports up to 30 feet to an unoccupied space it can see. Then one of the following effects occurs, based on the fey’s chosen mood:"},
                    {label: "Fuming.", sublabel: "", description: "The fey has advantage on the next attack roll it makes before the end of this turn."}
                ],
                Reactions: null
            },
            "Mirthful": {
                name: "",
                subName: "Mirthful Spirit",
                type: "Fey Spirit",
                size: "Small",
                AC: "12 + the level of the spell (natural armor)",
                HP: "30 + 10 for each spell level above 3rd",
                Speed: "40ft",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "14 (+2)",
                    INT: "14 (+2)",
                    WIS: "11 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Sylvan, understands the languages you speak",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Shortsword.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + the spell’s level piercing damage + 1d6 force damage."}
                ],
                BonusActions: [
                    {label: "Fey Step.", sublabel: "", description: "The fey magically teleports up to 30 feet to an unoccupied space it can see. Then one of the following effects occurs, based on the fey’s chosen mood:"},
                    {label: "Mirthful", sublabel: "", description: "The fey can force one creature it can see within 10 feet of it to make a Wisdom saving throw against your spell save DC. Unless the save succeeds, the target is charmed by you and the fey for 1 minute or until the target takes any damage."}
                ],
                Reactions: null
            },
            "Tricksy": {
                name: "",
                subName: "Tricksy Spirit",
                type: "Fey Spirit",
                size: "Small",
                AC: "12 + the level of the spell (natural armor)",
                HP: "30 + 10 for each spell level above 3rd",
                Speed: "40ft",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "14 (+2)",
                    INT: "14 (+2)",
                    WIS: "11 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Sylvan, understands the languages you speak",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Shortsword.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 3 + the spell’s level piercing damage + 1d6 force damage."}
                ],
                BonusActions: [
                    {label: "Fey Step.", sublabel: "", description: "The fey magically teleports up to 30 feet to an unoccupied space it can see. Then one of the following effects occurs, based on the fey’s chosen mood:"},
                    {label: "Tricksy", sublabel: "", description: "The fey can fill a 5-foot cube within 5 feet of it with magical darkness, which lasts until the end of its next turn."}
                ],
                Reactions: null
            },
        },
        "Summon Shadowspawn Base": {
            "Fury": {
                name: "",
                subName: "Fury",
                type: "Shadowspawn",
                size: "medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "35 + 15 for each spell level above 3rd",
                Speed: "40ft",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "15 (+2)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Necrotic",
                DamageImmunities: "Frightened",
                ConditionImmunities: null,
                Senses: "Darkvision 120ft., Pas. Perception 10",
                Languages: "Understands the languages you speak",
                Description: [
                    {label: "Terror Frenzy.", value: "The spirit has advantage on attack rolls against frightened creatures.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
                    {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Despair": {
                name: "",
                subName: "Despair",
                type: "Shadowspawn",
                size: "medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "35 + 15 for each spell level above 3rd",
                Speed: "40ft",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "15 (+2)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Necrotic",
                DamageImmunities: "Frightened",
                ConditionImmunities: null,
                Senses: "Darkvision 120ft., Pas. Perception 10",
                Languages: "Understands the languages you speak",
                Description: [
                    {label: "Weight of Sorrow.", value: "Any creature, other than you, that starts its turn within 5 feet of the spirit has its speed reduced by 20 feet until the start of that creature’s next turn.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
                    {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Fear": {
                name: "",
                subName: "Fear",
                type: "Shadowspawn",
                size: "medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "35 + 15 for each spell level above 3rd",
                Speed: "40ft",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "15 (+2)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Necrotic",
                DamageImmunities: "Frightened",
                ConditionImmunities: null,
                Senses: "Darkvision 120ft., Pas. Perception 10",
                Languages: "Understands the languages you speak",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
                    {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
                ],
                BonusActions: [
                    {label: "Shadow Stealth.", sublabel: "", description: "While in dim light or darkness, the spirit takes the Hide action."}
                ],
                Reactions: null
            },
        },
        "Summon Aberration Base": {
            "Beholderkin": {
                name: "",
                subName: "Beholderkin",
                type: "Aberration",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "40 + 10 for each spell level above 4th",
                Speed: "30ft., fly 30ft. (hover)",
                Stats: {
                    STR: "16 (+3)",
                    DEX: "10 (+0)",
                    CON: "15 (+2)",
                    INT: "16 (+3)",
                    WIS: "10 (+0)",
                    CHA: "6 (-2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: "Psychic",
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Deep Speech, understands the languages you speak",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The aberration makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Eye Ray.", sublabel: "Ranged Spell Attack:", description: "Your spell attack modifier to hit, range 150 ft., one creature. Hit: 1d8 + 3 + the spell’s level psychic damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Slaad": {
                name: "",
                subName: "Slaad",
                type: "Aberration",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "40 + 10 for each spell level above 4th",
                Speed: "30ft.",
                Stats: {
                    STR: "16 (+3)",
                    DEX: "10 (+0)",
                    CON: "15 (+2)",
                    INT: "16 (+3)",
                    WIS: "10 (+0)",
                    CHA: "6 (-2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: "Psychic",
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Deep Speech, understands the languages you speak",
                Description: [
                    {label: "Regeneration.", value: "The aberration regains 5 hit points at the start of its turn if it has at least 1 hit point.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The aberration makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 3 + the spell’s level slashing damage. If the target is a creature, it can’t regain hit points until the start of the aberration’s next turn."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Star Spawn": {
                name: "",
                subName: "Star Spawn",
                type: "Aberration",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "40 + 10 for each spell level above 4th",
                Speed: "30ft.",
                Stats: {
                    STR: "16 (+3)",
                    DEX: "10 (+0)",
                    CON: "15 (+2)",
                    INT: "16 (+3)",
                    WIS: "10 (+0)",
                    CHA: "6 (-2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: "Psychic",
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Deep Speech, understands the languages you speak",
                Description: [
                    {label: "Whispering Aura.", value: "At the start of each of the aberration’s turns, each creature within 5 feet of the aberration must succeed on a Wisdom saving throw against your spell save DC or take 2d6 psychic damage, provided that the aberration isn’t incapacitated.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The aberration makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Psychic Slam.", sublabel: "Melee Spell Attack:", description: "our spell attack modifier to hit, reach 5 ft., one creature. Hit: 1d8 + 3 + the spell’s level psychic damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
        },
        "Summon Construct Base": {
            "Clay": {
                name: "",
                subName: "Clay",
                type: "Construct",
                size: "Medium",
                AC: "13 + the level of the spell (natural armor)",
                HP: "40 + 15 for each spell level above 4th",
                Speed: "30ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "10 (+0)",
                    CON: "18 (+4)",
                    INT: "14 (+2)",
                    WIS: "11 (+0)",
                    CHA: "5 (-3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Poison",
                DamageImmunities: null,
                ConditionImmunities: "Charmed, Exhaustion, Frightened, Incapacitated, Paralyzed, Petrified, Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Understands the languages you speak.",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The construct makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 4 + the spell’s level bludgeoning damage"},
                ],
                BonusActions: null,
                Reactions: [
                    {label: "Berserk Lashing", sublabel: "", description: "When the construct takes damage, it makes a slam attack against a random creature within 5 feet of it. If no creature is within reach, the construct moves up to half its speed toward an enemy it can see, without provoking opportunity attacks."}
                ]
            },
            "Stone": {
                name: "",
                subName: "Stone",
                type: "Construct",
                size: "Medium",
                AC: "13 + the level of the spell (natural armor)",
                HP: "40 + 15 for each spell level above 4th",
                Speed: "30ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "10 (+0)",
                    CON: "18 (+4)",
                    INT: "14 (+2)",
                    WIS: "11 (+0)",
                    CHA: "5 (-3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Poison",
                DamageImmunities: null,
                ConditionImmunities: "Charmed, Exhaustion, Frightened, Incapacitated, Paralyzed, Petrified, Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Understands the languages you speak.",
                Description: [
                    {label: "Stone Lethargy.", value: "When a creature the construct can see starts its turn within 10 feet of the construct, the construct can force it to make a Wisdom saving throw against your spell save DC. On a failed save, the target can’t use reactions and its speed is halved until the start of its next turn.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The construct makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 4 + the spell’s level bludgeoning damage"},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Metal": {
                name: "",
                subName: "Metal",
                type: "Construct",
                size: "Medium",
                AC: "13 + the level of the spell (natural armor)",
                HP: "40 + 15 for each spell level above 4th",
                Speed: "30ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "10 (+0)",
                    CON: "18 (+4)",
                    INT: "14 (+2)",
                    WIS: "11 (+0)",
                    CHA: "5 (-3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Poison",
                DamageImmunities: null,
                ConditionImmunities: "Charmed, Exhaustion, Frightened, Incapacitated, Paralyzed, Petrified, Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Understands the languages you speak.",
                Description: [
                    {label: "Heated Body.", value: "A creature that touches the construct or hits it with a melee attack while within 5 feet of it takes 1d10 fire damage.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The construct makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 4 + the spell’s level bludgeoning damage"},
                ],
                BonusActions: null,
                Reactions: null
            },
        },
        "Summon Elemental Base": {
            "Air": {
                name: "",
                subName: "Air",
                type: "Elemental",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 4th",
                Speed: "40ft., fly 40ft. (hover)",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "15 (+2)",
                    CON: "17 (+3)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Lightning, Thunder",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Primordial, Understands the languages you speak.",
                Description: [
                    {label: "Amorphous Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level bludgeoning damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Earth": {
                name: "",
                subName: "Earth",
                type: "Elemental",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 4th",
                Speed: "40ft., burrow 40ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "15 (+2)",
                    CON: "17 (+3)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Piercing, Slashing",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Primordial, Understands the languages you speak.",
                Description: [],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level bludgeoning damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Fire": {
                name: "",
                subName: "Fire",
                type: "Elemental",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 4th",
                Speed: "40ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "15 (+2)",
                    CON: "17 (+3)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: "Poison, Fire",
                ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Primordial, Understands the languages you speak.",
                Description: [
                    {label: "Amorphous Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level fire damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Water": {
                name: "",
                subName: "Water",
                type: "Elemental",
                size: "Medium",
                AC: "11 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 4th",
                Speed: "40ft., swim 40ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "15 (+2)",
                    CON: "17 (+3)",
                    INT: "4 (-3)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Acid",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Primordial, Understands the languages you speak.",
                Description: [
                    {label: "Amorphous Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing.", spells: null}
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d10 + 4 + the spell’s level bludgeoning damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
        },
        "Summon Draconic Spirit Base": {
            "Chromatic": {
                name: "",
                subName: "Chromatic",
                type: "Dragon",
                size: "Large",
                AC: "14 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 5th",
                Speed: "30 ft., fly 60 ft., swim 30 ft.",
                Stats: {
                    STR: "19 (+4)",
                    DEX: "14 (+2)",
                    CON: "17 (+3)",
                    INT: "10 (+0)",
                    WIS: "14 (+2)",
                    CHA: "14 (+2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Acid, Cold, Fire, Lightning, Poison",
                DamageImmunities: null,
                ConditionImmunities: "Charmed, Frightened, Poisoned",
                Senses: "Blindsight 30ft. Darkvision 60ft., Pas. Perception 12",
                Languages: "Draconic, understands the languages you speak",
                Description: [
                    {label: "Shared Resistances.", value: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends."},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell’s level piercing damage."},
                    {label: "Breath Weapon.", sublabel: "", description: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Metallic": {
                name: "",
                subName: "Metallic",
                type: "Dragon",
                size: "Large",
                AC: "14 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 5th",
                Speed: "30 ft., fly 60 ft., swim 30 ft.",
                Stats: {
                    STR: "19 (+4)",
                    DEX: "14 (+2)",
                    CON: "17 (+3)",
                    INT: "10 (+0)",
                    WIS: "14 (+2)",
                    CHA: "14 (+2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Acid, Cold, Fire, Lightning, Poison",
                DamageImmunities: null,
                ConditionImmunities: "Charmed, Frightened, Poisoned",
                Senses: "Blindsight 30ft. Darkvision 60ft., Pas. Perception 12",
                Languages: "Draconic, understands the languages you speak",
                Description: [
                    {label: "Shared Resistances.", value: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends."},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell’s level piercing damage."},
                    {label: "Breath Weapon.", sublabel: "", description: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Gem": {
                name: "",
                subName: "Gem",
                type: "Dragon",
                size: "Large",
                AC: "14 + the level of the spell (natural armor)",
                HP: "50 + 10 for each spell level above 5th",
                Speed: "30 ft., fly 60 ft., swim 30 ft.",
                Stats: {
                    STR: "19 (+4)",
                    DEX: "14 (+2)",
                    CON: "17 (+3)",
                    INT: "10 (+0)",
                    WIS: "14 (+2)",
                    CHA: "14 (+2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Force, Necrotic, Psychic, Radiant, Thunder",
                DamageImmunities: null,
                ConditionImmunities: "Charmed, Frightened, Poisoned",
                Senses: "Blindsight 30ft. Darkvision 60ft., Pas. Perception 12",
                Languages: "Draconic, understands the languages you speak",
                Description: [
                    {label: "Shared Resistances.", value: "When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends."},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 + 4 + the spell’s level piercing damage."},
                    {label: "Breath Weapon.", sublabel: "", description: "The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."}
                ],
                BonusActions: null,
                Reactions: null
            },
        },
        "Summon Fiend Base": {
            "Demon": {
                name: "",
                subName: "Demon",
                type: "Fiend",
                size: "Large",
                AC: "12 + the level of the spell (natural armor)",
                HP: "50 + 15 for each spell level above 6th",
                Speed: "40ft., climb 40ft.",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "15 (+2)",
                    INT: "10 (+0)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Fire",
                DamageImmunities: "Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Abyssal, Infernal, telepathy 60 ft.",
                Description: [
                    {label: "Death Throes.", value: "When the fiend drops to 0 hit points or the spell ends, the fiend explodes, and each creature within 10 feet of it must make a Dexterity saving throw against your spell save DC. A creature takes 2d10 + this spell’s level fire damage on a failed save, or half as much damage on a successful one."},
                    {label: "Magic Resistance.", value: "The fiend has advantage on saving throws against spells and other magical effects."},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fiend makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level necrotic damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Devil": {
                name: "",
                subName: "Devil",
                type: "Fiend",
                size: "Large",
                AC: "12 + the level of the spell (natural armor)",
                HP: "40 + 15 for each spell level above 6th",
                Speed: "40ft., fly 60ft.",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "15 (+2)",
                    INT: "10 (+0)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Fire",
                DamageImmunities: "Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Abyssal, Infernal, telepathy 60 ft.",
                Description: [
                    {label: "Devil’s Sight.", value: "Magical darkness doesn’t impede the fiend’s darkvision."},
                    {label: "Magic Resistance.", value: "The fiend has advantage on saving throws against spells and other magical effects."},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fiend makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Hurl Flame.", sublabel: "Ranged Spell Attack:", description: "Your spell attack modifier to hit, range 150 ft., one target. Hit: 2d6 + 3 + the spell’s level fire damage. If the target is a flammable object that isn’t being worn or carried, it also catches fire."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Yugoloth": {
                name: "",
                subName: "Yugoloth",
                type: "Fiend",
                size: "Large",
                AC: "12 + the level of the spell (natural armor)",
                HP: "60 + 10 for each spell level above 6th",
                Speed: "40ft.",
                Stats: {
                    STR: "13 (+1)",
                    DEX: "16 (+3)",
                    CON: "15 (+2)",
                    INT: "10 (+0)",
                    WIS: "10 (+0)",
                    CHA: "16 (+3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Fire",
                DamageImmunities: "Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Abyssal, Infernal, telepathy 60 ft.",
                Description: [
                    {label: "Magic Resistance.", value: "The fiend has advantage on saving throws against spells and other magical effects."},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The fiend makes a number of attacks equal to half this spell’s level (rounded down)."},
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 3 + the spell’s level slashing damage. Immediately after the attack hits or misses, the fiend can magically teleport up to 30 feet to an unoccupied space it can see."},
                ],
                BonusActions: null,
                Reactions: null
            },
            
        },
        "Fiends": {
            "Demons": {
                "Abyssal Chicken": {
                    name: "Abyssal Chicken",
                    subName: null,
                    type: "Demon",
                    size: "Tiny",
                    AC: "13 (Natural Armor)",
                    HP: "10",
                    Speed: "30ft., fly 30ft. (see Bad Flier)",
                    Stats: {
                        STR: "6 (-2)",
                        DEX: "14 (+2)",
                        CON: "13 (+1)",
                        INT: "4 (-3)",
                        WIS: "9 (-1)",
                        CHA: "5 (-3)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Blinded, Poisoned",
                    Senses: "Blindsight 30ft., Pas. Perception 9",
                    Languages: "Understands Abyssal but can't speak",
                    Description: [
                        {label: "Bad Flier.", value: "The abyssal chicken falls at the end of a turn if it’s airborne and the only thing holding it aloft is its flying speed.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The abyssal chicken makes two attacks: one with its bite and one with its claws."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."},
                        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Abyssal Wretch": {
                    name: "Abyssal Wretch",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "11",
                    HP: "18",
                    Speed: "20ft.",
                    Stats: {
                        STR: "9 (-1)",
                        DEX: "12 (+1)",
                        CON: "11 (+0)",
                        INT: "5 (-3)",
                        WIS: "8 (-1)",
                        CHA: "5 (-3)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Charmed, Frightened, Poisoned",
                    Senses: "Darkvision 120ft., Pas. Perception 9",
                    Languages: "Understands Abyssal but can't speak",
                    Description: [],
                    Actions: [
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Dretch": {
                    name: "Dretch",
                    subName: null,
                    type: "Demon",
                    size: "Small",
                    AC: "11",
                    HP: "18",
                    Speed: "20ft.",
                    Stats: {
                        STR: "11 (+0)",
                        DEX: "11 (+0)",
                        CON: "12 (+1)",
                        INT: "5 (-3)",
                        WIS: "8 (-1)",
                        CHA: "5 (-3)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 60ft., Pas. Perception 9",
                    Languages: "Abyssal, Telepathy 60ft.",
                    Description: [],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The dretch makes two attacks: one with its bite and one with its claws."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage."},
                        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."},
                        {label: "Fetid Cloud (1/Day).", sublabel: "", description: "A 10­-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Cackler": {
                    name: "Cackler",
                    subName: null,
                    type: "Demon",
                    size: "Small",
                    AC: "15 Natural Armor",
                    HP: "10",
                    Speed: "30ft.",
                    Stats: {
                        STR: "9 (-1)",
                        DEX: "16 (+3)",
                        CON: "11 (+0)",
                        INT: "11 (+0)",
                        WIS: "7 (-2)",
                        CHA: "12 (+1)"
                    },
                    Skills: "Deception +3, Performance +3",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Pas. Perception 10",
                    Languages: "Abyssal, Common",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The cackler’s innate spellcasting ability is Charisma (spell save DC 11, +3 to hit with spell attacks). The cackler can innately cast the following spells, requiring no material components:", spells: {"At will": "fire bolt", "1/day": "Tasha's hideous laughter"}},
                        {label: "Last Laugh.", value: "When the cackler dies, it releases a dying laugh that scars the minds of other nearby creatures. Each creature within 10 feet of the cackler must succeed on a DC 11 Wisdom saving throw or take 2 (1d4) psychic damage.", spells: null},
                        {label: "Mimicry.", value: "The cackler can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 11 Wisdom (Insight) check.", spells: null},
                    ],
                    Actions: [
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."},
                        {label: "Spiked Chain.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 10 ft., one target. Hit: 6 (1d6 + 3) slashing damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Maw Demon": {
                    name: "Maw Demon",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "13",
                    HP: "33",
                    Speed: "30ft.",
                    Stats: {
                        STR: "14 (+2)",
                        DEX: "8 (-1)",
                        CON: "13 (+1)",
                        INT: "5 (-3)",
                        WIS: "8 (-1)",
                        CHA: "5 (-3)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Charmed, Frightened, Poisoned",
                    Senses: "Darkvision 60ft., Pas. Perception 9",
                    Languages: "Abyssal understands but can’t speak",
                    Description: [
                        {label: "Rampage.", value: "When it reduces a creature to 0 hit points with a melee attack on its turn, the maw demon can take a bonus action to move up to half its speed and make a bite attack.", spells: null}
                    ],
                    Actions: [
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Quasit": {
                    name: "Quasit",
                    subName: null,
                    type: "Demon",
                    size: "Tiny",
                    AC: "13",
                    HP: "7",
                    Speed: "40ft.",
                    Stats: {
                        STR: "5 (-3)",
                        DEX: "17 (+3)",
                        CON: "10 (+0)",
                        INT: "7 (-2)",
                        WIS: "10 (+0)",
                        CHA: "10 (+0)"
                    },
                    Skills: "Stealth +5",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120ft., Pas. Perception 10",
                    Languages: "Abyssal, Common",
                    Description: [
                        {label: "Shapechanger.", value: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.", spells: null},
                        {label: "Magic Resistance.", value: "The quasit has advantage on saving throws against spells and other magical effects.", spells: null}
                    ],
                    Actions: [
                        {label: "Claws (Bite in Beast Form).", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                        {label: "Scare (1/Day).", sublabel: "", description: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."},
                        {label: "Invisibility.", sublabel: "", description: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Rutterkin": {
                    name: "Rutterkin",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "12",
                    HP: "37",
                    Speed: "20ft.",
                    Stats: {
                        STR: "14 (+2)",
                        DEX: "15 (+2)",
                        CON: "17 (+3)",
                        INT: "5 (-3)",
                        WIS: "12 (+1)",
                        CHA: "6 (-2)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Charmed, Frightened, Poisoned",
                    Senses: "Darkvision 120ft., Pas. Perception 11",
                    Languages: "Understands Abyssal but can’t speak",
                    Description: [
                        {label: "Crippling Fear.", value: "When a creature that isn’t a demon starts its turn within 30 feet of three or more rutterkins, it must make a DC 11 Wisdom saving throw. The creature has disadvantage on the save if it’s within 30 feet of six or more rutterkins. On a successful save, the creature is immune to the Crippling Fear of all rutterkins for 24 hours. On a failed save, the creature becomes frightened of the rutterkins for 1 minute. While frightened in this way, the creature is restrained. At the end of each of the frightened creature’s turns, it can repeat the saving throw, ending the effect on itself on a success.", spells: null},
                    ],
                    Actions: [
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned. At the end of each long rest, the poisoned target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while poisoned in this way, it dies and instantly transforms into a living abyssal wretch. The transformation of the body can be undone only by a wish spell."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Bulezau": {
                    name: "Bulezau",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "14 (Natural)",
                    HP: "52",
                    Speed: "40ft.",
                    Stats: {
                        STR: "15 (+2)",
                        DEX: "14 (+2)",
                        CON: "17 (+3)",
                        INT: "8 (-1)",
                        WIS: "9 (-1)",
                        CHA: "6 (-2)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Charmed, Frightened, Poisoned",
                    Senses: "Darkvision 120ft., Pas. Perception 9",
                    Languages: "Abyssal telepathy 60 ft.",
                    Description: [
                        {label: "Rotting Presence.", value: "When any creature that isn’t a demon starts its turn within 30 feet one or more bulezaus, that creature must succeed on a DC 13 Constitution saving throw or take 1d6 necrotic damage plus 1 necrotic damage for each bulezau within 30 feet of it.", spells: null},
                        {label: "Standing Leap.", value: "The bulezau’s long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.", spells: null},
                        {label: "Sure-Footed.", value: "The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.", spells: null}
                    ],
                    Actions: [
                        {label: "Barbed Tail.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 8 (1d12 + 2) piercing damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned until the disease ends. While poisoned in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target’s hit point maximum is reduced by 4 (1d8). The target dies if its hit point maximum is reduced to 0."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Babau": {
                    name: "Babau",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "16 (Natural)",
                    HP: "82",
                    Speed: "40ft.",
                    Stats: {
                        STR: "19 (+4)",
                        DEX: "16 (+3)",
                        CON: "16 (+3)",
                        INT: "11 (+0)",
                        WIS: "12 (+1)",
                        CHA: "13 (+1)"
                    },
                    Skills: "Perception +5, Stealth +5",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120ft., Pas. Perception 15",
                    Languages: "Abyssal",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The babau’s innate spellcasting ability is Wisdom (spell save DC 11). The babau can innately cast the following spells, requiring no material components:", spells: {"At will": "darkness, dispel magic, fear, heat metal, levitate"}},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The babau makes two melee attacks. It can also use Weakening Gaze before or after making these attacks."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."},
                        {label: "Spear.", sublabel: "Melee or Ranged Weapon Attack:", description: "+6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when used with two hands to make a melee attack."},
                        {label: "Weakening Gaze.", sublabel: "", description: "The babau targets one creature that it can see within 20 feet of it. The target must make a DC 13 Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Dybbuk": {
                    name: "Dybbuk",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "14",
                    HP: "37",
                    Speed: "0ft., fly 40ft. (hover)",
                    Stats: {
                        STR: "6 (-2)",
                        DEX: "19 (+4)",
                        CON: "16 (+3)",
                        INT: "16 (+3)",
                        WIS: "15 (+2)",
                        CHA: "14 (+2)"
                    },
                    Skills: "Deception +6, Intimidation +4, Perception +4",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
                    Senses: "Darkvision 120 ft., Passive Perception 14",
                    Languages: "Abyssal, Common telepathy 120 ft.",
                    Description: [
                        {label: "Incorporeal Movement.", value: "The dybbuk can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.", spells: null},
                        {label: "Innate Spellcasting.", value: "The dybbuk’s innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:", spells: {"At will": "dimension door", "3/day each": "fear, phantasmal force"}},
                        {label: "Magic Resistance.", value: "The dybbuk has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Violate Corpse.", value: "The dybbuk can use a bonus action while it is possessing a corpse to make it do something unnatural, such as vomit blood, twist its head all the way around, or cause a quadruped to move as a biped. Any beast or humanoid that sees this behavior must succeed on a DC 12 Wisdom saving throw or become frightened of the dybbuk for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on a saving throw against this ability is immune to Violate Corpse for 24 hours.", spells: null},
                    ],
                    Actions: [
                        {label: "Tendril.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) necrotic damage. If the target is a creature, its hit point maximum is also reduced by 3 (1d6). This reduction lasts until the target finishes a short or long rest. The target dies if this effect reduces its hit point maximum to 0."},
                        {label: "Possess Corpse (Recharge 6).", sublabel: "", description: "The dybbuk disappears into an intact corpse it can see within 5 feet of it. The corpse must be Large or smaller and be that of a beast or a humanoid. The dybbuk is now effectively the possessed creature. Its type becomes undead, though it now looks alive, and it gains a number of temporary hit points equal to the corpse’s hit point maximum in life. While possessing the corpse, the dybbuk retains its hit points, alignment, Intelligence, Wisdom, Charisma, telepathy, and immunity to poison damage, exhaustion, and being charmed and frightened. It otherwise uses the possessed target’s game statistics, gaining access to its knowledge and proficiencies but not its class features, if any. The possession lasts until the temporary hit points are lost (at which point the body becomes a corpse once more) or the dybbuk ends its possession using a bonus action. When the possession ends, the dybbuk reappears in an unoccupied space within 5 feet of the corpse."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Shadow Demon": {
                    name: "Shadow Demon",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "13",
                    HP: "66",
                    Speed: "30ft., fly 30ft.",
                    Stats: {
                        STR: "1 (-5)",
                        DEX: "17 (+3)",
                        CON: "12 (+1)",
                        INT: "14 (+2)",
                        WIS: "13 (+1)",
                        CHA: "14 (+2)"
                    },
                    Skills: "Stealth +7",
                    SavingThrows: "DEX +5, CHA +4",
                    DamageVulnerabilities: "Radiant",
                    DamageResistances: "Acid, Fire, Necrotic, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Cold, Lightning, Poison",
                    ConditionImmunities: "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
                    Senses: "Darkvision 120 ft., Passive Perception 11",
                    Languages: "Abyssal, Telepathy 120 ft.",
                    Description: [
                        {label: "Incorporeal Movement.", value: "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.", spells: null},
                        {label: "Light Sensitivity.", value: "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.", spells: null},
                        {label: "Shadow Stealth.", value: "While in dim light or darkness, the demon can take the Hide action as a bonus action.", spells: null},
                    ],
                    Actions: [
                        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6 + 3) psychic damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Barlgura": {
                    name: "Barlgura",
                    subName: null,
                    type: "Demon",
                    size: "Medium",
                    AC: "15 (Natural Armor)",
                    HP: "68",
                    Speed: "40ft., climb 40ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "15 (+2)",
                        CON: "16 (+3)",
                        INT: "7 (-2)",
                        WIS: "14 (+2)",
                        CHA: "9 (-1)"
                    },
                    Skills: "Perception +5, Stealth +5",
                    SavingThrows: "DEX +5, CON +6",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 30 ft., Darkvision 120 ft., Passive Perception 15",
                    Languages: "Abyssal, Telepathy 120 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The barlgura’s spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components:", spells: {"1/day each": "entangle, phantasmal force", "2/day each": "disguise self, invisibility (self only)"}},
                        {label: "Reckless.", value: "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.", spells: null},
                        {label: "Running Leap.", value: "The barlgura’s long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The barlgura makes three attacks: one with its bite and two with its fists."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage."},
                        {label: "Fist.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) bludgeoning damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Tanarukk": {
                    name: "Tanarukk",
                    subName: null,
                    type: "Demon, orc",
                    size: "Medium",
                    AC: "14 (Natural Armor)",
                    HP: "95",
                    Speed: "30ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "13 (+1)",
                        CON: "20 (+5)",
                        INT: "9 (-1)",
                        WIS: "9 (-1)",
                        CHA: "9 (-1)"
                    },
                    Skills: "Intimidation +2, Perception +2",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Fire, Poison",
                    DamageImmunities: null,
                    ConditionImmunities: null,
                    Senses: "Darkvision 60 ft., Passive Perception 12",
                    Languages: "Abyssal, Common, Orc",
                    Description: [
                        {label: "Aggresive.", value: "As a bonus action, the tanarukk can move up to its speed toward a hostile creature that it can see.", spells: null},
                        {label: "Magic Resistance.", value: "The tanarukk has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The tanarukk makes two attacks: one with its bite and one with its greatsword."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."},
                        {label: "Greatsword.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."},
                    ],
                    BonusActions: null,
                    Reactions: [
                        {label: "Unbridled Fury.", sublabel: "", description: "In response to being hit by a melee attack, the tanarukk can make one melee weapon attack with advantage against the attacker."}
                    ]
                },
                "Chasme": {
                    name: "Chasme",
                    subName: null,
                    type: "Demon",
                    size: "Large",
                    AC: "15 (Natural Armor)",
                    HP: "84",
                    Speed: "20ft., fly 60ft.",
                    Stats: {
                        STR: "15 (+2)",
                        DEX: "15 (+2)",
                        CON: "12 (+1)",
                        INT: "11 (+0)",
                        WIS: "14 (+2)",
                        CHA: "10 (+0)"
                    },
                    Skills: "Perception +5",
                    SavingThrows: "DEX +5, WIS +5",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 10 ft., Darkvision 120 ft., Passive Perception 15",
                    Languages: "Abyssal, Telepathy 120 ft.",
                    Description: [
                        {label: "Drone.", value: "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn within 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can’t hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature’s saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours.", spells: null},
                        {label: "Magic Resistance.", value: "The chasme has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Spider Climb.", value: "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."},
                    ],
                    Actions: [
                        {label: "Proboscis.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one creature. Hit: 16 (4d6 + 2) piercing damage plus 24 (7d6) necrotic damage, and the target’s hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature’s hit point maximum to 0, the creature dies. This reduction to a creature’s hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Vrock": {
                    name: "Vrock",
                    subName: null,
                    type: "Demon",
                    size: "Large",
                    AC: "15 (Natural Armor)",
                    HP: "104",
                    Speed: "40ft., fly 60ft.",
                    Stats: {
                        STR: "17 (+3)",
                        DEX: "15 (+2)",
                        CON: "18 (+4)",
                        INT: "8 (-1)",
                        WIS: "13 (+1)",
                        CHA: "8 (-1)"
                    },
                    Skills: null,
                    SavingThrows: "DEX +5, WIS +4, CHA +2",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 11",
                    Languages: "Abyssal, Telepathy 120 ft.",
                    Description: [
                        {label: "Magic Resistance.", value: "The vrock has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack", sublabel: "", description: "The vrock makes two attacks: one with its beak and one with its talons."},
                        {label: "Beak.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."},
                        {label: "Talons.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage."},
                        {label: "Spores (Recharge 6).", sublabel: "", description: "A 15­-foot­-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."},
                        {label: "Stunning Screech (1/Day).", sublabel: "", description: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
            },
            "Devils": {
                "Lemure": {
                    name: "Lemure",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "7",
                    HP: "13",
                    Speed: "15ft.",
                    Stats: {
                        STR: "10 (+0)",
                        DEX: "5 (-3)",
                        CON: "11 (+0)",
                        INT: "1 (-5)",
                        WIS: "11 (+0)",
                        CHA: "3 (-4)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Charmed, Frightened, Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 10",
                    Languages: "Understands Infernal but can't speak it",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn't impede the lemure's darkvision.", spells: null},
                        {label: "Hellish Rejuvenation.", value: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.", spells: null},
                    ],
                    Actions: [
                        {label: "Fist.", sublabel: "Melee Weapon Attack:", description: "+3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Nupperibo": {
                    name: "Nupperibo",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "13",
                    HP: "11",
                    Speed: "20ft.",
                    Stats: {
                        STR: "16 (+3)",
                        DEX: "11 (+0)",
                        CON: "13 (+1)",
                        INT: "3 (-4)",
                        WIS: "8 (-1)",
                        CHA: "1 (-5)"
                    },
                    Skills: "Perception +1",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Acid, Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Blinded, Charmed, Frightened, Poisoned",
                    Senses: "Blindsight 10 ft. (blind beyond this radius), Passive Perception 11",
                    Languages: "Understands Infernal but can't speak it",
                    Description: [
                        {label: "Cloud of Vermin.", value: "Any creature, other than a devil, that starts its turn within 20 feet of the nupperibo must make a DC 11 Constitution saving throw. A creature within the areas of two or more nupperibos makes the saving throw with disadvantage. On a failure, the creature takes 2 (1d4) piercing damage.", spells: null},
                        {label: "Hunger-Driven.", value: "In the Nine Hells, the nupperibos can flawlessly track any creature that has taken damage from any nupperibo’s Cloud of Vermin within the previous 24 hours.", spells: null},
                    ],
                    Actions: [
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Imp": {
                    name: "Imp",
                    subName: null,
                    type: "Devil",
                    size: "Tiny",
                    AC: "13",
                    HP: "10",
                    Speed: "20ft., fly 40ft.",
                    Stats: {
                        STR: "6 (-2)",
                        DEX: "17 (+3)",
                        CON: "13 (+1)",
                        INT: "11 (+0)",
                        WIS: "12 (+1)",
                        CHA: "14 (+2)"
                    },
                    Skills: "Deception +4, Insight +3, Persuasion +4, Stealth +5",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 11",
                    Languages: "Common, Infernal",
                    Description: [
                        {label: "Shapechanger.", value: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.", spells: null},
                        {label: "Devil's Sight.", value: "Magical darkness doesn't impede the imp's darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The imp has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Sting (Bite in Beast Form).", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."},
                        {label: "Invisibility.", sublabel: "", description: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Spined Devil": {
                    name: "Spined Devil",
                    subName: null,
                    type: "Devil",
                    size: "small",
                    AC: "13 (Natural Armor)",
                    HP: "22",
                    Speed: "20ft., fly 40ft.",
                    Stats: {
                        STR: "10 (+0)",
                        DEX: "15 (+2)",
                        CON: "12 (+1)",
                        INT: "11 (+0)",
                        WIS: "14 (+2)",
                        CHA: "8 (-1)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 12",
                    Languages: "Infernal, Telepathy 120 ft.",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn’t impede the devil’s darkvision.", spells: null},
                        {label: "Flyby.", value: "The devil doesn’t provoke an opportunity attack when it flies out of an enemy’s reach.", spells: null},
                        {label: "Limited Spines.", value: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest.", spells: null},
                        {label: "Magic Resistance.", value: "The devil has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."},
                        {label: "Fork.", sublabel: "Melee Weapon Attack:", description: "+2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."},
                        {label: "Tail Spine.", sublabel: "Ranged Weapon Attack:", description: "+4 to hit, range 20/80 ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Bearded Devil": {
                    name: "Bearded Devil",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "13 (Natural Armor)",
                    HP: "52",
                    Speed: "30ft.",
                    Stats: {
                        STR: "16 (+3)",
                        DEX: "15 (+2)",
                        CON: "15 (+2)",
                        INT: "9 (-1)",
                        WIS: "11 (+0)",
                        CHA: "11 (+0)"
                    },
                    Skills: null,
                    SavingThrows: "STR +5, CON +4, WIS +2",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 10",
                    Languages: "Infernal, Telepathy 120 ft.",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn’t impede the devil’s darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The devil has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Steadfast.", value: "The devil can't be frightened while it can see an allied creature within 30 feet of it.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The devil makes two attacks: one with its beard and one with its glaive."},
                        {label: "Beard.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                        {label: "Glaive.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Merregon": {
                    name: "Merregon",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "16 (Natural Armor)",
                    HP: "45",
                    Speed: "30ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "14 (+2)",
                        CON: "17 (+3)",
                        INT: "6 (-2)",
                        WIS: "12 (+1)",
                        CHA: "8 (-1)"
                    },
                    Skills: null,
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Frightened, Poisoned",
                    Senses: "Darkvision 60 ft., Passive Perception 11",
                    Languages: "understands Infernal but can’t speak, telepathy 120 ft",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn’t impede the merregon’s darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The merregon has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The merregon makes two halberd attacks, or if an allied fiend of challenge rating 6 or higher is within 60 feet of it, the merregon makes three halberd attacks."},
                        {label: "Halberd.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) slashing damage."},
                        {label: "Heavy Crossbow.", sublabel: "Ranged Weapon Attack:", description: "+4 to hit, range 100/400 ft., one target. Hit: 7 (1d10 + 2) piercing damage."},
                    ],
                    BonusActions: null,
                    Reactions: [
                        {label: "Loyal Bodyguard.", sublabel: "", description: "When another fiend within 5 feet of the merregon is hit by an attack, the merregon causes itself to be hit instead."},
                    ]
                },
                "Barbed Devil": {
                    name: "Barbed Devil",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "15 (Natural Armor)",
                    HP: "110",
                    Speed: "30ft.",
                    Stats: {
                        STR: "16 (+3)",
                        DEX: "17 (+3)",
                        CON: "18 (+4)",
                        INT: "12 (+1)",
                        WIS: "14 (+2)",
                        CHA: "14 (+2)"
                    },
                    Skills: "Deception +5, Insight +5, Perception +8",
                    SavingThrows: "STR +6, CON +7, WIS +5, CHA +5",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 18",
                    Languages: "understands Infernal but can’t speak, telepathy 120 ft",
                    Description: [
                        {label: "Barbed Hide.", value: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.", spells: null},
                        {label: "Devil's Sight.", value: "Magical darkness doesn’t impede the devil’s darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The devil has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."},
                        {label: "Tail.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."},
                        {label: "Hurl Flame.", sublabel: "Ranged Spell Attack:", description: "+5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "White Abishai": {
                    name: "White Abishai",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "15 (Natural Armor)",
                    HP: "68",
                    Speed: "30ft., fly 40ft.",
                    Stats: {
                        STR: "16 (+3)",
                        DEX: "11 (+0)",
                        CON: "18 (+4)",
                        INT: "11 (+0)",
                        WIS: "12 (+1)",
                        CHA: "13 (+1)"
                    },
                    Skills: null,
                    SavingThrows: "STR +6, CON +7",
                    DamageVulnerabilities: null,
                    DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Cold, Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 11",
                    Languages: "Draconic, Infernal telepathy 120 ft.",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn’t impede the abishai’s darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The abishai has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The abishai’s weapon attacks are magical.", spells: null},
                        {label: "Reckless.", value: "At the start of its turn, the abishai can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The abishai makes two attacks: one with its longsword and one with its claw."},
                        {label: "Longsword.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) slashing damage."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 3 (1d6) cold damage."},
                    ],
                    BonusActions: null,
                    Reactions: [
                        {label: "Vicious Reprisal.", sublabel: "", description: "In response to taking damage, the abishai makes a bite attack against a random creature within 5 feet of it. If no creature is within reach, the abishai moves up to half its speed toward an enemy it can see, without provoking opportunity attacks."}
                    ]
                },
                "Black Abishai": {
                    name: "Black Abishai",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "15 (Natural Armor)",
                    HP: "58",
                    Speed: "30ft., fly 40ft.",
                    Stats: {
                        STR: "14 (+2)",
                        DEX: "17 (+3)",
                        CON: "14 (+2)",
                        INT: "13 (+1)",
                        WIS: "16 (+3)",
                        CHA: "11 (+0)"
                    },
                    Skills: "Perception +6, Stealth +6",
                    SavingThrows: "DEX +6, WIS +6",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Acid, Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 16",
                    Languages: "Draconic, Infernal telepathy 120 ft.",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn’t impede the abishai’s darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The abishai has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The abishai’s weapon attacks are magical.", spells: null},
                        {label: "Shadow Stealth.", value: "While in dim light or darkness, the abishai can take the Hide action as a bonus action.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The abishai makes three attacks: two with its scimitar and one with its bite."},
                        {label: "Scimitar.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 9 (2d8) acid damage."},
                        {label: "Creeping Darkness (Recharge 6).", sublabel: "", description: "The abishai casts darkness at a point within 120 feet of it, requiring no components. Wisdom is its spellcasting ability for this spell. While the spell persists, the abishai can move the area of darkness up to 60 feet as a bonus action."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Chain Devil": {
                    name: "Chain Devil",
                    subName: null,
                    type: "Devil",
                    size: "Medium",
                    AC: "16 (Natural Armor)",
                    HP: "85",
                    Speed: "30ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "15 (+2)",
                        CON: "18 (+4)",
                        INT: "11 (+0)",
                        WIS: "12 (+1)",
                        CHA: "14 (+2)"
                    },
                    Skills: null,
                    SavingThrows: "CON +7, WIS +4, CHA +5",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 11",
                    Languages: "Infernal, Telepathy 120 ft.",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn't impede the devil's darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The devil has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The devil makes two attacks with its chains."},
                        {label: "Chain.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns."},
                        {label: "Animate Chains (Recharges after a Short or Long Rest).", sublabel: "", description: "Up to four chains the devil can see within 60 feet of it magically sprout razor-­edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried. Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."},
                    ],
                    BonusActions: null,
                    Reactions: [
                        {label: "Unnerving Mask.", sublabel: "", description: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."},
                    ]
                },
                "Bone Devil": {
                    name: "Bone Devil",
                    subName: null,
                    type: "Devil",
                    size: "Large",
                    AC: "19 (Natural Armor)",
                    HP: "142",
                    Speed: "40ft., fly 40ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "16 (+3)",
                        CON: "18 (+4)",
                        INT: "13 (+1)",
                        WIS: "14 (+2)",
                        CHA: "16 (+3)"
                    },
                    Skills: "Deception +7, Insight +6",
                    SavingThrows: "INT +5, WIS +6, CHA +7",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 120 ft., Passive Perception 12",
                    Languages: "Infernal, Telepathy 120 ft.",
                    Description: [
                        {label: "Devil's Sight.", value: "Magical darkness doesn't impede the devil's darkvision.", spells: null},
                        {label: "Magic Resistance.", value: "The devil has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The devil makes three attacks: two with its claws and one with its sting."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage."},
                        {label: "Sting.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                    ],
                    BonusActions: null,
                    Reactions: [
                        {label: "Unnerving Mask.", sublabel: "", description: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."},
                    ]
                },
                "Orthon": {
                    name: "Orthon",
                    subName: null,
                    type: "Devil",
                    size: "Large",
                    AC: "17 (Half-Plate)",
                    HP: "105",
                    Speed: "30ft., climb 30ft.",
                    Stats: {
                        STR: "22 (+6)",
                        DEX: "16 (+3)",
                        CON: "21 (+5)",
                        INT: "15 (+2)",
                        WIS: "15 (+2)",
                        CHA: "16 (+3)"
                    },
                    Skills: "Perception +10, Stealth +11, Survival +10",
                    SavingThrows: "DEX +7, CON +9, WIS +6",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
                    DamageImmunities: "Fire, Poison",
                    ConditionImmunities: "Charmed, Exhaustion, Poisoned",
                    Senses: "Darkvision 120 ft., Truesight 30 ft., Passive Perception 20",
                    Languages: "Common, Infernal, Telepathy 120 ft.",
                    Description: [
                        {label: "Invisibility Field.", value: "The orthon can use a bonus action to become invisible. Any equipment the orthon wears or carries is also invisible as long as the equipment is on its person. This invisibility ends immediately after the orthon makes an attack roll or is hit by an attack.", spells: null},
                        {label: "Magic Resistance.", value: "The orthon has advantage on saving throws against spells and other magical effects.", spells: null},
                    ],
                    Actions: [
                        {label: "Infernal Dagger.", sublabel: "Melee Weapon Attack:", description: "+10 to hit, reach 5 ft., one target. Hit: 11 (2d4 + 6) slashing damage, and the target must make a DC 17 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is also poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                        {label: "Infernal Crossbow.", sublabel: "Ranged Weapon Attack:", description: "+7 to hit, range 100/400 ft., one target. Hit: 14 (2d10 + 3) piercing damage, plus one of the following effects:"},
                        {label: "1. Acid.", sublabel: "", description: "The target must make a DC 17 Constitution saving throw, taking an additional 17 (5d6) acid damage on a failed save, or half as much damage on a successful one."},
                        {label: "2. Blindness (1/Day).", sublabel: "", description: "The target takes 5 (1d10) radiant damage. In addition, the target and all other creatures within 20 feet of it must each make a successful DC 17 Dexterity saving throw or be blinded until the end of the orthon’s next turn."},
                        {label: "3. Concussion.", sublabel: "", description: "The target and each creature within 20 feet of it must make a DC 17 Constitution saving throw, taking 13 (2d12) thunder damage on a failed save, or half as much damage on a successful one."},
                        {label: "4. Entanglement.", sublabel: "", description: "The target must make a successful DC 17 Dexterity saving throw or be restrained for 1 hour by strands of sticky webbing. A restrained creature can escape by using an action to make a successful DC 17 Dexterity or Strength check. Any creature other than an orthon that touches the restrained creature must make a successful DC 17 Dexterity saving throw or become similarly restrained."},
                        {label: "5. Paralysis (1/Day).", sublabel: "", description: "The target takes 22 (4d10) lightning damage and must make a successful DC 17 Constitution saving throw or be paralyzed for 1 minute. The paralyzed target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                        {label: "6. Tracking.", sublabel: "", description: "For the next 24 hours, the orthon knows the direction and distance to the target, as long as it’s on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there."},
                    ],
                    BonusActions: null,
                    Reactions: [
                        {label: "Explosive Retribution.", sublabel: "", description: "When it is reduced to 15 hit points or fewer, the orthon causes itself to explode. All other creatures within 30 feet of it must each make a DC 17 Dexterity saving throw, taking 9 (2d8) fire damage plus 9 (2d8) thunder damage on a failed save, or half as much damage on a successful one. This explosion destroys the orthon, its infernal dagger, and its brass crossbow."},
                    ]
                },
            },
            "Yugoloths": {
                "Merrenoloth": {
                    name: "Merrenoloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "13",
                    HP: "40",
                    Speed: "30ft., swim 40ft.",
                    Stats: {
                        STR: "8 (-1)",
                        DEX: "17 (+3)",
                        CON: "10 (+0)",
                        INT: "17 (+3)",
                        WIS: "14 (+2)",
                        CHA: "11 (+0)"
                    },
                    Skills: "History +5, Nature +5, Perception +4, Survival +4",
                    SavingThrows: "DEX +5, INT +5",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 14",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The merrenoloth’s innate spellcasting ability is Intelligence (spell save DC 13). It can innately cast the following spells, requiring no material components:", spells: {"At will:": "charm person, darkness, detect magic, dispel magic, gust of wind", "3/day:": "control water", "1/day": "control weather"}},
                        {label: "Magic Resistance.", value: "The merrenoloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The merrenoloth’s weapon attacks are magical.", spells: null},
                        {label: "Teleport.", value: "As a bonus action, the merrenoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The merrenoloth uses Fear Gaze once and makes one oar attack."},
                        {label: "Oar.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage."},
                        {label: "Fear Gaze.", sublabel: "", description: "The merrenoloth targets one creature it can see within 60 feet of it. The target must succeed on a DC 13 Wisdom saving throw or become frightened of the merrenoloth for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Mezzoloth": {
                    name: "Mezzoloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "18",
                    HP: "75",
                    Speed: "40ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "11 (+0)",
                        CON: "16 (+3)",
                        INT: "7 (-2)",
                        WIS: "10 (+0)",
                        CHA: "11 (+0)"
                    },
                    Skills: "Perception +3",
                    SavingThrows: "DEX +5, INT +5",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 13",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The mezzoloth’s innate spellcasting ability is Charisma (spell save DC 11). The mezzoloth can innately cast the following spells, requiring no material components:", spells: {"2/day each:": "darkness, dispel magic", "1/day": "cloudkill"}},
                        {label: "Magic Resistance.", value: "The mezzoloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The mezzoloth’s weapon attacks are magical.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The mezzoloth makes two attacks: one with its claws and one with its trident."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage."},
                        {label: "Trident.", sublabel: "Melee or Ranged Weapon Attack:", description: "+7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when held with two claws and used to make a melee attack."},
                        {label: "Teleport.", sublabel: "", description: "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Dhergoloth": {
                    name: "Dhergoloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "15",
                    HP: "119",
                    Speed: "40ft.",
                    Stats: {
                        STR: "17 (+3)",
                        DEX: "10 (+0)",
                        CON: "19 (+4)",
                        INT: "7 (-2)",
                        WIS: "10 (+0)",
                        CHA: "9 (-1)"
                    },
                    Skills: null,
                    SavingThrows: "STR +6",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 10",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The dhergoloth’s innate spellcasting ability is Charisma (spell save DC 10). It can innately cast the following spells, requiring no material components:", spells: {"At will:": "darkness, fear", "3/day": "sleep"}},
                        {label: "Magic Resistance.", value: "The dhergoloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The dhergoloth’s weapon attacks are magical.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The dhergoloth makes two claw attacks."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) slashing damage."},
                        {label: "Flailing Claws (Recharge 5–6).", sublabel: "", description: "The dhergoloth moves up to its walking speed in a straight line and targets each creature within 5 feet of it during its movement. Each target must succeed on a DC 14 Dexterity saving throw or take 22 (3d12 + 3) slashing damage."},
                        {label: "Teleport.", sublabel: "", description: "The dhergoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Hydroloth": {
                    name: "Hydroloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "15",
                    HP: "135",
                    Speed: "20ft., swim 40ft.",
                    Stats: {
                        STR: "12 (+1)",
                        DEX: "21 (+5)",
                        CON: "16 (+3)",
                        INT: "19 (+4)",
                        WIS: "10 (+0)",
                        CHA: "14 (+2)"
                    },
                    Skills: "Insight +4, Perception +4",
                    SavingThrows: null,
                    DamageVulnerabilities: "Fire",
                    DamageResistances: "Cold, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 14",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Amphibious.", value: "The hydroloth can breathe air and water.", spells: null},
                        {label: "Innate Spellcasting.", value: "The hydroloth’s innate spellcasting ability is Charisma (spell save DC 10). It can innately cast the following spells, requiring no material components:", spells: {"At will:": "darkness, detect magic, dispel magic, invisibility (self only), water walk", "3/day each": "control water, crown of madness, fear, phantasmal killer, suggestion"}},
                        {label: "Magic Resistance.", value: "The hydroloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The hydroloth’s weapon attacks are magical.", spells: null},
                        {label: "Secure Memory.", value: "The hydroloth is immune to the waters of the River Styx as well as any effect that would steal or modify its memories or detect or read its thoughts.", spells: null},
                        {label: "Watery Advantage.", value: "While submerged in liquid, the hydroloth has advantage on attack rolls.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The hydroloth makes two melee attacks. In place of one of these attacks, it can cast one spell that takes 1 action to cast."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+9 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+9 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) piercing damage."},
                        {label: "Steal Memory (1/Day).", sublabel: "", description: "The hydroloth targets one creature it can see within 60 feet of it. The target takes 4d6 psychic damage, and it must make a DC 16 Intelligence saving throw. On a successful save, the target becomes immune to this hydroloth’s Steal Memory for 24 hours. On a failed save, the target loses all proficiencies, it can’t cast spells, it can’t understand language, and if its Intelligence and Charisma scores are higher than 5, they become 5. Each time the target finishes a long rest, it can repeat the saving throw, ending the effect on itself on a success. A greater restoration or remove curse spell cast on the target ends this effect early."},
                        {label: "Teleport.", sublabel: "", description: "The hydroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Canoloth": {
                    name: "Canoloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "16 (Natural Armor)",
                    HP: "120",
                    Speed: "50ft.",
                    Stats: {
                        STR: "18 (+4)",
                        DEX: "10 (+0)",
                        CON: "17 (+3)",
                        INT: "5 (-3)",
                        WIS: "17 (+3)",
                        CHA: "12 (+1)"
                    },
                    Skills: "Investigation +3, Perception +9",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Darkvision 60 ft., Truesight 120 ft., Passive Perception 19",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Dimensional Lock.", value: "Other creatures can’t teleport to or from a space within 60 feet of the canoloth. Any attempt to do so is wasted.", spells: null},
                        {label: "Magic Resistance.", value: "The canoloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The canoloth’s weapon attacks are magical.", spells: null},
                        {label: "Uncanny Senses.", value: "The canoloth can’t be surprised while it isn’t incapacitated.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The canoloth makes two attacks: one with its tongue or its bite and one with its claws."},
                        {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 25 (6d6 + 4) piercing damage."},
                        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) slashing damage."},
                        {label: "Tongue.", sublabel: "Ranged Weapon Attack:", description: "+7 to hit, range 30 ft., one target. Hit: 17 (2d12 + 4) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 15), pulled up to 30 feet toward the canoloth, and restrained until the grapple ends. The canoloth can grapple one target at a time with its tongue."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Nycaloth": {
                    name: "Nycaloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "18",
                    HP: "123",
                    Speed: "40ft., fly 60ft.",
                    Stats: {
                        STR: "20 (+5)",
                        DEX: "11 (+0)",
                        CON: "19 (+4)",
                        INT: "12 (+1)",
                        WIS: "10 (+0)",
                        CHA: "15 (+2)"
                    },
                    Skills: "Intimidation +6, Perception +4, Stealth +4",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 14",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The nycaloth’s innate spellcasting ability is Charisma. The nycaloth can innately cast the following spells, requiring no material components:", spells: {"At will:": "darkness, detect magic, dispel magic, invisibility (self only), mirror image"}},
                        {label: "Magic Resistance.", value: "The nycaloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The nycaloth’s weapon attacks are magical.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4). Any creature can take an action to stanch the wound with a successful DC 13 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."},
                        {label: "Greataxe.", sublabel: "Melee Weapon Attack:", description: "+9 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) slashing damage."},
                        {label: "Teleport.", sublabel: "", description: "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Yagnoloth": {
                    name: "Yagnoloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "17",
                    HP: "147",
                    Speed: "40ft.",
                    Stats: {
                        STR: "19 (+4)",
                        DEX: "14 (+2)",
                        CON: "21 (+5)",
                        INT: "16 (+3)",
                        WIS: "15 (+2)",
                        CHA: "18 (+4)"
                    },
                    Skills: "Deception +8, Insight +6, Perception +6, Persuasion +8",
                    SavingThrows: "DEX +6, INT +7, WIS +6, CHA +8",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 16",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The yagnoloth’s innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:", spells: {"At will:": "darkness, detect magic, dispel magic, invisibility (self only), suggestion", "3/day": "lightning bolt"}},
                        {label: "Magic Resistance.", value: "The yagnoloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The yagnoloth’s weapon attacks are magical.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The yagnoloth makes one massive arm attack and one electrified touch attack, or it makes one massive arm attack and teleports before or after the attack."},
                        {label: "Electrified Touch.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 5 ft., one target. Hit: 27 (6d8) lightning damage."},
                        {label: "Massive Arm.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 15 ft., one target. Hit: 23 (3d12 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or become stunned until the end of the yagnoloth’s next turn."},
                        {label: "Life Leech.", sublabel: "", description: "The yagnoloth touches one incapacitated creature within 15 feet of it. The target takes 36 (7d8 + 4) necrotic damage, and the yagnoloth gains temporary hit points equal to half the damage dealt. The target must succeed on a DC 16 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest, and the target dies if its hit point maximum is reduced to 0."},
                        {label: "Battlefield Cunning (Recharge 4-6).", sublabel: "", description: "Up to two allied yugoloths within 60 feet of the yagnoloth that can hear it can use their reactions to make one melee attack each."},
                        {label: "Teleport.", sublabel: "", description: "The yagnoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Arcanaloth": {
                    name: "Arcanaloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "17 (Natural Armor)",
                    HP: "104",
                    Speed: "30ft., fly 30ft.",
                    Stats: {
                        STR: "17 (+3)",
                        DEX: "12 (+1)",
                        CON: "14 (+2)",
                        INT: "20 (+5)",
                        WIS: "16 (+3)",
                        CHA: "17 (+3)"
                    },
                    Skills: "Arcana +13, Deception +9, Insight +9, Perception +7",
                    SavingThrows: "DEX +5, INT +9, WIS +7, CHA +7",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Charmed, Poisoned",
                    Senses: "Truesight 120 ft., Passive Perception 17",
                    Languages: "All, Telepathy 120 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The arcanaloth’s innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components:", spells: {"At will:": "alter self, darkness, heat metal, invisibility (self only), magic missile"}},
                        {label: "Magic Resistance.", value: "The arcanaloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The arcanaloth’s weapon attacks are magical.", spells: null},
                        {label: "Spellcasting.", value: "The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared:", spells: 
                            {
                                "Cantrips (at will):": "fire bolt, mage hand, minor illusion, prestidigitation",
                                "1st level (4 slots):": "detect magic, identify, shield, Tenser’s floating disk",
                                "2nd level (3 slots):": "detect thoughts, mirror image, phantasmal force, suggestion",
                                "3rd level (3 slots):": "counterspell, fear, fireball",
                                "4th level (3 slots):": "banishment, dimension door",
                                "5th level (2 slots):": "contact other plane, hold monster",
                                "6th level (1 slot):": "chain lightning",
                                "7th level (1 slot):": "finger of death",
                                "8th level (1 slot):": "mind blank",
                            }},
                    ],
                    Actions: [
                        {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."},
                        {label: "Teleport.", sublabel: "", description: "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Oinoloth": {
                    name: "Oinoloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "17 (Natural Armor)",
                    HP: "126",
                    Speed: "40ft.",
                    Stats: {
                        STR: "19 (+4)",
                        DEX: "17 (+3)",
                        CON: "18 (+4)",
                        INT: "17 (+3)",
                        WIS: "16 (+3)",
                        CHA: "19 (+4)"
                    },
                    Skills: "Deception +8, Intimidation +8, Perception +7",
                    SavingThrows: "CON +8, WIS +7",
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Poisoned",
                    Senses: "Blindsight 60 ft., Darkvision 60 ft., Passive Perception 17",
                    Languages: "Abyssal, Infernal, Telepathy 60 ft.",
                    Description: [
                        {label: "Bringer of Plagues (Recharge 5–6).", value: "As a bonus action, the oinoloth blights the area within 30 feet of it. The blight lasts for 24 hours. While blighted, all normal plants in the area wither and die, and the number of hit points restored by a spell to a creature in that area is halved. Furthermore, when a creature moves into the blighted area or starts its turn there, that creature must make a DC 16 Constitution saving throw. On a successful save, the creature is immune to the oinoloth’s Bringer of Plagues for the next 24 hours. On a failed save, the creature takes 14 (4d6) necrotic damage and is poisoned. The poisoned creature can’t regain hit points. After every 24 hours that elapse, the poisoned creature can repeat the saving throw. On a failed save, the creature’s hit point maximum is reduced by 5 (1d10). This reduction lasts until the poison ends, and the target dies if its hit point maximum is reduced to 0. The poison ends after the creature successfully saves against it three times.", spells: null},
                        {label: "Innate Spellcasting.", value: "The oinoloth’s innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:", spells: {"At will:": "darkness, detect magic, dispel magic, invisibility (self only)", "1/day each:": "feeblemind, globe of invulnerability, wall of fire, wall of ice"}},
                        {label: "Magic Resistance.", value: "The oinoloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The oinoloth’s weapon attacks are magical.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack", sublabel: "", description: "The oinoloth uses its Transfixing Gaze and makes two claw attacks."},
                        {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) slashing damage plus 22 (4d10) necrotic damage."},
                        {label: "Corrupted Healing (Recharge 6).", sublabel: "", description: "The oinoloth touches one willing creature within 5 feet of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. The target then gains 1 level of exhaustion, and its hit point maximum is reduced by 7 (2d6). This reduction can be removed only by a wish spell or by casting greater restoration on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0."},
                        {label: "Teleport.", sublabel: "", description: "The oinoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
                "Ultroloth": {
                    name: "Ultroloth",
                    subName: null,
                    type: "Yugoloth",
                    size: "Medium",
                    AC: "19 (Natural Armor)",
                    HP: "153",
                    Speed: "30ft., fly 60ft.",
                    Stats: {
                        STR: "16 (+3)",
                        DEX: "16 (+3)",
                        CON: "18 (+4)",
                        INT: "18 (+4)",
                        WIS: "15 (+2)",
                        CHA: "19 (+4)"
                    },
                    Skills: "Intimidation +9, Perception +7, Stealth +8",
                    SavingThrows: null,
                    DamageVulnerabilities: null,
                    DamageResistances: "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                    DamageImmunities: "Acid, Poison",
                    ConditionImmunities: "Charmed, Frightened, Poisoned",
                    Senses: "Truesight 120 ft., Passive Perception 17",
                    Languages: "Abyssal, Infernal, Telepathy 120 ft.",
                    Description: [
                        {label: "Innate Spellcasting.", value: "The ultroloth’s innate spellcasting ability is Charisma (spell save DC 17). The ultroloth can innately cast the following spells, requiring no material components:", spells: {"At will:": "alter self, clairvoyance, darkness, detect magic, detect thoughts, dispel magic, invisibility (self only), suggestion", "3/day each:": "dimension door, fear, wall of fire", "1/day each:": "fire storm, mass suggestion"}},
                        {label: "Magic Resistance.", value: "The ultroloth has advantage on saving throws against spells and other magical effects.", spells: null},
                        {label: "Magic Weapons.", value: "The ultroloth’s weapon attacks are magical.", spells: null},
                    ],
                    Actions: [
                        {label: "Multiattack.", sublabel: "", description: "The ultroloth can use its Hypnotic Gaze and makes three melee attacks."},
                        {label: "Longsword.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."},
                        {label: "Hypnotic Gaze.", sublabel: "", description: "The ultroloth’s eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth’s next turn. The charmed target is stunned. If the target’s saving throw is successful, the target is immune to the ultroloth’s gaze for the next 24 hours."},
                        {label: "Teleport.", sublabel: "", description: "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."},
                    ],
                    BonusActions: null,
                    Reactions: null
                },
            }
        },
        "Elementals": {
            "Steam Mephit": {
                name: "Steam Mephit",
                subName: null,
                type: "Elemental",
                size: "Small",
                AC: "10",
                HP: "21",
                Speed: "30ft., fly 30ft.",
                Stats: {
                    STR: "5 (-3)",
                    DEX: "11 (+0)",
                    CON: "10 (+0)",
                    INT: "11 (+0)",
                    WIS: "10 (+0)",
                    CHA: "12 (+1)"
                },
                Skills: null,
                DamageResistances: null,
                DamageImmunities: "Fire, Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Aquan, Ignan",
                Description: [
                    {label: "Death Burst.", value: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage.", spells: null},
                    {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.", spells: null},
                ],
                Actions: [
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage."},
                    {label: "Steam Breath (Recharge 6).", sublabel: "", description: "The mephit exhales a 15- foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Dust Mephit": {
                name: "Dust Mephit",
                subName: null,
                type: "Elemental",
                size: "Small",
                AC: "12",
                HP: "17",
                Speed: "30ft., fly 30ft.",
                Stats: {
                    STR: "5 (-3)",
                    DEX: "14 (+2)",
                    CON: "10 (+0)",
                    INT: "9 (-1)",
                    WIS: "11 (+0)",
                    CHA: "10 (+0)"
                },
                Skills: "Perception +2, Stealth +4",
                SavingThrows: null,
                DamageVulnerabilities: "Fire",
                DamageResistances: null,
                DamageImmunities: "Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 12",
                Languages: "Auran, Terran",
                Description: [
                    {label: "Death Burst.", value: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.", spells: null},
                    {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.", spells: null},
                ],
                Actions: [
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage."},
                    {label: "Blinding Breath (Recharge 6).", sublabel: "", description: "The mephit exhales a 15- foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Ice Mephit": {
                name: "Ice Mephit",
                subName: null,
                type: "Elemental",
                size: "Small",
                AC: "11",
                HP: "21",
                Speed: "30ft., fly 30ft.",
                Stats: {
                    STR: "7 (-2)",
                    DEX: "13 (+1)",
                    CON: "10 (+0)",
                    INT: "9 (-1)",
                    WIS: "11 (+0)",
                    CHA: "12 (+1)"
                },
                Skills: "Perception +2, Stealth +3",
                SavingThrows: null,
                DamageVulnerabilities: "Bludgeoning, Fire",
                DamageResistances: null,
                DamageImmunities: "Cold, Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 12",
                Languages: "Aquan, Auran",
                Description: [
                    {label: "Death Burst.", value: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one.", spells: null},
                    {label: "False Appearance.", value: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.", spells: null},
                    {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.", spells: null},
                ],
                Actions: [
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage."},
                    {label: "Frost Breath (Recharge 6).", sublabel: "", description: "The mephit exhales a 15- foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Smoke Mephit": {
                name: "Smoke Mephit",
                subName: null,
                type: "Elemental",
                size: "Small",
                AC: "12",
                HP: "22",
                Speed: "30ft., fly 30ft.",
                Stats: {
                    STR: "6 (-2)",
                    DEX: "14 (+2)",
                    CON: "12 (+1)",
                    INT: "10 (+0)",
                    WIS: "10 (+0)",
                    CHA: "11 (+0)"
                },
                Skills: "Perception +2, Stealth +4",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: "Fire, Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 12",
                Languages: "Auran, Ignan",
                Description: [
                    {label: "Death Burst.", value: "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute.", spells: null},
                    {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma.", spells: null},
                ],
                Actions: [
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage."},
                    {label: "Cinder Breath (Recharge 6).", sublabel: "", description: "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded until the end of the mephit’s next turn."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Magma Mephit": {
                name: "Magma Mephit",
                subName: null,
                type: "Elemental",
                size: "Small",
                AC: "11",
                HP: "22",
                Speed: "30ft., fly 30ft.",
                Stats: {
                    STR: "8 (-1)",
                    DEX: "12 (+1)",
                    CON: "12 (+1)",
                    INT: "7 (-2)",
                    WIS: "10 (+0)",
                    CHA: "10 (+0)"
                },
                Skills: "Stealth +3",
                SavingThrows: null,
                DamageVulnerabilities: "Cold",
                DamageResistances: null,
                DamageImmunities: "Fire, Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Ignan, Terran",
                Description: [
                    {label: "Death Burst.", value: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.", spells: null},
                    {label: "False Appearance.", value: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.", spells: null},
                    {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.", spells: null},
                ],
                Actions: [
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage."},
                    {label: "Fire Breath (Recharge 6).", sublabel: "", description: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."}
                ],
                BonusActions: null,
                Reactions: null
            },
            "Magmin": {
                name: "Magmin",
                subName: null,
                type: "Elemental",
                size: "Small",
                AC: "14",
                HP: "9",
                Speed: "30ft.",
                Stats: {
                    STR: "7 (-2)",
                    DEX: "15 (+2)",
                    CON: "12 (+1)",
                    INT: "8 (-1)",
                    WIS: "11 (+0)",
                    CHA: "10 (+0)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Fire",
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Ignan,",
                Description: [
                    {label: "Death Burst.", value: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.", spells: null},
                    {label: "Ignited Illumination.", value: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet.", spells: null},
                ],
                Actions: [
                    {label: "Touch.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Azer": {
                name: "Azer",
                subName: null,
                type: "Elemental",
                size: "Medium",
                AC: "17 (Natural Armor, Shield)",
                HP: "39",
                Speed: "30ft.",
                Stats: {
                    STR: "17 (+3)",
                    DEX: "12 (+1)",
                    CON: "15 (+2)",
                    INT: "12 (+1)",
                    WIS: "13 (+1)",
                    CHA: "10 (+0)"
                },
                Skills: null,
                SavingThrows: "CON +4",
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: "Fire, Poison",
                ConditionImmunities: "Poisoned",
                Senses: "Pas. Perception 11",
                Languages: "Ignan",
                Description: [
                    {label: "Heated Body.", value: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage.", spells: null},
                    {label: "Heated Weapons.", value: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).", spells: null},
                    {label: "Illumination.", value: "The azer sheds bright light in a 10-­foot radius and dim light for an additional 10 feet.", spells: null},
                ],
                Actions: [
                    {label: "Warhammer.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Gargoyle": {
                name: "Gargoyle",
                subName: null,
                type: "Elemental",
                size: "Medium",
                AC: "15 (Natural Armor)",
                HP: "52",
                Speed: "30ft., fly 60ft.",
                Stats: {
                    STR: "15 (+2)",
                    DEX: "11 (+0)",
                    CON: "16 (+3)",
                    INT: "6 (-2)",
                    WIS: "11 (+0)",
                    CHA: "7 (-2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Petrified, Poisoned",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Terran",
                Description: [
                    {label: "False Appearance.", value: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The gargoyle makes two attacks: one with its bite and one with its claws."},
                    {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."},
                    {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Air Elemental": {
                name: "Air Elemental",
                subName: null,
                type: "Elemental",
                size: "Large",
                AC: "15",
                HP: "90",
                Speed: "0ft., fly 90ft. (hover)",
                Stats: {
                    STR: "14 (+2)",
                    DEX: "20 (+5)",
                    CON: "14 (+2)",
                    INT: "6 (-2)",
                    WIS: "10 (+0)",
                    CHA: "6 (-2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Auran",
                Description: [
                    {label: "Air Form.", value: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes two slam attacks."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."},
                    {label: "Whirlwind (Recharge 4-6).", sublabel: "", description: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Earth Elemental": {
                name: "Earth Elemental",
                subName: null,
                type: "Elemental",
                size: "Large",
                AC: "17",
                HP: "126",
                Speed: "30ft., burrow 30ft.",
                Stats: {
                    STR: "20 (+5)",
                    DEX: "8 (-1)",
                    CON: "20 (+5)",
                    INT: "5 (-3)",
                    WIS: "10 (+0)",
                    CHA: "5 (-3)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: "Thunder",
                DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
                Senses: "Darkvision 60ft., Tremorsense 60 ft., Pas. Perception 10",
                Languages: "Terran",
                Description: [
                    {label: "Earth Glide.", value: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.", spells: null},
                    {label: "Siege Monster.", value: "The elemental deals double damage to objects and structures.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes two slam attacks."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "+8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Fire Elemental": {
                name: "Fire Elemental",
                subName: null,
                type: "Elemental",
                size: "Large",
                AC: "13",
                HP: "102",
                Speed: "50ft.",
                Stats: {
                    STR: "10 (+0)",
                    DEX: "17 (+3)",
                    CON: "16 (+3)",
                    INT: "6 (-2)",
                    WIS: "10 (+0)",
                    CHA: "7 (-2)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Fire, Poison",
                ConditionImmunities: "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Ignan",
                Description: [
                    {label: "Fire Form.", value: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns.", spells: null},
                    {label: "Illumination.", value: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet.", spells: null},
                    {label: "Water Susceptibility.", value: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes two touch attacks."},
                    {label: "Touch.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Water Elemental": {
                name: "Water Elemental",
                subName: null,
                type: "Elemental",
                size: "Large",
                AC: "14",
                HP: "114",
                Speed: "30ft. swim 90 ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "14 (+2)",
                    CON: "18 (+4)",
                    INT: "5 (-3)",
                    WIS: "10 (+0)",
                    CHA: "8 (-1)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Acid; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Aquan",
                Description: [
                    {label: "Water Form.", value: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.", spells: null},
                    {label: "Freeze.", value: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The elemental makes two slam attacks."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."},
                    {label: "Whelm (Recharge 4–6).", sublabel: "", description: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space. The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength check and succeeding."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Water Weird": {
                name: "Water Weird",
                subName: null,
                type: "Elemental",
                size: "Large",
                AC: "13",
                HP: "58",
                Speed: "0ft. swim 60 ft.",
                Stats: {
                    STR: "17 (+3)",
                    DEX: "16 (+3)",
                    CON: "13 (+1)",
                    INT: "11 (+0)",
                    WIS: "10 (+0)",
                    CHA: "10 (+0)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Fire; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Grappled, Paralyzed, Poisoned, Prone, Restrained, Unconscious",
                Senses: "Blindsight 30 ft., Passive Perception 10",
                Languages: "Understands Aquan but doesn’t speak",
                Description: [
                    {label: "Invisible in Water.", value: "The water weird is invisible while fully immersed in water.", spells: null},
                    {label: "Water Bound.", value: "The water weird dies if it leaves the water to which it is bound or if that water is destroyed.", spells: null},
                ],
                Actions: [
                    {label: "Constrict.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 10 ft., one creature. Hit: 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can’t constrict another target."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Salamander": {
                name: "Salamander",
                subName: null,
                type: "Elemental",
                size: "Large",
                AC: "15",
                HP: "90",
                Speed: "30ft.",
                Stats: {
                    STR: "18 (+4)",
                    DEX: "14 (+2)",
                    CON: "15 (+2)",
                    INT: "11 (+0)",
                    WIS: "10 (+0)",
                    CHA: "12 (+1)"
                },
                Skills: null,
                SavingThrows: null,
                DamageVulnerabilities: "Cold",
                DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Fire",
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 10",
                Languages: "Ignan",
                Description: [
                    {label: "Heated Body.", value: "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage.", spells: null},
                    {label: "Heated Weapons.", value: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack).", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The salamander makes two attacks: one with its spear and one with its tail."},
                    {label: "Spear.", sublabel: "Melee or Ranged Weapon Attack:", description: "+7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."},
                    {label: "Tail.", sublabel: "Melee Weapon Attack:", description: "+7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Xorn": {
                name: "Xorn",
                subName: null,
                type: "Elemental",
                size: "Medium",
                AC: "19 (Natural Armor)",
                HP: "73",
                Speed: "20ft., burrow 20ft.",
                Stats: {
                    STR: "17 (+3)",
                    DEX: "10 (+0)",
                    CON: "22 (+6)",
                    INT: "11 (+0)",
                    WIS: "10 (+0)",
                    CHA: "11 (+0)"
                },
                Skills: "Perception +6, Stealth +3",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Piercing and Slashing from Nonmagical Attacks that aren't Adamantine",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
                Senses: "Darkvision 60 ft., Tremorsense 60 ft., Passive Perception 16",
                Languages: "Terran",
                Description: [
                    {label: "Earth Glide.", value: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.", spells: null},
                    {label: "Stone Camouflage.", value: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.", spells: null},
                    {label: "Treasure Sense.", value: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The xorn makes three claw attacks and one bite attack."},
                    {label: "Claw.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."},
                    {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
            "Invisible Stalker": {
                name: "Invisible Stalker",
                subName: null,
                type: "Elemental",
                size: "Medium",
                AC: "14",
                HP: "104",
                Speed: "50ft., fly 50ft. (hover)",
                Stats: {
                    STR: "16 (+3)",
                    DEX: "19 (+4)",
                    CON: "14 (+2)",
                    INT: "10 (+0)",
                    WIS: "15 (+2)",
                    CHA: "11 (+0)"
                },
                Skills: "Perception +8, Stealth +10",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
                DamageImmunities: "Poison",
                ConditionImmunities: "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
                Senses: "Darkvision 60 ft., Passive Perception 18",
                Languages: "Auran Understands Common but doesn't speak it",
                Description: [
                    {label: "Invisibility.", value: "The stalker is invisible.", spells: null},
                    {label: "Faultless Tracker.", value: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.", spells: null},
                ],
                Actions: [
                    {label: "Multiattack.", sublabel: "", description: "The stalker makes two slam attacks."},
                    {label: "Slam.", sublabel: "Melee Weapon Attack:", description: "+6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."},
                ],
                BonusActions: null,
                Reactions: null
            },
        },
        "Summon Fey": {},
        "Summon Lesser Demons": {},
        "Summon Shadowspawn": {},
        "Conjure Minor Elementals": {},
        "Summon Aberration": {},
        "Summon Construct": {},
        "Summon Elemental": {},
        "Summon Greater Demon": {},
        "Conjure Elemental": {},
        "Infernal Calling": {},
        "Summon Draconic Spirit": {},
        "Summon Fiend": {}
        }
        this.feySpiritMapper();
        this.lesserDemonMapper();
        this.shadowSpawnMapper();
        this.minorElementalMapper();
        this.aberrationMapper();
        this.constructMapper();
        this.elementalSpiritMapper();
        this.greaterDemonMapper();
        this.elementalMapper();
        this.devilMapper();
        this.draconicSpiritMapper();
        this.fiendMapper();
    }

    toggleRecentlyConjured() {
        this.setState({recentlyConjured: !this.state.recentlyConjured})
    }

    selectSpell(spell) {
        this.setState({ selectedSpell: spell });
    }

    feySpiritMapper() {
        fetch(`/api/feySpirits`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    const feySpirits = data.rows;
                    feySpirits.forEach((spirit) => {
                        const name = spirit.name;
                        const type = spirit.type;
                        this.conjures["Summon Fey"][name] = {...this.conjures["Summon Fey Base"][type], name: name};
                    });
                }
            })
    }

    lesserDemonMapper() {
        fetch(`/api/fiends/lesserDemons`)
            .then((res) => res.json())
            .then((data) => {
                if (data.rowCount > 0) {
                    const lesserDemons = data.rows;
                    lesserDemons.forEach((demon) => {
                        const name = demon.name;
                        const crMap = {
                            0.125: "1/8",
                            0.25: "1/4",
                            0.5: "1/2",
                        }
                        const cr = (demon.cr in crMap) ? crMap[demon.cr] : demon.cr; 
                        this.conjures["Summon Lesser Demons"][name] = {...this.conjures["Fiends"]["Demons"][name], subName: cr}
                    });
                }
            })
    }

    shadowSpawnMapper() {
        fetch(`/api/shadowSpirits`)
            .then((res) => res.json())
            .then((data) => {
                if (data.rowCount > 0) {
                    const shadowSpirits = data.rows;
                    shadowSpirits.forEach((spirit) => {
                        const name = spirit.name;
                        const type = spirit.type;
                        this.conjures["Summon Shadowspawn"][name] = {...this.conjures["Summon Shadowspawn Base"][type], name: name};
                    });
                }
            })
    }

    minorElementalMapper() {
        fetch(`/api/elementals/minor`)
            .then((res) => res.json())
            .then((data) => {
                if (data.rowCount > 0) {
                    const minorElementals = data.rows;
                    minorElementals.forEach((elemental) => {
                        const name = elemental.name;
                        const crMap = {
                            0.125: "1/8",
                            0.25: "1/4",
                            0.5: "1/2",
                        }
                        const cr = (elemental.cr in crMap) ? crMap[elemental.cr] : elemental.cr; 
                        this.conjures["Conjure Minor Elementals"][name] = {...this.conjures["Elementals"][name], subName: cr}
                    });
                }
            })
    }

    aberrationMapper() {
        fetch(`/api/aberrations`)
        .then((res) => res.json())
        .then((data) => {
            if(data.rowCount > 0) {
                const aberrations = data.rows;
                aberrations.forEach((aberration) => {
                    const name = aberration.name;
                    const type = aberration.type;
                    this.conjures["Summon Aberration"][name] = {...this.conjures["Summon Aberration Base"][type], name: name};
                });
            }
        })
    }

    constructMapper() {
        fetch(`/api/constructs`)
        .then((res) => res.json())
        .then((data) => {
            if(data.rowCount > 0) {
                const constructs = data.rows;
                constructs.forEach((construct) => {
                    const name = construct.name;
                    const type = construct.type;
                    this.conjures["Summon Construct"][name] = {...this.conjures["Summon Construct Base"][type], name: name};
                });
            }
        })
    }

    elementalSpiritMapper() {
        fetch(`/api/elementals`)
          .then((res) => res.json())
          .then((data) => {
              if(data.rowCount > 0) {
                  const elementalSpirits = data.rows;
                  elementalSpirits.forEach((spirit) => {
                      const name = spirit.name;
                      const type = spirit.type;
                      this.conjures["Summon Elemental"][name] = {...this.conjures["Summon Elemental Base"][type], name: name};
                  });
              }
          })
    }

    greaterDemonMapper() {
        fetch(`/api/fiends/greaterDemons`)
          .then((res) => res.json())
          .then((data) => {
              if (data.rowCount > 0) {
                  const greaterDemons = data.rows;
                  greaterDemons.forEach((demon) => {
                      const name = demon.name;
                      const crMap = {
                          0.125: "1/8",
                          0.25: "1/4",
                          0.5: "1/2",
                      }
                      const cr = (demon.cr in crMap) ? crMap[demon.cr] : demon.cr; 
                      this.conjures["Summon Greater Demon"][name] = {...this.conjures["Fiends"]["Demons"][name], subName: cr}
                  });
              }
          })
    }

    elementalMapper() {
        fetch(`/api/elementals`)
            .then((res) => res.json())
            .then((data) => {
                if (data.rowCount > 0) {
                    const elementals = data.rows;
                    elementals.forEach((elemental) => {
                        const name = elemental.name;
                        const crMap = {
                            0.125: "1/8",
                            0.25: "1/4",
                            0.5: "1/2",
                        }
                        const cr = (elemental.cr in crMap) ? crMap[elemental.cr] : elemental.cr; 
                        this.conjures["Conjure Elemental"][name] = {...this.conjures["Elementals"][name], subName: cr}
                    });
                }
            })
    }

    devilMapper() {
        fetch(`/api/fiends/devils`)
            .then((res) => res.json())
            .then((data) => {
                if (data.rowCount > 0) {
                    const devils = data.rows;
                    devils.forEach((devil) => {
                        const name = devil.name;
                        const crMap = {
                            0.125: "1/8",
                            0.25: "1/4",
                            0.5: "1/2",
                        }
                        const cr = (devil.cr in crMap) ? crMap[devil.cr] : devil.cr; 
                        this.conjures["Infernal Calling"][name] = {...this.conjures["Fiends"]["Devils"][name], subName: cr}
                    });
                }
            })
    }

    draconicSpiritMapper() {
        fetch(`/api/draconicSpirits`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    const draconicSpirits = data.rows;
                    draconicSpirits.forEach((spirit) => {
                        const name = spirit.name;
                        const type = spirit.type;
                        this.conjures["Summon Draconic Spirit"][name] = {...this.conjures["Summon Draconic Spirit Base"][type], name: name};
                    });
                }
            })
    }

   fiendMapper() {
        fetch(`/api/fiends`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    const fiendishSpirits = data.rows;
                    fiendishSpirits.forEach((spirit) => {
                        const name = spirit.name;
                        const type = spirit.type;
                        this.conjures["Summon Fiend"][name] = {...this.conjures["Summon Fiend Base"][type], name: name};
                    });
                }
            })
    }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <SpellSelector selectSpell={this.selectSpell}></SpellSelector>
        <SpellViewer selectedSpell={this.state.selectedSpell}></SpellViewer>
        <PossibleConjures toggleRecentlyConjured={this.toggleRecentlyConjured} conjures={this.conjures} selectedSpell={this.state.selectedSpell}></PossibleConjures>
        <MinionViewer recentlyConjured={this.state.recentlyConjured}  toggleRecentlyConjured={ this.toggleRecentlyConjured } conjures={this.conjures}></MinionViewer>
      </div>
    );
  }
}

export default App;
