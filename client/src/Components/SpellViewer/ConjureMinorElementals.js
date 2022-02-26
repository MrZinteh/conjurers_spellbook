import React from "react";

class ConjureMinorElementals extends React.Component {
    render() {
        return (
            <div className="ConjureMinorElementals">
                <div className="SpellHeading"><h1 className="SpellTitle">Conjure Minor Elementals</h1><i className="i-concentration">Concentration</i></div>
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
                                    <div className="statBlockItemValue">1 Minute</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Range/Area</div>
                                    <div className="statBlockItemValue">90 ft</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Components</div>
                                    <div className="statBlockItemValue">V, S</div>
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
                                    <p>You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:</p>
                                    <ul>
                                        <li>One elemental of challenge rating 2 or lower</li>
                                        <li>Two elementals of challenge rating 1 or lower</li>
                                        <li>Four elementals of challenge rating 1/2 or lower</li>
                                        <li>Eight elementals of challenge rating 1/4 or lower.</li>
                                    </ul>
                                    <p>An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.</p>
                                    <p>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</p>
                                    <p>The GM has the creatures' statistics.</p>
                                    <p><strong>At Higher Levels. </strong>When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.</p>                      
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default ConjureMinorElementals;