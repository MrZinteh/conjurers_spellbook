import React from "react";

class ConjureElemental extends React.Component {
    render() {
        return (
            <div className="ConjureMinorElementals">
                <div className="SpellHeading"><h1 className="SpellTitle">Conjure Elemental</h1><i className="i-concentration">Concentration</i></div>
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
                                    <p>You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.</p>
                                    <p>The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.</p>
                                    <p>If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.</p>
                                    <p><strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.</p>                      

                                    <span className="components-blurb">* - (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)</span>

                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default ConjureElemental;