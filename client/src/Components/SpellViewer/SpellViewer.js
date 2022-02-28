import React from "react";
import ConjureMinorElementals from "./ConjureMinorElementals";
import FindFamiliar from "./FindFamiliar";
import './SpellViewer.css';
import SummonAberration from "./SummonAberration";
import SummonConstruct from "./SummonConstruct";
import SummonElemental from "./SummonElemental";
import SummonFey from "./SummonFey";
import SummonGreaterDemon from "./SummonGreaterDemon";
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
            case "Summon Aberration":
                return <SummonAberration />;
            case "Summon Construct":
                return <SummonConstruct />;
            case "Summon Elemental":
                return <SummonElemental />;
            case "Summon Greater Demon":
                return <SummonGreaterDemon />;
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