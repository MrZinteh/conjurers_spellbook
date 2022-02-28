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
    this.conjures = {
      "Find Familiar": {
          "Bat": {
                name: "Bat",
                subName: null,
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                type: "Familiar",
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
                {label: "Death Burst.", value: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage."},
                {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma."},
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
                {label: "Death Burst.", value: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."},
                {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma."},
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
                {label: "Death Burst.", value: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one."},
                {label: "False Appearance.", value: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."},
                {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma."},
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
                {label: "Death Burst.", value: "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute."},
                {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma."},
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
                {label: "Death Burst.", value: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."},
                {label: "False Appearance.", value: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."},
                {label: "Innate Spellcasting (1/day).", value: "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma."},
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
                {label: "Death Burst.", value: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited."},
                {label: "Ignited Illumination.", value: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet."},
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
                {label: "Heated Body.", value: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."},
                {label: "Heated Weapons.", value: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."},
                {label: "Illumination.", value: "The azer sheds bright light in a 10-­foot radius and dim light for an additional 10 feet."},
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
                {label: "False Appearance.", value: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue."},
            ],
            Actions: [
                {label: "Multiattack.", sublabel: "", description: "The gargoyle makes two attacks: one with its bite and one with its claws."},
                {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."},
                {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."},
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
    }
    this.feySpiritMapper();
    this.lesserDemonMapper();
    this.shadowSpawnMapper();
    this.minorElementalMapper();
    this.aberrationMapper();
    this.constructMapper();
    this.elementalSpiritMapper();
    this.greaterDemonMapper();
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
                    this.conjures["Summon Lesser Demons"][name] = {...this.conjures["Demons"][name], subName: cr}
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
                      this.conjures["Summon Greater Demon"][name] = {...this.conjures["Demons"][name], subName: cr}
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
