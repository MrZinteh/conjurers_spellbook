import React from "react";
import ConjureMinorElementals from "./ConjureMinorElementals";
import FindFamiliar from "./FindFamiliar";
import './SpellViewer.css';
import SummonFey from "./SummonFey";
import SummonLesserDemons from "./SummonLesserDemons";
import SummonShadowspawn from "./SummonShadowspawn";

class SpellViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.spellSelection = this.spellSelection.bind(this);
    }

    spellSelection() {
        switch(this.props.selectedSpell) {
            case "Find Familiar":
                return <FindFamiliar></FindFamiliar>;
            case "Summon Fey":
                return <SummonFey></SummonFey>;
            case "Summon Lesser Demons":
                return <SummonLesserDemons />;
            case "Summon Shadowspawn":
                return <SummonShadowspawn />;
            case "Conjure Minor Elementals":
                return <ConjureMinorElementals />;
            default: 
                return <FindFamiliar></FindFamiliar>;
        }
    }

    render() {
        return (
            <div className="SpellViewer">
                {this.spellSelection()}
            </div>
        );
    }
}

export default SpellViewer;