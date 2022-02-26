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
                Skills: "--",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Blindsight 60ft., Pas. Perception 11",
                Languages: "--",
                Description: [
                    {label: "Echolocation", value: "No blindsight while deafened."},
                    {label: "Keen Hearing", value: "Adv. on hearing Perception"}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Keen Smell", value: "Adv. on smelling Perception"}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Amphibious", value: "Can breathe air and water."}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Amphibious", value: "Can breathe air and water."},
                    {label: "Standing Leap", value: "Long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Keen Sight", value: "Adv. on sight Perception"}
                ],
                Actions: null,
                BonusActions: null
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
                Skills: "--",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Darkvision 30ft., Pas. Perception 9",
                Languages: "--",
                Description: [],
                Actions: null,
                BonusActions: null
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
                    {label: "Hold Breath", value: "While out of water, can hold its breath for 30 minutes."},
                    {label: "Underwater Camouflage", value: "Adv. on Stealth checks made while underwater."},
                    {label: "Water Breathing", value: "Can breathe only underwater."}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Flyby", value: "Does not provoke opportunity attacks when it flies out of an enemy's reach."},
                    {label: "Keen Hearing and Sight", value: "Adv. on hearing and sight Perception"}
                ],
                Actions: null,
                BonusActions: null
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
                Skills: "--",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Blindsight 30ft., Pas. Perception 10",
                Languages: "--",
                Description: [],
                Actions: null,
                BonusActions: null
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
                Skills: "--",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Darkvision 60ft., Pas. Perception 8",
                Languages: "--",
                Description: [
                    {label: "Water Breathing", value: "Can breathe only underwater."}
                ],
                Actions: null,
                BonusActions: null
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
                Skills: "--",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Darkvision 30ft., Pas. Perception 10",
                Languages: "--",
                Description: [
                    {label: "Keen Smell", value: "Adv. on smelling Perception"}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Mimicry", value: "Can mimic simple sounds it has heard. A creature that hears the sounds can tell they are imitations with a succesful DC 10 Insight check."}
                ],
                Actions: null,
                BonusActions: null
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
                Skills: "--",
                SavingThrows: null,
                DamageVulnerabilities: null,
                DamageResistances: null,
                DamageImmunities: null,
                ConditionImmunities: null,
                Senses: "Pas. Perception 10",
                Languages: "--",
                Description: [
                    {label: "Water Breathing", value: "Can breathe only underwater."}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Spider Climb", value: "Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."},
                    {label: "Web Sense", value: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."},
                    {label: "Web Walker", value: "Ignores movement restrictions caused by webbing."}
                ],
                Actions: null,
                BonusActions: null
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
                    {label: "Keen Hearing and Smell", value: "Adv. on hearing and smelling Perception"}
                ],
                Actions: null,
                BonusActions: null
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
            Skills: "--",
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
            ]
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
            Skills: "--",
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
            ]
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
            Skills: "--",
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
            ]
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
            Skills: "--",
            SavingThrows: null,
            DamageVulnerabilities: null,
            DamageResistances: "Necrotic",
            DamageImmunities: "Frightened",
            ConditionImmunities: null,
            Senses: "Darkvision 120ft., Pas. Perception 10",
            Languages: "Understands the languages you speak",
            Description: [
                {label: "Terror Frenzy", value: "The spirit has advantage on attack rolls against frightened creatures."}
            ],
            Actions: [
                {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
                {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
            ],
            BonusActions: null
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
            Skills: "--",
            SavingThrows: null,
            DamageVulnerabilities: null,
            DamageResistances: "Necrotic",
            DamageImmunities: "Frightened",
            ConditionImmunities: null,
            Senses: "Darkvision 120ft., Pas. Perception 10",
            Languages: "Understands the languages you speak",
            Description: [
                {label: "Weight of Sorrow", value: "Any creature, other than you, that starts its turn within 5 feet of the spirit has its speed reduced by 20 feet until the start of that creature’s next turn."}
            ],
            Actions: [
                {label: "Multiattack.", sublabel: "", description: "The fey makes a number of attacks equal to half this spell’s level (rounded down)."},
                {label: "Chilling Rend.", sublabel: "Melee Weapon Attack:", description: "Your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d12 + 3 + the spell’s level cold damage."},
                {label: "Dreadful Scream (1/Day).", sublabel: "", description: "The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be frightened of the spirit for 1 minute. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."}
            ],
            BonusActions: null
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
            Skills: "--",
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
            ]
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
            Skills: "--",
            SavingThrows: null,
            DamageVulnerabilities: null,
            DamageResistances: "Cold, Fire, Lightning",
            DamageImmunities: "Poison",
            ConditionImmunities: "Blinded, Poisoned",
            Senses: "Blindsight 30ft., Pas. Perception 9",
            Languages: "Understands Abyssal but can't speak",
            Description: [
                {label: "Bad Flier.", value: "The abyssal chicken falls at the end of a turn if it’s airborne and the only thing holding it aloft is its flying speed."},
            ],
            Actions: [
                {label: "Multiattack.", sublabel: "", description: "The abyssal chicken makes two attacks: one with its bite and one with its claws."},
                {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."},
                {label: "Claws.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."},
            ],
            BonusActions: null
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
            Skills: "--",
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
            BonusActions: null
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
            Skills: "--",
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
            BonusActions: null
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
                {label: "Innate Spellcasting.", value: "The cackler’s innate spellcasting ability is Charisma (spell save DC 11, +3 to hit with spell attacks). The cackler can innately cast the following spells, requiring no material components:"},
                {label: "Last Laugh.", value: "When the cackler dies, it releases a dying laugh that scars the minds of other nearby creatures. Each creature within 10 feet of the cackler must succeed on a DC 11 Wisdom saving throw or take 2 (1d4) psychic damage."},
                {label: "Mimicry.", value: "The cackler can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 11 Wisdom (Insight) check."},
            ],
            Spells: [
                {label: "At will:", value: "fire bolt"},
                {label: "1/day:", value: "Tasha’s hideous laughter"},
            ],
            Actions: [
                {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."},
                {label: "Spiked Chain.", sublabel: "Melee Weapon Attack:", description: "+5 to hit, reach 10 ft., one target. Hit: 6 (1d6 + 3) slashing damage."},
            ],
            BonusActions: null
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
            Skills: "--",
            SavingThrows: null,
            DamageVulnerabilities: null,
            DamageResistances: "Cold, Fire, Lightning",
            DamageImmunities: "Poison",
            ConditionImmunities: "Charmed, Frightened, Poisoned",
            Senses: "Darkvision 60ft., Pas. Perception 9",
            Languages: "Abyssal understands but can’t speak",
            Description: [
                {label: "Rampage.", value: "When it reduces a creature to 0 hit points with a melee attack on its turn, the maw demon can take a bonus action to move up to half its speed and make a bite attack."}
            ],
            Actions: [
                {label: "Bite.", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage."},
            ],
            BonusActions: null
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
                {label: "Shapechanger.", value: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."},
                {label: "Magic Resistance.", value: "The quasit has advantage on saving throws against spells and other magical effects."}
            ],
            Actions: [
                {label: "Claws (Bite in Beast Form).", sublabel: "Melee Weapon Attack:", description: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."},
                {label: "Scare (1/Day).", sublabel: "", description: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."},
                {label: "Invisibility.", sublabel: "", description: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."},
            ],
            BonusActions: null
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
            Skills: "--",
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
            BonusActions: null
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
            BonusActions: null
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
            BonusActions: null
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
            BonusActions: null
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
            BonusActions: null
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
            Skills: "--",
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
            BonusActions: null
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
            Skills: "--",
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
            BonusActions: null
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
            Skills: "--",
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
            BonusActions: null
        },
      },
      "Summon Fey": {
      },
      "Summon Lesser Demons": {
      },
      "Summon Shadowspawn": {

      },
      "Conjure Minor Elementals": {

      }
    }
    this.feySpiritMapper();
    this.lesserDemonMapper();
    this.shadowSpawnMapper();
    this.minorElementalMapper();
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
