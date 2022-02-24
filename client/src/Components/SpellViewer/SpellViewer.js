import React from "react";
import FindFamiliar from "./FindFamiliar";
import './SpellViewer.css';
import SummonFey from "./SummonFey";
import SummonLesserDemons from "./SummonLesserDemons";

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