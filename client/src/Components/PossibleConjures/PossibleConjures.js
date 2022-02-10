import React from "react";
import SmallStatBlock from "../SmallStatBlock/SmallStatBlock";
import "./PossibleConjures.css";

class PossibleConjures extends React.Component {
    constructor(props) {
        super(props);
        this.conjures = {
            "FindFamiliar": {
                "Bat": {
                    name: "Bat",
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
                    Senses: "Blindsight 60ft., Pas. Perception 11",
                    Languages: "--",
                    Description: [
                        {label: "Echolocation", value: "No blindsight while deafened."},
                        {label: "Keen Hearing", value: "Adv. on hearing Perception"}
                    ]
                },
                "Cat": {
                    name: "Cat",
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
                    Senses: "Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Keen Smell", value: "Adv. on smelling Perception"}
                    ]
                },
                "Crab": {
                    name: "Crab",
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
                    Senses: "Blindsight 30ft., Pas. Perception 9",
                    Languages: "--",
                    Description: [
                        {label: "Amphibious", value: "Can breathe air and water."}
                    ]
                },
                "Frog": {
                    name: "Frog",
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
                    Senses: "Darkvision 30ft., Pas. Perception 11",
                    Languages: "--",
                    Description: [
                        {label: "Amphibious", value: "Can breathe air and water."},
                        {label: "Standing Leap", value: "Long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."}
                    ]
                },
                "Hawk": {
                    name: "Hawk",
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
                    Senses: "Pas. Perception 14",
                    Languages: "--",
                    Description: [
                        {label: "Keen Sight", value: "Adv. on sight Perception"}
                    ]
                },
                "Lizard": {
                    name: "Lizard",
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
                    Senses: "Darkvision 30ft., Pas. Perception 9",
                    Languages: "--",
                    Description: []
                },
                "Octopus": {
                    name: "Octopus",
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
                    Senses: "Darkvision 30ft., Pas. Perception 12",
                    Languages: "--",
                    Description: [
                        {label: "Hold Breath", value: "While out of water, can hold its breath for 30 minutes."},
                        {label: "Underwater Camouflage", value: "Adv. on Stealth checks made while underwater."},
                        {label: "Water Breathing", value: "Can breathe only underwater."}
                    ]
                },
                "Owl": {
                    name: "Owl",
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
                    Senses: "Darkvision 120ft., Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Flyby", value: "Does not provoke opportunity attacks when it flies out of an enemy's reach."},
                        {label: "Keen Hearing and Sight", value: "Adv. on hearing and sight Perception"}
                    ]
                },
                "Poisonous Snake": {
                    name: "Poisonous Snake",
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
                    Senses: "Blindsight 30ft., Pas. Perception 10",
                    Languages: "--",
                    Description: []
                },
                "Fish": {
                    name: "Fish",
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
                    Senses: "Darkvision 60ft., Pas. Perception 8",
                    Languages: "--",
                    Description: [
                        {label: "Water Breathing", value: "Can breathe only underwater."}
                    ]
                },
                "Rat": {
                    name: "Rat",
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
                    Senses: "Darkvision 30ft., Pas. Perception 10",
                    Languages: "--",
                    Description: [
                        {label: "Keen Smell", value: "Adv. on smelling Perception"}
                    ]
                },
                "Raven": {
                    name: "Raven",
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
                    Senses: "Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Mimicry", value: "Can mimic simple sounds it has heard. A creature that hears the sounds can tell they are imitations with a succesful DC 10 Insight check."}
                    ]
                },
                "Sea Horse": {
                    name: "Sea Horse",
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
                    Senses: "Pas. Perception 10",
                    Languages: "--",
                    Description: [
                        {label: "Water Breathing", value: "Can breathe only underwater."}
                    ]
                },
                "Spider": {
                    name: "Spider",
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
                    Senses: "Darkvision 30ft., Pas. Perception 10",
                    Languages: "--",
                    Description: [
                        {label: "Spider Climb", value: "Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."},
                        {label: "Web Sense", value: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."},
                        {label: "Web Walker", value: "Ignores movement restrictions caused by webbing."}
                    ]
                },
                "Weasel": {
                    name: "Weasel",
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
                    Senses: "Pas. Perception 13",
                    Languages: "--",
                    Description: [
                        {label: "Keen Hearing and Smell", value: "Adv. on hearing and smelling Perception"}
                    ]
                },
            }
        }
    }
    render() {
        return (
            <div className="PossibleConjures">
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Bat']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Cat']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Crab']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Frog']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Hawk']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Lizard']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Octopus']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Owl']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Poisonous Snake']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Fish']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Rat']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Raven']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Sea Horse']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Spider']}></SmallStatBlock>
                <SmallStatBlock conjure={this.conjures['FindFamiliar']['Weasel']}></SmallStatBlock>
            </div>
        );
    }
}

export default PossibleConjures;