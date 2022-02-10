import React from "react";
import AddButton from "./AddButton";
import "./SmallStatBlock.css";

class SmallStatBlock extends React.Component {
    render() {
        const conjure = this.props.conjure;
        return (
            <div className="SmallStatBlock">
                <h3 className="monsterTitle">{conjure.name}</h3>
                <div className="SB-size">{conjure.size} fey</div>
                <div className="SB-attributes">
                    <div className="SB-AC"><span className="attributeLabel">AC</span><span className="attributeValue"> {conjure.AC}</span></div>
                    <div className="SB-HP"><span className="attributeLabel">HP</span><span className="attributeValue"> {conjure.HP}</span></div>
                    <div className="SB-Speed"><span className="attributeLabel">Spd</span><span className="attributeValue"> {conjure.Speed}</span></div>
                </div>
                <div className="SB-stats">
                    <div className="SB-statBlock">
                        <div className="SB-statBlockHeading">STR</div>
                        <div className="SB-statBlockValue">{conjure.Stats.STR}</div>
                    </div>
                    <div className="SB-statBlock">
                        <div className="SB-statBlockHeading">DEX</div>
                        <div className="SB-statBlockValue">{conjure.Stats.DEX}</div>
                    </div>
                    <div className="SB-statBlock">
                        <div className="SB-statBlockHeading">CON</div>
                        <div className="SB-statBlockValue">{conjure.Stats.CON}</div>
                    </div>
                    <div className="SB-statBlock">
                        <div className="SB-statBlockHeading">INT</div>
                        <div className="SB-statBlockValue">{conjure.Stats.INT}</div>
                    </div>
                    <div className="SB-statBlock">
                        <div className="SB-statBlockHeading">WIS</div>
                        <div className="SB-statBlockValue">{conjure.Stats.WIS}</div>
                    </div>
                    <div className="SB-statBlock">
                        <div className="SB-statBlockHeading">CHA</div>
                        <div className="SB-statBlockValue">{conjure.Stats.CHA}</div>
                    </div>
                </div>
                <div className="SB-tidbits">
                    <div className="SB-Skills"><span className="tidbitLabel">Skills</span><span className="tidbitValue"> {conjure.Skills}</span></div>
                    <div className="SB-Senses"><span className="tidbitLabel">Senses</span><span className="tidbitValue"> {conjure.Senses}</span></div>
                    <div className="SB-Languages"><span className="tidbitLabel">Languages</span><span className="tidbitValue"> {conjure.Languages}</span></div>
                </div>
                <div className="SB-description">
                    {conjure.Description.map((description) => (
                        <p><em><strong>{description.label}</strong></em> {description.value}</p>
                    ))}
                </div>
                <AddButton></AddButton>
            </div>
        );
    }
}

export default SmallStatBlock;