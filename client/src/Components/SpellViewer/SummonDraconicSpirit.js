import React from "react";

class SummonDraconicSpirit extends React.Component {
    render() {
        return (
            <div className="SummonDraconicSpirit">
                <div className="SpellHeading"><h1 className="SpellTitle">Summon Draconic Spirit</h1><i className="i-concentration">Concentration</i></div>
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
                                    <p>You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: chromatic, gem, or metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.</p>
                                    <p>The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the <a className="tooltip-hover action-tooltip" href="https://www.dndbeyond.com/sources/basic-rules/combat#Dodge">Dodge</a> action and uses its move to avoid danger.</p>
                                    <p><strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell’s level appears in the stat block.</p>
                    
                                    <span className="components-blurb">* - (an object with the image of a dragon engraved on it, worth at least 500 gp)</span>
                        
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default SummonDraconicSpirit;