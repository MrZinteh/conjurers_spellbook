import React from "react";
import ConjureElemental from "./ConjureElemental";
import ConjureMinorElementals from "./ConjureMinorElementals";
import FindFamiliar from "./FindFamiliar";
import InfernalCalling from "./InfernalCalling";
import './SpellViewer.css';
import SummonAberration from "./SummonAberration";
import SummonConstruct from "./SummonConstruct";
import SummonDraconicSpirit from "./SummonDraconicSpirit";
import SummonElemental from "./SummonElemental";
import SummonFey from "./SummonFey";
import SummonFiend from "./SummonFiend";
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
            case "Conjure Elemental":
                return <ConjureElemental />;
            case "Infernal Calling":
                return <InfernalCalling />;
            case "Summon Draconic Spirit":
                return <SummonDraconicSpirit />;
            case "Summon Fiend":
                return <SummonFiend />;
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