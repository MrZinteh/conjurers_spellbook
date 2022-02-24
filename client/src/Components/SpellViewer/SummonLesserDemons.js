import React from "react";

class SummonLesserDemons extends React.Component {
    render() {
        return (
            <div className="SummonLesserDemons">
                <div className="SpellHeading"><h1 className="SpellTitle">Summon Lesser Demons</h1><i className="i-concentration">Concentration</i></div>
                <div className="SpellDetails">
                    <section className="MoreInfo">
                        <section className="detailContent">
                            <div className="statBlock">
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Level</div>
                                    <div className="statBlockItemValue">3rd</div>
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
                                    <p>You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.</p>
                                    <div className="table-overflow-wrapper">
                                        <table className="compendium-left-aligned-table">
                                            <thead>
                                                <tr>
                                                    <th>d6</th>
                                                    <th>Demons Summoned</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1-2</td>
                                                    <td>Two demons of challenge rating 1 or lower</td>
                                                </tr>
                                                <tr>
                                                    <td>3-4</td>
                                                    <td>Four demons of challenge rating 1/2 or lower</td>
                                                </tr>
                                                <tr>
                                                    <td>5-6</td>
                                                    <td>Eight demons of challenge rating 1/4 or lower</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p>The DM chooses the demons, such as <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/manes">manes</a> or <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/dretch">dretches</a>, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.</p>
                                    <p>The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.</p>
                                    <p>As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can’t cross the circle or harm it, and they can’t target anyone within it. Using the material component in this manner consumes it when the spell ends.</p>
                                    <p><strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons.</p>
                    
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

export default SummonLesserDemons;