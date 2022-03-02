import React from "react";

class InfernalCalling extends React.Component {
    render() {
        return (
            <div className="InfernalCalling">
                <div className="SpellHeading"><h1 className="SpellTitle">Infernal Calling</h1><i className="i-concentration">Concentration</i></div>
                <div className="SpellDetails">
                    <section className="MoreInfo">
                        <section className="detailContent">
                            <div className="statBlock">
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Level</div>
                                    <div className="statBlockItemValue">5th</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Casting Time</div>
                                    <div className="statBlockItemValue">1 Minute</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Range/Area</div>
                                    <div className="statBlockItemValue">90 ft</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Components</div>
                                    <div className="statBlockItemValue">V, S, M *</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Duration</div>
                                    <div className="statBlockItemValue"><i className="i-concentration">Concentration</i> 1 Hour</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Attack/Save</div>
                                    <div className="statBlockItemValue">None</div>
                                </div>
                                <div className="spellLine"></div>
                                <div className="more-info-content">
                                    <p>Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil’s type, which must be one of challenge rating 6 or lower, such as a <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/barbed_devil">barbed devil</a> or a <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/bearded_devil">bearded devil</a>. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.</p>
                                    <p>The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master’s control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature’s statistics.</p>
                                    <p>On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (<a className="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Deception">Deception</a>, <a className="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Intimidation">Intimidation</a>, or <a className="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Persuasion">Persuasion</a>) check contested by its Wisdom (<a className="tooltip-hover skill-tooltip" href="https://www.dndbeyond.com/compendium/rules/basic-rules/using-ability-scores#Deception">Insight</a>) check. You make the check with advantage if you say the devil’s true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command — such as “attack my enemies,” “explore the room ahead,” or “bear this message to the queen” — until it completes the activity, at which point it returns to you to report having done so.</p>
                                    <p>If your concentration ends before the spell reaches its full duration, the devil doesn’t disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears.</p>
                                    <p>If you possess an individual devil’s talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required.</p>
                                    <p><strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.</p>
                    
                                    <span className="components-blurb">* - (a ruby worth at least 999 gp)</span>
                        
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default InfernalCalling;