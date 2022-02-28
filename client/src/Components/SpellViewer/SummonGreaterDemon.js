import React from "react";

class SummonGreaterDemon extends React.Component {
    render() {
        return (
            <div className="SummonGreaterDemon">
                <div className="SpellHeading"><h1 className="SpellTitle">Summon Greater Demon</h1><i className="i-concentration">Concentration</i></div>
                <div className="SpellDetails">
                    <section className="MoreInfo">
                        <section className="detailContent">
                            <div className="statBlock">
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Level</div>
                                    <div className="statBlockItemValue">4th</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Casting Time</div>
                                    <div className="statBlockItemValue">1 Action</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Range/Area</div>
                                    <div className="statBlockItemValue">60 ft</div>
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
                                    <p>You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon’s type, which must be one of challenge rating 5 or lower, such as a <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/shadow_demon">shadow demon</a> or a <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/barlgura">barlgura</a>. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.</p>
                                    <p>Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.</p>
                                    <p>At the end of each of the demon’s turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn’t disappear for 1d6 rounds if it still has hit points.</p>
                                    <p>As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can’t cross the circle or harm it, and it can’t target anyone within it. Using the material component in this manner consumes it when the spell ends.</p>
                                    <p><strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th.</p>
                    
                                    <span className="components-blurb">* - (a vial of blood from a humanoid killed within the past 24 hours)</span>
                        
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default SummonGreaterDemon;