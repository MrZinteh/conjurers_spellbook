import React from "react";
import AddButton from "./AddButton";
import "./SmallStatBlock.css";

class SmallStatBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const conjure = this.props.conjure;
        return (
            <div className="SmallStatBlock">
                <h3 className="monsterTitle">{conjure.name} {conjure.subName ? `(${conjure.subName})` : ""}</h3>
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
                    {conjure.Skills ? <div className="SB-Skills"><span className="tidbitLabel">Skills</span><span className="tidbitValue"> {conjure.Skills}</span></div> : ""}
                    {conjure.SavingThrows ? <div className="SB-SavingThrows"><span className="tidbitLabel">Saving Throws</span><span className="tidbitValue"> {conjure.SavingThrows}</span></div> : ""}
                    {conjure.DamageVulnerabilities ? <div className="SB-DamageVulnerabilities"><span className="tidbitLabel">Damage Vulnerabilities</span><span className="tidbitValue"> {conjure.DamageVulnerabilities}</span></div> : ""}
                    {conjure.DamageResistances ? <div className="SB-DamageResistances"><span className="tidbitLabel">Damage Resistances</span><span className="tidbitValue"> {conjure.DamageResistances}</span></div> : ""}
                    {conjure.DamageImmunities ? <div className="SB-DamageImmunities"><span className="tidbitLabel">Damage Immunities</span><span className="tidbitValue"> {conjure.DamageImmunities}</span></div> : ""}
                    {conjure.ConditionImmunities ? <div className="SB-ConditionImmunities"><span className="tidbitLabel">Condition Immunities</span><span className="tidbitValue"> {conjure.ConditionImmunities}</span></div> : ""}
                    <div className="SB-Senses"><span className="tidbitLabel">Senses</span><span className="tidbitValue"> {conjure.Senses}</span></div>
                    <div className="SB-Languages"><span className="tidbitLabel">Languages</span><span className="tidbitValue"> {conjure.Languages}</span></div>
                </div>
                <div className="SB-description">
                    {conjure.Description.map((description) => {
                        let desc = [<p key={description.value}><em><strong>{description.label}</strong></em> {description.value}</p>];
                        if (description.spells) {
                            Object.keys(description.spells).forEach((key, index) => desc.push(
                            <p key={`${conjure.name}_spells_${index}`}>
                                {key}: <em>{description.spells[key]}</em>
                            </p>
                            ))
                        }
                        return desc
                    })}
                </div>
                {conjure.Actions ? 
                (<div>
                    <div className="SB-actionlabel">
                        <p>Actions</p>
                    </div>
                    <div className="SB-actions">
                        {conjure.Actions.map((action, i) => (
                            <p key={i}><em><strong>{action.label}</strong> {action.sublabel}</em> {action.description}</p>
                        ))}
                    </div>
                </div>) : ""}
                {conjure.BonusActions ?
                (<div>
                    <div className="SB-actionlabel">
                        <p>Bonus Actions</p>
                    </div>
                    <div className="SB-actions">
                        {conjure.BonusActions.map((ba, i) => (
                            <p key={i}><em><strong>{ba.label}</strong> {ba.sublabel}</em> {ba.description}</p>
                        ))}
                    </div>
                </div>): ""}
                {conjure.Reactions ?
                (<div>
                    <div className="SB-actionlabel">
                        <p>Reactions</p>
                    </div>
                    <div className="SB-actions">
                        {conjure.Reactions.map((reaction, i) => (
                            <p key={i}><em><strong>{reaction.label}</strong> {reaction.sublabel}</em> {reaction.description}</p>
                        ))}
                    </div>
                </div>): ""}
                <AddButton onClick={this.props.onClick}></AddButton>
            </div>
        );
    }
}

export default SmallStatBlock;