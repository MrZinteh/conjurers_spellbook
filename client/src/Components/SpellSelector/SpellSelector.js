import React from "react";
import './SpellSelector.css';

class SpellSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="SpellSelector">
                <div className="SpellHeader">Spells:</div>
                <button className="Spell" onClick={() => this.props.selectSpell("Find Familiar")}>Find Familiar</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Fey")}>Summon Fey</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Lesser Demons")}>Summon Lesser Demons</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Shadowspawn")}>Summon Shadowspawn</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Conjure Minor Elementals")}>Conjure Minor Elementals</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Aberration")}>Summon Aberration</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Construct")}>Summon Construct</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Elemental")}>Summon Elemental</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Greater Demon")}>Summon Greater Demon</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Conjure Elemental")}>Conjure Elemental</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Infernal Calling")}>Infernal Calling</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Draconic Spirit")}>Summon Draconic Spirit</button>
                <button className="Spell" onClick={() => this.props.selectSpell("Summon Fiend")}>Summon Fiend</button>
            </div>
        );
    }
}

export default SpellSelector;