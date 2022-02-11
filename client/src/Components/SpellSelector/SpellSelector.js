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
                <button className="Spell">Summon Lesser Demons</button>
                <button className="Spell">Summon Shadow Spirit</button>
                <button className="Spell">Conjure Minor Elemental</button>
                <button className="Spell">Summon Abberation</button>
                <button className="Spell">Summon Construct</button>
                <button className="Spell">Summon Elemental</button>
                <button className="Spell">Summon Greater Demon</button>
                <button className="Spell">Conjure Elemental</button>
                <button className="Spell">Infernal Calling</button>
                <button className="Spell">Summon Draconic Spirit</button>
                <button className="Spell">Summon Fiend</button>
            </div>
        );
    }
}

export default SpellSelector;